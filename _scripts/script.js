"use strict";
$('.carousel').carousel({
    interval: 3000
})
var myIndex = 0;
//var myNewIndex;
var proddescarr = [];
var shpdtlarr = [];
var custrevarr = [];
var pricearr =[];
var imgarr = [];
var avblarr = [];
var itmsnoarr = [];

var productholder = document.getElementById('proddesc');
var custrevtholder = document.getElementById('custrev');
var priceholder = document.getElementById('price');
var imgholder = document.getElementById('prodimg');

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status===200){
        var a = JSON.parse(xhr.responseText);
        var b =a.allProducts;
        //console.log(b);
        for(var i in b){
            var product_desc = b[i].product_desc;
            proddescarr.push(product_desc);
            var shipping_details = b[i].shipping_details;
            shpdtlarr.push(shipping_details);
            var custmer_reviews = b[i].custmer_reviews;
            custrevarr.push(custmer_reviews);
            var price = b[i].price;
            pricearr.push(price);
            var image_path = b[i].image_path;
            imgarr.push(image_path);
            var stock_availability = b[i].stock_availability;
            avblarr.push(stock_availability);
            var no_of_items = b[i].no_of_items;
            itmsnoarr.push(no_of_items);

        }
        //console.log(imgarr[0]);
        productholder.innerHTML = proddescarr[myIndex];
        custrevtholder.innerHTML = custrevarr[myIndex];
        priceholder.innerHTML = pricearr[myIndex];
        imgholder.src = imgarr[myIndex];
    }
}
xhr.open('GET',"data.json",true);
xhr.send();

function nextElement(){
    if(myIndex < proddescarr.length){
        productholder.innerHTML = proddescarr[myIndex];
        custrevtholder.innerHTML = custrevarr[myIndex];
        priceholder.innerHTML = pricearr[myIndex];
        imgholder.src = imgarr[myIndex];
        myIndex++;
    }
    else{
        myIndex = 0;
    }
}
//console.log(myNewIndex);
//console.log(myIndex);
function prevElement() {
    if (myIndex != 0) {
        myIndex--;
        productholder.innerHTML = proddescarr[myIndex];
        custrevtholder.innerHTML = custrevarr[myIndex];
        priceholder.innerHTML = pricearr[myIndex];
        imgholder.src = imgarr[myIndex];
    } else {
        myIndex = 6;
        productholder.innerHTML = proddescarr[myIndex];
        custrevtholder.innerHTML = custrevarr[myIndex];
        priceholder.innerHTML = pricearr[myIndex];
        imgholder.src = imgarr[myIndex];
        myIndex--;
    }
}

var leftbtn = document.getElementById('leftbtn');
leftbtn.addEventListener("click",prevElement,false);

var rightbtn = document.getElementById('rightbtn');
rightbtn.addEventListener("click",nextElement,false);

function getInfo() {
    var a = document.getElementById('custFirstName').value;
    var b = document.getElementById('custLastName').value;
    var c = document.getElementById('custEmail').value;
    var d = document.getElementById('custNumber').value;
    var e = document.getElementById('custadd').value;
    var f = document.getElementById('custad').value;
    var g = document.getElementById('city').value;
    var h = document.getElementById('state').value;
    var i = document.getElementById('cardHolderName').value;
    var j = document.getElementById('cardNumber').value;
    var k = document.getElementById('cvvNumber').value;
    var l = document.getElementById('expdate').value;
    var m = document.getElementById('promoNumber').value;

    var finaldata = [a, b, c, d, e, f, g, h, i, j, k, l, m];
    var pack = "";
    for (var i = 0; (i < finaldata.length); i++) {
        if (i > 0) {
            pack += ",";
        }
        pack += escape(finaldata[i]);
    }
    window.open('confirm.html?' + pack);
}



function buyNow() {
    var w = document.getElementById('prodimg').src;
    var x = document.getElementById('proddesc').innerHTML;
    var y = document.getElementById('custrev').innerHTML;
    var z = document.getElementById('price').innerHTML;
    var data = [w, x, y, z];
    var pack = "";
    for (var i = 0; (i < data.length); i++) {
        if (i > 0) {
            pack += ",";
        }
        pack += escape(data[i]);
    }
    window.open('buyPage.html?' + pack);
}


/*
var leftarrcont = document.getElementById('leftbtn');
function showleft() {
    leftarrcont.style.visibility = "visible";
}*/
/*
function prevElement(){
    if (myIndex > 0){
        productholder.innerHTML = proddescarr[myNewIndex];
        custrevtholder.innerHTML = custrevarr[myNewIndex];
        priceholder.innerHTML = pricearr[myNewIndex];
        imgholder.src = imgarr[myNewIndex];
        myNewIndex--;
    }else{
        myIndex--;
        productholder.innerHTML = proddescarr[myIndex];
        custrevtholder.innerHTML = custrevarr[myIndex];
        priceholder.innerHTML = pricearr[myIndex];
        imgholder.src = imgarr[myIndex];

    }
}*/