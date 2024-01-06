

const key = "6d42f2bc27378e38bc8e995c1cfb7703"


function colocarDadosNaTela (dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".Umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".temp-min").innerHTML = Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".temp-max").innerHTML = Math.floor(dados.main.temp_max) + "°C"
}

async function buscarCidade(cidade) {
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then ( resposta => resposta.json ())

    colocarDadosNaTela(dados)
    
}

function cliqueiNoBotao () {
    const cidade = document.querySelector (".input-cidade").value 

   buscarCidade (cidade)
}