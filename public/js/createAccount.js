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

document.querySelector(".loginBtn").addEventListener("click", renderLogin);

document.querySelector(".createBtn").addEventListener("click", create);
