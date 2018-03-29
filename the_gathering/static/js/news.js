var listing = `
  <div class="listing">
    <div class="article-index">
        <h2 class="article-id"></h2>
    </div>
    <div class="article-data">
        <a href="" class="article-url" target="_blank"><h2 class="article-title"></h2></a>
        <p>posted to r/<span class="article-subreddit"><a href=""></a></span> by <span class="article-author"></span> <span class="article-time"></span>ago.</p>
    </div>
  </div>
`;

$.getJSON(
  "http://www.reddit.com/r/all.json?jsonp=?",
  function redditData(data) {
    $.each(
      data.data.children.slice(0, 25),
      function (i, post) {
        $(".listing-container").append(listing);
        $(".article-id").eq(i).text("0" + (i + 1));
        $(".article-url").eq(i).attr("href", post.data.url);
        $(".article-title").eq(i).text(post.data.title);
        $(".article-subreddit").eq(i).text(post.data.subreddit);
        $(".article-author").eq(i).text(post.data.author);
        // post.data.url );
        // post.data.permalink );
        // post.data.ups );
        // post.data.downs );
        // post.data.preview);
      }
    )
  }
);

$.getJSON(
  "http://www.reddit.com/r/pics.json?jsonp=?",
  function redditData(data) {
    $.each(
      data.data.children.slice(0, 25),
      function (i, post) {
        $(".photo-container").append( '<div class="img-container"><div class="img-title">' + post.data.title + '</div><a href="' + post.data.url + '" target="_blank"><img src="' + post.data.url + '"/></a></div>' );
      }
    )
  }
);

var googleNewsItem = `
  <div class="gnews-data">
    <h2 class="gnews-id"></h2>
    <a href="" class="gnews-url" target="_blank"><h2 class="gnews-title"></h2></a>
    <p class="gnews-description"></p>
  </div>
`;

$.getJSON(
  "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=0d6dd57a893e4ac7910730a05c6d88e1",
  function googleNewsData(data) {
    $.each(
      data.articles.slice(0, 12),
      function (i, post) {
        $(".gnews-container").append(googleNewsItem);

        $(".gnews-id").eq(i).text("0" + (i + 1));
        $(".gnews-url").eq(i).attr("href", post.url);
        $(".gnews-title").eq(i).text(post.title);
        $(".gnews-description").eq(i).text(post.description);
      }
    )
  }
);

$(document).ready(function() {
  navDisplay = false;
  photoSidebar = true;

  var body = $('.body-container');
  var navBtn = $('.nav-block');
  var sideBtn = $('.side-btn');
  var mainNav = $('.main-nav');
  var navPhotoViewer = $('#nav-photoviewer');
  var navFrontPage = $('#nav-front-page');
  var navGoogleNews = $('#nav-google-news');
  var subreddit = $('#subreddit');
  var sortBy = $('#sort-by');

  function hideNav() {
    navBtn.css({
      'transform' : 'rotate(0deg)',
    });

    mainNav.css({
      'top' : '-50%'
    });

    navDisplay = false;
  };

  function showNav() {
    navBtn.css({
      'transform' : 'rotate(180deg)',
    });
    mainNav.css({
      'top' : '50%'
    });

    navDisplay = true;
  };

  function hideSidebar() {
    $('.form-container').css({
      'width' : '26px',
    });
    $('form').css({
      'visibility' : 'hidden'
    });
    sideBtn.css({
      'left' : '-74px',
      'transform' : 'rotate(270deg)',
      'visibility' : 'visible'
    });
    $('.photo-container').css({
      'width' : 'calc(100% - 26px)'
    });
    photoSidebar = false;
  };

  function showSidebar() {
    $('.form-container').css({
      'width' : '50%',
    });
    $('form').css({
      'visibility' : 'visible'
    });
    sideBtn.css({
      'left' : 'calc(50% - 100px)',
      'transform' : 'rotate(90deg)',
      'visibility' : 'visible'
    });
    $('.photo-container').css({
      'width' : '50%'
    });

    photoSidebar = true;
  };

  function changeSubreddit() {
    var newSubreddit = $('#subreddit option:selected').text();
    var newSort = $('#sort-by option:selected').text().toLowerCase();

    $(".photo-container").empty();
    jsonStr = "http://www.reddit.com/r/" + newSubreddit + "/" + newSort + ".json?jsonp=?";

    $.getJSON(
    jsonStr,
    function redditData(data) {
      $.each(
        data.data.children.slice(0, 20),
        function (i, post) {
          $(".photo-container").append( '<img src="' + post.data.url + '"/>' );
        }
      )
    }
    );
  };

  navBtn.click(function() {
    if (navDisplay === false) {
      showNav();
    }
    else {
      hideNav();
    }
  });

  sideBtn.click(function() {
    if (photoSidebar === true) {
      hideSidebar();
    }
    else {
      showSidebar();
    }
  });

  var zIndex = 40;

  navPhotoViewer.click(function() {
    hideNav();
    $('#photoviewer').css('z-index', zIndex);
    zIndex += 10;
  });

  navFrontPage.click(function() {
    hideNav();
    $('#front-page').css('z-index', zIndex);
    zIndex += 10;
  });

  navGoogleNews.click(function() {
    hideNav();
    $('#google-news').css('z-index', zIndex);
    zIndex += 10;
  });

  subreddit.change(function() {
    changeSubreddit();
  });

  sortBy.change(function() {
    changeSubreddit();
  });

});