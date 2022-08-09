
const URLS = ["*://*.youtube.com/*" , "*://*.spotify.com/*"]
// get message from content script

chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse)=>{
      //send messages to content script
        chrome.tabs.query({url: URLS}, function(tabs) {
            for (let tab of tabs){
                if (tab.id == sender.tab.id) continue
                chrome.tabs.sendMessage(tab.id, message);
            }
        });
    }

)