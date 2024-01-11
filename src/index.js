import './styles.scss'
function tittleComponent (){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello World'
    elemH1.classList.add('tittle')
    return elemH1
}

document.body.appendChild(tittleComponent())