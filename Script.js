
const popup = document.getElementById("joinPopup");
const form = document.getElementById("joinForm");
const photoInput = document.getElementById("visitorPhoto");
const preview = document.getElementById("photoPreview");
const status = document.getElementById("joinStatus");

document.getElementById("joinBtn").addEventListener("click", openPopup);
document.getElementById("joinBtnBottom").addEventListener("click", openPopup);

document.getElementById("closeJoin").addEventListener("click", () => {
  popup.classList.remove("show");
});

function openPopup() {
  popup.classList.add("show");
  status.textContent = "";
}

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.classList.remove("show");
  }
});

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];

  if (!file) {
    preview.style.display = "none";
    return;
  }

  if (!file.type.startsWith("image/")) {
    photoInput.value = "";
    preview.style.display = "none";
    status.textContent = "Please choose an image file.";
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    photoInput.value = "";
    preview.style.display = "none";
    status.textContent = "Please choose a photo smaller than 5 MB.";
    return;
  }

  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
  status.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  status.textContent =
    "Your form is filled in! Online sharing is not connected yet, so nothing has been uploaded.";
});
