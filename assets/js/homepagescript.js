$("#startBtn").on("click", function() {
    $("#startContainer").hide();
    $("#questionContainer").show();
});

$("#goBtn").on("click", function() {
    if (!$("#userName").val()) {
        $("#noNameModal").show();
    }
    else {
        console.log("also working");
        // window.location.href="selectpageindex.html"
    }
    
});

$(".noNameCloseBtn").on("click", function() {
    $("#noNameModal").hide();
});
