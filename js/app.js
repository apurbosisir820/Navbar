const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menue')
const dropDownMenus = document.querySelector('.dropdowns')


    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('opens')
        const isOpen = dropDownMenu.classList.contains('opens')

         toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-bars'
         : 'fa-solid fa-home'
    }