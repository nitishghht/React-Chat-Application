import React from 'react';

// Function to strip HTML tags
const stripHtmlTags = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const MyMessage = ({ message }) => {
  const text = stripHtmlTags(message.text);

  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: '#3B2A50'
      }}
    >
      {text}
    </div>
  );
};

export default MyMessage;
