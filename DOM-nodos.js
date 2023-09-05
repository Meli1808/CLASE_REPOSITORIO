//Forma antigua de seleccionar elementos

//Forma nueva con ecmascript 6
//Seleccionar por nombre de etiqueta
//let titulo = document.querySelector("h1");
//Seleccionar por etiqueta dentro de otra 
/*
let titulo = document.querySelector("div h1");
console.log(titulo);

for (let x = 0; x < titulo.lenght; x++ ){
    titulo[x].textContent = "Hijo" + x;
    titulo[x].style.color = "green";
  
}

//Crear etiqueta
let a = document.createElement("a");
//a.textContent = "ir a youtube";
let texto = document.createTextNode("ir a youtube");
//Pasar algo dentro de la etiqueta 
a.appendChild(texto);
let body = document.querySelector("body");
a.setAttribute("href","http://youtube.com");
a.setAttribute("target","_blank");
body.appendChild(a);
let titulo2 = document.querySelector("div > h1:nth-child(2)");
//Ubicar etiqueta tomando referencia otra
titulo2.insertAdjacentElement("afterend", a)
a.remove(); */

let body = document.querySelector("h1");
//Agregar una clase a un elemento
//Titulo.classList.add("letra");
//Quitar una clase que ya tenga el elemento
//titulo.classList.remove("letra");
//Agregar o quitar una clase
//Titulo.classList.toggle("letra");
//Evalua si el elemento contiene una clase
let exitecase = titulo.classList.contains("letra");
console.log("¿El elemento tiene clase? : " + exitecase)
