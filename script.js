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
    $("#nyt_search .search.container").hide();
    $("#nyt_search .top_articles").show();
    $("#nyt_search .top_articles").removeClass("d-none");
    renderTopArticles(result);
  });
});
function renderTopArticles(result) {
  var documents = result.response.docs;
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
      document.section_name +
      "</h5>" +
      "<blockquote>" +
      "<p> " +
      document.abstract +
      "</p>" +
      "<p>" +
      document.byline.original +
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
