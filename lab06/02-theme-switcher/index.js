const setDefault = () => {
   document.body.className = "";
};

const setDesert = () => {
   document.body.className = "desert";
};

const setOcean = () => {
   document.body.className = "ocean";
};

const setHighContrast = () => {
   document.body.className = "high-contrast";
};


document.querySelector("#default").addEventListener('click', setDefault);
document.querySelector("#desert").addEventListener('click', setDesert);
document.querySelector("#ocean").addEventListener('click', setOcean);
document.querySelector("#high-contrast").addEventListener('click', setHighContrast);