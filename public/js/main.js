const renderHomePage = async (event) => {
  event.preventDefault();
  const response = await fetch("/", {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/postpage");
  } else {
    alert("failed");
  }
};

const renderPostCreatePage = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/posts/create", {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/createpost");
  } else {
    alert("Failed");
  }
};

//Event listeners for navBar icons: Home & CreatePost

document.getElementById("homeBtn").addEventListener("click", renderHomePage);

document
  .getElementById("createPostBtn")
  .addEventListener("click", renderPostCreatePage);
