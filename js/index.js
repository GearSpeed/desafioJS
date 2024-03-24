import * as myFunctions from './_functions.js'


document.addEventListener('DOMContentLoaded',() => {
    const form = document.querySelector('#crud')
    const formDelete = document.querySelector('#delete')

    /* form.addEventListener('submit', (event) => {
        event.preventDefault() //Detenemos acción natural de formulario
        myFunctions.arrayObjectsLocalStorage(form)
    }) */

    formDelete.addEventListener('submit', (event) => {
        event.preventDefault()
        myFunctions.deleteObjectsLocalStorage(formDelete)

    })
})