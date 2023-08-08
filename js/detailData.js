const detailData = () => {
    const preloader = document.querySelector('.preloder')

    const renderGanreList = (ganres) => {
        const dropdownBlock = document.querySelector('.header__menu .dropdown')


        ganres.forEach(ganre => {
            dropdownBlock.insertAdjacentHTML('beforeend', `
            <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }


    const renderAnimeDetails = (array, itemId) => {
        const animeObj = array.find(item => item.id == itemId)
        const imageBlock = document.querySelector('.anime__details__pic')
        const viewsBlock = imageBlock.querySelector('.view')
        const titleBlock = document.querySelector('.anime__details__title h3')
        const subTitleBlock = document.querySelector('.anime__details__title span')
        const descriptionBlock = document.querySelector('.anime__details__text p')
        const widgetList = document.querySelectorAll('.anime__details__widget ul li')
        const breadCrumb = document.querySelector('.breadcrumb__links span')




        if (animeObj) {
            imageBlock.dataset.setbg = animeObj.image

            viewsBlock.insertAdjacentHTML('beforeend', `
            <i class="fa fa-eye"></i> ${animeObj.views}
            `)

            titleBlock.textContent = animeObj.title
            subTitleBlock.textContent = animeObj['original-title']
            descriptionBlock.textContent = animeObj.description
            breadCrumb.textContent = animeObj.ganre

            widgetList[0].insertAdjacentHTML('beforeend', `
                <span>Date aired:</span> ${animeObj.date}
            `)
            widgetList[1].insertAdjacentHTML('beforeend', `
                <span>Rating:</span> ${animeObj.rating}
            `)
            widgetList[2].insertAdjacentHTML('beforeend', `
                <span>Genre:</span> ${animeObj.tags.join(", ")}
            `)

            document.querySelectorAll('.set-bg').forEach((e) => {
                e.style.backgroundImage = `url(${e.dataset.setbg})`
            })
            setTimeout(() => {
                preloader.classList.remove('active')
            }, 300)
        } else {
            console.log("Anime not found");
        }
    }



    fetch('https://anime-d90cf-default-rtdb.firebaseio.com/anime.json')
        .then((respones) => respones.json())
        .then((data) => {
            const ganres = new Set()
            const ganreParams = new URLSearchParams(window.location.search).get('itemId')


            data.forEach((item) => {
                ganres.add(item.ganre)
            })
            if (ganreParams) {
                renderAnimeDetails(data, ganreParams)
            } else {
                // renderAnimeDetails(data, ganres)
                console.log("Anime not found");
            }

            renderGanreList(ganres)
        })
}

detailData()