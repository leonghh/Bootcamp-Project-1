$( document ).ready(function() {
  //$.ajax({ url: "categoiespageindex.html",
  //context: document.body,
  //success: function(){
   //  alert("done");
  //}});

    //$("")


    //$(".Games-PuzzlesCards").click(function() {
    //    window.location.href='santaitem.html';
    //    console.log("Games-puzzleclick");


    var customerTopRated = $(this).attr("data-customerTopRated");
    


    var queryURL = "https://api.bestbuy.com/v1/products((search=toys)&)?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=thumbnailImage.asc&show=description,image,thumbnailImage&facet=bestSellingRank&format=json";


    
      $.ajax({
        url: queryURL,
        method: "GET",
        context: document.body,
        success: function(){
           alert("done");
        }

        .then(function(response) {
        console.log(queryURL);

        console.log(response);

        var results = response.customerTopRated;
        console.log(results);

        for (var i = 0; i < results.length; i++)

        var productDiv = $("<div>");
        var productName = $("<h3>");
        var productCaption = $("<p>");
        var productImage = $("<img>");

        
        productImage.attr("src", results[i].image);

            productName.text(results[i].name);
            productCaption.text(results[i].Description);

            console.log(results);

            $("#siteloader).append(productDiv);
            productDiv.append(productImage);
            productDiv.append(productName);
            productDiv.append(productCaption);
      })
    })  

  });
