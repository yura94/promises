function httpGet(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

Promise.all([httpGet("/file1.json"), httpGet("/file2.json")]).then(results => {
  let obj1 = JSON.parse(results[0]);
  let obj2 = JSON.parse(results[1]);

  console.log(obj1[1].result);
});
