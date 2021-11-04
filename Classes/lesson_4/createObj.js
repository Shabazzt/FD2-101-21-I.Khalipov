const container = document.getElementById("container");
let item = "";

for (let i = 0; i < dateArr.length; i++) {
    item += `<div class="item">
    <p>"userId": ${dateArr[i].userId}</p>
    <p>"id":${dateArr[i].id}</p>
    <p>"title":${dateArr[i].title}</p>
    <p>"completed":${dateArr[i].completed}</p>
    <input class="deleteBtn" type="button" value="Delete">
    </div>`
}
container.innerHTML = item;
let deleteBtns = container.getElementsByClassName('deleteBtn');
console.log("asda", deleteBtns);
for (let i = 0; i < deleteBtns.length; i++) {
    let deleteBtn = deleteBtns[i];
    console.log("sada", deleteBtn);
    deleteBtn.addEventListener('click', () => {
        console.log("click");
    })
}