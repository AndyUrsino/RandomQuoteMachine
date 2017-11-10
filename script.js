
getQuote();

 // OnClick
$("#btn-1").click(function()
{
    getQuote();
});

// random color generator
function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) 
    {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getQuote()
{
    // make API request
    $.ajax(
        {
            url: "http://api.forismatic.com/api/1.0/",
            jsonp: "jsonp",
            dataType: "jsonp",
            data: 
            {
                method: "getQuote",
                lang: "en",
                format: 'jsonp'
            },
            success: function(response)
            {
                $("#quote").html(response.quoteText);
                $("#quote-author").html("- " + response.quoteAuthor);
            }
        })
    
    // change color with each new quote
    var newColor = getRandomColor();
    $("body").css("background-color", newColor);
    $("#box").css("color", newColor);
    $("#btn-1").css("color", newColor);
}


$(".links").click(function(event)
{
    event.preventDefault();
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quote").html() + $("#quote-author").html()));
});