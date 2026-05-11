var list_items = [['Maison', 23999.99],['Manoir',2350000],['Cabane',0],['Appartement Marseille',199.99],
['Maison Calais',10],['Hotel de la plage',20]];

var locations = document.getElementsByClassName("location");

let inputElt = document.getElementById("search-offer");
inputElt.addEventListener("keyup", () => {
    let location
    for (let i = 0; i < locations.length;i++) {
        location = locations[i]
        if (location.children[1].children[0].innerHTML.includes(inputElt.value)) location.style.display = 'block';
        else location.style.display = 'none'
    }
})

let line = document.getElementsByClassName("line")[0];
let products = document.getElementsByClassName("locations")[0];
let i = 0
let j = 0
for (const item of list_items) {
    if (i == 4) { // Pour ne pas dépasser 4 items par ligne
        j += 1;
        p = document.createElement("div");
        p.classList.add("line");
        products.appendChild(p);
        line = document.getElementsByClassName("line")[j];
        i = 0;
    }
    let div1 = document.createElement('div');
    div1.classList.add("location");
    let div_img = document.createElement('div');
    div_img.classList.add("Image");
    line.appendChild(div1);
    div1.appendChild(div_img);
    div2 = document.createElement('div');
    div2.classList.add("info");
    div1.appendChild(div2);   
    para = document.createElement('p');
    para.classList.add("name");
    para.innerText = item[0];
    div2.appendChild(para);
    para = document.createElement('p');
    para.classList.add("price");
    para.innerText = item[1] + '€';
    div2.appendChild(para);

    detail = document.createElement('div');
    detail.classList.add("detail");
    //ajouter l'adresse tout ça dans 
    div2.appendChild(para);

    i += 1;
    }



function showDetail(){
    console.log("click");
}

for (i = 0; i < locations.length; i++) {
    locations[i].addEventListener('click', showDetail, false);
}