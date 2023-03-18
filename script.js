let btn = document.querySelector('#addBtn')
let input = document.querySelector('#taskInput')

btn.addEventListener('click', function () {
    let li = document.createElement("li");
    li.className = "item";
    li.textContent = input.value;
    list.append('li');



    let div = document.createElement("div");
    div.className = 'item__btns'
    li.append(div)

    let i = document.createElement;
    i.className = "fa-regular fa-pen-to-square"
    div.append("i")
    i.className = "fa-regular fa-rectangle-xmark";
    div.append("i")
})


