var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


const mainEl = document.querySelector('main')

mainEl.style.backgroundColor = '#4a4e4d'

mainEl.innerHTML = '<h1> SEI Rocks! </h1>'

mainEl.classList.toggle('flex-ctr')

const topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.toggle('flex-around')


menuLinks.forEach((link) => {
  const newATag = document.createElement('a')
  newATag.setAttribute('href', link.href)
  newATag.textContent = link.text
  topMenuEl.append(newATag)

})

const subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.toggle('flex-around')

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

//   5.1
const topMenuLinks = topMenuEl.querySelectorAll('a')

let showingSubMenu = false

//   5.2
topMenuEl.addEventListener('click', (evt) => {
  evt.preventDefault()
  if(evt.target.tagName !== 'A'){
    return
  } 
//  5.3
  if(evt.target.classList.contains('active')){
    evt.target.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }
// 5.4
  topMenuLinks.forEach((arg) => {
    arg.classList.remove('active')
  })
  // document.querySelectorAll('.active')
  // evt.body.classList.toggle('active')

// 5.5
  evt.target.classList.add('active')
// 5.6
let text = evt.target.textContent
let currentLink = {}
  for (let i = 0; i < menuLinks.length; i++){
      if (text === menuLinks[i].text){
           showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
           currentLink = menuLinks[i]
      }
  }
  // console.log(showingSubMenu)
  // console.log(currentLink)
  
//   5.7
if (showingSubMenu === true){
      subMenuEl.style.top = '100%'
      buildSubMenu(currentLink)
  } else {
      subMenuEl.style.top = '0'
  }
  // console.log(subMenuEl)
// 5.8
  function buildSubMenu(){
      subMenuEl.innerHTML = ''
      console.log(subMenuEl)
      currentLink.subLinks.forEach((link)=>{
          let a = document.createElement('A')
          a.setAttribute('href', link.href)
          a.textContent = link.text
          subMenuEl.append(a)
      })
  }
  
})

// 6.0
  subMenuEl.addEventListener('click', (evt)=>{
      evt.preventDefault()
      if(evt.target.tagName !== 'A'){
          return
        } 
 

  //6.1

  showingSubMenu = false
  subMenuEl.style.top = "0"

  // 6.2 

  topMenuLinks.forEach((arg)=> {
    arg.classList.remove("active")
  })

  // 6.3

  mainEl.innerHTML = `<h1>${evt.target.text}</h1>`



// 6.4
if (evt.target.text === 'about'){
  mainEl.innerHTML = `<h1>${evt.target.text}</h1`;
}
// mainEl.innerHTML = `<h1>${evt.target.textContent}</h1>`
// }
})