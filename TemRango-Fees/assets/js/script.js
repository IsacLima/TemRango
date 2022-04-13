const itemsmenu = document.getElementsByClassName('menu__items')
const tip = document.getElementsByClassName('tooltip')
const menu_open_icon = document.getElementsByClassName('menu__header__icon')
const menu = document.getElementsByClassName('menu')
const menushort = document.getElementsByClassName('menu--short')
const mask = document.getElementsByClassName("gray-mask")
const container = document.getElementsByClassName('container')
const content = document.getElementsByClassName('content')
const menu_icon = document.getElementsByClassName('nav__icon')
const btn = document.getElementsByClassName('btn')
const back = document.getElementsByClassName('back')
const tooltip = document.getElementsByClassName('tooltip-change')
const accept = document.getElementsByClassName('accept')
const swit = document.getElementsByClassName('s')
const tipSelection = document.getElementsByClassName('tips-selection')
const save = document.getElementsByClassName('save')
const addDist = document.getElementsByClassName('add-dist')
let current = [btn[0].parentElement.classList]
let entrys = [btn[0].parentElement]
let left = content[0].getBoundingClientRect().x
let cont = 0
let active = false 


Array.from(addDist).forEach(element=>{
	element.addEventListener('click', ()=>{	
		if(event.target.parentElement.children[3].children[0].children[1].value != "" && event.target.parentElement.children[3].children[1].children[1].children[1].value != ""){
			addElement()
		}
		
	})
})

function addElement(){
	let newElement = document.createElement("div")
	newElement.appendChild(document.createElement("h2"))
	newElement.appendChild(document.createElement("h2"))
	newElement.appendChild(document.createElement("div"))
	newElement.children[2].appendChild(document.createElement("input"))
	newElement.children[2].appendChild(document.createElement("label"))
	newElement.appendChild(document.createElement("div"))
	newElement.children[3].appendChild(document.createElement("div"))
	newElement.children[3].appendChild(document.createElement("div"))
	newElement.children[3].appendChild(document.createElement("div"))
	newElement.classList = "add-item"
	newElement.children[0].classList = "add__text first"
	newElement.children[0].innerText = event.target.parentElement.children[3].children[0].children[1].value 
	newElement.children[1].classList = "add__text"
	newElement.children[1].innerText = event.target.parentElement.children[3].children[1].children[1].children[1].value
	newElement.children[2].classList = "switch__container m"
	newElement.children[2].children[0].classList = "switch switch--shadow"
	newElement.children[2].children[0].id = `switch${cont}`
	newElement.children[2].children[0].type = "checkbox"
	newElement.children[2].innerHTML = `<input id="switch${cont}" class="switch switch--shadow m" type="checkbox" /> <label class="label-switch" for="switch${cont}"></label>`
	cont = cont + 1
	console.log(newElement.children[2].children)
	newElement.children[3].classList = "circles"
	newElement.children[3].children[0].classList = "circle"
	newElement.children[3].children[1].classList = "circle"
	newElement.children[3].children[2].classList = "circle"
	const before = document.getElementsByClassName("status__title")
	tipSelection[0].children[1].insertBefore(newElement, before[1])
}

Array.from(document.getElementsByClassName("cancel")).forEach(element=>{
	element.addEventListener("click", ()=>{
		event.target.parentElement.style.display = "none"
		mask[0].style.visibility = "hidden"
		current.shift()
		current.push(entrys[0].classList)
		entrys.pop()
	})
})

Array.from(save).forEach(item =>{
	item.addEventListener("click",()=>{
		event.target.parentElement.style.display = "none"
		mask[0].style.visibility = ""
		if(active == true){
			if(document.getElementsByClassName("content__active")[0].style.display == "flex" || document.getElementsByClassName("content__active")[0].style.display == ""){
				document.getElementsByClassName("content__active")[0].style.display = "none"
				document.getElementsByClassName("content__active")[0].parentElement.children[3].innerText = "configurar"
				
			}
			else if(document.getElementsByClassName("content__active")[1].style.display == "flex" || document.getElementsByClassName("content__active")[1].style.display == ""){
				document.getElementsByClassName("content__active")[1].style.display = "none"
				document.getElementsByClassName("content__active")[1].parentElement.children[3].innerText = "configurar"
			}
			else if(document.getElementsByClassName("content__active")[2].style.display == "flex" || document.getElementsByClassName("content__active")[2].style.display == ""){
				document.getElementsByClassName("content__active")[2].style.display = "none"
				document.getElementsByClassName("content__active")[2].parentElement.children[3].innerText = "configurar"
			}
			else if(document.getElementsByClassName("content__active")[3].style.display == "flex" || document.getElementsByClassName("content__active")[3].style.display == ""){
				document.getElementsByClassName("content__active")[3].style.display = "none"
				document.getElementsByClassName("content__active")[3].parentElement.children[3].innerText = "configurar"
			}
			entrys[0].children[0].style.display = "none"
			entrys[0].children[3].innerText = "configurar"
			entrys[1].children[0].style.display = "flex"
			entrys[1].children[3].innerText = "editar"
		}
		else{
			current.shift()
			current.push(entrys[0].classList)
			entrys.pop()
		}
		
	})
})

Array.from(swit).forEach(children=>{
	children.addEventListener("click", ()=>{
		if(event.target.parentElement.children[2].style.display == "none"){
			event.target.parentElement.children[2].style.display = "block"
			event.target.parentElement.children[3].style.display = "none"
			active = false
		}
		else{
			event.target.parentElement.children[3].style.display = "block"
			event.target.parentElement.children[2].style.display = "none"
			active = true
		}
	})
})

accept[0].addEventListener("click", ()=>{
	tooltip[0].children[0].style.display = ""
	openTooltip(current[0].value)
	

})

Array.from(back).forEach(item =>{
	item.addEventListener("click", ()=>{
		current.shift()
		current.push(entrys[0].classList)
		entrys.pop()
		tooltip[0].children[0].style.display = "none"
		mask[0].style.visibility = ""
	})
})

Array.from(btn).forEach(item => {
	item.addEventListener("click", openChange)	
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
	container[0].style.width = ""
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
		container[0].style.width = "100%"
		container[0].style.left = "0"
	
		menu[0].style.zIndex = "1100"
	}
	anima(0,1,0)
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

Array.from(itemsmenu).forEach(item=>{
	item.addEventListener('click', ()=>{
		if(menushort[0].style.display == "none"){
			menuBehavior(item)
		}
	})	
})

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
		container[0].style.marginLeft = `${left}px`
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

function openChange(event){
	current.push(event.target.parentElement.classList) 
	entrys.push(event.target.parentElement)
	if(current.length == 2){
		if(current[0] != current[1]){
			tooltip[0].children[0].style.display = "block"
			mask[0].style.visibility = "visible"
			tooltip[0].children[0].children[1].innerText = `Você está usando a taxa por ${current[0]} para cobrança de sua entrega. Deseja cobrar por ${current[1]}?`
		}
		else{
			openTooltip(current[0].value)
		}
		current.shift()
		if(current[0] != current[1] && entrys.length == 3){
			entrys.shift()
		}
		
	}
}

function openTooltip(chosen){
	if(chosen == "TAXA ÚNICA"){
		active = false
		swit[0].checked = false
		swit[0].parentElement.children[2].style.display =  "block"
		swit[0].parentElement.children[3].style.display =  "none"
		tipSelection[0].children[0].style.display = "block"
		mask[0].style.visibility = "visible"
	}
	else if(chosen == "BAIRRO"){
		active = false
		swit[1].checked = false
		swit[1].parentElement.children[2].style.display =  "block"
		swit[1].parentElement.children[3].style.display =  "none"
		tipSelection[0].children[1].style.display = "block"
		mask[0].style.visibility = "visible"
	}
	else if(chosen == "KM"){
		active = false
		swit[2].checked = false
		swit[2].parentElement.children[2].style.display =  "block"
		swit[2].parentElement.children[3].style.display =  "none"
		tipSelection[0].children[2].style.display = "block"
		mask[0].style.visibility = "visible"
	}
	else{
		event.target.parentElement.style.display = ""
		mask[0].style.visibility = ""
		entrys[0].children[0].style.display = "none"
		entrys[0].children[3].innerText = "configurar"
		entrys[1].children[0].style.display = "flex"
		entrys[1].children[3].innerText = "editar"
	}
}
