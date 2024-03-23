// export const elements = () => {
document.addEventListener('DOMContentLoaded', () => {
    // Busca el id de la seccion que empezará
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
            authorName.innerHTML = "Michael Tharrington for The DEV Team"
            // Crea un div para la fecha
            const authorDate = document.createElement('div')
            authorDate.innerHTML = "Feb 9"

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
        title.innerHTML = 'What was your win this week?'
         
        // crea los hijos de los # 
        const tags = document.createElement('div')
        tags.classList.add('tags')
            
            // crea los hijos de los divs
            const tag1 = document.createElement('div')
            tag1.classList.add('card', 'tag' , 'tag-discuss')
            tag1.innerHTML = `# <span>weeklyretro</spa`

            const tag2 = document.createElement('div')
            tag2.classList.add('card' , 'tag' ,'tag-weeklyretro')
            tag2.innerHTML = `# <span>weeklyretro</spa`

            tags.append(tag1, tag2)

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
        reactionsCounter.innerHTML = `25 <span class="d-none d-sm-contents"> reactions</span>`

        // Crea un div con la clase 'card', 'comments e inyecta un html con el numero de comentarios
        const comments = document.createElement('div')
        comments.classList.add('card', 'comments')
        comments.innerHTML = ` <img class="icon" src="./img/svg/icon-comment.svg" alt="comment"> 
        49 <span class="d-none d-sm-contents"> comments</span>`
        reactions.append(reactionsIcons, reactionsCounter)

        // Crea un div con la clase save e inyecta el icono de la basura
       const delate = document.createElement('div')
       delate.classList.add('save')
       delate.innerHTML = `<svg class="icon icon-trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true">
       <path d="M15 3h-3V2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v13c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V7h1c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-4-1c.55 0 1 .45 1 1v1H8V3c0-.55.45-1 1-1h2zm4 18H8V7h7v13zm2-16H6V4h11v1z"/>
        </svg>`

        // Inyecta el div details y delate al bottom
        bottom.append(details, delate)
        // Inyecta el div reactions, comments al div details
        details.append(reactions, comments)
        // Inyecta los divs title, tags, bottom al div postIndetation
        postIdention.append(title, tags, bottom)
    
    
    
    })

// Cierre del Export }