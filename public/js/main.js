
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




    barreTache.append(tache,input,btnValide,btnModif,btnSupp)

    // effacer champ apres le add
    champ.value = ""



    // event bouton valide 
    btnValide.addEventListener('click', () =>  {
        barreTache.classList.toggle('bg-primary')
        barreTache.classList.toggle('done')
    })

    //event bouton modif

})



// effacé toutes les taches

clearAll.addEventListener('click', () => {
    // let allTask = mesTaches.querySelectorAll('div')
    // mesTaches.style = "display:none"

})

