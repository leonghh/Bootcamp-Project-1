$( document ).ready(function() {
    console.log( "ready!" );

    $(".Games-PuzzlesCards").click(function() {
        window.location.href='productspage.html';
        console.log("Games-puzzleclick");
    });

    var recommendations = $(this).attr("data-recommendations");

    var queryURL = "https://api.bestbuy.com/v1/products((search=toys)&)?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=thumbnailImage.asc&show=description,image,thumbnailImage&facet=bestSellingRank&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
      })

        var bby = require('bestbuy')('Zi5gCWq3TCGhqs5xR5aK2hU3');
        bby.categories('',{show:'id'}).then(function(data){
        console.log(data);
        });
        
        var bby = require('bestbuy')('Zi5gCWq3TCGhqs5xR5aK2hU3');
        bby.recommendations('trendingViewed','abcat0400000').then(function(data){
        console.log(data);
        });

});
