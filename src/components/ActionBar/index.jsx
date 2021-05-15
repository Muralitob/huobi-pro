import React from "react";
import './index.less';
let bars = [
  {
    label: "行情",
    key: "market",
  },
  {
    label: "我的",
    key: "market",
  },
];

function ActionBar() {
  return (
    <div className='bottom-bar'>
      {bars.map((item) => {
        return <div className='action-item'>{item.label}</div>;
      })}
    </div>
  );
}

export default ActionBar;
