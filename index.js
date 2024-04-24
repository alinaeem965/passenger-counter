let countEL= document.getElementById("count-el")
let count = 0
function increment(){
    count +=  1
    countEL.textContent=count

}
let saveEl = document.getElementById("save-el")
function save(){
    PreviousValue = count +" , "
  saveEl.textContent += PreviousValue
  countEL.textContent = 0
  count = 0
    
}