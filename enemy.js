class Enemy {

  static all = []
  static gameDiv = document.getElementById("game")

  constructor(id){
    this.id = id
    this.div = document.createElement('div')
    this.div.className = "enemy"
    //the first enemy should be all the way against the left "wall" of the game area
    //each following enemy should be 30 pixels from the left of the previous one,
    //and because each enemy is 30px wide, we multiply the id by 60 to get the position
    //we use the ids to determine the position because if an enemy gets hit we want to preserve the space
    this.leftPosition = id === 1 ? 0 : (id - 1) * 60
    this.div.style.left = `${this.leftPosition}px`
    this.direction = "right"
    //could this interval be made a static 'class' method and receive an instance of an Enemy as an argument?
    //we could maybe also have stored the 'direction' as a static attribute and just waited for the furthest right element to reach the wall
    //right now if the further right enemy were to be removed, the next closest enemy would not make it all the way to the right wall
    //not a deliverable, just commenting 
    //we need to store the interval value to clear out if the enemy gets hit
    this.interval = setInterval(() => {
      //if the enemy reaches the end of its range, change the direction left
      if (this.leftPosition == ((id - 1) * 60) + 50 ){
        this.direction = "left"
      //if the enemy reaches the end of its range, change the direction right
      } else if (this.leftPosition == (id - 1) * 60){
        this.direction = "right"
      }
      //change the position attribute of the enemy by 5 pixels based on the current direction
      this.leftPosition += this.direction === "right" ? 5 : -5
      //ultimately change the style so the change can be reflected on the DOM
      this.div.style.left = `${this.leftPosition}px`
    }, 500)

    //store all enemies in a static "all" array so we can remove them when they get hit
    Enemy.all.push(this)
    //append their respective elements to the DOM
    Enemy.gameDiv.appendChild(this.div)
  }

  static spawnEnemies(numToSpawn){
    for(let i = 1; i <= numToSpawn; i++){
      new Enemy(i)
    }
  }
}
