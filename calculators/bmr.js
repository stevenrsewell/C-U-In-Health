function calculateBMR() {
    var weight = parseFloat(document.getElementById('weight').value);
    var feet = parseFloat(document.getElementById('feet').value);
    var inches = parseFloat(document.getElementById('inches').value);

    // Convert height to total inches
    var heightInInches = feet * 12 + inches;

    // Harris-Benedict Equation
    var age = 30; // Set age as an example (can be input by the user)
    var harrisBenedictMen = 88.362 + (13.397 * weight) + (4.799 * heightInInches) - (5.677 * age);
    var harrisBenedictWomen = 447.593 + (9.247 * weight) + (3.098 * heightInInches) - (4.330 * age);

    // Mifflin-St Jeor Equation
    var mifflinStJeorMen = 10 * weight + 6.25 * heightInInches - 5 * age + 5;
    var mifflinStJeorWomen = 10 * weight + 6.25 * heightInInches - 5 * age - 161;

    // Displaying the results
    var result = document.getElementById('result');
    result.innerHTML = "<strong>BMR using Harris-Benedict Equation:</strong><br>For men: " + harrisBenedictMen.toFixed(2) + " calories/day<br>For women: " + harrisBenedictWomen.toFixed(2) + " calories/day<br><br>";
    result.innerHTML += "<strong>BMR using Mifflin-St Jeor Equation:</strong><br>For men: " + mifflinStJeorMen.toFixed(2) + " calories/day<br>For women: " + mifflinStJeorWomen.toFixed(2) + " calories/day";
}