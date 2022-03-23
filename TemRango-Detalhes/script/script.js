var options = document.getElementsByClassName('action__option')
var select = document.getElementsByClassName('active')
var notification = document.getElementsByClassName('notifications')
var body = document.getElementsByClassName('body')
var container = document.getElementsByClassName('container')
var drawal = document.getElementsByClassName('drawal')
var drawalbox = document.getElementsByClassName('drawal-box')
var delivery = document.getElementsByClassName('drawal-box--delivery')
var payment = document.getElementsByClassName('payment-box')
var pop = false
var notes__box = document.getElementsByClassName('notes')
var pop__recuse = document.getElementsByClassName('popup-recuse')
var mask = document.getElementsByClassName('mask')
var menu_icon = document.getElementsByClassName('nav__icon')
var menu = document.getElementsByClassName('menu')
var itemsmenu = document.getElementsByClassName('menu__items')
var submenu = document.getElementsByClassName('menu__requests')
var tip = document.getElementsByClassName('tooltip')
var menushort = document.getElementsByClassName('menu--short')
var list = []
var listParents = []

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
			for(var i = 0;i<15;i++){
				list.push(itemsmenu[i+15])
				listParents.push(itemsmenu[i+15].parentElement)
			}
			if(position <= 14){
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
			list = []
			listParents = []
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

document.getElementsByClassName("menu__header__icon")[0].addEventListener('click', ()=>{
	changeMenu()
})
Array.from(itemsmenu).forEach(item=>{
	item.addEventListener('click', ()=>{
		if(menushort[0].style.display == "none"){
			menuBehavior(item)
		}
	})	
})

document.getElementsByClassName("menu__header__icon")[1].addEventListener('click', ()=>{
	var test = checkDevice()
	if(test == true){
		changeMenuMobile()
	}
	else{
		changeMenu()
	}
})

Array.from(notes__box).forEach( item =>{
	item.children[1].children[1].addEventListener('click', ()=>{
		item.children[1].style.display = "none"
		item.children[2].style.display = "flex"
	})
	item.children[2].children[1].addEventListener('click', ()=>{
		item.children[2].style.display = "none"
		item.children[1].style.display = "flex"
	})

})

menu_icon[0].addEventListener('click', ()=>{
	menu[0].style.display = "block"
	mask[0].style.visibility = "visible"
	container[0].style.position = "fixed"
	menu[0].style.zIndex = "1100"
	anima(0,1,0)
	var footer = document.getElementsByClassName('footer')
	footer[0].style.display = "none"
	mask[0].addEventListener('click', ()=>{
		anima(1,0,0)
		menu[0].style.display = "none"
		mask[0].style.visibility = "hidden"
		container[0].style.position = ""
		footer[0].style.display = "flex"
	})
})

Array.from(drawal).forEach(item =>{
	item.addEventListener('click', ()=>{
		if(drawalbox[0].style.display == "none"){
			drawalbox[0].style.display = "grid"
			delivery[0].style.display = "none"
		}

		else{
			drawalbox[0].style.display = "none"
			delivery[0].style.display = "grid"
		}
	})
})

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
		mask[0].addEventListener('click', ()=>{
			anima(1,0,0)
			menu[0].style.display = "none"
			mask[0].style.visibility = "hidden"
			container[0].style.position = ""
			menushort[0].style.display = "flex"
		})
	}
}

function changeMenuMobile(){
	if(menu[0].style.display == "block"){
		anima(0, 1, 0)
		menu[0].style.display = "none"
		mask[0].style.visibility = "hidden"
		container[0].style.position = ""
	}

	else{
		anima(0, 1, 0)
		menu[0].style.display = "block"
		mask[0].style.visibility = "visible"
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

function myFunction() {
  var x = document.getElementsByClassName("myLinks");
  if (x[0].style.display === "none") {
    x[0].style.display = "block";
	

  } else {
    x[0].style.display = "none";
		
  }
}

function recuse(){
	if(pop__recuse[0].style.display == "block"){
		pop__recuse[0].style.display = "none"
		mask[0].style.visibility = "hidden"
		body[0].style.overflow = ""
		pop__recuse[0].parentElement.style.visibility = "hidden"
	}

	else{
		pop__recuse[0].style.display = "block"
		pop__recuse[0].style.backgroundColor = "#fff"
		mask[0].style.visibility = "visible"
		body[0].style.overflow = "hidden"
		pop__recuse[0].parentElement.style.visibility = "visible"
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

function changeMode(index){
	payment[0].children[index].style.display = "none"

	if((index+1)!= 5){
		if((index+1)> 0 && (index+1)< 3){
			payment[0].children[(index+1)].style.display = "flex"
		}
		else{
			payment[0].children[(index+1)].style.display = "grid"
		}
	}

	else{
		index = 0
		if((index+1)> 0 && (index+1)< 3){
			payment[0].children[(index+1)].style.display = "flex"
		}
		else{
			payment[0].children[(index+1)].style.display = "grid"
		}

	}
	
}


function changeColor(value, text){
	select[0].style.backgroundColor = "#e0f2ed"
	select[0].style.color = "#0aa77c"
	select[0].style.backgroundImage = "none"
	if(value <= 2 && pop != true){
		notification[0].children[value].style.display = "block"
		pop = true
	}
	
	else if(value <= 2 && pop != false){
		notification[0].children[oldValue].style.display = "none"
		notification[0].children[value].style.display = "block"
	}

	if(value <= 2){
		oldValue = value
	}

	var x = document.getElementsByClassName("myLinks");
	x[0].style.display = "none"	
	select[0].innerText = x[0].children[text].innerText
}

function closed(number){
	notification[0].children[number].style.display = "none"
}

