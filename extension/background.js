
const URLS = ["*://*.youtube.com/*" , "*://*.spotify.com/*"]
// get message from content script
let active;
chrome.runtime.onMessage.addListener(
    async (message, sender, sendResponse)=> {
        active = await chrome.storage.local.get('active')
      if(!active.active)return
      //send messages to content script
        chrome.tabs.query({url: URLS}, function(tabs) {
            for (let tab of tabs){
                if (tab.id == sender.tab.id) continue
                chrome.tabs.sendMessage(tab.id, message);
            }
        });
    }

)