simularCompra = () => {

    let qntCamisa;
    let qntGarrafa;
    let qntOculos;



    qntCamisa = prompt("Digite a quantidade de camisas:");    
    qntCamisa = Number(qntCamisa);
    if (isNaN(qntCamisa) || qntCamisa < 0) {
        alert("Por favor, insira um número válido para a quantidade de camisas.");
        qntCamisa = prompt("Digite a quantidade de camisas:");    
        qntCamisa = Number(qntCamisa);
        if (isNaN(qntCamisa) || qntCamisa < 0) {
            alert("Número inválido. A compra será cancelada.");
            return;
        }
    }
    alert(`Você selecionou ${qntCamisa} camisas.`);



    qntGarrafa = prompt("Digite a quantidade de garrafas:");    
    qntGarrafa = Number(qntGarrafa);
    if (isNaN(qntGarrafa) || qntGarrafa < 0) {
        alert("Por favor, insira um número válido para a quantidade de garrafas.");
        qntGarrafa = prompt("Digite a quantidade de garrafas:");    
        qntGarrafa = Number(qntGarrafa);
        if (isNaN(qntGarrafa) || qntGarrafa < 0) {
            alert("Número inválido. A compra será cancelada.");
            return;
        }
    }
    alert(`Você selecionou ${qntGarrafa} garrafas.`);


    qntOculos = prompt("Digite a quantidade de oculos:");    
    qntOculos = Number(qntOculos);
    if (isNaN(qntOculos) || qntOculos < 0) {
        alert("Por favor, insira um número válido para a quantidade de oculos.");
        qntOculos = prompt("Digite a quantidade de oculos:");    
        qntOculos = Number(qntOculos);
        if (isNaN(qntOculos) || qntOculos < 0) {
            alert("Número inválido. A compra será cancelada.");
            return;
        }
    }
    alert(`Você selecionou ${qntOculos} oculos.`);

    
    let total = (qntCamisa * 70) + (qntGarrafa * 130) + (qntOculos * 560);

    if(total > 600){
        total = total * 0.9;
    }

    alert(`O total da compra é: R$ ${total.toFixed(2)}`);
    
}



