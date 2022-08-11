function hireWage() {
  var wage = document.getElementById("hourly_wage");

  if (document.getElementById("hiring").checked) {
    wage.style.display = "inline";
  } else {
    wage.style.display = "none";
  }
}
