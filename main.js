// Volume of a Cylinder

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let r = document.getElementById("r-in").Value;
  let h = document.getElementById("h-in").value;

  // Process
  let total = Math.PI * r ** 2 * h;
  console.log(Math.PI * r ** 2 * h);

  // Output
  document.getElementById("output").innerHTML = total;
}

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    const radius = this.radius;
    const height = this.height;
    const volume = Math.PI * radius * radius * height;
    return volume.toFixed(4);
  }
}

const cylinder = new cylinder(5, 10);
console.log(cylinder.getVolume());
