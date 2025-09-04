// ---------------- FORM VALIDATION ----------------
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Message validation
  const message = document.getElementById("message").value.trim();
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required";
    valid = false;
  } else {
    document.getElementById("messageError").innerText = "";
  }

  // Success
  if (valid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  }
});

// ---------------- TO-DO LIST ----------------
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  // Allow multiple tasks separated by commas
  const tasks = taskText.split(",");

  tasks.forEach(task => {
    let cleanTask = task.trim();
    if (cleanTask !== "") {
      const li = document.createElement("li");

      li.innerHTML = `
        <span>${cleanTask}</span>
        <div>
          <button onclick="markDone(this)">✔</button>
          <button onclick="removeTask(this)">✖</button>
        </div>
      `;

      document.getElementById("taskList").appendChild(li);
    }
  });

  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.parentElement.remove();
}

function markDone(button) {
  button.parentElement.parentElement.style.textDecoration = "line-through";
  button.parentElement.parentElement.style.color = "gray";
}
