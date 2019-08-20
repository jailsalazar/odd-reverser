function getOdd () {
  let input = document.getElementById ('inputVal').value;
  let output = '';

  if (input > 100) {
    document.getElementById ('error').style.display = 'block';
  } else {
    for (let i = 0; i <= input; i++) {
      if (i % 2 != 0) {
        output += i + ' ';
      }
    }

    document.getElementById ('outputVal').innerHTML = output;
    document.getElementsByClassName ('output')[0].style.display = 'block';
  }
}

function reset () {
  document.getElementById ('outputVal').innerHTML = '';
  document.getElementById ('inputVal').value = '';
  document.getElementsByClassName ('output')[0].style.display = 'none';
  document.getElementById ('error').style.display = 'none';
}
