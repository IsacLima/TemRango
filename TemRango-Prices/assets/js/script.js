const anchor = document.getElementsByClassName("top")
const listItem = document.getElementsByClassName("listItem")


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