const scrollUp = () => {
    
    const btnUp = document.getElementById('scrollToTopButton')
   
    btnUp.addEventListener('click', (e) => {
        e.preventDefault()
        seamless.scrollIntoView(document.getElementById('header'), {
             behavior: "smooth",
              top: 0
            })
    })
}
scrollUp()