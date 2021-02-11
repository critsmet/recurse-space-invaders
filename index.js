
Enemy.spawnEnemies(8)

window.addEventListener('keydown', function(event){

  //grab the current 'left' style, which determines the position of the player\
  //slice to remove the 'px' and grab the value and parse it so that we can use it later
  let currentPosition = parseInt(player.style.left.slice(0, -2))

  switch(event.keyCode){
    case 37:
      //move to the left but make sure that the next move wouldn't push the player over the game boundary
      currentPosition - 5 !== -5 ? player.style.left = `${currentPosition - 5}px` : null
      break;
    case 39:
      //move to the right but, again, make sure that the next move wouldn't push the player over the game boundary
      currentPosition + 5 !== 455 ? player.style.left = `${currentPosition + 5}px` : null
      break;
    default:
      break;
  }
})
