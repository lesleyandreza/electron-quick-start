const renderPages = require('./renderPages')
const clearHandoff = require('./clearhandoff')
const emmitHandoff = require('./emmitHandoff')

module.exports = (function () {

    let $menu = document.querySelector('.menu')

    let $linkTopics = $menu.querySelector('[href="#topics"]')
    let $linkAbout = $menu.querySelector('[href="#about"]')
    let $anyThing = $menu.querySelector('[href="#any-thing"]')

    $linkTopics.addEventListener('click', changePage)
    $linkAbout.addEventListener('click', changePage)
    $anyThing.addEventListener('click', changePage)
    
    emmitHandoff("topics")

    function changePage(event) {

        let _target = event.currentTarget.getAttribute('href').replace(/#/, '')
        renderPages(_target)
        clearHandoff();
        emmitHandoff(_target)

    }

})()
