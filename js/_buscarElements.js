import {MESSAGE_TYPES} from './_MESSAGE_TYPES.js'

document.addEventListener('DOMContentLoaded',() => {
    const searching = document.querySelector('#searching')
    const emptyLsBtn = document.querySelector('#emptyLsBtn')
    searching.addEventListener('submit', (event) => {
        event.preventDefault()
        try{
            JSON.parse(localStorage.getItem('searchPosts')) ?? []
            const posts = JSON.parse(localStorage.getItem('posts')) ?? []
            const formData = new FormData(searching);
            const entries = formData.entries();
            const data = Object.fromEntries(entries);
            const fechaNew = data.Buscafecha
            const postFechas = posts.filter((element) => element.fecha === fechaNew)
            if(postFechas.length===0) alert(MESSAGE_TYPES.UNEXISTS)
            const jsonFechasStr = JSON.stringify(postFechas)
            localStorage.setItem('searchPosts', jsonFechasStr) 
            window.location.reload();

        }catch{
            alert(MESSAGE_TYPES.ERROR)
        }


    })
    emptyLsBtn.addEventListener('click', (event) => {
        event.preventDefault()
        try{
            localStorage.removeItem('searchPosts')
            window.location.reload();
        }catch{
            alert(MESSAGE_TYPES.ERROR)
        }
    })
})