import React, { useState, useEffect } from 'react';
import './comment.scss';

const Comment = (props) => {
  const [toggle, setToggle] = useState(true);
  const [pastDate, setPastDate] = useState()
  const onToggle = () => {
    setToggle(!toggle);
  };
  function createMarkup(string) {
    return { __html: string };
  }
  useEffect(() => {
    if (props.node) {
      const date = new Date(props.node.created_at_i * 1000);
      const now = new Date();
      const year = now.getFullYear() - date.getFullYear();
      if (year > 0) {
        if (year === 1) {
          setPastDate(`${year} year ago`);
        } else {
          setPastDate(`${year} years ago`);
        }
        return;
      }
      const month = now.getMonth() - date.getMonth();
      if (month > 0) {
        if (month === 1) {
          setPastDate(`${month} month ago`);
        } else {
          setPastDate(`${month} months ago`);
        }
        return;
      }
      const day = now.getDate() - date.getDate();
      if (day > 0) {
        if (day === 1) {
          setPastDate(`${day} day ago`);
        } else {
          setPastDate(`${day} days ago`);
        }
        return;
      }
      const hour = now.getHours() - date.getHours();
      if (hour > 0) {
        if (hour === 1) {
          setPastDate(`${hour} hour ago`);
        } else {
          setPastDate(`${hour} hours ago`);
        }
        return;
      }
      const minute = now.getMinutes() - date.getMinutes();
      if (minute > 0) {
        if (minute === 1) {
          setPastDate(`${minute} minute ago`);
        } else {
          setPastDate(`${minute} minutes ago`);
        }
        return;
      }
    }
  }, [props.node]);
  return (
    <div className="comment">
      <span className="comment-header">
        <span>{props.node.author}</span>
        <span>{` ${pastDate}`}</span>
        <span role="button" className="more-button" onClick={() => onToggle()}>
          {toggle ? ` [-]` : ` [${props.node.children.length + 1} more]`}
        </span>
      </span>
      {toggle === true && (
        <div
          className="comment-detail"
          dangerouslySetInnerHTML={createMarkup(props.node.text)}/>
      )}
      {toggle === true &&
        props.node.children.map((node, index) => (
          <Comment
            key={index}
            toggle={toggle}
            node={node}
            level={props.level + 1}
          />
        ))}
    </div>
  );
};

export default Comment;
