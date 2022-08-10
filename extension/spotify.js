
let button = null;
const selector = "button[aria-label=Play],button[aria-label=Pause]"

const sleep = (ms) => {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
  };


   

    window.onload = async function()  {
        window.addEventListener("keydown",async (e) => {
            if(e.code == (await chrome.storage.local.get('hotkey')).hotkey){
               //send message to background script
               chrome.runtime.sendMessage({type:"toggle"})
            }
      })

do {
    await sleep(2000)
    button = document.querySelector(selector)
    
    
} while (button == null);

button.addEventListener("click", function() {
//send msg to background script

    if(button.ariaLabel == "Play"){
    chrome.runtime.sendMessage("Pause")
}else if(button.ariaLabel == "Pause"){
    chrome.runtime.sendMessage("Play")
}


})
    }
// get message from background.js it asks to stop any music playing or play it
chrome.runtime.onMessage.addListener(
     (message, sender, sendResponse)=>{
            if(message ==  button.ariaLabel){
                button.click()
            }
            
            
            
    },
  )