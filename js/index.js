import * as myFunctions from './_functions.js'


document.addEventListener('DOMContentLoaded',() => {
    const form = document.querySelector('#crud')

    form.addEventListener('submit', (event) => {
        event.preventDefault() //Detenemos acción natural de formulario
        myFunctions.arrayObjectsLocalStorage(form)

       
    })
})