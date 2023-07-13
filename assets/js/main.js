(function() {
    let navlinks = Select('#navbar . scroll',true)
    const navlinksActive = () => {
        let position = window.scrollY + 200
        navlinks.forEach(navlinks => {
            if (!navlinks.hash)return
            let section = select(navlinks.hash)
            if (!section) return
            if(position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)){
                navlinks.classList.add('active')
            }else{
                navlinks.classList.remove('active')
            }
        });
    }
    window.addEventListener('load',navlinksActive)
    onscroll(document,navlinksActive)
})()