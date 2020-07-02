console.log("js working");
//Get every h1 or h2 from the html file and create a list item inside of
//the aside element for every title.

let v1 = [];
v1 = document.querySelectorAll('article > section > h1, h2');

console.log(v1);
console.log(v1[0]);

let table = document.querySelector('#table-of-contents');
console.log(table);

let list = document.createElement("ol");
list.setAttribute('id', "list");
console.log(list);

v1.forEach((str) => {
    let li = document.createElement("li");
    li.innerText = str.innerText;
    list.appendChild(li);
});

// for (let i = 0; i < v1.length; i++) {
//     let li = document.createElement("li");
//     li.innerText = v1[i].innerText;
//     list.appendChild(li);
// }

table.appendChild(list);


//ANOTHER WAY OF DOING IT

let headings = [];
headings = document.querySelectorAll('article > section > h1, h2');
let aside = document.querySelector('#table-of-contents');

headings.forEach((str) => {
    //let aside = document.querySelector('#table-of-contents');
    aside.innerHTML += `<li> ${str.innerText} </li>`;

});
