
let edellinenLukuInput = document.querySelector('#edellinenluku')
let nykyinenLukuInput = document.querySelector('#nykyinenluku')

const numerot = document.querySelectorAll('.numero')
const operaatiot = document.querySelectorAll('.operaatio')
const tulosNappi = document.querySelector('.summa')
const korjaa = document.querySelector('.korjaa')
const poistaKaikki = document.querySelector('.poistakaikki')
const summa = document.querySelector('.summa')

let nykyinenLuku = ''
let edellinenLuku = ''
let operaatio = ''

/* eventlistenerit */
numerot.forEach(nappi => {
    nappi.addEventListener('click', () => {
        if(operaatio === 'summa') {
            edellinenLuku = ''
            päivitä()
        }
        if(nappi.innerText === '.' && nykyinenLuku.includes('.')) {
            return
        }
        lisääNumero(nappi.innerText)       
    })

})
operaatiot.forEach(nappi => {
    nappi.addEventListener('click', () => {
        valitseOperaatio(nappi.innerText)     
    })
})

poistaKaikki.addEventListener('click', () => {
    nykyinenLuku = ''
    edellinenLuku = ''
    operaatio = ''
    päivitä()
})
korjaa.addEventListener('click', () => {
    const leikkaa = nykyinenLuku.slice(0,-1)
    nykyinenLuku = leikkaa
    päivitä()
})
summa.addEventListener('click', ()=> {
    if(edellinenLuku !== '' && nykyinenLuku !== '') {
        edellinenLuku = laske()
        nykyinenLuku = ''
        operaatio = 'summa'
        päivitä()
    }
})

/* funktiot */
function päivitä() {
    nykyinenLukuInput.value = nykyinenLuku
    edellinenLukuInput.value =edellinenLuku
}

function lisääNumero(numero)  {
    nykyinenLuku += numero
    päivitä()
}

function valitseOperaatio(toimitus){
    if(nykyinenLuku === ''){
        return
    }
    if(edellinenLuku !== ''){
        nykyinenLuku = laske()
        päivitä()
        operaatio = toimitus
    }
    operaatio = toimitus
    edellinenLuku = nykyinenLuku
    nykyinenLuku = ''
    päivitä()
}

function laske () {
    num1 = parseFloat(edellinenLuku)
    num2 = parseFloat(nykyinenLuku)
    if(operaatio === "+") {
        return num1+num2
    }
    else if(operaatio === "-") {
        return num1-num2
    }
    else if(operaatio === "*") {
        return num1*num2
    }
    else if(operaatio === "/") {
        return num1/num2
    }
}