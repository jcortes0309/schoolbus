$(document).ready(function(){
  $("#button-up").click(function(){
    $("#schoolbus_box").css("top", "110px");
  });

  $("#button-right").click(function(){
    $("#schoolbus_box").css("left", "100px");
  });

  $("#button-down").click(function(){
    $("#schoolbus_box").css("top", "250px");
  });

  $("#button-left").click(function(){
    $("#schoolbus_box").css("left", "-100px");
  });

  $("#button-center").click(function(){
    $("#schoolbus_box").css("left", "0");
    $("#schoolbus_box").css("top", "150px");
  });
});
