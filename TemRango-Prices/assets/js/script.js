const anchor = document.getElementsByClassName("top")


anchor[0].addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
})
