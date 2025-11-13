/* gallery.js */

function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "none";
  imageDiv.innerHTML = "Hover or focus on an image below to display here.";
}

// Gán tabindex bằng JS để hỗ trợ focus bằng bàn phím (không hardcode trong HTML)
window.onload = function() {
  const previews = document.querySelectorAll(".preview");
  previews.forEach((img, index) => {
    img.setAttribute("tabindex", index + 1);
    img.addEventListener("focus", () => upDate(img));
    img.addEventListener("blur", unDo);
  });
};
