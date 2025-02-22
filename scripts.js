/*
function init(){
    alert("Learning JavaScript")
}
init()
*/

// problem: give green background to all element


const allUlElements = document.getElementsByTagName("ul")
// --> get all element based on tag name and returns list of node elements
// LIST --> [NODE ELEMENT(ul), NODE ELEMENT(ul), NODE ELEMENT(ul)]
// it return LIST, NOT an ARRAY

/*
allUlElements[0].style.background="green"
allUlElements[1].style.background="green"
allUlElements[2].style.background="green"
*/

for (let i=0; i<allUlElements.length; i++){
    allUlElements[i].style.background = "green"
}

