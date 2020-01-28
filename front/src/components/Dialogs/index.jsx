import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, onSelectDialog }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Search"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desk"]).map(item => (
        <DialogItem
          onSelect={onSelectDialog}
          key={item._id}
          isMe={item.user._id === userId}
          {...item}
        />
      ))
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Not found" />
    )}
  </div>
);

export default Dialogs;
