import React, { useEffect, useRef} from "react";
import Talk from "talkjs";
import { useAuth0 } from "@auth0/auth0-react";

const InboxComponent = (props) => {
    const { user, isAuthenticated } = useAuth0();
    // const sneakers = useSelector(state => state.sneakers);
    // const username = user.nickname;
    // const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
    




    useEffect(() => {
            Talk.ready.then(() => { 

                const me = new Talk.User({
                    id: user.email,
                    name: user.nickname,
                    email: user.email,
                    role: 'default',
                  }
                  );
            
                  // const other = new Talk.User({
                  //   id: props.owner,
                  //   name: props.name,
                  //   role: 'default',
                  // });

                window.talkSession = new Talk.Session({
                    appId: 'tUVEWQMO',
                    me: me,
            });
            
     
              const conversationId = Talk.oneOnOneId(me);
              const conversation = window.talkSession.getOrCreateConversation(conversationId);
            
                conversation.setParticipant(me);
                // conversation.setParticipant(other);
            
                const inbox = window.talkSession.createInbox();
                inbox.select(conversation);
                inbox.mount(talkjsContainer.current);
                console.log("inbox fires");
            });
          }, []);
          const talkjsContainer = React.createRef();

          return(
            <div ref={talkjsContainer} className="chatbox-container">
            </div>) ;  
    }


    export default InboxComponent;
