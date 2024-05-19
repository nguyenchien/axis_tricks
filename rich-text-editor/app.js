let output = document.getElementById('output');
let buttons = document.getElementsByClassName('tool--btn');
for (let btn of buttons) {
  btn.addEventListener('click', () => {
    let command = btn.dataset['command'];
    if(command === 'createlink') {
      let url = prompt('Inser your url: ', 'http://');
      document.execCommand(command, true, url);
    } else {
      document.execCommand(command);
    }
  })
}