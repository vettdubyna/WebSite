var xmlhttp = new XMLHttpRequest();
var url = "test.php";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var myitems = JSON.parse(response);
    var i;

    for(i = 0; i < myitems.length; i++) {
        var item = myitems[i];
        var div = document.createElement('div');
        div.className = "irow";
        div.innerHTML = '<div class="image">' +
                            '<img src="./images/' + item.icon + '" style="width:100%"></img></div>' +
                            '<div class="desc">"Name: '+item.name + '<br><br>Lost point: ' + item.point+
                            '<br><br>Date: '+item.date+'</div> <div class="price"> <div class="pricetext">' +
                            'Price for returning:<br> ' + item.price + '</div>  <div class="element">' + 
                            '<input class="button "type="submit" value="FOUND IT!"></div></div>';

    }
    //out += "</table>";
    //document.getElementById("id01").innerHTML = out;
}