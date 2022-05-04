var toggle = false;
const setDyslexia = () => {
  if (toggle) {
    document.body.className = "";
    toggle = false;
  }
  else {
    document.body.className = "dyslexia-mode";
    toggle = true;
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', setDyslexia);