function getUserData(userId, callbackFn){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if ( this.readyState == 4 && this.status == 200){
      data = JSON.parse(xhttp.responseText);
      callbackFn(data);
    }
  };

  xhttp.open("GET","link" + userId, true)
  xhttp.send();
};

getUserData(2, logMessage);

getUserData(1, () => {
  logMessage()
});

function logMessage(msg){
  console.log(msg)
};