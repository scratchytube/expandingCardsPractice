const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

const removeActiveClasses = () => {
    for(let panel of panels) {
        panel.classList.remove('active')
    }
}

