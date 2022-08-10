
     let checkbox  = document.getElementById('switch');
     let hotkey  = document.getElementById('hotkey');
     let settingsButton = document.getElementById('settingsButton')
     let closeButton = document.getElementById('closeButton');
     let homePage = document.getElementById('home-page')
     let settingsPage = document.getElementById('settings-page')
     chrome.storage.local.get('active', (result)=> {
        checkbox.checked= result.active;
      });    
     checkbox.onchange = function(e){
        //send message to background script
        console.log(e.target.checked)
        chrome.storage.local.set({active: e.target.checked});

     }
       chrome.storage.local.get('hotkey', (result)=> {
         if(result.hotkey){
           hotkey.innerHTML = result.hotkey;
         }
      })
hotkey.onkeydown = function(e){
   hotkey.innerHTML = e.code
   chrome.storage.local.set({hotkey: e.code});
}
settingsButton.onclick = function(){

   homePage.style.display = 'none';
   settingsPage.style.display = 'unset';


}
closeButton.onclick = function(){
   homePage.style.display = 'unset';
   settingsPage.style.display = 'none';
}

window.addEventListener("keydown",async (e) => {
   if(e.code == (await chrome.storage.local.get('hotkey')).hotkey){
      //send message to background script
      chrome.runtime.sendMessage({type:"toggle"})
      checkbox.checked = !checkbox.checked
   }
})