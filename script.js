document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var status = document.getElementById("status");
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "contact.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      status.innerHTML = "Message sent successfully!";
      document.getElementById("contact-form").reset();
    } else {
      status.innerHTML = "sending message.";
    }
  };
  xhr.send("name=" + name + "&email=" + email + "&message=" + message);
});