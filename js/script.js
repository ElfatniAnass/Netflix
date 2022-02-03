var collapsbtn = document.getElementsByClassName("collaps-btn");
var i;

for (i = 0; i < collapsbtn.length; i++) {
    collapsbtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}