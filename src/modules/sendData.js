const sendData = () => {


    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')

        dropdownBlock.innerHTML = ''

        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('afterbegin', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    

    const renderAnimeList = (data, ganres) => {
        const wrapper = document.querySelector('.product__list')
        wrapper.innerHTML = ''

        ganres.forEach(ganre => {
            const productBlock = document.createElement('div')
            const listBlock = document.createElement('div')

            listBlock.classList.add('row')
            productBlock.classList.add('mb-5')

            const list = data.filter(item => item.ganre === ganre)
            
            productBlock.insertAdjacentHTML('afterbegin', `
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title">
                            <h4>${ganre}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="btn__all">
                            <a href="/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
                        </div>
                    </div>
                </div>
            `)
            list.forEach(item => {
                const {id, image, rating, title, views, tags } = item

                const ulBlock = document.createElement('ul')
                tags.forEach(tag => {
                    ulBlock.insertAdjacentHTML('afterbegin', `<li>${tag}</li>`)
                })


                listBlock.insertAdjacentHTML('afterbegin', `
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="${image}">
                                <div class="ep">${rating} / 10</div>
                                <div class="view"><i class="fa fa-eye"></i> ${views}</div>
                            </div>
                            <div class="product__item__text">
                                ${ulBlock.outerHTML}
                                <h5><a href="/anime-details.html?itemId=${id}">${title}</a></h5>
                            </div>
                        </div>
                    </div>
                `)
            })




            // document.querySelector('.product__item__text').append(ulBlock)

            productBlock.append(listBlock)
            wrapper.append(productBlock)

            wrapper.querySelectorAll('.set-bg').forEach(elem => {

                elem.style.backgroundImage = `url(${elem.dataset.setbg})`
    
            })
        })
    }


    const renderTopAnime = (data) => {
        const viewGallery = document.querySelector('.filter__gallery')

        viewGallery.innerHTML = ''

        data.forEach(item => {
            const { image, rating, title, views } = item

            viewGallery.insertAdjacentHTML('beforeend',
                `
                <div class="product__sidebar__view__item set-bg mix " data-setbg="${image}">
                    <div class="ep">${rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i>${views}</div>
                    <h5><a href="/anime-details.html">${title}</a></h5>
                </div>
            `)
            
        })

        viewGallery.querySelectorAll('.set-bg').forEach(elem => {

            elem.style.backgroundImage = `url(${elem.dataset.setbg})`

        })

    }

    const getData = () => {
        fetch('https://anime-b6e87-default-rtdb.firebaseio.com/anime.json')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Данные получены с ошибкой!')
                }

            })
            .then(data => {
                const ganres = new Set()  // соэдаем коллекцию

                renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5))

                data.forEach(item => {
                    ganres.add(item.ganre)
                })

                renderAnimeList(data, ganres)
                renderGanreList(ganres)
            })
            .catch(error => {

                console.error(error.message)
            })
    }
    getData()
}
sendData()

