const visitorForm = document.querySelector("form");
const addVisitorButton = document.querySelector("#add-visitor");
const visitorList = document.querySelector("#visitor-list");

function addVisitor(event) {
  event.preventDefault();

  if (!visitorForm.checkValidity()) {
    visitorForm.reportValidity();
    return;
  }

  const nameInput = document.querySelector("#visitor-name");
  const emailInput = document.querySelector("#visitor-email");
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    nameInput.setCustomValidity(name ? "" : "Please enter your name.");
    emailInput.setCustomValidity(email ? "" : "Please enter your email address.");
    visitorForm.reportValidity();
    return;
  }

  nameInput.setCustomValidity("");
  emailInput.setCustomValidity("");
  const listItem = document.createElement("li");
  listItem.textContent = `${name} — ${email}`;
  visitorList.append(listItem);

  visitorForm.reset();
}

if (visitorForm && addVisitorButton && visitorList) {
  visitorForm.addEventListener("submit", addVisitor);
  visitorForm.addEventListener("input", (event) => {
    event.target.setCustomValidity("");
  });
  addVisitorButton.addEventListener("click", addVisitor);
}