let turn = 'x'

// Take a blank tile and fill it
const action = function (event) {
  $('#message').text('')
  event.preventDefault()
  let value = $(event.target).text()
  // If tile has a mark, display error message
  if (value === 'x' || value === 'o') {
    $('#message').text('Error, this tile is alredy in play!')
  } else if (value !== 'x' || value !== 'o') {
    value = $(event.target).text(turn)
    if (turn === 'x') {
      turn = 'o'
    } else if (turn === 'o') {
      turn = 'x'
    }
  }
}

module.exports = {
  turn,
  action
}
// if tile is not empty, return value?
