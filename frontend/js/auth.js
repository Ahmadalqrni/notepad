const usernameinput = document.getElementById("username");
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const loginbtn = document.getElementById("loginbtn");
const switchbtn = document.getElementById("switchbtn");

let isSignupmod = false;

function switchmode() {
  if (isSignupmod) {
    usernameinput.style.display = "block";
    loginbtn.textContent = "Signup";
    switchbtn.textContent = "Already have account";
  } else {
    usernameinput.style.display = "none";
    loginbtn.textContent = "Login";
    switchbtn.textContent = "Create new account";
  }
}

switchbtn.addEventListener("click", () => {
  isSignupmod = !isSignupmod;
  switchmode();
});

switchmode();
