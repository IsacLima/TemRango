const anchor = document.getElementsByClassName("top")
const listItem = document.getElementsByClassName("listItem")
const menu = document.getElementsByClassName("menu__img")
const navMenu = document.getElementsByClassName("nav__mobile")
const floatMenu = document.getElementsByClassName("float-menu")
const closeMenu = document.getElementsByClassName("float-menu__close")
const mask = document.getElementsByClassName("mask")


anchor[0].addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
})

anchor[1].addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
})

Array.from(listItem).forEach(item =>{
  item.addEventListener("mouseover", ()=>{
    item.classList.add("list__selected")
  })
})

Array.from(listItem).forEach(item =>{
  item.addEventListener("mouseout", ()=>{
    item.classList.remove("list__selected")
  })
})

menu[0].addEventListener("click", ()=>{
  navMenu[0].style.display = "none"
  floatMenu[0].style.display = "block"
  mask[0].style.display = "block"
})

closeMenu[0].addEventListener("click", ()=>{
  navMenu[0].style.display = ""
  floatMenu[0].style.display = ""
  mask[0].style.display = ""
})
