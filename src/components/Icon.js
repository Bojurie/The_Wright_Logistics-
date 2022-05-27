import React from "react";

export default function Icon({ className, icon, callback }) {
  return (
    // eslint-disable-next-line
    <a onClick={callback} className={className}>
      <i className={icon} />
    </a>
  );
}