function createTask(task) {
  // get form data "FormData()"

  let formElement = document.getElementById("form");

  let xht = new XMLHttpRequest();
  xht.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xht.open("POST", "http://localhost:3000", true);
  xht.send(new FormData(formElement));
}
