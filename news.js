$(function() {
  let apiKeyNYT = "24ff7f7b529741ac89405e4c1f9a24d6";
  let urlNYT = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + apiKeyNYT;
  $.get(urlNYT, function(data) {
    console.log(data);
    $(".row").empty();
    let story = data.results[0];
    let html = '<div class="collumn">';
    html = html + '<div class="head">';
    html = html + '<span class="headline hl1">'+ story.title + '</span><p>';
    html = html + '<span class="headline hl2">' + story.byline + '<br />(New York Times)'+ '</span>';
    html = html + '<figure class="figure"><img class="media" src='+ story.multimedia[1].url + ' alt="">' + '</figure>';
    html = html + '</p></div>' + story.abstract + '<br /><br /><i>' + story.url +'</p>';
    html = html + '</div>';
    $(".row").append(html);
  });

  let urlTC = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ff7474dc779741a2abb2e18b8d373532";
  $.get(urlTC, function(data) {
    console.log(data);
    let story = data.articles[0];
    let html = '<div class="collumn">';
    html = html + '<div class="head">';
    html = html + '<span class="headline hl1">'+ story.title + '</span><p>';
    html = html + '<span class="headline hl2">' + story.author + '<br />(Tech Crunch)'+ '</span>';
    html = html + '<figure class="figure"><img class="media" src='+ story.urlToImage + ' alt="">' + '</figure>';
    html = html + '</p></div>' + story.description + '<br /><br /><i>' + story.url +'</p>';
    html = html + '</div>';
    $(".row").append(html);
  });

  let urlW = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=ff7474dc779741a2abb2e18b8d373532";
  $.get(urlW, function(data) {
    console.log(data);
    let story = data.articles[0];
    let html = '<div class="collumn">';
    html = html + '<div class="head">';
    html = html + '<span class="headline hl1">'+ story.title + '</span><p>';
    html = html + '<span class="headline hl2">' + story.author + '<br />(Wired)'+ '</span>';
    html = html + '<figure class="figure"><img class="media" src='+ story.urlToImage + ' alt="">' + '</figure>';
    html = html + '</p></div>' + story.description + '<br /><br /><i>' + story.url +'</p>';
    html = html + '</div>';
    $(".row").append(html);
  });

  let urlTR = "https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=ff7474dc779741a2abb2e18b8d373532";
  $.get(urlTR, function(data) {
    console.log(data);
    let story = data.articles[0];
    let html = '<div class="collumn">';
    html = html + '<div class="head">';
    html = html + '<span class="headline hl1">'+ story.title + '</span><p>';
    html = html + '<span class="headline hl2">' + story.author + '<br />(TechRadar)'+ '</span>';
    html = html + '<figure class="figure"><img class="media" src='+ story.urlToImage + ' alt="">' + '</figure>';
    html = html + '</p></div>' + story.description + '<br /><br /><i>' + story.url +'</p>';
    html = html + '</div>';
    $(".row").append(html);
  });

  let urlV = "https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=ff7474dc779741a2abb2e18b8d373532";
  $.get(urlV, function(data) {
    console.log(data);
    let story = data.articles[0];
    let html = '<div class="collumn">';
    html = html + '<div class="head">';
    html = html + '<span class="headline hl1">'+ story.title + '</span><p>';
    html = html + '<span class="headline hl2">' + story.author + '<br />(The Verge)'+ '</span>';
    html = html + '<figure class="figure"><img class="media" src='+ story.urlToImage + ' alt="">' + '</figure>';
    html = html + '</p></div>' + story.description + '<br /><br /><i>' + story.url +'</p>';
    html = html + '</div>';
    $(".row").append(html);
  });

});
