// Carne: 300g por pessoa - até 6 horas - acima 550g
// Linguiça: 100g por pessoa - até 6h - acima 160g
// Pão de alho: 1 por pessoa - até 6h - 2 por pessoa
// Cerveja: 5 latas por pessoa - até 6 horas - acima 8 Latas
// Refri: 1L por pessoa - até 6 horas - acima 1.5L

let adultos = document.getElementById('adultos')
let criancas = document.getElementById('criancas')
let horas = document.getElementById('horas')

function carnePP(tempo){
    if(tempo <6){
        carne = 300
    }else{
        carne = 550
    }
    return (carne * adultos.value) + (carne * criancas.value * 0.5);
}
function linguicaPP(tempo){
    if(tempo <6){
        linguica = 100
    }else{
        linguica = 160
    }
    return (linguica * adultos.value) + (linguica * criancas.value * 0.5);
}
function paoPP(tempo){
    if(tempo <6){
        pao =  1
    }else{
        pao = 2
    }
    return (pao * adultos.value) + (pao * criancas.value * 0.5);
}
function cervejaPP(tempo){
    if(tempo <6){
        cerveja = 5
    }else{
        cerveja = 8
    }
    return (cerveja * adultos.value)
}
function refriPP(tempo){
    if(tempo <6){
        refri = 1
    }else{
        refri = 1.5
    }
    return (refri * adultos.value) + (refri * criancas.value * 0.5);
}

function calcular(){

    let qntCarne =carnePP(horas.value)/1000
    let qntLinguica = linguicaPP(horas.value)/1000
    let qntPao = Math.ceil(paoPP(horas.value))
    let qntCerveja = Math.ceil(cervejaPP(horas.value))
    let qntRefri = Math.ceil(refriPP(horas.value))

    document.getElementById('carne').innerHTML = 'Total de carne: ' + qntCarne + 'kg'
    document.getElementById('linguica').innerHTML = 'Total de linguiça: '+ qntLinguica + 'kg'
    document.getElementById('pao').innerHTML = 'Total de Pão de Alho: '+ qntPao + ' unidades'
    document.getElementById('cerveja').innerHTML = 'Total de cerveja: '+ qntCerveja + ' latas'
    document.getElementById('refri').innerHTML = 'Total de Refrigerante: '+ qntRefri + ' Litros'


    document.getElementById('resultado').style.display = 'block'
}

