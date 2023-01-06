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