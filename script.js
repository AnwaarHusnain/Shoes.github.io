const radui_btn_1 = document.querySelector("#radui-btn-1");
const radui_btn_2 = document.querySelector("#radui-btn-2");
const part_2 = document.querySelector(".part-2 img");
const part_1 = document.querySelector(".part-1 h1");


radui_btn_1.addEventListener("click", () => {
  part_2.src = "./Images/pngegg.png";
  part_1.innerHTML= 'Make Running The New Walking'
});

radui_btn_2.addEventListener("click", () => {
    part_1.innerHTML= 'Sneakers Basketball Shoe Sportswaer'
    part_2.src = "./Images/pngegg (1).png";
});
