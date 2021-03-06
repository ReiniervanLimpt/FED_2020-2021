const trackTab = document.querySelector('#shop__tabs-track')
const shopTrack = trackTab.querySelector('ul')
const trackTabs = trackTab.querySelectorAll('li')

const shopItems = document.querySelector('#shop__items')

const allButtons = document.querySelectorAll('button')

allButtons.forEach(item => {
  const itemSplash = item.parentNode.parentNode.querySelector('div')
  item.addEventListener("mouseenter", () => {
    itemSplash.classList.add('grow')
  })
  item.addEventListener("mouseleave", () => {
    itemSplash.classList.remove('grow')
  })
})

const allShopItems = document.querySelector('#shop__items')
allShopItems.querySelectorAll('article').forEach(item =>
  item.addEventListener('click', () => {
    window.location.href = "detail.html";
  }))

const item1 = document.querySelector('#shop-item-1')
const item2 = document.querySelector('#shop-item-2')
const item3 = document.querySelector('#shop-item-3')
const item4 = document.querySelector('#shop-item-4')
const item5 = document.querySelector('#shop-item-5')

// this variable keeps track of which item of the menu needs to be shown
// this variable is used to determine what the next and previous item should be in updateMenuInterface()
let menuPosition = 3

// adds feedback to every menu item
trackTabs.forEach(item => {
  item.addEventListener('click', () => {
    const latestActiveItem = document.querySelector('.active')
    const activeItem = item.querySelector('a')
    latestActiveItem.classList.remove('active')
    activeItem.classList.add('active')
  })
})

// makes the menu snap back, initiates the previousItem animation
function previous() {
  shopTrack.className = ''
  shopTrack.classList.add(`item-snap-2`)
  // waits for animation to finish
  setTimeout(function() {
    const latestActiveItem = document.querySelector('.active')
    latestActiveItem.classList.remove('active')
    shopTrack.className = ''
    shopTrack.classList.remove(`item-snap-2`)
    shopTrack.classList.add(`item-snap-3`)
    updateMenuInterface(menuPosition)
  }, 300)
}

// and forward, initiates the nextItem animation
function next() {
  shopTrack.className = ''
  shopTrack.classList.add(`item-snap-4`)
  // item-snap-4 had a different translate position value which makes the menu move thanks to a transition
  // item-snap-3 is the default position and centers te menuPosition
  // after the animation of the menu has finished its position is reset through item-snap-3 and the menus values are changed in updateMenuInterface()
  setTimeout(function() {
    const latestActiveItem = document.querySelector('.active')
    latestActiveItem.classList.remove('active')
    shopTrack.className = ''
    shopTrack.classList.remove(`item-snap-4`)
    shopTrack.classList.add(`item-snap-3`)
    updateMenuInterface(menuPosition)
  }, 300)
}

// overwrites menu items values to simulate the menu posion has changed, while it instead snapped back to the previous position.
function updateMenuInterface(position) {

  item3.classList.add('active')


  // this is a little sloppy, need to refactor this later
  if (position === 1) {
    item1.innerHTML = 'ltd edition'
    item1.setAttribute('href', "#ltdedition")
    item2.innerHTML = 'flavored 120z'
    item2.setAttribute('href', "#flavored120z")
    item3.innerHTML = 'past ltd drop'
    item3.setAttribute('href', "#pltddrop")
    item4.innerHTML = 'energy'
    item4.setAttribute('href', "#energy")
    item5.innerHTML = 'plain'
    item5.setAttribute('href', "#plain")
  } else if (position === 2) {
    item1.innerHTML = 'flavored 120z'
    item1.setAttribute('href', "#flavored120z")
    item2.innerHTML = 'past ltd drop'
    item2.setAttribute('href', "#pltddrop")
    item3.innerHTML = 'energy'
    item3.setAttribute('href', "#energy")
    item4.innerHTML = 'plain'
    item4.setAttribute('href', "#plain")
    item5.innerHTML = 'ltd edition'
    item5.setAttribute('href', "#ltdedition")
  } else if (position === 3) {
    item1.innerHTML = 'past ltd drop'
    item1.setAttribute('href', "#pltddrop")
    item2.innerHTML = 'energy'
    item2.setAttribute('href', "#energy")
    item3.innerHTML = 'plain'
    item3.setAttribute('href', "#plain")
    item4.innerHTML = 'ltd edition'
    item4.setAttribute('href', "#ltdedition")
    item5.innerHTML = 'flavored 120z'
    item5.setAttribute('href', "#flavored120z")
  } else if (position === 4) {
    item1.innerHTML = 'energy'
    item1.setAttribute('href', "#energy")
    item2.innerHTML = 'plain'
    item2.setAttribute('href', "#plain")
    item3.innerHTML = 'ltd edition'
    item3.setAttribute('href', "#ltdedition")
    item4.innerHTML = 'flavored 120z'
    item4.setAttribute('href', "#flavored120z")
    item5.innerHTML = 'past ltd drop'
    item5.setAttribute('href', "#pltddrop")
  } else {
    item1.innerHTML = 'plain'
    item1.setAttribute('href', "#plain")
    item2.innerHTML = 'ltd edition'
    item2.setAttribute('href', "#ltdedition")
    item3.innerHTML = 'flavored 120z'
    item3.setAttribute('href', "#flavored120z")
    item4.innerHTML = 'past ltd drop'
    item4.setAttribute('href', "#pltddrop")
    item5.innerHTML = 'energy'
    item5.setAttribute('href', "#energy")
  }
}

const body = document.body,
  html = document.documentElement

let height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight)


// checks the body height to find out which menu to show
// when the height is bigger than 4200 the layout switches to column view
// otherwise it shows the other menu at landscape layout
if (height > 4200) {
  // mobile
} else {
  // desktop / tablet
  item1.removeAttribute("href")
  item2.removeAttribute("onclick")
  item4.removeAttribute("onclick")
  item5.removeAttribute("href")
  item1.innerHTML = 'plain'
  item1.setAttribute('href', "#plain")
  item2.innerHTML = 'ltd edition'
  item2.setAttribute('href', "#ltdedition")
  item3.innerHTML = 'flavored 120z'
  item3.setAttribute('href', "#flavored120z")
  item4.innerHTML = 'past ltd drop'
  item4.setAttribute('href', "#pltddrop")
  item5.innerHTML = 'energy'
  item5.setAttribute('href', "#energy")
}

// the menu is also updated based on the viewers scroll position in portrait layout
window.addEventListener('scroll', function() {

  let height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight)

  if (height > 4200) {
    // mobile
  } else {
    // desktop / tablet
    item1.removeAttribute("href")
    item2.removeAttribute("onclick")
    item4.removeAttribute("onclick")
    item5.removeAttribute("href")
    item1.innerHTML = 'plain'
    item1.setAttribute('href', "#plain")
    item2.innerHTML = 'ltd edition'
    item2.setAttribute('href', "#ltdedition")
    item3.innerHTML = 'flavored 120z'
    item3.setAttribute('href', "#flavored120z")
    item4.innerHTML = 'past ltd drop'
    item4.setAttribute('href', "#pltddrop")
    item5.innerHTML = 'energy'
    item5.setAttribute('href', "#energy")
  }

  if (height > 4200) {
    let top = window.pageYOffset || document.documentElement.scrollTop

    if (top > 160 && top < 2400 && height > 4200) {
      if (menuPosition != 3) {
        if (menuPosition === 4) {
          previous()
        } else {
          next()
        }
      }
      menuPosition = 3
    } else if (top > 2400 && top < 4680 && height > 4200) {
      if (menuPosition != 4) {
        if (menuPosition === 5) {
          previous()
        } else {
          next()
        }
      }
      menuPosition = 4
    } else if (top > 4680 && top < 6940 && height > 4200) {
      if (menuPosition != 5) {
        if (menuPosition === 1) {
          previous()
        } else {
          next()
        }
      }
      menuPosition = 5
    } else if (top > 6940 && top < 9240 && height > 4200) {
      if (menuPosition != 1) {
        if (menuPosition === 2) {
          previous()
        } else {
          next()
        }
      }
      menuPosition = 1
    } else if (top > 9240 && height > 4200) {
      if (menuPosition != 2) {
        if (menuPosition === 3) {
          previous()
        } else {
          next()
        }
      }
      menuPosition = 2
    }
  }
})

// detect where sections are on Y axis

// const el1 = document.querySelector('#plain').getBoundingClientRect()
// const el2 = document.querySelector('#ltdedition').getBoundingClientRect()
// const el3 = document.querySelector('#flavored120z').getBoundingClientRect()
// const el4 = document.querySelector('#pltddrop').getBoundingClientRect()
// const el5 = document.querySelector('#energy').getBoundingClientRect()
//
// console.log(el1.top)
// console.log(el2.top)
// console.log(el3.top)
// console.log(el4.top)
// console.log(el5.top)