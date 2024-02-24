
// Função Para Realizar o Cálculo da Conversão de Decimal para Binário

function calcDecParaBin(n1){
    let bin = []
    while(n1 > 0){
        var resto = n1 % 2;
        bin.push(resto);
        n1 = Math.floor(n1 / 2)
    }
    bin.reverse();
    return bin.join("")
}

// Função Para Retornar o Resultado da Conversão de Decimal para Binário

function resultCalcDecParaBin(){
    let dec = parseInt(document.getElementById("btn_bin").value)
    let bin = calcDecParaBin(dec)
    document.getElementById("result_convert--bin-dec").innerText = bin;
}

// Função Para Realizar o Cálculo da Conversão de Binário para Decimal

function calcBinParaDec(num){
    let tamanho = num.length
    let decimal = 0;
    let i;

    for(i = tamanho - 1; i >= 0; i--){
        var digito = parseInt(num[i])
        var potencia = Math.pow(2, tamanho - 1 - i);
        decimal = decimal + (digito * potencia)
    }
    return decimal
}

// Função Para Retornar o Resultado da Conversão de Binário para Decimal

function resultCalcBinParaDec(){
    let numeroBinario = document.getElementById("btn_dec").value
    let resultado = calcBinParaDec (numeroBinario)
    document.getElementById("result_convert--dec-bin").innerText = resultado
}