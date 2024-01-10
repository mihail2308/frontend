const apiCorseValyte =" https://www.cbr-xml-daily.ru/daily_json.js"

const elemUSD = document.querySelector(`[data-value="USD"]`)
const elemEUR = document.querySelector(`[data-value="EUR"]`)
const elemGBP = document.querySelector(`[data-value="GBP"]`)
const elemBYN = document.querySelector(`[data-value="BYN"]`)

const inputByn = document.querySelector("#input")
const res = document.querySelector("#result")
const select = document.querySelector("#select")

const selectBYN = document.querySelector("#exampleFormControlSelect1")



const valut = {}
async function converter () {

const respons = await fetch (apiCorseValyte)
const data =  await respons.json()
const result = await data

valut.USD = result.Valute.USD;
valut.EUR = result.Valute.EUR;
valut.BYN = result.Valute.BYN;
valut.GBP = result.Valute.GBP;

elemUSD.textContent = valut.USD.Value.toFixed(2);
elemEUR.textContent = valut.EUR.Value.toFixed(2);
elemGBP.textContent = valut.GBP.Value.toFixed(2);
elemBYN.textContent = valut.BYN.Value.toFixed(2);

addStyleValute()
}
converter ()

function addStyleValute(){
    if(valut.USD.Value > valut.USD.Previos){
        elemUSD.classList.add("top")  
    }else{
        elemUSD.classList.add("bottom")  
    }

    if(valut.EUR.Value > valut.EUR.Previos){
        elemEUR.classList.add("top")  
    }else{
        elemEUR.classList.add("bottom")  
    }

    if(valut.GBP.Value > valut.GBP.Previos){
        elemGBP.classList.add("top")  
    }else{
        elemGBP.classList.add("bottom")  
    }
    if(valut.BYN.Value > valut.BYN.Previos){
        elemBYN.classList.add("top")  
    }else{
        elemBYN.classList.add("bottom")  
    }
}
    inputByn.oninput = function(){
        if (selectBYN.value == "BYN") {
            res.value = (parseFloat(inputByn.value) / valut[select.value].Value * 28.7 ).toFixed(2) 

        }else if(selectBYN.value == "RUB"){

           res.value = (parseFloat(inputByn.value) / valut[select.value].Value ).toFixed(2)
        }
        
    }
    