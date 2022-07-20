import React from 'react';
import './Messages.css';
import ScrollToBottom, {
  useScrollToBottom,
  useSticky,
} from 'react-scroll-to-bottom';
import Message from './Message/Message';

const Messages = ({ messages, name }) => {
  const scrollToBottom = useScrollToBottom();
  const [sticky] = useSticky();

  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
