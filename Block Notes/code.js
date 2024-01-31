const notesContainer = document.querySelector(".notes-container");
const Btn = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function shownotes() {
 notesContainer.innerHTML =  localStorage.getItem("notes");
}
shownotes();
function Updatestorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
Btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    Updatestorage();
  }
  else if(e.target.tagName ==="P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt =>{
      nt.onkeyup = function(){
        Updatestorage();
      }

    })
  }
})

