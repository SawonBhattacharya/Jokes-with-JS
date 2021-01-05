function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {
  randomQuote();
});

function myclick(){
  randomQuote();
};

function random_joke(){
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://joke3.p.rapidapi.com/v1/joke",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2ece7defd2msh60bb2759e22c58fp1ba5eajsn6e0945fd3a00",
		"x-rapidapi-host": "joke3.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	$("#random_joke").html("<p id='random_joke' class='lead text-center'>" +
          response.content);
        
});
}

$(function() {
  random_joke();
});

function myjoke(){
  random_joke();
};