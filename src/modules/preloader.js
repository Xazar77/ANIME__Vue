const preloader = () => {
    const preloaderElem = document.querySelector('.preloader')
    
    preloaderElem.classList.add('active')
    
    
    setTimeout(() => {
        preloaderElem.classList.remove('active')
    },500)
}
preloader()