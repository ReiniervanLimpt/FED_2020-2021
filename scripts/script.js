// JavaScript Document
const trackTab = document.querySelector('#shop__tabs-track')
const shopTrack = trackTab.querySelector('ul')
const trackTabs = trackTab.querySelectorAll('li')

let menuPosition = 3

trackTabs.forEach(item => {
  item.addEventListener('click', () => {
    const latestActiveItem = document.querySelector('.active')
    const activeItem = item.querySelector('a')
    latestActiveItem.classList.remove('active')
    activeItem.classList.add('active')
  })
})

function previous() {
  shopTrack.className = ''
  shopTrack.classList.add(`item-snap-2`)
  setTimeout(function() {
    const latestActiveItem = document.querySelector('.active')
    latestActiveItem.classList.remove('active')
    shopTrack.className = ''
    shopTrack.classList.remove(`item-snap-2`)
    shopTrack.classList.add(`item-snap-3`)
    if (menuPosition != 1) {
      menuPosition--
    } else {
      menuPosition = 5
    }
    updateMenuInterface(menuPosition)
  }, 300)
}

function next() {
  shopTrack.className = ''
  shopTrack.classList.add(`item-snap-4`)
  setTimeout(function() {
    const latestActiveItem = document.querySelector('.active')
    console.log(latestActiveItem)
    latestActiveItem.classList.remove('active')
    shopTrack.className = ''
    shopTrack.classList.remove(`item-snap-4`)
    shopTrack.classList.add(`item-snap-3`)
    if (menuPosition != 5) {
      menuPosition++
    } else {
      menuPosition = 1
    }
    updateMenuInterface(menuPosition)
  }, 300)
}

function updateMenuInterface(position) {
  console.log(position)
  const item1 = document.querySelector('#shop-item-1')
  const item2 = document.querySelector('#shop-item-2')
  const item3 = document.querySelector('#shop-item-3')
  const item4 = document.querySelector('#shop-item-4')
  const item5 = document.querySelector('#shop-item-5')

  item3.classList.add('active')

  if (position === 1) {
    item1.innerHTML = 'ltd edition'
    item1.setAttribute('href', "#ltdedition")
    item2.innerHTML = 'flavored 120z'
    item2.setAttribute('href', "#flavored120z")
    item3.innerHTML = 'past lts drop'
    item3.setAttribute('href', "#pltddrop")
    item4.innerHTML = 'energy'
    item4.setAttribute('href', "#energy")
    item5.innerHTML = 'plain'
    item5.setAttribute('href', "#plain")
  } else if (position === 2) {
    item1.innerHTML = 'flavored 120z'
    item1.setAttribute('href', "#flavored120z")
    item2.innerHTML = 'past lts drop'
    item2.setAttribute('href', "#pltddrop")
    item3.innerHTML = 'energy'
    item3.setAttribute('href', "#energy")
    item4.innerHTML = 'plain'
    item4.setAttribute('href', "#plain")
    item5.innerHTML = 'ltd edition'
    item5.setAttribute('href', "#ltdedition")
  } else if (position === 3) {
    item1.innerHTML = 'past lts drop'
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
    item5.innerHTML = 'past lts drop'
    item5.setAttribute('href', "#pltddrop")
  } else {
    item1.innerHTML = 'plain'
    item1.setAttribute('href', "#plain")
    item2.innerHTML = 'ltd edition'
    item2.setAttribute('href', "#ltdedition")
    item3.innerHTML = 'flavored 120z'
    item3.setAttribute('href', "#flavored120z")
    item4.innerHTML = 'past lts drop'
    item4.setAttribute('href', "#pltddrop")
    item5.innerHTML = 'energy'
    item5.setAttribute('href', "#energy")
  }
}