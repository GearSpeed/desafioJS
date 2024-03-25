import {MESSAGE_TYPES} from './_MESSAGE_TYPES.js'
document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search)
    let idPost = urlParams.get('id')
    const posts = JSON.parse(localStorage.getItem('posts'))

    const form = document.querySelector('#crud')

    idPost = Number(idPost)
    posts.forEach((element) => {
        if(element.id === idPost) {
            document.querySelector('#titulo').value = element.titulo;
            document.querySelector('#autor').value = element.autor;
            document.querySelector('#descripcion').value = element.descripcion;
            document.querySelector('#fecha').value = element.fecha;
            document.querySelector('#comentarios').value = element.comentarios;
            document.querySelector('#reacciones').value = element.reacciones;

            const hashtags = element.hashtag;
            hashtags.forEach(vector => {
                document.getElementById(vector).checked = true;
            })
        }

        })

        form.addEventListener('submit',(event) => {
            event.preventDefault()
            try{
                const posts = JSON.parse(localStorage.getItem('posts'))
        
                //Capturar los valores de elementos del formulario
                const formData = new FormData(form)
                const entries = formData.entries()
                const data = Object.fromEntries(entries)
                data.hashtag = formData.getAll('hashtag')
                const postIndex = posts.findIndex((element) => element.id === idPost)
                data.id = idPost
                posts.splice(postIndex,1,data)
                const postsToString = JSON.stringify(posts) //el arreglo posts y la bandera se convierten a string
                localStorage.setItem('posts',postsToString)
                alert(MESSAGE_TYPES.READY)
                window.open('../index.html')
                window.close()
                }catch {
                    alert(MESSAGE_TYPES.ERROR)
                }
            
        })
    })

        
