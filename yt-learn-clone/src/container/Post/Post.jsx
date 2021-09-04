import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img
          src="https://static.turbosquid.com/Preview/2015/04/04__12_00_57/1.1.jpgfcb5180e-eb5b-4d3e-a6f3-bef550feba26DefaultHQ.jpg"
          alt=""
          width="250px"
          height="250px"
        />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button className="update" onClick={() => props.onUpdate(props.data)}>
          Update
        </button>
        <button
          className="remove"
          onClick={() => props.onRemove(props.data.id)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};
export default Post;

// Menghapus API:
// 1 membuat event dan value yang diterima
// 2 membuat function remove
// 3 membuat function get URLAPI untuk mempermudah
// 4 membuat event di component button dengan menambahkan event yang diambil
