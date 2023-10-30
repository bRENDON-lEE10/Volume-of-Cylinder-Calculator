// Volume of a Cylinder

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let r = +document.getElementById("r-in").value;
  let h = +document.getElementById("h-in").value;

  // Process
  let volume = Math.PI * r ** 2 * h;
  console.log(Math.PI * r ** 2 * h);

  let Surface = 2 * Math.PI * r * h + 2 * Math.PI * r * r;
  console.log(2 * Math.PI * r * h + 2 * Math.PI * r * r);

  // Output
  document.getElementById("output1").innerHTML = volume;
  document.getElementById("output2").innerHTML = Surface;
}
