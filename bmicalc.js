function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var feet = parseFloat(document.getElementById('feet').value);
    var inches = parseFloat(document.getElementById('inches').value);
    
    // Convert feet and inches to meters
    var heightInMeters = ((feet * 12) + inches) * 0.0254; // Convert height to meters
    
    // Convert weight from pounds to kilograms
    var weightInKg = weight * 0.453592; // Convert weight to kilograms
    
    var bmi = weightInKg / (heightInMeters * heightInMeters); // BMI formula: weight (kg) / height (m) squared
  
    var result = document.getElementById('result');
  
    if (!isNaN(bmi)) {
      result.innerHTML = 'Your BMI is: ' + bmi.toFixed(2); // Display BMI with two decimal places
    } else {
      result.innerHTML = 'Please enter valid values for weight and height.';
    }
  }
