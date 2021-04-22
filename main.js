

let edellinenLukuInput = document.querySelector('#edellinenluku')
let nykyinenLukuInput = document.querySelector('#nykyinenluku')

const numerot = document.querySelectorAll('.numero')
const operaatiot = document.querySelectorAll('.operaatio')
const tulosNappi = document.querySelector('.summa')
const korjaa = document.querySelector('.korjaa')
const poistaKaikki = document.querySelector('.poistakaikki')
const piste = document.querySelector('.piste')

let nykyinenLuku = ''
let edellinenLuku = ''
let operaatio = ''

numerot.forEach(nappi => {
    nappi.addEventListener('click', () => {
        lisääNumero(nappi.innerText)
        console.log(nappi.innerText)
    })

})
operaatiot.forEach(nappi => {
    nappi.addEventListener('click', () => {
        valitseOperaatio(nappi.innerText)
       
    })

})

function päivitä() {
    nykyinenLukuInput.value = nykyinenLuku
    edellinenLukuInput.value =edellinenLuku
}

function lisääNumero(numero)  {
    nykyinenLuku += numero
    päivitä()
}

function valitseOperaatio(toimitus){
    console.log(toimitus)
    operaatio = toimitus
    edellinenLuku = nykyinenLuku
    nykyinenLuku = ''
    päivitä()
}