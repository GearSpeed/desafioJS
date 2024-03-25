import {MESSAGE_TYPES} from './_MESSAGE_TYPES.js'
document.addEventListener('DOMContentLoaded', () => {
  const deleteBtn = document.querySelector('#eliminarPost')
  deleteBtn.addEventListener('click',(event) => {
    event.preventDefault()
    try{

      const posts = JSON.parse(localStorage.getItem('posts'))
      const formData = new FormData(deleteBtn);
      const entries = formData.entries();
      const data = Object.fromEntries(entries); //Nos devuelve un iterador
      
      data.id = Number(data.id)
      const positionFind = posts.findIndex((element) => element.id === data.id)
      
      if(positionFind === -1){
        alert(MESSAGE_TYPES.UNEXISTS)
      }else{
        posts.splice(positionFind,1)
        const jsonString = JSON.stringify(posts)
        localStorage.setItem('posts',jsonString)
        window.location.reload();
      }

    }catch{
      alert(MESSAGE_TYPES.ERROR)
    }
  })






  /* form.addEventListener('submit',(event) => {
    event.preventDefault()

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

  }) */
})


    
