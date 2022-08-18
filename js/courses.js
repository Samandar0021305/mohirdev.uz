const praktikumlar = [
"../praktikumlar/data_science-1.webp",
"../praktikumlar/full_stack_python-1.webp",
"../praktikumlar/MERN-1.webp",
"../praktikumlar/frontend-1.webp",
"../praktikumlar/java-1.webp",
"../praktikumlar/smm-1-1.webp",
"../praktikumlar/webdesign.webp",
"../praktikumlar/candpython-1.webp",
"../praktikumlar/digital_marketing-1.webp",
"../praktikumlar/go-1.webp"
]



var fragment = new DocumentFragment()
var sectionBox = document.querySelector(".section__box");
praktikumlar.forEach(Element =>{
    let divEl = document.createElement("div");
    let imgEl = document.createElement("img")
    imgEl.src = Element;
    imgEl.setAttribute("class","section__pic")
    divEl.setAttribute("class","section__picture")
    divEl.appendChild(imgEl)
    fragment.appendChild(divEl)
})
sectionBox.appendChild(fragment)


