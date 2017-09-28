$(document).ready(function() {
  $("small").show();

  var fccUrl = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";

  $.getJSON(fccUrl, function(data) {
    if (data.stream === null) {
      $("#fccicon")
        .show()
        .css("color", "red")
        .html(" Offline");
    } else {
      $("#fccicon")
        .show()
        .css("color", "green")
        .html(" Online <br> Game: " + data.stream.game);
    }
  });

  var syndicateUrl = "https://wind-bow.glitch.me/twitch-api/streams/syndicate";

  $.getJSON(syndicateUrl, function(data) {
    if (data.stream === null) {
      $("#syndicateicon")
        .show()
        .css("color", "red")
        .html(" Offline");
    } else {
      $("#syndicateicon")
        .show()
        .css("color", "green")
        .html(" Online <br> Game: " + data.stream.game);
    }
  });

  var nb3Url = "https://wind-bow.glitch.me/twitch-api/streams/nightblue3";

  $.getJSON(nb3Url, function(data) {
    if (data.stream === null) {
      $("#nb3icon")
        .show()
        .css("color", "red")
        .html(" Offline");
    } else {
      $("#nb3icon")
        .show()
        .css("color", "green")
        .html(" Online <br> Game: " + data.stream.game);
    }
  });

  var summit1gUrl = "https://wind-bow.glitch.me/twitch-api/streams/summit1g";

  $.getJSON(summit1gUrl, function(data) {
    if (data.stream === null) {
      $("#summit1gicon")
        .show()
        .css("color", "red")
        .html(" Offline");
    } else {
      $("#summit1gicon")
        .show()
        .css("color", "green")
        .html(" Online <br> Game: " + data.stream.game);
    }
  });

  var eslUrl = "https://wind-bow.glitch.me/twitch-api/streams/esl_sc2";

  $.getJSON(eslUrl, function(data) {
    if (data.stream === null) {
      $("#eslicon")
        .show()
        .css("color", "red")
        .html(" Offline");
    } else {
      $("#eslicon")
        .show()
        .css("color", "green")
        .html(" Online <br> Game: " + data.stream.game);
    }
  });

  var rlUrl = "https://wind-bow.glitch.me/twitch-api/streams/rocketleague";

  $.getJSON(rlUrl, function(data) {
    if (data.stream === null) {
      $("#rlicon")
        .show()
        .css("color", "red")
        .html(" Offline");
    } else {
      $("#rlicon")
        .show()
        .css("color", "green")
        .html(" Online <br> Game: " + data.stream.game);
    }
  });
});