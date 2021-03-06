const renderHomePage = async (event) => {
  event.preventDefault();
  const response = await fetch("/", {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("failed");
  }
};

const renderPostCreatePage = async (event) => {
  event.preventDefault();
  const response = await fetch("/createpost", {
    method: "GET",
  });

  //   console.log(response);

  if (response.ok) {
    document.location.replace("/createpost");
  } else {
    alert("Please login");
  }
};

const renderLoginPage = async (event) => {
  event.preventDefault();
  const response = await fetch("/login", {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed");
  }
};

//Event listeners for navBar icons: Home & CreatePost

document.getElementById("homeBtn").addEventListener("click", renderHomePage);

document
  .getElementById("createPostBtn")
  .addEventListener("click", renderPostCreatePage);

document.getElementById("login").addEventListener("click", renderLoginPage);
