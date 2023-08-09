function calcularSoma() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    var resultado = numero1 + numero2;
    
    document.getElementById("resposta").textContent = "A soma é: " + resultado;
  }
  
  function calculaJuros() {
    var capital = parseFloat(document.getElementById("capital").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var tempo = parseInt(document.getElementById("tempo").value);
    
    var montante = capital * Math.pow(1 + (taxa / 100), tempo);
    
    document.getElementById("montante").textContent = "Montante: " + montante.toFixed(2);
    const montante2 = []
    //Calcula a evolução do capital ao longo dos meses 
    for (var i = 1; i <= tempo; i++){
      montante2[i] = capital * Math.pow(1 + (taxa / 100), i);
      document.getElementById("resultados").innerHTML  =  parseFloat(montante2[i]);


    }
  

}