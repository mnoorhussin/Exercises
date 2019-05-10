var button = document.getElementById("button"),
    text = document.getElementById("text");

text.style.display = 'none';

button.addEventListener("click", function(){
  if (text.style.display == 'none') {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}, false);
