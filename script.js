var input = document.getElementById("input");
var container = document.getElementById("container");
let add_btn = document.getElementById("add");

function add()
{
    if(input.value == "")
    {
        alert("Bitte Ihre Ziel schreiben!");
        return;
    }

    var liste = document.createElement("div");
    liste.classList.add("liste");

    var lisLeft = document.createElement("div");
    lisLeft.innerHTML = input.value;

    var lisRight = document.createElement("div");
    lisRight.classList.add("liste_right");

    var span = document.createElement("span");
    span.innerHTML = "Edit";
    span.onclick = function()
    {
        if(span.innerHTML =="Edit")
        {
        input.value = lisLeft.innerHTML;
        lisLeft.innerHTML = "";
        span.innerHTML = "ok";  
        add_btn.disabled = true;      
     
        }
         
    
        else if(span.innerHTML =="ok")
        {
            lisLeft.innerHTML = input.value;
            span.innerHTML = "Edit";
            input.value ="";
            add_btn.disabled = false; 
            check.disabled = true;
            kreuz.disabled = true;

        }   

    }

    var check = document.createElement("button");
    check.classList.add("check");
    check.onclick = function()
    {
        lisLeft.style.textDecoration = "line-through";
        lisLeft.style.color = "gold";
        this.innerHTML = "&#128512";
        this.style.fontSize = "28px";
        this.style.backgroundColor = "inherit";
        this.disabled = true;
        span.disabled = true;
    };
    
    var check_icon = document.createElement("i");
    check_icon.classList.add("fas", "fa-check");

    var kreuz = document.createElement("button");
    kreuz.classList.add("kreuz");
    kreuz.onclick = function()
    {
        liste.style.display = "none";
    };

    var kreuz_icon = document.createElement("i");
    kreuz_icon.classList.add("fas", "fa-times");

    liste.appendChild(lisLeft);

    liste.appendChild(lisRight);
    lisRight.appendChild(span);
    lisRight.appendChild(check);
    check.appendChild(check_icon);
    lisRight.appendChild(kreuz);
    kreuz.appendChild(kreuz_icon);

    container.appendChild(liste);

    input.value ="";
}
