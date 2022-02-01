/*
   Just testing stuff out!
   Orville Chomer
   
 */

let bdy,btn;


/**
 * Better to have a better function name like:    workWithWebPageContainer()
 * 
 * All functions that we would write that it needs to use need to be contained 
 * inside of this one!
 */
function doStuffWithPage() {
        console.log("starting doStuffWithPage()")
      
        let sColor = "lightyellow"
        let divs = document.getElementsByTagName("div")
    
        
        bdy = document.getElementsByTagName("body")[0]               
        btn = document.getElementById("opc_test_btn1")

        if (btn === null) {
            sColor = "green"
            btn = document.createElement("button")
            
            btn.id = "opc_test_btn1"
            btn.innerText = "Click Me!"
            btn.style.position = "fixed"
            btn.style.top = "10px"
            btn.style.left = "10px"
            btn.style.zIndex = "2000"
            btn.style.background = "yellow"
            btn.style.color = "red"
            btn.style.margin = "0px"
            btn.style.width= "200px"
            btn.style.height = "60px"
            btn.style.boxSizing = "border-box"
            btn.style.border = "solid gray 1px"
            btn.style.borderRadius = "8px"
            btn.style.cursor = "pointer"
            btn.style.opacity = ".8"
            
            try {
                btn.addEventListener("click",buttonClicked)
            } catch(err) {
                sColor = "red"
                btn.innerText = "Error trying to add a 'click' eventListener to me! "+err.message
            } // end of try/catch
            
            bdy.appendChild(btn)
            sColor = "silver"
        } else {
            btn.innerText = "Click me again!"
            btn.style.color = "blue"
        } // end if 

        for (let n=0;n<divs.length;n++) {
            const dv = divs[n]
            dv.style.backgroundColor = sColor
        } // next n

        // function below has to be define inside of function run
        function buttonClicked() {
            btn.innerText = "I was clicked!"
        } // end of buttonClicked

} // end of doStuffWithPage()



/**
 * listener below's code fires when user clicks on the 
 * extension's icon...
 * 
 * on Chrome:  want the icon to appear in toolbar?  'Pin' it!
 * 
 */
chrome.action.onClicked.addListener((tab) => {
    console.log("icon clicked")
    chrome.scripting.executeScript({
        target: { tabId: tab.id},
        function: doStuffWithPage
    }); // end of scripting executeScript block
}); // end of action addListener block
