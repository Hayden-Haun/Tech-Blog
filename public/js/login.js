const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

const renderCreateAccount = (event) => {
  // event.preventDefault();
  alert("WORKING!!!");
  console.log("WORKING!!!!!!!!");
};

document.querySelector(".inputBtn").addEventListener("click", loginFormHandler);

document
  .getElementById("createBtn")
  .addEventListener("click", renderCreateAccount);

document.querySelector(".loginNav").addEventListener("click", loginFormHandler);

// document
//   .querySelector(".dashboardNav")
//   .addEventListener("click", renderCreateAccount);

// document
//   .getElementById("createBtn")
//   .addEventListener("click", renderCreateAccount, false);
