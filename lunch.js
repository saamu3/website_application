let but4 = document.getElementById("but4")
but4.onclick = function(){
   location.href = "shakes.html";
}
let but2 = document.getElementById("but2");
but2.onclick = function(){
   location.href = "break.html";
}
let but1 = document.getElementById("but1");
but1.onclick = function(){
   location.href = "index.html";
}
let data1= JSON.parse(localStorage.getItem("store"));
console.log(data1);
let but3 = document.getElementById("but3");
 function listLunch(){
   console.log(data1);
   let value = data1.filter((val)=> val.id === "l1");
   
   for(let x of value){
      add(x)
   }
}
function add(value){
   let div = document.createElement("div");
   div.classList.add("cart");
   document.body.appendChild(div);

   let img = document.createElement("img");
   img.src=value.img;
   img.classList.add("image");
   div.appendChild(img);

   let div2 = document.createElement("div");
   div2.classList.add("col");
   div.appendChild(div2);

   let div1 = document.createElement("div");
   div1.classList.add("align");
   div2.appendChild(div1);

   let h1 = document.createElement("h2");
   h1.innerHTML=value.name;
   div1.appendChild(h1);

   let h2 = document.createElement("h2");
   h2.innerHTML=value.price;
   h2.style.color="orange";
   div1.appendChild(h2);


   let p = document.createElement("p");
   p.innerHTML = value.desc;
   div2.appendChild(p);

}
listLunch()