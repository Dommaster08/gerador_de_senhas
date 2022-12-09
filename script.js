let nums = []
const tela = document.getElementById('gerador')




function gerarSenha(){
    for(let i=0;i<8;i++){
    
        const senha = Math.floor(Math.random()*10)
        nums.push(senha)
        tela.innerHTML = nums.join('')
    }
    limparTela()
}

function limparTela(){
    nums = []
}