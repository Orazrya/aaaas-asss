// create
let body = document.body;
let main = document.createElement("main");
// btn var
let addBtn = document.getElementById("btn");
// inputs varibles
let inputName = document.getElementById("nameInput");
let inputLast = document.getElementById("lastInput");
let inputCountry = document.getElementById("countryInput");
let inputScore = document.getElementById("scoreInput");

addBtn.addEventListener("click", function () {
  let firstLine = document.createElement("div");
  let playerName = document.createElement("h4");
  let countryName = document.createElement("h4");
  let score = document.createElement(`h4`);
  let removeBtn = document.createElement("button");
  let plusFiveBtn = document.createElement("button");
  let minusFiveBtn = document.createElement("button");
  // injection
  body.append(main);
  main.append(firstLine);
  firstLine.append(playerName);
  firstLine.append(countryName);
  firstLine.append(score);
  firstLine.append(removeBtn);
  firstLine.append(plusFiveBtn);
  firstLine.append(minusFiveBtn);
  removeBtn.addEventListener(`click`, function () {
    firstLine.remove();
  });

  //   style
  playerName.innerText = `${inputName.value} ${inputLast.value}`;
  countryName.innerText = inputCountry.value;
  score.innerText = inputScore.value;
  firstLine.style.cssText =
    "margin-top:20px;1px solid black;display:flex;justify-content:space-evenly;align-items:center;background:#e5c9c5;width:800px;margin-left:auto;margin-right:auto;";
  removeBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  removeBtn.style.cssText = `border:none;border-radius: 100%;width:40px;height:40px;cursor: pointer;`;
  plusFiveBtn.innerHTML = `<p>+5</p>`;
  plusFiveBtn.style.cssText = `border:none;border-radius: 100%;width:40px;height:40px;cursor: pointer;`;
  minusFiveBtn.innerHTML = `<p>-5</p>`;
  minusFiveBtn.style.cssText = `border:none;border-radius: 100%;width:40px;height:40px;cursor: pointer;`;
});
