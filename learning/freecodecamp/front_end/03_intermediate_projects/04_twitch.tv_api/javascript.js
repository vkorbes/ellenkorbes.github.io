

$.ajaxSetup({
  headers : {
    "Client-ID": "kwffykbpiqtoan5fsnulfu46owy0u3",
      
  }
});

channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
channels = channels.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });

function go () {
  var i = 0;
  var menuItem = [];
  var footerItem = [];

  $.each(channels, function(index, value) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + value)
      .always(function(data, status) {
        if (status === "success" && data.stream != null) {
          i++;
          menuItem[index] =        '<div class="online">' +
            '<ul>' +
            '<li class="itemNumber"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + (index + 1) + '</a></li>' +
            '<li class="itemChannel"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + value + '</a></li>' +
            '<li class="itemStatus"><a target="_blank" href="https://www.twitch.tv/' + value + '">Online</a></li>' +
            '<li class="itemGame"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + data.stream.game + '</a></li>' +
            '<li class="itemInfo"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + data.stream.channel.status + '</a></li>' +
            '</ul>' +
            '</div>';
          footerItem[index] =   '<span class="offline"><span class="number"><a target="_blank" href="https://www.twitch.tv/' + value + '" class="' + (index + 1) + '">[\' + (index + 1)
                           + \']</a></span><span class="channel"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + value + '</a></span></span>';
          if (i == channels.length) { deploy(menuItem, footerItem); }

                
        } else {
          i++;
          menuItem[index] =        '<div class="offline">' +
            '<ul>' +
            '<li class="itemNumber off"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + (index + 1) + '</a></li>' +
            '<li class="itemChannel"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + value + '</a></li>' +
            '<li class="itemStatus off"><a target="_blank" href="https://www.twitch.tv/' + value + '">Offline</a></li>' +
            '<li class="itemGame"><a target="_blank" href="https://www.twitch.tv/' + value + '"></a></li>' +
            '<li class="itemInfo"><a target="_blank" href="https://www.twitch.tv/' + value + '"></a></li>' +
            '</ul>' +
            '</div>';
          footerItem[index] =   '<span class="offline"><span class="number"><a target="_blank" href="https://www.twitch.tv/' + value + '" class="' + (index + 1) + '">[\' + (index + 1)
                           + \']</a></span><span class="chanoff"><a target="_blank" href="https://www.twitch.tv/' + value + '">' + value + '</a></span></span>';
          if (i == channels.length) { deploy(menuItem, footerItem); }
        }
              
      });
          
  });
}

function deploy (menuItem, footerItem) {
  $.each(menuItem, function(index, value) { $(".items").append(value); });
  $.each(footerItem, function(index, value) { $("footer").append(value); });

}

$(document).ready(function() {

  go();

  $(".fiOn").click(function(){
    $(".fiOn").removeClass("off");
    $(".fiOff").addClass("off");
    $(".offline").css("display", "none");
    $(".online").css("display", "");
    $(".fiBo").addClass("off");

  });

  $(".fiOff").click(function(){
    $(".fiOn").addClass("off");
    $(".fiOff").removeClass("off");
    $(".offline").css("display", "");
    $(".online").css("display", "none");
    $(".fiBo").addClass("off");

  });

  $(".fiBo").click(function(){
    $(".fiOn").addClass("off");
    $(".fiOff").addClass("off");
    $(".offline").css("display", "");
    $(".online").css("display", "");
    $(".fiBo").removeClass("off");

  });

  $(".number").each(function(index, element) {
    console.log(element);

  });

  $(document).keydown(function(e) {
    switch(e.which) {
    case 78: $('.fiOn a').click(); break; // n
    case 70: $('.fiOff a').click(); break; // f
    case 66: $('.fiBo a').click(); break; // b
    case 49: window.open('https://www.twitch.tv/' + channels[0], '_blank'); break; // 1
    case 50: window.open('https://www.twitch.tv/' + channels[1], '_blank'); break; // 2
    case 51: window.open('https://www.twitch.tv/' + channels[2], '_blank'); break; // 3
    case 52: window.open('https://www.twitch.tv/' + channels[3], '_blank'); break; // 4
    case 53: window.open('https://www.twitch.tv/' + channels[4], '_blank'); break; // 5
    case 54: window.open('https://www.twitch.tv/' + channels[5], '_blank'); break; // 6
    case 55: window.open('https://www.twitch.tv/' + channels[6], '_blank'); break; // 7
    case 56: window.open('https://www.twitch.tv/' + channels[7], '_blank'); break; // 8
    default: return;
    }
    e.preventDefault();

  });




});
