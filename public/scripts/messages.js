$(document).ready(() => {

  const sendMessage = function(messageData) {
    const html = `
      <div class="text">
        ${messageData.sender_id}<br>
        <p>${messageData.message_text}</p><br>
        <hr class="line">
        ${timeago.format(messageData.created_at)}
      </div>
    `
    return html;
  }


  $("#chatbox").submit((ev) => {
    ev.preventDefault();
    const message = $("#textbox").val();

    $.post("/messages/1", {message})

    .then(data => {
      // const text = data.message_text;
      // console.log("data: ", data);
      // console.log("text: ", text);
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

  // setInterval(() => {

  // })

});
