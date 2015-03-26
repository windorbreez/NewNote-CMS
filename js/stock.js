
$(document).ready(function () {

    var api = 'http://finance.google.com/finance/info?client=ig&q=CNSX%3aWR'; // google finance API

    $.get(api, updateStock);
});

function updateStock(data) {

    var url = 'https://www.google.ca/finance?q=CNSX%3AWR&ei=01M7U4juEof9igLI3QE'; // google finance

    jQuery.get(url, function (res) {

        var responseHTML = data.responseText;

        var lastString = '"l" : "';
        var startLocation = responseHTML.search(lastString) + lastString.length;
        var endLocation = responseHTML.substring(startLocation).search('"') + startLocation;

        var lastPrice = responseHTML.substring(startLocation, endLocation);

        responseHTML = res.responseText;

        startLocation = responseHTML.search('<div class="snap-panel-and-plusone">');

        var result = responseHTML.substring(startLocation + 992, startLocation + 1351);


        var stockTick = "<span class='stock-ex'>CSE:NEU  </span> Last Price:" + '<i class="fa fa-usd stock-icon"></i>' + lastPrice;


        result = result.substring(result.search('<p>Vol.</p>'));

        stockTick += " | Volume:" + '<i class="fa stock-icon fa-signal"></i>' + result.substring(124, result.length - 45);

        //console.log(stockTick);

        var ul = document.getElementById("stock-tick");
        ul.innerHTML = stockTick;


    });
}
