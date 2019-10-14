const topHead = document.querySelector("h1").innerText;
let aside = document.querySelector("aside");
aside.appendChild(document.createElement('ul'));
let list1 = document.querySelector('ul');
list1.appendChild(document.createElement('li'))
const item1 = aside.querySelector("li");
item1.innerText = topHead;

list1.appendChild(document.createElement('ul'))
let list2 = document.querySelectorAll('ul')[1];
const sublistCount = document.querySelectorAll("h2").length

for (let i = 0; i < sublistCount; i++) {
    list2.appendChild(document.createElement('li'))
    let h2Text = document.querySelectorAll("h2")[i].innerText;
    let listItem = document.querySelectorAll("h2, li")[i + 1];
    listItem.innerText = h2Text;
}