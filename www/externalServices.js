var AUTH = 'AUTH';

document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById('theFrame').onload = function () {
    this.focus();
  }
});

window.addEventListener("message", function(e, a, b) {
  var mainApp = document.getElementById("theFrame");
  console.log('HIT THE MESSAGE');
  var payload = e.data;
  switch (payload.action) {
    case AUTH:
      processAuth(payload, function(err, auth) {
        if (!auth) return console.log(err);

        return mainApp.contentWindow.postMessage(auth, "*");
      });
      break;
  }
});


function processAuth(payload, callback) {
  // Get the config we setup when prepping the unit.
  getConfig(function(err, config) {
    console.log("call back from getconfig: " + config);
    if (!config) return console.log(err);

    // Set payload key to the config's key so we can verify.
    payload.key = config.key;

    var xhr = new XMLHttpRequest();
    var params = payload.length;

    console.log(payload);

    xhr.open("POST", "http://api.irisoft.vision/device/auth", true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var auth = JSON.parse(this.response);
        callback(null, auth);
      }
    }

    xhr.onerror = function(e) {
      callback(e.error, null);
    };

    // Stringify this for shipping it off to the api.
    var payloadRequest = JSON.stringify(payload);

    // Send Request.
    xhr.send(payloadRequest);
  });
}

function getConfig(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", './config.json', true);

  // Return config
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      console.log("GetConfig: " + JSON.parse(this.response));
      callback(null, JSON.parse(this.response));
    }
  }

  xhr.onerror = function(e) {
    callback(e.error, null);
  };

  // Send Request.
  xhr.send();
}
