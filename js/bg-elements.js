const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg')

    elements.forEach((e) => {
        e.style.backgroundImage = `url(${e.dataset.setbg})`
    })
}

bgElements()