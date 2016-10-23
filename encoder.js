

//var messageArray = messageToDecode.split("")


$("#inputText").keyup(function(e) {
  //var inputText = document.getElementById("inputText").value;
  //document.getElementById("textArea").innerHTML = inputText;
console.log("keycode");
  if ($("input:checked").val()== "echo") {
  document.getElementById("textArea").innerHTML += letters[e.keyCode];

} else if ($("input:checked").val()== "caesar") {
  document.getElementById("textArea").innerHTML += letters[e.keyCode - 1];

} else if ($("input:checked").val()== "heiroglyphic") {

  var heiroglyphicsString = "<img src = 'images/heiroglyphics/" + letters[e.keyCode] + ".gif'>"

  document.getElementById("textArea").innerHTML += heiroglyphicsString;

  }

});

$('#translationInputText').keydown(function(e) {
if(e.keyCode == 13) {
  console.log("enter")
  var message = $('#translationInputText').val();
  var messageArray = message.split("");
  for (var i= 0; i < messageArray.length; i++){
    console.log("in loop")
    $('#translationArea').append(letters[messageArray[i].charCodeAt(0)-32 + 1]);
  }
}

});

$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false );
  $(this).prop('checked', true )
});
