
import {champ, btnAdd, mesTaches, clearAll, finish, aFaire, tout} from "./variable.js"

// event pour rajouter une tache
btnAdd.addEventListener('click', ()=>{
    console.log(mesTaches);
    let barreTache = document.createElement('div')
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
})