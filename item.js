let value1 = JSON.parse(localStorage.getItem("value"));
console.log(value1);
let but1 = document.getElementById("but1");
but1.onclick = function(){
   location.href = "index.html";
}

function adding (value1){
    let div = document.createElement("div");
    div.classList.add("container")
    document.body.appendChild(div);

    let img = document.createElement("img");
    img.classList.add("image1");
    img.src = value1.img;
    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.classList.add("col");
    div2.style.fontSize = "30px";
    div2.style.color = "grey"
    div.appendChild(div2);

   let div1 = document.createElement("div");
   div1.classList.add("align1");
   div2.appendChild(div1);

   let h1 = document.createElement("h2");
   h1.innerHTML=value1.name;
   h1.style.fontSize = "50px";
   div1.appendChild(h1)

   let h2 = document.createElement("h2");
   h2.innerHTML= value1.price;
   h2.style.fontSize = "50px";
   h2.style.color="orange";
   div1.appendChild(h2);


   let p = document.createElement("p");
   p.innerHTML = value1.desc;
   div2.appendChild(p);
}
adding(value1);