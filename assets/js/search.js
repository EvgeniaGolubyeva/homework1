//hide search container
$("#searchContainer").hide();

//initialize slider
$("#slider").slider({ range: true}, {values: [10, 90]});

//add listener to search button
$("#searchButton").click(function (){
    $("#mainContainer").toggle();
    $("#searchContainer").toggle();
});
