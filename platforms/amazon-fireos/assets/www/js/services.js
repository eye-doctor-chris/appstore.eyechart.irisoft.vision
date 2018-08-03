app.services = {
  authenticate: function(email, password, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://google.com/", false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // WARNING! Might be evaluating an evil script!
        console.log('web service executed');
      }
    }
    xhr.send();

    var response = {
      authorized: email == 'aa' && password == 'aaa',
      data: null
    }

    if (callback) {
      callback(response);
    }
  }
};
