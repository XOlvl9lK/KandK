function toggleButtons() {
  document.getElementById('group').classList.toggle('invisible')
}

function changeButtonText() {
  document.getElementById('1').innerText = this.innerText
}


window.onload = function () {
  const button1 = document.getElementById('1')

  button1.onclick = toggleButtons

  const button2 = document.getElementById('2'),
    button3 = document.getElementById('3'),
    button4 = document.getElementById('4')

  button2.onclick = changeButtonText
  button3.onclick = changeButtonText
  button4.onclick = changeButtonText
}