let xhr = new XMLHttpRequest();
xhr.open("GET", "data.xml", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let xmlDoc = xhr.responseXML;
    let elements = xmlDoc.getElementsByTagName("item");
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i].childNodes[0].nodeValue);
    }
  }
};
xhr.send();

