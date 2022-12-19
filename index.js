console.log("hello world");
let loginPage = document.getElementById("loginPage");
let login = document.getElementById("login");
let closeBtn = document.getElementById("close-btn");
let emptyDiv = document.getElementById("empty");

console.log(loginPage);
console.log(login);
console.log(emptyDiv);

function showPage() {
  // loginPage.style.display = "block"
  loginPage.classList.add("show");
  emptyDiv.style.display = "block";
}
function closePage() {
  loginPage.classList.remove("show");
  emptyDiv.style.display = "none";
}

login.addEventListener("click", showPage);
closeBtn.addEventListener("click", closePage);

//   signup

let signupPage = document.getElementById("signupPage");
let signup = document.getElementById("signup");
let closeButton = document.getElementById("close-page");

console.log(signupPage);
console.log(signup);

function displayPage() {
  signupPage.classList.add("display");
  emptyDiv.style.display = "block";
}
function returnPage() {
  signupPage.classList.remove("display");
  emptyDiv.style.display = "none";
}

signup.addEventListener("click", displayPage);
closeButton.addEventListener("click", returnPage);

//   login-output

let email = document.getElementById("userEmail");
let submitBtn = document.getElementById("btnsubmit");

submitBtn.addEventListener("click", function () {
  let userEmail = email.value;

  console.log(userEmail);

  localStorage.setItem(
    "auth",
    JSON.stringify({
      email: userEmail,
    })
  );
});
function init() {
  let auth = JSON.parse(localStorage.getItem("auth"));
  console.log(JSON.parse(localStorage.getItem("auth")));
  if (auth != null) {
    email.value = auth.email;
  }
}
init();

//   signup-output

let Name = document.getElementById("fullname");
let userID = document.getElementById("ID");
let btnsubmit = document.getElementById("btn");

btnsubmit.addEventListener("click", function () {
  let fullname = Name.value;
  let ID = userID.value;

  console.log(fullname, ID);

  localStorage.setItem(
    "auth",
    JSON.stringify({
      Name: fullname,
      userID: ID,
    })
  );
});

function init() {
  let auth = JSON.parse(localStorage.getItem("auth"));
  console.log(JSON.parse(localStorage.getItem("auth")));
  if (auth != null) {
    Name.value = auth.Name;
    userID.value = auth.userID;
  }
}
init();
