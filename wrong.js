// --1--
const logoText = document.querySelector('.logo-text');
logoText.style.color = "#384241";

// --2--
const header = document.querySelector('header');
header.style.justifyContent = 'Start';

// --3--
header.style.borderBottomColor = 'lightgray';

// --4--
const recipeName = document.querySelector('#recipe-name');
recipeName.innerText = "Frozen Cheescake";

// --5--
const clockIcon = document.querySelector(".time-container").firstChild;
clockIcon.classList.add("material-icons");

// --6--
const time = document.querySelector('.time');
time.innerText = '60+ min';

// --7--
const image = document.querySelector(".image-container>img");
image.setAttribute('src', './assets/frozen-cheesecake-slice.jpg');

// --8--



const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#f9f9f9";

// --9--
const ingredientsListBottom = document.querySelector('.ingredients-list-bottom');
ingredientsListBottom.innerHTML = `
    <li>15st digistivetex </li>
            <li>Lite smör</li> `;

// --10--
const ingredientsListPaste = document.querySelector(".ingredients-list-paste");
ingredientsListPaste.children[2].innerText = "3tsk vaniljsocker";

// --11--
ingredientsListPaste.innerHTML += `<li>400g naturell philadelphiaost</li>`;


// --12--
const instructionsTitle = document.querySelector(".instructions.shadow");
instructionsTitle.style.boxShadow = 'none';

// --13--
const instructionsListItems = document.querySelectorAll(".instructions-list>li");
instructionsListItems[1].innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instructionsListItems[8].innerText = "Ställ in i frysen över natten.";
