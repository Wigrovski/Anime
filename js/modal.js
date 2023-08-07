const modal = document.querySelector('.search-model')
const input = modal.querySelector('#search-input')
const search = document.querySelector('.search-switch')
const close = modal.querySelector('.search-close-switch')
const wrapper = document.querySelector('.serach-model-result')


wrapper.style.width = '100%'
wrapper.style.maxWidth = '500px'

const renderFunc = (items) => {
    wrapper.innerHTML = ''
    items.forEach(item => {
        wrapper.insertAdjacentHTML('afterbegin', `
            <a class="pt-2 mt-4" href='/anime-details.html'>${item.title}</a>
        `)
    })

}

const searchFunc = (searchStr) => {
    fetch('https://anime-d90cf-default-rtdb.firebaseio.com/anime.json')
    .then((respones) => {
        return respones.json()
    })
    .then((data) => {
        const filterData = data.filter(dataItem => {
            return dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) || 
            dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
        })
        renderFunc(filterData.slice(0, 5))
    })
}


search.addEventListener('click', () => {
    modal.style.display = 'block'
})
close.addEventListener('click', () => {
    input.value = ''
    modal.style.display = 'none'
    wrapper.innerHTML = ''
})

input.addEventListener('input', (e) => {
    searchFunc(e.target.value);
})