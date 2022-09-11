var apiKey = "v0U6rGicLtk3a9U4rqbyR4r9LcfCI7ud"
$("#search-button").on("click", function () {
  var searchTerm = $("#search-term").val();
  var numberRecords = parseInt($("#number-records").val());
  var startYear = $("#start-year").val() + "0101"
  var endYear = $("#end-year").val() + "1231"
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + apiKey
// clear search values
  $("#search-term").val('');
  $("#start-year").val('');
  $("#end-year").val('');
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (result) {
      console.log(result);
      renderTopArticles(result, numberRecords);
    });
});
function renderTopArticles(result, numberRecords) {

  for (var i = 0; i < numberRecords; i++) {
    var html = `
    <div>
      <a href=` + result.response.docs[i].web_url + `><h6>` + result.response.docs[i].headline.main + `</h6></a>
      <img src= https://www.nytimes.com/`+ result.multimedia[0].url +`>
      <p>Section: ` + result.response.docs[i].section_name + `</p>
      <p>` + result.response.docs[i].section_name + `</p>
      <p>` + result.response.docs[i].pub_date + `</p>
    </div>
    `;

    newDiv.attr("class", "border border-light p-3");
    $("#top-articles").append(html);
  }
};
$("#clear-button").on("click", function () {
    $("#top-articles").empty();
    $("#number-records").val(1);
});