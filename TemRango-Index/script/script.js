var shop = document.getElementsByClassName("nav__status-shop")
var change = document.getElementsByClassName("open-close")
var mask = document.getElementsByClassName("gray-mask")
var body = document.getElementsByClassName("body")
var button_accept = document.getElementsByClassName("open-close__accept")
var button_recuse = document.getElementsByClassName("open-close__recuse")
var back_open = document.getElementsByClassName("open-close__back")
var notify = document.getElementsByClassName("nav__notification")
var notifyBox = document.getElementsByClassName("notifications")
var back_noti = document.getElementsByClassName("noti__back")
var circle = document.getElementsByClassName("circle")
var payment = document.getElementsByClassName("payment__box")
var cart = document.getElementsByClassName("cart")
var orders = document.getElementsByClassName("orders")
var backCarousel = document.getElementsByClassName("carousel__back")
var carousel = document.getElementsByClassName("carousel")
var updates = document.getElementsByClassName("updates")
var menu_icon = document.getElementsByClassName('nav__icon')
var itemsmenu = document.getElementsByClassName('menu__items')
var menu = document.getElementsByClassName('menu')
var body = document.getElementsByClassName('body')
var container = document.getElementsByClassName('container')
var nav = document.getElementsByClassName('nav')
var tip = document.getElementsByClassName('tooltip')
var menu_open_icon = document.getElementsByClassName('menu__header__icon')
var menushort = document.getElementsByClassName('menu--short')
var navuser = document.getElementsByClassName('nav__user')
var verify = document.getElementsByClassName('verify')
list = []
listParents = []
var first = true
var isOn = false


verify[0].children[0].children[0].addEventListener("click", ()=>{
	verify[0].style.display = "none"
	mask[0].style.visibility = ""
	body[0].style.position = ""
})

verify[0].children[2].children[1].addEventListener("click", ()=>{
	verify[0].style.display = "none"
	mask[0].style.visibility = ""
	body[0].style.position = ""
})

verify[0].style.display = "grid"
mask[0].style.visibility = "visible"
body[0].style.position = "fixed"
body[0].style.width = "100%"

Array.from(itemsmenu).forEach(item=>{
	item.addEventListener('click', ()=>{
		if(menushort[0].style.display == "none"){
			menuBehavior(item)
		}
	})	
})

Array.from(itemsmenu).forEach(item=>{
	tips = tips = document.getElementsByClassName("tooltips")
	tips[0].style.display = "none"
	var test = checkDevice()
	if(test == true){
		item.addEventListener('click', ()=>{
			menuBehavior(item)
		})	
	}

	else{
		tip[0].addEventListener('mouseover', ()=>{
			tip[0].style.display = "block"
			tips = tips = document.getElementsByClassName("tooltips")
			tips[0].style.display = "block"
		})

		document.getElementsByClassName("tooltips")[0].addEventListener('mouseover', ()=>{
				tip[0].style.display = "block"
				tips = document.getElementsByClassName("tooltips")
				tips[0].style.display = "block"
		})

		item.addEventListener('mouseover', ()=>{
			var position = Array.from(itemsmenu).indexOf(item)
			list = []
			listParents = []
			for(var i = 0;i<15;i++){
				list.push(itemsmenu[i+15])
				listParents.push(itemsmenu[i+15].parentElement)
			}
			if(position <= 14){
				tip[0].children[0].classList.remove("title__hover")
				
				tip[0].style.display = "block"
				tips = document.getElementsByClassName("tooltips")
				tips[0].style.display = "block"
				document.getElementsByClassName("tooltip")[0].style.cursor = "pointer"
				var top = item.getBoundingClientRect().y
				top = top+'px'
				top = top.toString()
				tip[0].style.top = top
				document.getElementsByClassName("tooltips")[0].style.top = top
				tip[0].children[0].textContent = list[position].children[2].innerText
				var className = item.className
				className = className[(className.length-1)]

				if(item.parentElement.className == "menu__settings" && item.className != "menu__items menu__items-3" || (item.parentElement.className == "menu__admin" && item.className == "menu__items menu__items-4") || (item.parentElement.className == "menu__requests" && item.className == "menu__items menu__items-2")){
					tip[0].children[0].classList.add("title__hover")
					tip[0].children[1].style.display = "none"
					tip[0].children[2].style.display = "none"
					document.getElementsByClassName("tooltip")[0].style.height = "50px"
					tip[0].children[0].style.border = "none"	
					if(item.className == "menu__items menu__items-4"){
						document.getElementsByClassName("tooltip")[0].style.width = "207px"
					}		
					else{
						document.getElementsByClassName("tooltip")[0].style.width = ""
					}

					
					
				}

				else if(item.parentElement.className == "menu__settings" && item.className == "menu__items menu__items-3"){
					tip[0].children[1].style.display = ""
					tip[0].children[2].style.display = ""
					document.getElementsByClassName("tooltip")[0].style.height = "auto"
					document.getElementById("text-1").innerHTML = listParents[position].children[Number(className)+1].children[0].innerText
					document.getElementById("text-2").innerHTML = listParents[position].children[Number(className)+1].children[1].innerText
					tip[0].children[0].style.border = ""
				}

				else{
					tip[0].children[1].style.display = ""
					tip[0].children[2].style.display = ""
					document.getElementsByClassName("tooltip")[0].style.height = "auto"
					document.getElementById("text-1").innerHTML = listParents[position].children[className*2].children[0].innerText
					document.getElementById("text-2").innerHTML = listParents[position].children[className*2].children[1].innerText
					
					tip[0].children[0].style.border = ""
				}
			}	
		})
			

		document.getElementsByClassName("tooltips")[0].addEventListener('mouseout', ()=>{
			var tips = document.getElementsByClassName('tooltips')
			tip[0].style.display = "none"
			tips[0].style.display = ""
		})

		item.addEventListener('mouseout', ()=>{
			var tips = document.getElementsByClassName('tooltips')
			tip[0].style.display = "none"
			tips[0].style.display = "none"
		})
	}

})

menu_open_icon[0].addEventListener("click", ()=>{
	changeMenu()
	var tips = document.getElementsByClassName('tooltips')
	tips[0].style.display = "none"
})

menu_open_icon[1].addEventListener("click", ()=>{
	anima(1,0,0)
	menu[0].style.display = "none"
	container[0].style.marginLeft = ""
	mask[0].style.visibility = "hidden"
	nav[0].style.position = ""
	nav[0].style.width = ""
	container[0].style.width = ""
	if(carousel[0].style.display == "" || isOn == true){
		carousel[0].style.display = ""
		carousel[0].style.position = ""
		carousel[0].style.top = ""
		isOn = false
	}
	container[0].style.position = ""
	var test = checkDevice()
	if(test == false){
		menushort[0].style.display = "flex"
	}
})

menu_icon[0].addEventListener('click', ()=>{
	var test = checkDevice()
	if(test == true){
		menu[0].style.display = "block"
		document.getElementsByClassName("tooltips")[0].style.display = "none"
		mask[0].style.visibility = "visible"
		container[0].style.position = "fixed"
		container[0].style.top = "53px"
		container[0].style.width = "100%"
		container[0].style.left = "0"
		nav[0].style.position = "fixed"
		nav[0].style.width = "calc(100% - 32px)"
		nav[0].style.top = "0px"
	
		menu[0].style.zIndex = "1100"
	}
	anima(0,1,0)
	mask[0].addEventListener('click', ()=>{
		anima(1,0,0)
		menu[0].style.display = "none"
		mask[0].style.visibility = "hidden"
		nav[0].style.position = ""
		nav[0].style.width = ""
		container[0].style.width = ""
		container[0].style.position = ""
	})
})

backCarousel[0].addEventListener("click", ()=>{
	carousel[0].style.display = "none"
	var test = checkDevice()
	if(test == true){
		updates[0].style.marginTop = "72px"	
	}
	else{
		updates[0].style.marginTop = "0px"
		document.getElementsByClassName("payment")[0].style.marginTop = "0"
		container[0].style.gridTemplateAreas = "'nav nav''up pay''order cart'"
		container[0].style.height = "1232px"
		container[0].style.gridTemplateRows = "158px 336px 513px"
		body[0].style.height = "1232px"
}
	
})

mask[0].addEventListener("click", ()=>{
	if(notifyBox[0].style.display == "block"){
		if(first == true){
			notifyBox[0].children[3].style.display = "none"
			notifyBox[0].children[2].style.display = "flex"
			first = false
		}
		notifyBox[0].style.display = "none"
		mask[0].style.visibility = ""
		
	}

	else if(verify[0].style.display == "grid"){
		verify[0].style.display = "none"
		mask[0].style.visibility = ""
		body[0].style.position = ""
	}

	else if(change[0].style.display == "block"){
		change[0].style.display = "none"
		mask[0].style.visibility = ""
	}
	
})

notify[0].addEventListener("click", ()=>{
	notifyBox[0].style.display = "block"
	mask[0].style.visibility = "visible"
	body[0].style.overflow = "hidden"
	circle[0].style.display = "none"
})

back_noti[0].addEventListener("click", ()=>{
	notifyBox[0].style.display = ""
	mask[0].style.visibility = ""
	body[0].style.overflow = ""
	notifyBox[0].children[3].style.display = "none"
	notifyBox[0].children[2].style.display = "flex"
	
})

shop[0].addEventListener("click", ()=>{
	if(shop[0].children[1].innerText == "Fechado"){
		change[0].children[1].innerText = "Abrir loja"
		change[0].children[2].innerText = "A partir de agora sua loja ficará aberta e disponível para receber pedidos."
		button_accept[0].style.backgroundColor = "#05CB95"
		button_accept[0].addEventListener("mouseover", ()=>{
			button_accept[0].style.backgroundColor = "#0aa77c"
		})
		button_accept[0].addEventListener("mouseout", ()=>{
			button_accept[0].style.backgroundColor = "#05CB95"
		})
		change[0].style.display = "grid"
		mask[0].style.visibility = "visible"
		body[0].style.overflow = "hidden"
		
	}

	else{
		change[0].children[1].innerText = "Fechar loja"
		change[0].children[2].innerText = "A partir de agora sua loja ficará fechada e não receberá mais pedidos. Abra novamente quando desejar."
		button_accept[0].style.backgroundColor = "#292F31"
		button_accept[0].addEventListener("mouseover", ()=>{
			button_accept[0].style.backgroundColor = "#484b4a"
		})
		button_accept[0].addEventListener("mouseout", ()=>{
			button_accept[0].style.backgroundColor = "#292F31"
		})
		change[0].style.display = "grid"
		mask[0].style.visibility = "visible"
		body[0].style.overflow = "hidden"
	}
	
})

button_accept[0].addEventListener("click", ()=>{
	change[0].style.display = ""
	mask[0].style.visibility = ""
	body[0].style.overflow = ""
	open()
})

button_recuse[0].addEventListener("click", ()=>{
	change[0].style.display = ""
	mask[0].style.visibility = ""
	body[0].style.overflow = ""
})

back_open[0].addEventListener("click", ()=>{
	change[0].style.display = ""
	mask[0].style.visibility = ""
	body[0].style.overflow = ""
})

function open(){
	if(shop[0].children[1].innerText == "Fechado"){
		shop[0].style.border = "1px solid #05CB95"
		shop[0].children[1].innerText = "Aberto"
		shop[0].children[1].style.color = "#05CB95"
		shop[0].children[0].style.filter = "invert(58%) sepia(74%) saturate(1375%) hue-rotate(118deg) brightness(94%) contrast(96%)"
		shop[0].addEventListener("mouseover", ()=>{
			shop[0].style.backgroundColor = "#05CB95"
			shop[0].children[1].style.color = "#FFFFFF"
			shop[0].children[0].style.filter = "invert(99%) sepia(44%) saturate(0%) hue-rotate(39deg) brightness(118%) contrast(100%)"
		})
		shop[0].addEventListener("mouseout", ()=>{
			shop[0].style.backgroundColor = ""
			shop[0].children[1].style.color = "#05CB95"
			shop[0].children[0].style.filter = "invert(58%) sepia(74%) saturate(1375%) hue-rotate(118deg) brightness(94%) contrast(96%)"
		})
		payment[0].children[0].style.display = "flex"
		Array.from(payment[0].children).forEach(item=>{
			if(item.className != "payment__empty"){
				item.style.display = "none"
			}
		})
		cart[0].children[1].style.display = "flex"
		Array.from(cart[0].children).forEach(item=>{
			if(item.className != "cart__empty" && item.className != "main__title"){
				item.style.display = "none"
			}
		})
		orders[0].children[1].style.display = "flex"
		body[0].style.height = "1219px"
		container[0].style.height = "1219px"
		menushort[0].style.height = "1132px"
		Array.from(orders[0].children).forEach(item=>{
			if(item.className != "orders__empty" && item.className != "main__title"){
				item.style.display = "none"
			}
		})
		
		if(carousel[0].style.display != "none"){
			carousel[0].style.display = "block"	
		}
		
	}

	else{
		shop[0].style.border = ""
		shop[0].children[1].innerText = "Fechado"
		shop[0].children[1].style.color = ""
		shop[0].children[0].style.filter = ""
		payment[0].children[0].style.display = "none"
		orders[0].children[1].style.height = ""
		orders[0].style.height = ""
		body[0].style.height = ""
		container[0].style.height = ""
		menushort[0].style.height = ""
		cart[0].children[1].style.height = ""
		cart[0].style.height = ""
		shop[0].addEventListener("mouseover", ()=>{
			shop[0].style.backgroundColor = "#bc1224"
			shop[0].children[1].style.color = "#FFFFFF"
			shop[0].children[0].style.filter = "invert(91%) sepia(100%) saturate(34%) hue-rotate(249deg) brightness(115%) contrast(98%)"
		})
		shop[0].addEventListener("mouseout", ()=>{
			shop[0].style.backgroundColor = ""
			shop[0].children[1].style.color = ""
			shop[0].children[0].style.filter = ""
		})
		Array.from(payment[0].children).forEach(item=>{
			if(item.className != "payment__empty"){
				item.style.display = "flex"
			}
		})
		cart[0].children[1].style.display = "none"
		Array.from(cart[0].children).forEach(item=>{
			
			if(item.className != "cart__empty" && item.className != "main__title"){
				item.style.display = "block"
				Array.from(item.children).forEach(item=>{
					item.style.display = "flex"	
				})
				
			}
		})
		orders[0].children[1].style.display = "none"
		Array.from(orders[0].children).forEach(item=>{
			if(item.className != "orders__empty" && item.className != "main__title"){
				item.style.display = "block"
				Array.from(item.children).forEach(item=>{
					item.style.display = "flex"	
				})
			}
		})
	
	}
}

function checkDevice() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
 	){
    return true; // está utilizando celular
  }
 	else {
    return false; // não é celular
  }
}

function anima(ini, fim, atu, dis){
   atu += 4;
   var e = atu/100;
   var d = fim-ini;
   d *= e;
   d += ini;
   menu[0].style.opacity = d;

   if(atu < 100){   
      window.requestAnimationFrame(function(){
         anima(ini, fim, atu, dis);
      });
   }
}

function menuBehavior(item){
	var test = checkDevice()
	if(test == false){
		var className = item.className
		className = className[(className.length-1)]
		var position = Array.from(itemsmenu).indexOf(item)
		for(var i = 0;i<14;i++){
			list.push(itemsmenu[i+14])
			listParents.push(itemsmenu[i+14].parentElement)
		}
		
		if(item.parentElement.className == "menu__requests"){

			if(item.className == "menu__items menu__items-2"){
			}

			else if(item.className == "menu__items menu__items-1"){
				if(item.parentElement.children[className*2].children[0].style.display == "block"){
					item.parentElement.children[className].children[0].style.filter = ""
					item.parentElement.children[className].children[3].style.filter = ""
					item.parentElement.children[className].children[3].style.transform = ""
					item.parentElement.children[className].children[2].style.color = ""
					Array.from(item.parentElement.children[className*2].children).forEach(item=>{
						item.style.display = "none"
					})
				}

				else{
					Array.from(item.parentElement.children[className*2].children).forEach(item=>{
						item.style.display = "block"
					})
					item.parentElement.children[className].children[0].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
					item.parentElement.children[className].children[3].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
					item.parentElement.children[className].children[3].style.transform = "rotate(180deg)"
					item.parentElement.children[className].children[2].style.color = "#05CB95"
				}
			}
			
		}

		else if(item.parentElement.className == "menu__settings" && item.className != "menu__items menu__items-3" || (item.parentElement.className == "menu__admin" && item.className == "menu__items menu__items-4")){                        
		}

		else if(item.parentElement.className == "menu__settings" && item.className == "menu__items menu__items-3"){
			console.log(item.parentElement.children[Number(className)+1])
			if(item.parentElement.children[Number(className)+1].style.display == "block"){
				item.parentElement.children[Number(className)+1].style.display = "none"
				item.parentElement.children[className].children[3].style.transform = ""
				item.parentElement.children[className].children[3].style.filter = ""
				item.parentElement.children[className].children[0].style.filter = ""
				item.parentElement.children[className].children[2].style.color = ""
				Array.from(item.parentElement.children[Number(className)+1].children).forEach(item=>{
					item.style.display = "none"
				})
			}

			else{
				item.parentElement.children[className].children[3].style.transform = "rotate(180deg)"
				item.parentElement.children[className].children[3].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[className].children[0].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[className].children[2].style.color = "#05CB95"
				item.parentElement.children[Number(className)+1].style.display = "block"
				Array.from(item.parentElement.children[Number(className)+1].children).forEach(item=>{
					item.style.display = "block"
				})
			}

		}

		else{
			if(item.parentElement.children[className*2].style.display == "block"){
				item.parentElement.children[className*2].style.display = "none"
				item.parentElement.children[(className*2)-1].children[3].style.transform = ""
				item.parentElement.children[(className*2)-1].children[3].style.filter = ""
				item.parentElement.children[(className*2)-1].children[0].style.filter = ""
				item.parentElement.children[(className*2)-1].children[2].style.color = ""
				Array.from(item.parentElement.children[className*2].children).forEach(item=>{
					item.style.display = "none"
				})
			}

			else{
				item.parentElement.children[(className*2)-1].children[3].style.transform = "rotate(180deg)"
				item.parentElement.children[(className*2)-1].children[3].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[(className*2)-1].children[0].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[(className*2)-1].children[2].style.color = "#05CB95"
				item.parentElement.children[className*2].style.display = "block"
				Array.from(item.parentElement.children[className*2].children).forEach(item=>{
					item.style.display = "block"
				})
			}
			
		}
			
	}

	else if(test == true){
		var className = item.className
		className = className[(className.length-1)]
		
		if(item.parentElement.className == "menu__requests"){
			
			if(item.className == "menu__items menu__items-2"){
			}

			else if(item.className == "menu__items menu__items-1"){
				if(item.parentElement.children[className*2].children[0].style.display == "block"){
					item.parentElement.children[className].children[0].style.filter = ""
					item.parentElement.children[className].children[3].style.filter = ""
					item.parentElement.children[className].children[3].style.transform = ""
					item.parentElement.children[className].children[2].style.color = ""
					Array.from(item.parentElement.children[className*2].children).forEach(item=>{
						item.style.display = "none"
					})
				}

				else{
					Array.from(item.parentElement.children[className*2].children).forEach(item=>{
						item.style.display = "block"
					})
					item.parentElement.children[className].children[0].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
					item.parentElement.children[className].children[3].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
					item.parentElement.children[className].children[3].style.transform = "rotate(180deg)"
					item.parentElement.children[className].children[2].style.color = "#05CB95"
				}
			}

		}
		
		else if(item.parentElement.className == "menu__settings" && item.className != "menu__items menu__items-3" || (item.parentElement.className == "menu__admin" && item.className == "menu__items menu__items-4")){                      
		}

		else if(item.parentElement.className == "menu__settings" && item.className == "menu__items menu__items-3"){
			console.log(item.parentElement.children[Number(className)+1])
			if(item.parentElement.children[Number(className)+1].style.display == "block"){
				item.parentElement.children[Number(className)+1].style.display = "none"
				item.parentElement.children[className].children[3].style.transform = ""
				item.parentElement.children[className].children[3].style.filter = ""
				item.parentElement.children[className].children[0].style.filter = ""
				item.parentElement.children[className].children[2].style.color = ""
				Array.from(item.parentElement.children[Number(className)+1].children).forEach(item=>{
					item.style.display = "none"
				})
			}

			else{
				item.parentElement.children[className].children[3].style.transform = "rotate(180deg)"
				item.parentElement.children[className].children[3].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[className].children[0].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[className].children[2].style.color = "#05CB95"
				item.parentElement.children[Number(className)+1].style.display = "block"
				Array.from(item.parentElement.children[Number(className)+1].children).forEach(item=>{
					item.style.display = "block"
				})
			}

		}

		else{
			if(item.parentElement.children[className*2].style.display == "block"){
				item.parentElement.children[className*2].style.display = "none"
				item.parentElement.children[(className*2)-1].children[3].style.transform = ""
				item.parentElement.children[(className*2)-1].children[3].style.filter = ""
				item.parentElement.children[(className*2)-1].children[0].style.filter = ""
				item.parentElement.children[(className*2)-1].children[2].style.color = ""
				Array.from(item.parentElement.children[className*2].children).forEach(item=>{
					item.style.display = "none"
				})
			}

			else{
				item.parentElement.children[(className*2)-1].children[3].style.transform = "rotate(180deg)"
				item.parentElement.children[(className*2)-1].children[3].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[className*2].style.display = "block"
				item.parentElement.children[(className*2)-1].children[0].style.filter = "invert(49%) sepia(81%) saturate(2084%) hue-rotate(129deg) brightness(106%) contrast(96%)"
				item.parentElement.children[(className*2)-1].children[2].style.color = "#05CB95"
				item.parentElement.children[className*2].style.display = "block"
				Array.from(item.parentElement.children[className*2].children).forEach(item=>{
					item.style.display = "block"
					
				})
			}
			
		}
	}

	
}

function changeMenu(){
	if(menu[0].style.display == "block"){
		anima(0, 1, 0)
		menu[0].style.display = "none"
		menushort[0].style.display = "flex"
		mask[0].style.visibility = "hidden"
		
	}

	else{
		anima(0, 1, 0)
		menu[0].style.display = "block"
		menushort[0].style.display = "none"
		mask[0].style.visibility = "visible"
		container[0].style.position = "fixed"
		container[0].style.marginLeft = "72px"
		mask[0].addEventListener('click', ()=>{
			anima(1,0,0)
			menu[0].style.display = "none"
			mask[0].style.visibility = "hidden"
			container[0].style.position = ""
			menushort[0].style.display = "flex"
			container[0].style.marginLeft = ""
		})
	}
}
