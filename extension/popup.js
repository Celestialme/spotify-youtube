
     let checkbox  = document.getElementById('switch');
     chrome.storage.local.get('active', (result)=> {
        checkbox.checked= result.active;
      });    
     checkbox.onchange = function(e){
        //send message to background script
        console.log(e.target.checked)
        chrome.storage.local.set({active: e.target.checked});

     }
