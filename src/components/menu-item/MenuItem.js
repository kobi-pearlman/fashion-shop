import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();


  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.path}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <span className="title">{title.toUpperCase()}</span>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
