document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('display').value = ''
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        document.getElementById('pin').value = pin;
    } else {
        generatePin();
    }
})

document.getElementById('notify-1').style.display = 'none';
document.getElementById('notify-2').style.display = 'none';

document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('pin').value;
    var display = document.getElementById('display').value;

    if (pin == display) {
        document.getElementById('notify-1').style.display = 'none';
        document.getElementById('notify-2').style.display = 'block';
    } else {
          for (let i = 1; i < 3; i++) {
            document.getElementById('action-left').innerText = i + ' try left';
            document.getElementById('notify-1').style.display = 'none';
            document.getElementById('notify-2').style.display = 'none';
          }
     }
})