$(document).ready(function () {

  $('#sendToSantaModal').modal();

    $(".sendToSantaBtn").on("click", function() {
      event.preventDefault();
      $(".selectedItemList").empty();
      var SKUList = "5775501"
      var SKUItemURL = "https://api.bestbuy.com/v1/products(sku=" + SKUList + ")?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=name.asc&show=longDescription,name,shortDescription,sku,image,description&format=json"
      console.log(SKUItemURL);

      $.ajax({
        url: SKUItemURL,
        method: "GET"
      })
        .then(function (response) {
          console.log("working");
          $(".sendToSantaModal").attr("class", "sendToSantaModal show");
          var productDiv = $("<div class='col s6'>");
          var productName = $("<h6 class='santaitemproductname'>");
          var productImage = $("<img class='responsive-img santaitemproductimage'>");
          console.log(response)
          productImage.attr("src", response.products[0].image);
          productName.text(response.products[0].name);

          $(".selectedItemList").append(productDiv);
          productDiv.append(productImage);
          productDiv.append(productName);

        });
    });

    $(".santaListCompleteBtn").on("click", function() {
      window.location.href="index.html"
    });


    var bestQueryURL = "https://api.bestbuy.com/v1/products(bestSellingRank<100&type=game)?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=bestSellingRank.asc&show=bestSellingRank,description,image,longDescription,shortDescription,thumbnailImage,sku,categoryPath.id,name&format=json"
    console.log(bestQueryURL);

    var santaItemList = [];

    function getBestSellers() {

        $.ajax({
            url: bestQueryURL,
            method: "GET"
        })
            // After data comes back from the request
            .then(function (response) {
                console.log(bestQueryURL);
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
                    $(".santaselectbestsellerlist").append(productDiv);
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

    }
    getBestSellers();

    // function showCategoryItems(){
        var keyword = $(".toyCategory").attr("id");
        console.log(keyword);
      
        var catQueryURL = "https://api.bestbuy.com/v1/products((search=" + keyword + "))?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=image.asc&show=image,name,sku,thumbnailImage,description,shortDescription,categoryPath.id,url&pageSize=15&format=json"
        console.log(catQueryURL);
      
        var santaItemList = [];
      
      
        $(".toyCategory").on("click", function () {

            $("#santaselectbestsellerssection").attr("class", "hide");
            $("#santaselectcategoriessection").attr("class", "hide");
            $("#santaitemproductitem").attr("class", "show");

            var keyword = $(this).attr("id");
            console.log(keyword);
          
            var catQueryURL = "https://api.bestbuy.com/v1/products((search=" + keyword + "))?apiKey=Zi5gCWq3TCGhqs5xR5aK2hU3&sort=image.asc&show=image,name,sku,thumbnailImage,description,shortDescription,categoryPath.id,url&pageSize=15&format=json"
            console.log(catQueryURL);
          
            var santaItemList = [];
            
        //   localStorage.setItem("queryURL", catQueryURL);
        //   var getQueryURL = localStorage.getItem("queryURL");
          $.ajax({
            url: catQueryURL,
            method: "GET"
          })
            // After data comes back from the request
            .then(function (response) {
              console.log(catQueryURL);
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
    // }
    // showCategoryItems();
});