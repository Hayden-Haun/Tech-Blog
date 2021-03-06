//FUNCTION TO FETCH /api/posts/:post_id
const renderCommentsPage = async (event) => {
  event.preventDefault();

  // alert(`this is working!!! ${event.target.id}`);

  const response = await fetch(`/api/posts/${event.target.id}`, {
    method: "GET",
  });

  if (response.ok) {
    console.log("response ok ");
    document.location.replace(`/api/posts/${event.target.id}`);
  } else {
    alert("Failed to load comments");
  }

  // //pull new post data from input fields
  // const post_id = document.querySelector("#post_title_input").value.trim();

  // if (post_id) {
  //   const response = await fetch("api/posts/new", {
  //     method: "POST",
  //     body: JSON.stringify({ post_title, post_author, post_text }),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.ok) {
  //     //   alert("reponse ok ");
  //     document.location.replace("/");
  //   } else {
  //     alert("failed");
  //   }
  // }
};

//EVENT LISTENER FOR BUTTONS

const buttons = document.querySelectorAll(".viewCommentsButton");

buttons.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", renderCommentsPage);
});

// document
//   .querySelector(".viewCommentsButton")
//   .addEventListener("click", renderCommentsPage, false);
