import React from "react";

const PostBerita = (props) => {
  return (
    <div>
      <div className="card clearfix" key={props.data.id}>
        <div className="img-thumb">
          <img src="/product.jpg" alt="" />
        </div>
        <p className="title">{props.data.title}</p>
        <p className="content">{props.data.body}</p>
        <button className="update" onClick={() => props.onUpdate(props.data)}>
          Update
        </button>
        <button
          className="remove"
          key={props.data.id}
          onClick={() => props.onRemove(props.data.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default PostBerita;
