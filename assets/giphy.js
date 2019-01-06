// api.giphy.com
// 1OudLjvAOFSES1JWksMhXM0L9pcAkBG8
// /v1/gifs/search

/*
search giphy database
keep track of recent searches
show most recent search in gif
generate a random gif
pause and play gif
*/
// Logic
/*
pause image
play image
title
*/
function searchgifs(value) {
  const endpoint = "http://api.giphy.com/v1/gifs/search?";
  const params = "api_key=1OudLjvAOFSES1JWksMhXM0L9pcAkBG8&q=" + value;
  const url = endpoint + params;
  $.ajax(url)
    .then(handleSuccess)
    .catch(handleError);
}
function handleSuccess(data) {
  //yes
  pending = false;
  $(".status").html("gifshere4u");
  const gif = data.data;
  //  for (let i = 0; i < gif.length; i++) {
  //      console.log("gifs", gif[i]);
  //  }
  gif.map(function(element, b, c) {
    const title = element.title;
    const stillImage = element.images.original_still.url;
    const playImage = element.images.original.url;
    $(".gif").prepend(`<img src="${stillImage}"/>`);
  });
  console.log("gifs:", gif);
}
let pending = false;
function handleError(error) {
  //no
  $(".status").html("Uhoh, sorry no work today");
}
let recentValue = localStorage.getItem("recentSearch");
if (recentValue != null && recentValue != "") {
  searchgifs(recentValue);
}
let interests = [];
$("button").click(function(event) {
  event.preventDefault();
  const value = $('input[name="search"]').val();
  interest.push(value);
  localStorage.setItem("interest", interests);

  //pending
  //success
  //error
  pending = true;
  $(".status").html("loading.....?");
  searchgifs(value);
  $("input[name=search]").val(" ");
});
