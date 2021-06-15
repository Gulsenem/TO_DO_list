var input = document.getElementById("input");
var container = document.getElementById("container");

function add()
{
    var liste = document.createElement("div");
    liste.classList.add("liste");

    var lisLeft = document.createElement("div");
    lisLeft.innerHTML = input.value;

    var lisRight = document.createElement("div");
    lisRight.classList.add("liste_right");

    var span = document.createElement("span");
    span.innerHTML = "Edit";

    var check = document.createElement("button");
    check.classList.add("check");
    check.onclick = 
    
    var check_icon = document.createElement("i");
    check_icon.classList.add("fas", "fa-check");

    var kreuz = document.createElement("button");
    kreuz.classList.add("kreuz");

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


}