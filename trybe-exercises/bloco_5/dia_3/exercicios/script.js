function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// let ingredientItems = document.createElement('ul');
// let divRightUl = document.createElement("ul");
// divRight.appendChild(divRightUl);
// divRightUl.className = "ingredients-list";
// let ulItems = [
//   "Um",
//   "Dois",
//   "Três",
//   "Quatro",
//   "Cinco",
//   "Seis",
//   "Sete",
//   "Oito",
//   "Nove",
//   "Dez",
// ];

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

let ulDays = document.getElementById("days");

for (let i = 0; i < dezDaysList.length; i += 1) {
  if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
    let liDay = dezDaysList[i];
    let ulListDay = document.createElement("li");
    ulListDay.innerText = liDay;
    ulListDay.classList = "day holiday";
    ulDays.appendChild(ulListDay);

  } else if(dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25){
    let liDay = dezDaysList[i];
    let ulListDay = document.createElement("li");
    ulListDay.innerText = liDay;
    ulListDay.classList = "day friday";
    ulDays.appendChild(ulListDay);

  } else {
    let liDay = dezDaysList[i];
    let ulListDay = document.createElement("li");
    ulListDay.innerText = liDay;
    ulListDay.className = "day";
    ulDays.appendChild(ulListDay);
  }
}

// function criaBotaoFeriado {
  let botaoContainer = document.querySelector('.buttons-container')
  let botao = document.createElement('button');
  botao.innerHTML = 'Feriados'
  botao.className = 'btn-holiday'
  botaoContainer.appendChild(botao)
//}
// function criaBotaoSexta {
  let sexta = 'Sexta-feira'
  let criaBotao = document.createElement('button');
  criaBotao.innerHTML = 'Sexta-feira'
  criaBotao.setAttribute('id','btn-friday')
  botaoContainer.appendChild(criaBotao)

  
//}


// let ulDays = document.querySelector("#days"); //Seleciona o ID #days

// let ulDaysListItems = document.createElement("li"); //Cria um elemento Li

// ulDays.appendChild(ulDaysListItems); // ID #days recebe variável ulDaysListItems que cria um LI dentro da UL

// for (let i = 2; i < dezDaysList.length; i += 1) {
//   let day = dezDaysList[i];
//   let  =

//   ulDaysListItems.innerText = day;

//   ulDaysListItems.className = "day";

//   divRightUlList.appendChild(ulDaysListItems);
// }

//   <div class="week-days-container">
//   <ul class="week-days">
//   </ul>
//   </div>

// let h1 = document.createElement("h1");
//     document.body.appendChild(h1);
//     h1.innerText = "Exercício 5.2 - Javascript DOM como filho da tag body";

//     //2
//     let div = document.createElement("div");
//     document.body.appendChild(div).className = "main-content";

//     //3
//     let divCenter = document.createElement("div");
//     div.appendChild(divCenter).className = "center-content";

//     //4
//     let h1DivCenter = document.createElement("h1");
//     divCenter.appendChild(h1DivCenter).innerText =
//       "Este é o H1 filho da divCenter";

//     //5
//     let divLeft = document.createElement("div");
//     div.appendChild(divLeft).className = "left-content";

//     //6
//     let divRight = document.createElement("div");
//     div.appendChild(divRight).className = "right-content";

//     //7
//     let imgLeft = document.createElement("img");
//     divLeft.appendChild(imgLeft).className = "small-image";
//     imgLeft.src = "https://picsum.photos/200";

//     //8
//     // let ingredientItems = document.createElement('ul');
//     let divRightUl = document.createElement("ul");
//     divRight.appendChild(divRightUl);
//     divRightUl.className = "ingredients-list";
//     let divRightUlItems = [
//       "Um",
//       "Dois",
//       "Três",
//       "Quatro",
//       "Cinco",
//       "Seis",
//       "Sete",
//       "Oito",
//       "Nove",
//       "Dez",
//     ];
//     let divRightUlList = document.querySelector(".ingredients-list");
//     for (let i = 0; i < divRightUlItems.length; i += 1) {
//       let numero = divRightUlItems[i];
//       let divRightUlListItem = document.createElement("li");
//       divRightUlListItem.innerText = numero;
//       divRightUlListItem.className = "ingredients-list-item";
//       divRightUlList.appendChild(divRightUlListItem);
//     }

//     //9
//     let h3_1 = document.createElement("h3");
//     let h3_2 = document.createElement("h3");
//     let h3_3 = document.createElement("h3");
//     div.appendChild(h3_1);
//     div.appendChild(h3_2);
//     div.appendChild(h3_3);
