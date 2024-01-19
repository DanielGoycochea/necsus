function changeColor() {
  const paragraph = document.getElementById('paragraph')

  paragraph.style.backgroundColor = handleRandomColor()
}

function handleRandomColor() {
  const symbols = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)]
  }

  return color
}
