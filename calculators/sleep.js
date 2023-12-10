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
    document.getElementById('age-group').value = 'school-age';
    document.getElementById('wake-time').value = '';
    document.getElementById('bedtime-window').textContent = '';
  }
  