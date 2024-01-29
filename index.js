import { data } from "./data.js";
let but1 = document.getElementById("but1");
but1.onclick = function(){
   location.href = "index.html";
}
let but2 = document.getElementById("but2");
but2.onclick = function(){
   location.href = "break.html";
}
let but3 = document.getElementById("but3");
but3.onclick = function(){
   location.href = "lunch.html";
}
let but4 = document.getElementById("but4")
but4.onclick = function(){
   location.href = "shakes.html";
}

for(let val of data){
   apply(val)
}
function apply(val){
   let id= val.type;
   let div = document.createElement("div");
   div.classList.add("cart")
   div.id = id;
   document.body.appendChild(div);
   div.addEventListener("click",function(e){
      localStorage.setItem("value",JSON.stringify(val));
      location.href = "item.html";
   })
   
   let img = document.createElement("img");
   img.src=  val.img ;
   console.log(img);
   img.classList.add("image");
   div.appendChild(img);

   let div2 = document.createElement("div");
   div2.classList.add("col");
   div.appendChild(div2);

   let div1 = document.createElement("div");
   div1.classList.add("align");
   div2.appendChild(div1);

   let h1 = document.createElement("h2");
   h1.innerHTML=val.name;
   div1.appendChild(h1);

   let h2 = document.createElement("h2");
   h2.innerHTML=val.price;
   h2.style.color="orange";
   div1.appendChild(h2);


   let p = document.createElement("p");
   p.innerHTML = val.desc;
   div2.appendChild(p);

   localStorage.setItem("store",JSON.stringify(data))
}

