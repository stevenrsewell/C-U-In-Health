document.addEventListener('DOMContentLoaded', function () {
  const selects = document.querySelectorAll('select');
  const instances = M.FormSelect.init(selects);

  const inputs = document.querySelectorAll('.validate');
  const instances2 = M.CharacterCounter.init(inputs);
});

function calculateTDEE() {
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const feet = parseFloat(document.getElementById("feet").value);
  const inches = parseFloat(document.getElementById("inches").value);
  const activityLevel = parseFloat(document.getElementById("activity").value);

  const heightInInches = feet * 12 + inches;

  let bmr = 0;

  if (gender === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * heightInInches) - (5.677 * age);
  } else if (gender === "female") {
    bmr = 447.593 + (9.247 * weight) + (3.098 * heightInInches) - (4.330 * age);
  }

  const tdee = bmr * activityLevel;

  document.getElementById("result").innerHTML = `Your Total Daily Energy Expenditure (TDEE) is approximately ${tdee.toFixed(2)} calories per day.`;
}