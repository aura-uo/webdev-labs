var header_count = 2;
var content_count = 1;

const makeBigger = () => {
   var content = document.querySelector("p");
   var header = document.querySelector("h1");
   console.log(header.style.fontSize)
   header_count += 0.5;
   header.style.fontSize = `${header_count}em`;
 
   content_count += 0.5;
   content.style.fontSize = `${content_count}em`;
};

const makeSmaller = () => {
   var content = document.querySelector("p");
   var header = document.querySelector("h1");
   console.log(header.style.fontSize)
   
   header_count -= 0.5;
   header.style.fontSize = `${header_count}em`;
   
   content_count -= 0.5;
   content.style.fontSize = `${content_count}em`;
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
