'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const closebtn = document.querySelector('.navigation__closebtn')
  const openbtn = document.querySelector('.navigation__openbtn')
  const menu = document.querySelector('.navigation__list')
  const openNav = () => {
    menu.classList.add('navigation__menu')
  }

  const closeNav = () => {
    menu.classList.remove('navigation__menu')
  }
  const hideMenu = () => {
    if (document.documentElement.clientWidth > 1170) {
      menu.classList.remove('navigation__menu')
    }
  }
  window.addEventListener('resize', hideMenu)
  openbtn.addEventListener('click', openNav)
  closebtn.addEventListener('click', closeNav)

  const slider = document.querySelector('.range__input')
  const resultPlace = document.querySelector('.form__range-result')
  resultPlace.innerHTML = `${slider.value}%`

  const changeResult = (e) => {
    resultPlace.innerHTML = `${e.target.value}%`
  }
  slider.addEventListener('change', (e) => {
    changeResult(e)
  })

  const labelFile = document.querySelector('.form__choose-file-label')
  labelFile.addEventListener('click', (e) => e.preventDefault())

  const submitInput = document.querySelector('.form__submit')
  submitInput.addEventListener('click', (e) => e.preventDefault())

  // select
  const selectWrapper = document.querySelector('.form__select-wrapper')
  const selectOptions = selectWrapper.querySelector('.form__select')
  const newSelect = document.createElement('DIV')
  newSelect.setAttribute('class', 'select-selected')
  newSelect.innerHTML = selectOptions.options[selectOptions.selectedIndex].innerHTML
  selectWrapper.appendChild(newSelect)
  const newOptionList = document.createElement('UL')

  newOptionList.setAttribute('class', 'select-items select-hide')
  for (let j = 1; j < selectOptions.length; j++) {
    const newOption = document.createElement('LI')
    newOption.innerHTML = selectOptions.options[j].innerHTML
    newOption.addEventListener('click', function (e) {
      const originalSelectBox = this.parentNode.parentNode.querySelector('select')
      const mainButton = this.parentNode.previousSibling
      for (let i = 0; i < originalSelectBox.length; i++) {
        if (originalSelectBox.options[i].innerHTML === this.innerHTML) {
          originalSelectBox.selectedIndex = i
          mainButton.innerHTML = this.innerHTML
          const selectedOptions = this.parentNode.querySelectorAll('.same-as-selected')
          for (let k = 0; k < selectedOptions.length; k++) {
            selectedOptions[k].removeAttribute('class')
          }
          this.setAttribute('class', 'same-as-selected')
          break
        }
      }
      mainButton.click()
    })
    newOptionList.appendChild(newOption)
  }
  selectWrapper.appendChild(newOptionList)

  const onToggleSelect = () => {
    newSelect.classList.toggle('select-selected--open')
    if (newSelect.nextSibling.classList.contains('select-hide')) {
      newSelect.nextSibling.classList.remove('select-hide')
    } else {
      newSelect.nextSibling.classList.add('select-hide')
    }
    newSelect.classList.toggle('select-arrow-active')
  }

  newSelect.addEventListener('click', function (e) {
    e.stopPropagation()
    onToggleSelect()
  })
})
