// Select The Start Game Button
document.querySelector(".control-buttons span").onclick = function () {

    // Prompt Window To Ask For Name
let yourname = prompt("whats your name?")
// If Name Is Empty
if (yourname == null || yourname == "") {

    // Set Name To Unknown
document.querySelector(".name span").innerHTML="unknown"
// Name Is Not Empty
} else {

    // Set Name To Your Name
    document.querySelector(".name span").innerHTML= yourname
}
  // Remove Splash Screen
document.querySelector(".control-buttons").remove()
}
// Effect Duration
let duration =1000

// Select Blocks Container
 let blocksContainer = document.querySelector(".game-memory-blocks")

 // Create Array From Game Blocks
 let blocks = Array.from(blocksContainer.children)

// Create Range Of Keys
// let orderRange = [...Array(blocks.length).keys()];   keys start0 /...extract the value
// let orderRange= [...Array(blocks.length).keys()]
//samee
let orderRange = Array.from (Array(blocks.length).keys())

shuflle(orderRange)

//add order css property to game block
blocks.forEach((block, index ) =>{

// Add CSS Order Property
block.style.order= orderRange[index]

//add click event
block.addEventListener("click", function(){

//trigger the flip back function
flipblock(block)
})
})

//flip block function
function flipblock(selectedBlock){

 // Add Class is-flipped
    selectedBlock.classList.add("is-flipped")

    //collect all flipped cards
let allflippedblocks = blocks.filter(flippedblock => flippedblock.classList.contains("is-flipped") )
  
//if theres two selected blocks
if(allflippedblocks.length === 2){

//stop clicking function
stopClicking()

//check matched block function 
checkmatchedblocks(allflippedblocks[0], allflippedblocks[1])
}
}

//stop clicking function
function stopClicking(){
    //add class no cliciking on main container
    blocksContainer.classList.add("no-clicking")

  // Wait Duration
setTimeout(() => {

        // Remove Class No Clicking After The Duration
        blocksContainer.classList.remove("no-clicking")

},duration)

}

//check matched block function 
function checkmatchedblocks(firstblock , secondblock){


    let triesElement = document.querySelector(".tries span")

    if(firstblock.dataset.technology === secondblock.dataset.technology){
firstblock.classList.remove("is-flipped")
secondblock.classList.remove("is-flipped")

firstblock.classList.add("has-match")
secondblock.classList.add("has-match")

document.getElementById("success").play()
    }else{
triesElement.innerHTML= parseInt(triesElement.innerHTML )+ 1

setTimeout(()=> {
    firstblock.classList.remove("is-flipped")
    secondblock.classList.remove("is-flipped")
},duration)
document.getElementById("failure").play()
    }
}

//shuflle function 
function shuflle(array){

//settings var
let current = array.length,
temp,
random;

while(current > 0){

//get random number
random = Math.floor(Math.random() * current)

//decrease length by one
current--

//[1] Save Current Element in Stash
temp = array[current]

//  [2] Current Element = Random Element
array[current] = array[random]

// [3] Random Element = Get Element From Stash
array[random]= temp

}
return array
}
// Current Array [9, 2, 10, 4, 5, 6, 7, 3, 1, 8]
/*
  [1] Save Current Element in Stash
  [2] Current Element = Random Element
  [3] Random Element = Get Element From Stash
*/