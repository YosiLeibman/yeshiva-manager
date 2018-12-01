import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depht-0">
        <div className="card-content">
          <span className="card-title">notofications</span>
          <ul className="notofocations">
            {notifications &&
              notifications.map(ntfc => {
                return (
                  <li key={ntfc.id}>
                    <span className="pink-text">{ntfc.user} </span>
                    <span>{ntfc.content} </span>
                    <div className="grey-text note-date">
                      {moment(ntfc.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
