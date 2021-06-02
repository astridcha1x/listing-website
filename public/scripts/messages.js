$(document).ready(() => {

  const sendMessage = function() {

  }

  $("#chatbox").submit((ev) => {
    ev.preventDefault();
    const message = $("#textbox").val();

    $.post("/messages/message", {message})
    .then(data => {
      const text = data.message_text;
      $("#test").append(text);
    });
  })



});
