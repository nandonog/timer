function criaHoraSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    })
}

const relogio = document.querySelector('.relogio')
let segundos = 0;
let timer;

const iniciaTimer = () => {
    timer = setInterval( () => {
    relogio.innerHTML = criaHoraSegundos(segundos)        
    segundos++
    },1000)
}

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        relogio.classList.remove('zerado')
        clearInterval(timer)
        return iniciaTimer(); 
    }
    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado')
        relogio.classList.remove('zerado')
        clearInterval(timer)
    }
    if(el.classList.contains('zerar')){
        clearInterval(timer)
        relogio.classList.remove('pausado')
        relogio.classList.add('zerado')
        relogio.innerHTML = '00:00:00'
        segundos = 0;
    }
   
})
