/*
 * WEB222 – Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 *      Name:       Nishit Shah
 *      Student ID: 130 176 217
 *      Date:       12th August 2022
 */

function hireWage() {
  var wage = document.getElementById("hourly_wage");

  if (document.getElementById("hiring").checked) {
    wage.style.display = "inline";
  } else {
    wage.style.display = "none";
  }
}
