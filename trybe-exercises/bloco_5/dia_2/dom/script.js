let ingredientItems = [
    '200g de toucinho',
    '1 concha de óleo',          
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'Cheiro verde a gosto',
    '200g de farinha de mandioca'
];

let ingredientList = document.querySelector('.ingredients-list');

for (let i = 0; i < ingredientItems.length;i+=1){
    let ingredient = ingredientItems[i];

    let ingredientListItem = document.createElement('li');

    ingredientListItem.innerText = ingredient;

    ingredientListItem.className = "ingredients-list-item"

    ingredientList.appendChild(ingredientListItem);
}




let ingredientListItems = document.querySelectorAll('.ingredients-list-item');

for(let i=0;i<ingredientListItems.length;i+=1){
    let element = ingredientListItems[i];

    if(element.innerText.includes("toucinho")){
        ingredientList.removeChild(element);
    }
}