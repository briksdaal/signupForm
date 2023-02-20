form = document.querySelector("form");
pwd = document.querySelector("#pwd");
pwdconf = document.querySelector("#pwdconf");
pwdError = document.querySelector(".pwd-error")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`pwd: "${pwd.value}"`);
    console.log(`pwdconf: "${pwdconf.value}"`);
    if (pwd.value !== pwdconf.value) {
        e.preventDefault();
        pwdError.textContent = `* Passwords do not match`;
        pwd.classList.add("invalid");
        pwdconf.classList.add("invalid");
    } else {
        pwdError.textContent = ``;
        pwd.classList.remove("invalid");
        pwdconf.classList.remove("invalid");
    }
});