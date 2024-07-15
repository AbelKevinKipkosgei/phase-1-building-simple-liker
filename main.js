// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
function emptyHeart() {
  let heartClick = document.querySelector("article footer ul li span");
  heartClick.addEventListener("click", () => {
    mimicServerCall()
      .then((message) => {
        alert("You notified the server!");
        alert(message);
        if (heartClick.textContent === EMPTY_HEART) {
          heartClick.textContent = FULL_HEART;
          heartClick.classList.add("activated-heart");
        } else {
          heartClick.textContent = EMPTY_HEART;
          heartClick.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        let modal = document.querySelector("#modal");
        let errorMessage = document.querySelector("div#modal p");
        errorMessage.textContent = error;
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
emptyHeart();
