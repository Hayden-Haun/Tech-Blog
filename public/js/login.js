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

const renderCreateAccount = async (event) => {
  // event.preventDefault();
  alert("WORKING!!!");
  console.log("WORKING!!!!!!!!");

  const response = await fetch("/create", {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/create");
  } else {
    alert("Failed");
  }
};

document.querySelector(".inputBtn").addEventListener("click", loginFormHandler);

document
  .getElementById("createBtn")
  .addEventListener("click", renderCreateAccount);

document.querySelector(".loginNav").addEventListener("click", loginFormHandler);
