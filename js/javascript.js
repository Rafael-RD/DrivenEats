function selecionar(i,j){
    const selecionado = document.querySelector(i+' .selecionado')
    if(selecionado !== null){
        selecionado.classList.remove('selecionado');
        selecionado.querySelector('ion-icon').classList.add('hidden');
    }
    if(selecionado !== j){
        j.classList.add('selecionado');
        j.querySelector('ion-icon').classList.remove('hidden');
    }
    testebotao();
}
function testebotao(){
    if(document.getElementsByClassName('selecionado').length>=3){
        const i = document.querySelector('.botao');
        i.classList.add('botao-liberado');
        i.removeAttribute('disabled');
        i.querySelector('div p').innerHTML='Fechar pedido';
    } else {
        const i = document.querySelector('.botao');
        i.classList.remove('botao-liberado');
        i.setAttribute('disabled', "");
        i.querySelector('div p').innerHTML='Selecione os 3 itens para fechar o pedido';
    }
}
function finalizar(){
    document.querySelector('.overlay').classList.remove('hidden');
    const nome = prompt('Digite o seu nome:');
    const endereco = prompt('Digite o seu endereço:');
    const nomePrato = document.querySelector('.pratos .selecionado p:first-of-type').textContent;
    const precoPrato = document.querySelector('.pratos .selecionado p:last-of-type').textContent.slice(3).replace(',','.');
    const nomeBebida = document.querySelector('.bebidas .selecionado p:first-of-type').textContent;
    const precoBebida = document.querySelector('.bebidas .selecionado p:last-of-type').textContent.slice(3).replace(',','.');
    const nomeSobremesa = document.querySelector('.sobremesas .selecionado p:first-of-type').textContent;
    const precoSobremesa = document.querySelector('.sobremesas .selecionado p:last-of-type').textContent.slice(3).replace(',','.');

    document.querySelector('.final-prato p:first-of-type').innerHTML=nomePrato;
    document.querySelector('.final-prato p:last-of-type').innerHTML=precoPrato.toString(10).replace('.',',');
    document.querySelector('.final-bebida p:first-of-type').innerHTML=nomeBebida;
    document.querySelector('.final-bebida p:last-of-type').innerHTML=precoBebida.toString(10).replace('.',',');
    document.querySelector('.final-sobremesa p:first-of-type').innerHTML=nomeSobremesa;
    document.querySelector('.final-sobremesa p:last-of-type').innerHTML=precoSobremesa.toString(10).replace('.',',');
    const precoTotal = (Number(precoPrato)+Number(precoBebida)+Number(precoSobremesa)).toFixed(2).toString(10).replace('.',',');
    document.querySelector('.final-total p:last-of-type').innerHTML=`R$ ${precoTotal}`;

    const msg = `https://api.whatsapp.com/send?phone=5511999999999&text=${encodeURIComponent(`Olá, gostaria de fazer o pedido: `)}%0A
${encodeURIComponent(`- Prato: ${nomePrato}`)}%0A${encodeURIComponent(`- Bebida: ${nomeBebida}`)}%0A${encodeURIComponent(`- Sobremesa: ${nomeSobremesa}`)}%0A
${encodeURIComponent(`Total: R$ ${precoTotal}`)}%0A%0A${encodeURIComponent(`Nome: ${nome}`)}%0A${encodeURIComponent(`Endereço: ${endereco}`)}`;
    document.querySelector('.overlay div a').setAttribute('href', msg);
}
function cancelarPedido(){
    document.querySelector('.overlay').classList.add('hidden');
}
