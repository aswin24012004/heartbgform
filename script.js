const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(()  => {
    spanEl.remove();
  }, 3000);
});
// ----------------------------------------------------------------------------------
//               form


function add() {
        var name = document.getElementById("nameInput").value;
        var age = document.getElementById("ageInput").value;
        var gen = document.querySelector('input[name="Gender"]:checked').value;
        var course = document.getElementById("courseInput").value;
        var email = document.getElementById("emailInput").value;

        let table = document.getElementById("gh");
        let newRow = table.insertRow(table.rows.length);

        newRow.insertCell(0).textContent = name;
        newRow.insertCell(1).textContent = age;
        newRow.insertCell(2).textContent = gen;
        newRow.insertCell(3).textContent = course;
        newRow.insertCell(4).textContent = email;
        
        clearInputs();
    }

    function clearInputs() {
        document.getElementById("nameInput").value = "";
        document.getElementById("ageInput").value = "";
        document.getElementById("male").checked = false;
        document.getElementById("female").checked = false;
        document.getElementById("courseInput").value = "";
        document.getElementById("emailInput").value = "";
    }