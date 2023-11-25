var now = new Date();
var datetime = now.toLocaleDateString();
      
document.getElementById("publicationDate").innerHTML = "Publication date: " + datetime;