"use strict";

// hide local variables scope
(function()
{
	var $ = function (a) { return document.getElementById(a);}
	
    //var myitems[];
    var myitems = [  {"name":"Watch","icon":"photo1.jpg", "point":"V.Velykoho 73","date":"01.04.2016", "price":200.0},
                             {"name":"Phone","icon":"photo2.jpg", "point":"KingCross","date":"15.03.2016", "price":350.99},
                             {"name":"Bag","icon":"photo3.jpg", "point":"NU LP","date":"01.04.2016", "price":100.0} ];   

    
   
    var updateContentF = function()
    {
        var container = $("container");
        var i;
        for(i=0; i < myitems.length; i++)
        {
        	var item = myitems[i];
            var buttonid = "button"+i;    
            var div = document.createElement('div');
            div.className = "irow";
            div.innerHTML = '<div class="image">' +
                            '<img src="./images/' + item.icon + '" style="width:100%"></img></div>' +
                            '<div class="desc">Name: '+item.name+'<br><br>Lost point: ' + item.point+
                            '<br><br>Date: '+item.date+'</div>' + 
                            '<div class="price"> <div class="pricetext">' +
                            'Price for returning:<br> ' + item.price + ' ₴</div>' + 
                            '<div class="element">' + 
                            '<button class="button" id="'+ buttonid + '" onClick="but_clicked(this)"> FOUND IT!</button>'+
                            '</div></div>'; 
            container.appendChild(div);
        }
    }
    updateContentF();
    for (var k = 0; k < myitems.length; k++){ 
        var item = myitems[k];
        $("button"+k).onclick = function()
        {
            alert("Thanks for help! You can take your gift: "+item.price+" ₴");
        }
    }
    /*var xmlhttp = new XMLHttpRequest();
    var url = "test.php";
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            myitems = JSON.parse(xmlhttp.responseText);
            updateContentF();
        }
        else
        {
            alert("Error loading shop content. Default content is used!!!");
            myitems = [  {"name":"Watch","icon":"Smile1.svg", "point":"V.Velykoho 73","date":"01.04.2016", "price":20.0},
                         {"name":"Phone","icon":"Smile2.svg", "point":"KingCross","date":"15.03.2016", "price":150.99},
                         {"name":"Bag","icon":"Smile3.svg", "point":"NU LP","date":"01.04.2016", "price":50.0} ];
            updateContentF();
        }
        
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
*/
})();