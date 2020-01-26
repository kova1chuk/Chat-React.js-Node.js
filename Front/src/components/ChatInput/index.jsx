import React, { useState } from "react";
import { Button, Input } from "antd";

import "./ChatInput.scss";

const ChatInput = props => {
  const [value, setValue] = useState("");

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button type="link" shape="circle" icon="smile" />
      </div>
      <Input
        onChange={e => setValue(e.target.value)}
        size="large"
        placeholder="Enter message..."
      />
      <div className="chat-input__actions">
        <Button type="link" shape="circle" icon="camera" />
        {value ? (
          <Button type="link" shape="circle" icon="check-circle" />
        ) : (
          <Button type="link" shape="circle" icon="audio" />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
