// export const elements = () => {
import {MESSAGE_TYPES} from './_MESSAGE_TYPES.js'
document.addEventListener('DOMContentLoaded', () => {

    const postsLS = JSON.parse(localStorage.getItem("posts"))
    const srchPosts = JSON.parse(localStorage.getItem("searchPosts"))

    if(srchPosts){
    srchPosts.forEach(post => {
    // const userFind = users.find((user) => user.id === data.id)
    const authorPost = post.autor
    const titlePost = post.titulo
    const fechaPost = post.fecha
    const reactionPost = post.reacciones
    const commentPost = post.comentarios
    const tasgPost = post.hashtag

    const container = document.getElementById('mainPost')
    
    // Crea un div con la class card y post-seccion y la ingresa en el id
    const firstContent = document.createElement('div')
    firstContent.classList.add('card', 'post-section')
    container.append(firstContent)

    // Crea un img con la class post-img y le ingresa un src
    const bannerImg = document.createElement('img')
    bannerImg.classList.add('post-image')
    bannerImg.src = "https://picsum.photos/500/200"
    
    
    // Crea un div con la class post-content
    const postContent = document.createElement('div')
    postContent.classList.add('post-content')

    // Ingresa la imagen y el div en el Primer Div
    firstContent.append(bannerImg, postContent)

    // Crea un div con la class post-title y lo agrega a post Content
    const postTitle = document.createElement('div')
    postTitle.classList.add('post-title')
    postContent.append(postTitle)

        // Crea un div con la class post-meta
        const postMeta = document.createElement('div')
        postMeta.classList.add('post-meta')
        // Ingresa post Meta en PostTitle
        postTitle.append(postMeta)

             // Crea un div con la class post-author
            const postAuthor = document.createElement('div')
            postAuthor.classList.add('post-author')

            //  Crea una imagen y agrega la imegen en el div PostAuthor
            const authorImg = document.createElement('img')
            authorImg.classList.add('avatar')
            authorImg.src = 'https://picsum.photos/90/90'
            authorImg.alt = 'Avatar'
            postAuthor.append(authorImg)

            // Crea un div con la clase post-title-info
            const postTitleInfo = document.createElement('div')
            postTitleInfo.classList.add('post-title-info')
            // Crea un div para el author Name
            const authorName = document.createElement('div')
            authorName.innerHTML = authorPost
            // Crea un div para la fecha
            const authorDate = document.createElement('div')
            authorDate.innerHTML = fechaPost

            // Agrega el authorName y el authorDate en el div PostTitleInfo
               postTitleInfo.append(authorName, authorDate)

            // Agreg el postAuthor y el postTitleInfo en postMeta
               postMeta.append(postAuthor, postTitleInfo)
        // Crea un div con la class post-title y lo agrega a post Content
    const postIdention = document.createElement('div')
    postIdention.classList.add('post-indention')
    postContent.append(postIdention)

        // Crea un div con el titulo de la entrada
        const title = document.createElement('div')
        title.classList.add('title')
        title.innerHTML = titlePost
         
        // crea los hijos de los # 
        const tags = document.createElement('div')
        tags.classList.add('tags')
            
            // crea los hijos de los divs
            tasgPost.forEach((tag, index) => {
                let tagElement = document.createElement('div')
                if(index == 0) tagElement.classList.add('tag-discuss')
                if(index == 1) tagElement.classList.add('tag-react')
                if(index == 2) tagElement.classList.add('tag-tailwindcss')
                 
                tagElement.classList.add('card', 'tag')
                
                tagElement.textContent = `# ${tag}`

                         
                // Agregar el elemento de la etiqueta al contenedor de etiquetas
                tags.appendChild(tagElement)

            });
            

            

        // Crea un div con la clase Bottom
        const bottom = document.createElement('div')
        bottom.classList.add('bottom')

        // Crea un div con la clase details
        const details = document.createElement('div')
        details.classList.add('details')
        
        // Crea un div con la clase 'card', 'reactions'
        const reactions = document.createElement('div')
        reactions.classList.add('card', 'reactions')
        
        // Crea un div con la clase reactions-icons e inyecta el html de los iconos
        const reactionsIcons = document.createElement('div')
        reactionsIcons.classList.add('reactions-icons')
        reactionsIcons.innerHTML = `<span class="reaction-icon">
            <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="24" height="24">
            </span>
            <span class="reaction-icon">
                <img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg" width="24" height="24">
            </span>
            <span class="reaction-icon">
                <img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" width="24" height="24">
            </span>
            <span class="reaction-icon">
                <img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg" width="24" height="24">
            </span>`

        // Crea un div con la clase reactions-counter con el contador dinamico
        const reactionsCounter = document.createElement('div')
        reactionsCounter.classList.add('reactions-counter')
        reactionsCounter.innerHTML = `${reactionPost} <span class="d-none d-sm-contents"> reactions</span>`

        // Crea un div con la clase 'card', 'comments e inyecta un html con el numero de comentarios
        const comments = document.createElement('div')
        comments.classList.add('card', 'comments')
        comments.innerHTML = ` <img class="icon" src="./img/svg/icon-comment.svg" alt="comment"> 
        ${commentPost} <span class="d-none d-sm-contents"> comments</span>`
        reactions.append(reactionsIcons, reactionsCounter)

        // Crea un div con la clase save e inyecta el icono de la basura
       const delate = document.createElement('div')
       delate.classList.add('save')
       delate.innerHTML = `<!-- Icono de Bote de Basura con estilo en línea -->
       <i class="fas fa-trash icon icon-bookmark" name="trashbtn" style="color: black; font-size: 14px;"></i>
       
       <!-- Icono de Bolígrafo con estilo en línea -->
       <i class="fas fa-pen icon icon-bookmark" style="color: black; font-size: 14px;"></i>
       ` 
       


        // Inyecta el div details y edit al bottom
        bottom.append(details, delate)
        // Inyecta el div reactions, comments al div details
        details.append(reactions, comments)
        // Inyecta los divs title, tags, bottom al div postIndetation
        postIdention.append(title, tags, bottom)
    
        })
        return
    }
    if (postsLS){
    postsLS.forEach(post => {
    // const userFind = users.find((user) => user.id === data.id)
    const authorPost = post.autor
    const titlePost = post.titulo
    const fechaPost = post.fecha
    const reactionPost = post.reacciones
    const commentPost = post.comentarios
    const tasgPost = post.hashtag
    const idPost = post.id

    const container = document.getElementById('mainPost')
    
    // Crea un div con la class card y post-seccion y la ingresa en el id
    const firstContent = document.createElement('div')
    firstContent.classList.add('card', 'post-section')
    container.append(firstContent)

    // Crea un img con la class post-img y le ingresa un src
    const bannerImg = document.createElement('img')
    bannerImg.classList.add('post-image')
    bannerImg.src = "https://picsum.photos/500/200"
    
    
    // Crea un div con la class post-content
    const postContent = document.createElement('div')
    postContent.classList.add('post-content')

    // Ingresa la imagen y el div en el Primer Div
    firstContent.append(bannerImg, postContent)

    // Crea un div con la class post-title y lo agrega a post Content
    const postTitle = document.createElement('div')
    postTitle.classList.add('post-title')
    postContent.append(postTitle)

        // Crea un div con la class post-meta
        const postMeta = document.createElement('div')
        postMeta.classList.add('post-meta')
        // Ingresa post Meta en PostTitle
        postTitle.append(postMeta)

             // Crea un div con la class post-author
            const postAuthor = document.createElement('div')
            postAuthor.classList.add('post-author')

            //  Crea una imagen y agrega la imegen en el div PostAuthor
            const authorImg = document.createElement('img')
            authorImg.classList.add('avatar')
            authorImg.src = 'https://picsum.photos/90/90'
            authorImg.alt = 'Avatar'
            postAuthor.append(authorImg)

            // Crea un div con la clase post-title-info
            const postTitleInfo = document.createElement('div')
            postTitleInfo.classList.add('post-title-info')
            // Crea un div para el author Name
            const authorName = document.createElement('div')
            authorName.innerHTML = authorPost
            // Crea un div para la fecha
            const authorDate = document.createElement('div')
            authorDate.innerHTML = fechaPost

            // Agrega el authorName y el authorDate en el div PostTitleInfo
               postTitleInfo.append(authorName, authorDate)

            // Agreg el postAuthor y el postTitleInfo en postMeta
               postMeta.append(postAuthor, postTitleInfo)
        // Crea un div con la class post-title y lo agrega a post Content
    const postIdention = document.createElement('div')
    postIdention.classList.add('post-indention')
    postContent.append(postIdention)

        // Crea un div con el titulo de la entrada
        const title = document.createElement('div')
        title.classList.add('title')
        title.innerHTML = titlePost
         
        // crea los hijos de los # 
        const tags = document.createElement('div')
        tags.classList.add('tags')
            
            // crea los hijos de los divs
            tasgPost.forEach((tag, index) => {
                let tagElement = document.createElement('div')
                if(index == 0) tagElement.classList.add('tag-discuss')
                if(index == 1) tagElement.classList.add('tag-react')
                if(index == 2) tagElement.classList.add('tag-tailwindcss')
                 
                tagElement.classList.add('card', 'tag')
                
                tagElement.textContent = `# ${tag}`

                         
                // Agregar el elemento de la etiqueta al contenedor de etiquetas
                tags.appendChild(tagElement)

            });
            

            

        // Crea un div con la clase Bottom
        const bottom = document.createElement('div')
        bottom.classList.add('bottom')

        // Crea un div con la clase details
        const details = document.createElement('div')
        details.classList.add('details')
        
        // Crea un div con la clase 'card', 'reactions'
        const reactions = document.createElement('div')
        reactions.classList.add('card', 'reactions')
        
        // Crea un div con la clase reactions-icons e inyecta el html de los iconos
        const reactionsIcons = document.createElement('div')
        reactionsIcons.classList.add('reactions-icons')
        reactionsIcons.innerHTML = `<span class="reaction-icon">
            <img src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="24" height="24">
            </span>
            <span class="reaction-icon">
                <img src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg" width="24" height="24">
            </span>
            <span class="reaction-icon">
                <img src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" width="24" height="24">
            </span>
            <span class="reaction-icon">
                <img src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg" width="24" height="24">
            </span>`

        // Crea un div con la clase reactions-counter con el contador dinamico
        const reactionsCounter = document.createElement('div')
        reactionsCounter.classList.add('reactions-counter')
        reactionsCounter.innerHTML = `${reactionPost} <span class="d-none d-sm-contents"> reactions</span>`

        // Crea un div con la clase 'card', 'comments e inyecta un html con el numero de comentarios
        const comments = document.createElement('div')
        comments.classList.add('card', 'comments')
        comments.innerHTML = ` <img class="icon" src="./img/svg/icon-comment.svg" alt="comment"> 
        ${commentPost} <span class="d-none d-sm-contents"> comments</span>`
        reactions.append(reactionsIcons, reactionsCounter)

        // Crea un div con la clase save e inyecta el icono de la basura
       const delate = document.createElement('button')
       delate.classList.add('save')
       delate.innerHTML = ` <i class="fas fa-trash icon icon-bookmark" style="color: black; font-size: 14px;"></i>`
       /* delate.innerHTML = `<!-- Icono de Bote de Basura con estilo en línea -->
       <form id="eliminarPost">
        <input type="hidden" name="id" value=${idPost} />

        <i class="fas fa-trash icon icon-bookmark" style="color: black; font-size: 14px;"></i>



       <!-- Icono de Bolígrafo con estilo en línea -->
       <i class="fas fa-pen icon icon-bookmark" style="color: black; font-size: 14px;"></i>
       `  */
       delate.addEventListener('click',(event) => {
            event.preventDefault()
            try{
            const posts = JSON.parse(localStorage.getItem('posts'))
            const positionFind = posts.findIndex((element) => element.id === idPost)
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


        // Inyecta el div details y edit al bottom
        bottom.append(details, delate)
        // Inyecta el div reactions, comments al div details
        details.append(reactions, comments)
        // Inyecta los divs title, tags, bottom al div postIndetation
        postIdention.append(title, tags, bottom)
    
    
        
    })   
}  
})