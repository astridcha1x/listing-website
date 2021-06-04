$(document).ready(() => {

  const sendMessage = function(messageData) {
    console.log(messageData);
    const html = `
      <div class="text">
        ${messageData.name}<br>
        <p>${messageData.message_text}</p>

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
      $("#msgHistory").prepend(html);
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
