module.exports = function renderPages(target) {

    let $$allPages = document.querySelectorAll(`[data-content]:not([data-content="${target}"])`)
    document.querySelector('.menu .current').classList.remove('current')
    event.currentTarget.classList.add('current')
    $$allPages.forEach((page) => {
        page.classList.add('hide')
    })
    document.querySelector(`[data-content="${target}"]`).classList.remove('hide')

}