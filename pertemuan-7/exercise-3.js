let mahasiswa = {
  firstName: "Jonathan",
  weight: 71,
  height: 167,
  calculateBMI: function () {
    calculate = this.weight / (this.height / 100) ** 2;
    console.log(calculate);
    if (calculate < 16) {
      console.log("Severely Underweight");
    } else if (calculate > 16 && calculate <= 18.4) {
      console.log("Underweight");
    } else if (calculate > 18.4 && calculate <= 24.9) {
      console.log("Normal");
    } else if (calculate > 24.9 && calculate <= 29.9) {
      console.log("Overweight");
    } else if (calculate > 29.9 && calculate <= 34.9) {
      console.log("Modereately Obese");
    } else if (calculate > 34.9 && calculate <= 39.9) {
      console.log("Severely Obese");
    } else if (calculate > 40) {
      console.log("Morbidly Obese");
    } else {
      console.log("There's no data about that");
    }
  },
};

mahasiswa.calculateBMI();
