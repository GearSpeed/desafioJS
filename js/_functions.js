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

export const deleteObjectsLocalStorage = (form) => {

try{
    const posts = JSON.parse(localStorage.getItem("posts")) ?? []; //Creamos un arreglo si el resultado es null
    const formData = new FormData(form);
    const entries = formData.entries();
    const data = Object.fromEntries(entries); //Nos devuelve un iterador
    const id = formData.get('id')  //Obnetemos id


    //Buscar usuario por ID
    data.id = Number(data.id)
    const positionFind = posts.findIndex((user) => user.id === data.id) //Encontramos la posición del objeto en el arreglo
    if(positionFind===-1){
      alert(MESSAGE_TYPES.UNEXISTS+id)
    }else{
      posts.splice(positionFind,1) //Elimina el objeto encontrado en el array
      const jsonString = JSON.stringify(posts); //convertimos nuestro array en una cadena de caracteres
      localStorage.setItem("posts", jsonString); //Guardamos en localstorage el nuevo arreglo

    }
}catch{
    alert(MESSAGE_TYPES.ERROR)
}

    
}