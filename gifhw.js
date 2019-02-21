// creating dynamic web apps using the giphy api that takes in user input and adds buttons to the app

//array for buttons

$(document).ready(function() {
  let gifs = ["fails", "epic", "awesome", "crashed"];

  //function to add buttons to the page
  function addButton(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (let i = 0; i < arrayToUse.length; i++) {
      let k = $("<button>");
      k.addClass(classToAdd);
      k.attr("data-type", arrayToUse[i]);
      k.text(arrayToUse[i]);
      $(areaToAddTo).append(k);
    }
  }

  //function to get gifs from giphy

  $(
    document.onabort("click", ".gif-button", function() {
      $("#images").empty();

      $("#.gif-button").removeClass("active");
      $(this).addClass("active");

      let type = $(this).attr("data-type");
      let queryUrl =
        "http://api.giphy.com/v1/gifs/search?q=" +
        type +
        "&api_key-dc6zaTOxFJmzC&limit-10";

      //using ajax

      $.ajax({
        url: queryUrl,
        method: "GET"
      });
        
        .then(function (response) {
            let results = response.data;

            for (let i = 0; i < results.length; i++){
                let gifDiv = $("<div class=\"gif-item\">");

                let rating = results[i].rating;

                let p = $("<p>").text("rating: " + rating)

                let animated = results[i].images.fixed_height.url;
                let still = results[i].images.fixed_height.url;
            }
        })
    })
  );
});
