const input = document.getElementsByClassName("input")
const pass = document.getElementsByClassName("input__password")
const btn = document.getElementsByClassName("next")
const back = document.getElementsByClassName("back")
const inputChecked = document.getElementsByClassName("input__checked")
const inputError = document.getElementsByClassName("input__error")
const body = document.getElementsByClassName("body")
const header = document.getElementsByClassName("header")
const select = document.getElementsByClassName("topnav")
const options = document.getElementsByClassName("myLinks")
const green = document.getElementsByClassName("active-select")
const categories = document.getElementsByClassName("input__categories")
const errorText = document.getElementsByClassName("error")
let step = "1"
let i = 0
let clicable = false
let visible = false
let error = false
let validateEmail = false
let validatePassword = false
let aux = []
let validateSelect = []
let first = true
let first2 = true
let isClosed = false

back[0].addEventListener("click", () => {
    if (step == "2") {
        body[0].children[2].style.display = "block"
        body[0].children[3].style.display = "none"
        header[0].children[0].innerText = "ETAPA 1 de 5"
        header[0].children[1].innerText = "Dados de acesso"
        btn[0].style.margin = ""
        back[0].style.display = ""
        btn[0].children[0].src = "assets/disquete-b.svg"
        btn[0].classList.add("btn__active")
        clicable = true
        step = "1"
    } else if (step == "3") {
        body[0].children[3].style.display = "block"
        body[0].children[4].style.display = "none"
        header[0].children[0].innerText = "ETAPA 2 de 5"
        header[0].children[1].innerText = "Sobre o negócio"
        btn[0].children[0].src = "assets/disquete-b.svg"
        btn[0].classList.add("btn__active")
        clicable = true
        step = "2"
    } else if (step == "4") {
        body[0].children[4].style.display = "block"
        body[0].children[5].style.display = "none"
        header[0].children[0].innerText = "ETAPA 3 de 5"
        header[0].children[1].innerText = "Endereço da empresa"
        btn[0].children[0].src = "assets/disquete-b.svg"
        btn[0].classList.add("btn__active")
        clicable = true
        step = "3"
    } else if (step == "5") {
        body[0].children[5].style.display = "block"
        body[0].children[6].style.display = "none"
        header[0].children[0].innerText = "ETAPA 4 de 5"
        header[0].children[1].innerText = "Sobre o responsável"
        btn[0].children[2].innerText = "Próximo"
        btn[0].children[0].style.display = "block"
        btn[0].children[1].style.display = "none"
        btn[0].classList.add("btn__active")
        clicable = true
        step = "4"
    }
})

btn[0].addEventListener("click", () => {
    if (step == "1" && clicable == true) {
        btn[0].children[0].src = "assets/disquete.svg"
        btn[0].classList.remove("btn__active")
        body[0].children[2].style.display = "none"
        body[0].children[3].style.display = "block"
        header[0].children[0].innerText = "ETAPA 2 de 5"
        header[0].children[1].innerText = "Sobre o negócio"
        back[0].style.display = "block"
        btn[0].style.margin = "0 0 0 0"
        step = "2"
        clicable = false
    } else if (step == "2" && clicable == true) {
        btn[0].children[0].src = "assets/disquete.svg"
        btn[0].classList.remove("btn__active")
        body[0].children[3].style.display = "none"
        body[0].children[4].style.display = "block"
        header[0].children[0].innerText = "ETAPA 3 de 5"
        header[0].children[1].innerText = "Endereço da empresa"
        back[0].style.display = "block"
        btn[0].style.margin = "0 0 0 0"
        step = "3"
        clicable = false
    } else if (step == "3" && clicable == true) {
        btn[0].children[0].src = "assets/disquete.svg"
        btn[0].classList.remove("btn__active")
        body[0].children[4].style.display = "none"
        body[0].children[5].style.display = "block"
        header[0].children[0].innerText = "ETAPA 4 de 5"
        header[0].children[1].innerText = "Sobre o responsável"
        back[0].style.display = "block"
        btn[0].style.margin = "0 0 0 0"
        step = "4"
        clicable = false
    } else if (step == "4" && clicable == true) {
        btn[0].children[0].style.display = "none"
        btn[0].children[1].style.display = "block"
        btn[0].classList.remove("btn__active")
        btn[0].children[3].innerText = "Contratar"
        body[0].children[5].style.display = "none"
        body[0].children[6].style.display = "block"
        header[0].children[0].innerText = "ETAPA 5 de 5"
        header[0].children[1].innerText = "Resumo da compra"
        back[0].style.display = "block"
        btn[0].style.margin = "0 0 0 0"
        step = "5"
        clicable = false
    } else if (step == "5" && clicable == true) {
        btn[0].children[0].src = "assets/disquete.svg"
        btn[0].classList.remove("btn__active")
        body[0].children[6].style.display = "none"
        body[0].children[7].style.display = "block"
        header[0].children[0].style.display = "none"
        header[0].children[1].innerText = "Sucesso!!!"
        header[0].children[1].style.textAlign = "center"
        back[0].style.display = "none"
        btn[0].style.display = "none"
        step = "5"
        clicable = false
    }

})

pass[0].addEventListener("click", () => {
    input[1].classList.add("focus")
    if (visible == false) {
        pass[0].style.background = "transparent url(assets/ver-senha.svg) no-repeat"
        input[1].type = "email"
        pass[0].style.top = "50px"
        visible = true
    } else if (visible == true) {
        pass[0].style.background = ""
        input[1].type = "password"
        pass[0].style.top = "47.78px"
        visible = false
    }
})

Array.from(input).forEach(item => {

    if (item.type == "email") {

        item.addEventListener("input", () => {
            if (item.value.search("@") == -1) {
                validateEmail = false
            } else if (item.value.search("@") != -1) {
                validateEmail = true
            }

            if (validateEmail == true && validatePassword == true && item.value != "") {
                btn[0].children[0].src = "assets/disquete-b.svg"
                btn[0].classList.add("btn__active")
                clicable = true
            } else {
                btn[0].children[0].src = "assets/disquete.svg"
                btn[0].classList.remove("btn__active")
                clicable = false
            }
        })

        item.addEventListener("focus", () => {
            item.style.border = "2px solid #05CB95"
            item.style.color = "#05CB95"
            item.style.height = "46px"
            item.style.marginBottom = ""
            item.style.backgroundColor = "#EFFBF7"
            errorText[0].style.display = ""
            inputError[0].style.display = "none"
            item.style.paddingLeft = ""
            item.style.width = ""
            if (item.value == "Verifique o e-mail digitado") {
                item.style.paddingLeft = ""
                item.style.width = ""
                item.value = ""
                item.style.backgroundColor = "#FFF6F6"
            }
            item.attributes[1].value = "ex: restjoaodebarro@gmail.com"
            if (item.value == "") {
                item.style.border = "2px solid #05CB95"
                item.style.color = "#05CB95"
                item.style.height = "46px"
                item.style.backgroundColor = "#EFFBF7"
            }

        })

        item.addEventListener("focusout", () => {

            if (item.value != "") {

                if (item.value.search("@") == -1) {
                    item.attributes[1].value = "       Verifique o e-mail digitado"
                    inputChecked[0].style.display = ""
                    item.style.border = "2px solid #EB3941"
                    item.style.height = "46px"
                    item.style.backgroundColor = "#FFF6F6"
                    inputError[0].style.display = "block"
                    validateEmail = false
                    errorText[0].style.display = "block"
                    item.style.marginBottom = "0"
                    item.style.paddingLeft = "45px"
                    item.style.width = "calc(100% - 45px)"

                    item.style.color = "#EB3941"
                } else if (item.value.search("@") != -1) {
                    item.style.color = "#05CB95"
                    item.style.border = "2px solid rgb(5, 203, 149)"
                    item.style.height = "46px"
                    item.style.backgroundColor = "#EFFBF7"
                    inputChecked[0].style.display = "block"
                    validateEmail = true
                    inputError[0].style.display = ""
                    item.style.paddingLeft = ""
                    item.style.width = ""
                }
            } else {
                item.style.height = "50px"
                item.style.color = ""
                item.style.border = ""
                inputChecked[0].style.display = ""
                inputError[0].style.display = ""
                item.style.paddingLeft = ""
                item.style.width = ""
            }

        })
    } else if (item.type == "password") {
        item.addEventListener("input", () => {
            if (item.value.length >= 6) {
                validatePassword = true
            } else if (item.value.length < 6) {
                validatePassword = false
            }

            if (validateEmail == true && validatePassword == true && item.value != "") {
                btn[0].children[0].src = "assets/disquete-b.svg"
                btn[0].classList.add("btn__active")
                clicable = true
            } else {
                btn[0].children[0].src = "assets/disquete.svg"
                btn[0].classList.remove("btn__active")
                clicable = false
            }
        })

        item.addEventListener("focus", () => {
            item.style.border = "2px solid #05CB95"
            item.style.color = "#05CB95"
            item.style.height = "46px"
            item.style.backgroundColor = "#EFFBF7"
            inputError[1].style.display = "none"
            item.style.paddingLeft = ""
            item.style.width = ""
            errorText[1].style.display = ""
            item.style.marginBottom = ""
            if (item.value == "Verifique a senha digitada") {
                item.style.border = "2px solid #EB3941"
                item.style.height = "46px"
                inputError[1].style.display = ""
                item.style.backgroundColor = "#FFF6F6"
                validatePassword = false
                error = true
                item.style.paddingLeft = "45px"
                item.style.width = "calc(100% - 45px)"
                item.style.color = "#EB3941"
            }
            if (visible == true) {
                pass[0].style.top = "50px"
            } else if (visible == false) {
                pass[0].style.top = "47.78px"
            }
            if (item.value == "") {
                item.style.border = "2px solid #05CB95"
                item.style.color = "#05CB95"
                item.style.height = "46px"
                item.style.backgroundColor = "#EFFBF7"
            }

        })

        item.addEventListener("focusout", () => {
            if (item.value != "") {
                if (item.value.length >= 6) {
                    inputError[1].style.display = ""
                    item.style.paddingLeft = ""
                    item.style.width = ""
                    item.style.color = "#05CB95"
                    item.style.backgroundColor = "#EFFBF7"
                    item.style.border = "2px solid rgb(5, 203, 149)"
                    item.style.height = "46px"
                    validatePassword = true
                    error = false
                } else if (item.value.length < 6) {
                    item.style.border = "2px solid #EB3941"
                    item.style.height = "46px"
                    inputError[1].style.display = "block"
                    item.style.backgroundColor = "#FFF6F6"
                    validatePassword = false
                    errorText[1].style.display = "block"
                    item.style.marginBottom = "3px"
                    error = true
                    item.style.paddingLeft = "45px"
                    item.style.width = "calc(100% - 45px)"
                    item.style.color = "#EB3941"
                }
            } else {
                item.style.height = "50px"
                inputError[1].style.display = ""
                item.style.color = ""
                item.style.border = ""
                pass[0].style.top = ""
                item.style.heigth = ""
            }

        })
    } else {
        item.addEventListener("input", () => {
            if (item.placeholder == "ex: 0000 0000 0000 0000") {
                item.value = mcc(item.value)
            }

            if (step == "2") {
                if (checkInputs(input, 2, 3, "normal") && isClosed == true) {
                    btn[0].children[0].src = "assets/disquete-b.svg"
                    btn[0].classList.add("btn__active")
                    clicable = true
                } else {
                    btn[0].children[0].src = "assets/disquete.svg"
                    btn[0].classList.remove("btn__active")
                    clicable = false
                }
            }

            if (step == "3") {
                if (checkInputs(input, 4, 8, "except")) {
                    btn[0].children[0].src = "assets/disquete-b.svg"
                    btn[0].classList.add("btn__active")
                    clicable = true
                } else {
                    btn[0].children[0].src = "assets/disquete.svg"
                    btn[0].classList.remove("btn__active")
                    clicable = false
                }
            }

            if (step == "4") {
                if (checkInputs(input, 9, 13, "normal")) {
                    btn[0].children[0].src = "assets/disquete-b.svg"
                    btn[0].classList.add("btn__active")
                    clicable = true
                } else {
                    btn[0].children[0].src = "assets/disquete.svg"
                    btn[0].classList.remove("btn__active")
                    clicable = false
                }
            }

            if (step == "5") {
                if (checkInputs(input, 14, 19, "normal")) {
                    btn[0].children[2].style.display = "block"
                    btn[0].children[1].style.display = "none"
                    btn[0].classList.add("btn__active")
                    clicable = true
                } else {
                    btn[0].children[2].style.display = "none"
                    btn[0].children[1].style.display = "block"
                    btn[0].classList.remove("btn__active")
                    clicable = false
                }
            }


        })

        item.addEventListener("focus", () => {
            item.style.border = "2px solid #05CB95"
            item.style.color = "#05CB95"
            item.style.height = "46px"
            item.style.backgroundColor = "#EFFBF7"
            inputError[1].style.display = "none"
            item.style.paddingLeft = ""
            item.style.width = ""
        })

        item.addEventListener("focusout", () => {
            if (step == "2" && item.placeholder == "Digite apenas números" && (item.value == "" || item.value.length != "11")) {
                item.style.border = "2px solid #EB3941"
                item.style.height = "46px"
                inputError[1].style.display = "block"
                item.style.backgroundColor = "#FFF6F6"
                validatePassword = false
                errorText[2].style.display = "block"
                item.style.marginBottom = "0"
                error = true
                item.style.color = "#EB3941"
            } else if (step == "2" && item.placeholder == "Digite apenas números" && item.value != "") {
                item.style.marginBottom = ""
                errorText[2].style.display = "none"
            } else {
                item.style.border = ""
                item.style.color = ""
                item.style.height = ""
                item.style.backgroundColor = ""
                inputError[1].style.display = ""
                item.style.paddingLeft = ""
                item.style.width = ""
            }
        })
    }
})

Array.from(options).forEach(item => {
    item.addEventListener("click", () => {
        if (step == "2") {
            item.parentElement.children[0].innerText = event.target.innerText
            if (event.target.innerText == "Restaurantes") {
                categories[0].style.display = "block"
                categories[1].style.display = "none"
                btn[0].children[0].src = "assets/disquete.svg"
                btn[0].classList.remove("btn__active")
                clicable = false
            } else if (event.target.innerText == "Mercados") {
                categories[1].style.display = "block"
                categories[0].style.display = "none"
                btn[0].children[0].src = "assets/disquete.svg"
                btn[0].classList.remove("btn__active")
                clicable = false
            } else if (event.target.innerText == "Petshops" || event.target.innerText == "Bebidas") {
                categories[0].style.display = "none"
                categories[1].style.display = "none"
                isClosed = true
                btn[0].children[0].src = "assets/disquete-b.svg"
                btn[0].classList.add("btn__active")
                clicable = true
            } else if (item.children.length == 7 || item.children.length == 15) {
                isClosed = true
                btn[0].children[0].src = "assets/disquete-b.svg"
                btn[0].classList.add("btn__active")
                clicable = true
            }
        }

        if (step == "3") {
            item.parentElement.children[0].innerText = event.target.innerText
            Array.from(cities.response.estados).forEach(state => {
                aux.push(state.nome)
            })

            if (aux.includes(item.parentElement.children[0].innerText)) {

                deleteCities()
                showCities(cities, item)
                item.parentElement.parentElement.nextElementSibling.children[1].children[0].innerText = "Selecione"
            }
        }
    })
})

Array.from(select).forEach(item => {
    item.addEventListener("click", () => {
        if (item.children[1].style.display == "none") {
            item.children[0].style.backgroundImage = "none"
            item.children[0].style.color = "#05CB95"
            item.children[0].style.backgroundColor = "#E0F2ED"
            item.children[1].style.display = "block"
            item.children[0].style.border = "2px solid #05CB95"
        } else {
            item.children[0].style.width = ""
            item.children[0].style.top = ""
            item.children[0].style.backgroundImage = ""
            item.children[0].style.color = ""
            item.children[0].style.backgroundColor = ""
            item.children[1].style.display = "none"
            item.children[0].style.border = ""
        }


    })
})

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}

var requestURL = 'script/cities.json'
var cities = new XMLHttpRequest();
cities.open('GET', requestURL);
cities.responseType = 'json';
cities.send()

function showCities(cities, item) {
    Array.from(cities.response.estados).forEach(state => {
        if (state.nome == item.parentElement.children[0].innerText) {
            for (let counter = 0; counter < state.cidades.length; counter++) {
                let option = document.createElement('a')
                option.innerText = state.cidades[counter]
                option.classList.add("select-on")
                option.classList.add("test")
                options[4].appendChild(option)
            }
        }
    })

}

function deleteCities() {
    let child = options[4].lastElementChild
    while (child) {
        options[4].removeChild(child);
        child = options[4].lastElementChild;
    }
}

function checkInputs(inputs, init, end, type) {
    let filled = true
    if (type == "normal") {
        for (let cont = init; cont <= end; cont++) {
            if (inputs[cont].value === "") {
                filled = false;
            }
        }
    }

    if (type == "except") {
        let noForce = 0
        for (let cont = init; cont <= end; cont++) {
            if (inputs[cont].value == "" && (cont != 6 && cont != 7)) {
                filled = false;
            }
        }
    }

    return filled;
}

function mcc(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d{4})(\d)/g, "$1 $2");
    v = v.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
    v = v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
    return v;
}

function mccMobile(v) {
    v = v.replace(/^(\d{4})(\d)/g, "$1 $2");
    v = v.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
    v = v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
    return v;
}