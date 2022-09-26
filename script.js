var apiKey = "v0U6rGicLtk3a9U4rqbyR4r9LcfCI7ud";
$("#search-button").on("click", function () {
  var searchTerm = $("#search-term").val();
  var startYear = $("#start-year").val() + "0101";
  var endYear = $("#end-year").val() + "1231";
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    searchTerm +
    "&api-key=" +
    apiKey;
  // clear search values
  $("#search-term").val("");
  $("#start-year").val("");
  $("#end-year").val("");
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (result) {
    renderTopArticles(result);
  });
});
function renderTopArticles(result) {
  var documents = result.response.docs;
  console.log(documents);
  documents.forEach((document) => {
    var html =
      ' <figure class="article"> ' +
      "<img src= https://www.nytimes.com/" +
      document.multimedia[0].url +
      ">" +
      "<figcaption>" +
      "<h3>" +
      document.headline.main +
      "</h3>" +
      "<h5>" +
      document.headline.main +
      "</h5>" +
      "<blockquote>" +
      "<p> " +
      document.section_name +
      "</p>" +
      "<p>" +
      document.pub_date +
      "</p>" +
      "</blockquote>" +
      "<a href=" +
      document.web_url +
      "></a>" +
      "</figure>";
    $("#top-articles").append(html);
  });
}
$("#clear-button").on("click", function () {
  $("#top-articles").empty();
  $("#number-records").val(1);
});
