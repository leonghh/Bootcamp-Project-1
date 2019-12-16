$(document).ready(function () {

    // var productItem = $(this).attr(".productimage");
    // console.log(productItem);

    //sample
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    // animal + "&api_key=Zi5gCWq3TCGhqs5xR5aK2hU3&limit=20";

    // var queryURL = "https://api.bestbuy.com/v1/categories(name=action%20figures*)?format=json&show=path&apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&limit=20";

    var queryURL = "https://api.bestbuy.com/v1/products((search=action&search=figure))?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=image.asc&show=image,name,sku,thumbnailImage,description,shortDescription,url&pageSize=15&format=json"


    

    $(".test").on("click", function() {
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.products;
          console.log(results);

          //Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var productDiv = $("<div>");
            var productName = $("<h6>");
            var productCaption = $("<p>");

            // Creating and storing an image tag
            var productImage = $("<img>");

            // Setting the src attribute of the image to a property pulled off the result item
            productImage.attr("src", results[i].image);

            productName.text(results[i].name);
            productCaption.text(results[i].shortDescription);

            console.log(results);

            // Appending the paragraph and image tag to the animalDiv
            $(".productimagesection").append(productDiv);
            productDiv.append(productImage);
            productDiv.append(productName);
            productDiv.append(productCaption);


            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            // $("#gifs-appear-here").prepend(productDiv);
          }
        });

    });
});