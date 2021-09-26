const renderLogin = async (event) => {
  const response = await fetch("/login", {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed");
  }
};

const createAccountHandler = async (event) => {
  event.preventDefault();

  //pull user data from input fields
  const username = document.querySelector("#usernameInput").value.trim();
  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value.trim();

  console.log(email);
  console.log(password);

  if (username && email && password) {
    const response = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("response ok");
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};
//  --- Event Listeners ---
document.querySelector(".loginBtn").addEventListener("click", renderLogin);

document
  .querySelector(".createBtn")
  .addEventListener("click", createAccountHandler);
