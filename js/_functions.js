import {MESSAGE_TYPES} from './_MESSAGE_TYPES.js'


export const arrayObjectsLocalStorage = (form) => {
    let flag = JSON.parse(localStorage.getItem('bandera')) ?? 0 //Bandera llevará el control de los id´s
        const posts = JSON.parse(localStorage.getItem('posts')) ?? [] //Arreglo que almacena objetos de posts

        //Capturar los valores de elementos del formulario
        const formData = new FormData(form)
        const entries = formData.entries()
        const data = Object.fromEntries(entries)
        const id = formData.get('id')
        data.hashtag = formData.getAll('hashtag')

        try{
            if(!id){
                flag++ //Aumentamos valor de bandera
                data.id = flag //valor id
                posts.push(data) //Agregamos el objeto a nuestro arreglo
                const postsToString = JSON.stringify(posts) //el arreglo posts y la bandera se convierten a string
                localStorage.setItem('bandera',flag)
                localStorage.setItem('posts',postsToString)
            }else alert(MESSAGE_TYPES.ERROR)
    
        }catch {
            alert(MESSAGE_TYPES.ERROR)
        }
}