// Mock server function (provided)
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Success");
      }
    }, 300);
  });
}

// Main application code
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".like-glyph");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      if (heart.classList.contains("activated-heart")) {
        // Unlike if already liked
        heart.classList.remove("activated-heart");
        heart.textContent = "♡";
      } else {
        // Attempt to like
        mimicServerCall()
          .then(() => {
            heart.classList.add("activated-heart");
            heart.textContent = "♥";
          })
          .catch(error => {
            modalMessage.textContent = error;
            modal.classList.remove("hidden");
            setTimeout(() => {
              modal.classList.add("hidden");
            }, 3000);
          });
      }
    });
  });
});