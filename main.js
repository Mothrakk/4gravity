let checkbox = document.createElement("input");
checkbox.type = "checkbox";

let label = document.createElement("label");
label.appendChild(checkbox);
label.appendChild(document.createTextNode("Stick to bottom"));

let grandparent = document.getElementsByClassName("navLinks navLinksBot desktop")[0];
let parent = grandparent.getElementsByTagName("label")[0];

grandparent.insertBefore(label, parent);
grandparent.insertBefore(document.createTextNode("]"), parent);
grandparent.insertBefore(document.createTextNode("["), parent);

setInterval(function() {
    if (checkbox.checked) {
        window.scrollTo(0, document.body.scrollHeight);
    }
}, 200);

console.log("4gravity ready");
