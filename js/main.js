


let current = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'current';

console.log(document.links[current])

console.log(document.URL)

const toggleNav = document.querySelector('.close-open')

const openNav = document.querySelector('.open-nav')

const closeNav = document.querySelector('.close-nav')

const header = document.querySelector('header')

const navBar = document.querySelector('.nav-bar')

const ul = document.querySelector('ul')
toggleNav.addEventListener('click', () => {
    if (header.getBoundingClientRect().width === 0){
       

        header.style.width = '100%'
        
        toggleNav.style.marginLeft = '24rem'
        // toggleNav.style.transform = 'rotateY(180deg)';
        
        // openNav.style.opacity= '0'
        // closeNav.style.opacity= '1'
        navBar.style.opacity= '1'
        

    }else{
        header.style.width = '0'
        
        toggleNav.style.marginLeft = '2rem'
        navBar.style.opacity= '0'
       
    }
})