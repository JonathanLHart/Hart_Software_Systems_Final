const page = document.querySelector(".page");
const isHomePage = document.querySelector("#visitor-list");

if (page && !isHomePage) {
  const homeLink = document.createElement("a");
  homeLink.href = new URL("../index.html", document.currentScript.src);
  homeLink.textContent = "Back to Home";
  homeLink.classList.add("home-link");
  page.append(homeLink);
}

const visitorForm = document.querySelector("form");
const addVisitorButton = document.querySelector("#add-visitor");
const visitorList = document.querySelector("#visitor-list");

function addVisitor(event) {
  event.preventDefault();

  if (!visitorForm.checkValidity()) {
    visitorForm.reportValidity();
    return;
  }

  const name = document.querySelector("#visitor-name").value.trim();
  const email = document.querySelector("#visitor-email").value.trim();

  const listItem = document.createElement("li");
  listItem.textContent = `${name} — ${email}`;
  visitorList.append(listItem);

  visitorForm.reset();
}

if (visitorForm && addVisitorButton && visitorList) {
  addVisitorButton.addEventListener("click", addVisitor);
}