$(document).ready(function () {


  //sample
  // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  // animal + "&api_key=Zi5gCWq3TCGhqs5xR5aK2hU3&limit=20";

  var keyword = $(".testcategory").attr("id");
  console.log(keyword);

  var queryURL = "https://api.bestbuy.com/v1/products((search=" + keyword + "))?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=image.asc&show=image,name,sku,thumbnailImage,description,shortDescription,categoryPath.id,url&pageSize=15&format=json"
  console.log(queryURL);

  var santaItemList = [];


  $(".testcategory").on("click", function () {
    localStorage.setItem("queryURL", queryURL);
    var getQueryURL = localStorage.getItem("queryURL");
    $.ajax({
      url: getQueryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function (response) {
        console.log(getQueryURL);
        console.log(response);

        // storing the data from the AJAX request in the results variable
        var results = response.products;
        console.log(results);

        //Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var productDiv = $("<div class='col s6'>");
          // Creating and storing product name tag
          var productName = $("<h6 class='santaitemproductname'>");
          // Creating and storing product description tag
          var productCaption = $("<p class='santaitemproductcaption'>");
          // Creating and storing an image tag
          var productImage = $("<img class='responsive-img santaitemproductimage'>");

          // Setting the src attribute of the image to a property pulled off the result item
          productImage.attr("src", results[i].image);
          productName.text(results[i].name);
          productCaption.text(results[i].shortDescription);

          // Setting SKU (unique product identifier by third party API)
          var productSKU = results[i].sku;

          // Appending product image, name, caption and IWantThis button 
          $(".santaitemimagediv").append(productDiv);
          productDiv.append(productImage);
          productDiv.append(productName);
          productDiv.append(productCaption);
          productDiv.append("<button class='iwantthisbox waves-effect waves-light btn red accent-4' id='" + productSKU + "'>  I want this!  </button>");

        };

        // Saving SKU info to Local Storage with IWantThis button
        $(".iwantthisbox").on("click", function (event) {
          event.preventDefault();

          var itemSKU = $(this).attr('id');
          console.log(itemSKU);

          function storeSantaItems() {
            // Add new itemSKU to santaItemList array
            santaItemList.push(itemSKU);
            // Stringify and set "santaItemList" key in localStorage to santaItemList array
            localStorage.setItem("santaItemList", JSON.stringify(santaItemList));
          }
          storeSantaItems();
        });

      });

  });
});