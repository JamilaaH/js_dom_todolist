
import {champ, btnAdd, mesTaches, clearAll, finish, aFaire, tout} from "./variable.js"
let body = document.body
console.log(body);
// event pour rajouter une tache
btnAdd.addEventListener('click', ()=>{
    let barreTache = document.createElement('div')
    barreTache.style = "margin : 4px 0 ;border-radius : 5px"
    let tache = document.createElement('span')
    tache.innerText = champ.value;
    tache.setAttribute('class', 'ml-2')
    mesTaches.appendChild(barreTache)
    let input = document.createElement('input')
    input.style.height = "40px"
    input.style.width = "150px"
    input.style.display ="none"
    input.style.marginLeft ="30px"
    // btn valide
    let btnValide = document.createElement('button')
    btnValide.setAttribute('class', "bouton btn btn-primary ")

    let iconeValide = document.createElement('i')
    iconeValide.setAttribute('class', "fas fa-check-circle")
    btnValide.append(iconeValide)   


    // btn modif
    let btnModif = document.createElement('button')
    btnModif.setAttribute('class', " bouton btn btn-success ")

    let iconeModif = document.createElement('i')
    iconeModif.setAttribute('class', "fas fa-save")
    btnModif.append(iconeModif)




    // btn supp
    let btnSupp = document.createElement('button')
    btnSupp.setAttribute('class', "bouton btn btn-danger ")

    let iconeSupp = document.createElement('i')
    iconeSupp.setAttribute('class', "fas fa-trash-alt")
    btnSupp.append(iconeSupp)

    // btn save apres modif
    let btnSave = document.createElement('button')
    btnSave.setAttribute('class', " d-none save btn btn-success ")

    let iconeSave = document.createElement('i')
    iconeSave.setAttribute('class', "fas fa-save")
    btnSave.append(iconeSave)



    barreTache.append(tache,input,btnValide,btnModif,btnSupp, btnSave)

    // effacer champ apres le add
    champ.value = ""



    // event bouton valide 
    btnValide.addEventListener('click', () =>  {
        barreTache.classList.toggle('bg-primary')
        barreTache.classList.toggle('done')
    })

    //event bouton modif
    btnModif.addEventListener('click', ()=> {
        btnSupp.setAttribute("class", "d-none")
        btnValide.setAttribute("class",  "d-none")
        btnModif.setAttribute("class", "  d-none ml-auto mr-5 ")
        btnSave.setAttribute("class", "btn btn-success d-block ml-auto")
        tache.innerText = input.innerText
        tache.style.display = "none"
        input.style.display = "block"
    })


    // enregistrer après modif
    btnSave.addEventListener('click', ()=> {
        btnSupp.setAttribute('class', "bouton btn btn-danger d-block")
        btnValide.setAttribute('class', "bouton btn btn-primary d-block")
        btnModif.setAttribute('class', "bouton btn btn-success d-block")
        btnSave.setAttribute("class", "d-none")
        tache.innerText = input.value
        input.style.display = "none"
        tache.style.display = "block"        
    })












})






// effacer toutes les taches

clearAll.addEventListener('click', () => {
    // let allTask = mesTaches.querySelectorAll('div')
    // mesTaches.style = "display:none"

})

