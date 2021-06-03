$(document).ready(() => {

  const sendMessage = function(messageData) {
    const html = `
      <div class="text">
        ${messageData.sender_id}<br>
        <p>${messageData.message_text}</p>
        <hr class="line">
        ${timeago.format(messageData.created_at)}
      </div>
    `
    return html;
  }


  $("#chatbox").submit((ev) => {
    ev.preventDefault();
    const message = $("#textbox").val();

    $.post("/messages/messages", {message})

    .then(data => {
      const html = sendMessage(data);
      $("#sentMessages").append(html);
    })

    .then(() => {
      $("#textbox").val("");
    })

  });

  // const loadMessages = () => {
  //   $.ajax({url: "/messages/:user_id", method: "get"})
  //   .then((allMessages) => {
  //     renderMessages(allMessages);
  //   })
  // };


});
