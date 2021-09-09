function getElement(selection) {
  
  const element = document.querySelector(selection)
  
  if(selection) {
    return element
  }
  
  else {
    throw new Error(`${selection} does not exist`)
  }
  
}


function Counter(element, count) {
  
  this.counter = element
  this.count = count
  this.value = element.querySelector(".value")
  this.decreaseButton = element.querySelector(".decrease")
  this.resetButton = element.querySelector(".reset")
  this.increaseButton = element.querySelector(".increase")
  this.value.textContent = this.count
  
  this.increase = this.increase.bind(this)
  this.decrease = this.decrease.bind(this)
  this.reset = this.reset.bind(this)
  
  this.increaseButton.addEventListener("click", this.increase)
  this.decreaseButton.addEventListener("click", this.decrease)
  this.resetButton.addEventListener("click", this.reset)
  
}


Counter.prototype.increase = function() {
  
  this.count++
  this.value.textContent = this.count
  
}


Counter.prototype.decrease = function() {
  
  this.count--
  this.value.textContent = this.count
  
}


Counter.prototype.reset = function() {
  
  this.count = 0 
  this.value.textContent = this.count
  
}


const firstCounter = new Counter(getElement(".counter-1"), 100)

const secondCounter = new Counter(getElement(".counter-2"), 200)

const thirdCounter = new Counter(getElement(".counter-3"), 300)

const fourthCounter = new Counter(getElement(".counter-4"), 400)

const fifthCounter = new Counter(getElement(".counter-5"), 500)