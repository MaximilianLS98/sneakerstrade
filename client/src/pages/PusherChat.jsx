import React, { useRef } from "react";
import Pusher from 'pusher-js';

const PusherChat = () => {

    const inputField = useRef();
    const chatContainer = useRef();

    Pusher.logToConsole = true;

    const pusher = new Pusher('4c57bf1d6a21bbd6ac1f', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
        chatContainer.current.innerHTML += `<p>${data.message}</p>`;
        // alert(JSON.stringify(data));
    });

    const sendMessage = (e) => {
        e.preventDefault();
        fetch('https://sneakerspot-server.herokuapp.com/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: inputField.current.value
                    })
                    })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                    })
    }


    return (
        <div>
            <h1>Pusher Chat</h1>
            <p>This is a Pusher Chat demo</p>
            <div ref={chatContainer}></div>
            <form action="submit" onSubmit={(e) => sendMessage(e)}>
                <input type="text" ref={inputField} />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default PusherChat;