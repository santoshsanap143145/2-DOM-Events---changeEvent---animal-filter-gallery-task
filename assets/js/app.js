cl = console.log;

const options = document.getElementById("options");

const allAnimals = [...document.querySelectorAll(".all")];


onColorChange = (eve) => {
  let SelectedClassName = eve.target.value;

  cl(SelectedClassName);

  allAnimals.forEach((animal) => {
    animal.classList.add("d-none");
  });

  let selectedAnimals = [...document.querySelectorAll("." + SelectedClassName)];
  // cl(SelectedDivs);

  selectedAnimals.forEach((animal) => {
    animal.classList.remove("d-none");
  });
};

options.addEventListener("change", onColorChange);
