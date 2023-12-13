document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.timepicker');
    const instances = M.Timepicker.init(elems);
    const select = document.querySelectorAll('select');
    const selectInstances = M.FormSelect.init(select);
  });

  function calculateBedTime() {
    const ageGroup = document.getElementById('age-group').value;
    const wakeTime = document.getElementById('wake-time').value;

    let minHours = 0;
    let maxHours = 0;

    switch (ageGroup) {
      case 'school-age':
        minHours = 9;
        maxHours = 12;
        break;
      case 'teen':
        minHours = 8;
        maxHours = 10;
        break;
      case 'adult':
        minHours = 7;
        maxHours = 9;
        break;
      default:
        break;
    }

    const wakeHours = parseInt(wakeTime.substr(0, 2));
    const wakeMinutes = parseInt(wakeTime.substr(3, 2));
    const date = new Date();
    date.setHours(wakeHours);
    date.setMinutes(wakeMinutes);

    date.setHours(date.getHours() - maxHours);

    const bedtimeMin = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    date.setHours(date.getHours() + (maxHours - minHours));

    const bedtimeMax = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const bedtimeWindow = `${bedtimeMin} - ${bedtimeMax}`;

    document.getElementById('bedtime-window').textContent = bedtimeWindow;
  }

  function resetData() {
    document.getElementById('age-group').selectedIndex = 0; // Reset dropdown to default
    document.getElementById('wake-time').value = ''; // Clear wake-up time input
    document.getElementById('bedtime-window').textContent = ''; // Clear bedtime window text
  }