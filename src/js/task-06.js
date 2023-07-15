const form = document.getElementById("form");

form.elements.pass.addEventListener(""blur"", onBlur);

function onBlur(e) {
  const length = e.target.value.length;
  if (length >= 8 && length <= 15) {
    form.classList.add(""correct"");
    form.classList.remove(""wrong"");
  } else {
    form.classList.add(""wrong"");
    form.classList.remove(""correct"");
  }
}"