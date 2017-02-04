loadXMLDoc()
function loadXMLDoc()
 {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "menu.xml", true);
  xmlhttp.send();
}
function myFunction(xml) 
{
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Name</th><th>price</th></tr>";
  var x = xmlDoc.getElementsByTagName("food");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td></tr>"+
}
}