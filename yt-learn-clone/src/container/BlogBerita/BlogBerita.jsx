import "./BlogBerita.css";
import React, { Component, Fragment } from "react";
import PostBerita from "../PostBerita/PostBerita";
import axios from "axios";

class BlogBerita extends Component {
  // 1 Membuat state
  state = {
    //   Untuk data kosong sehingga bisa memasukkan data yang udah diinputkan
    post: [],
    // Mengambil data yang sudah ada
    blogPostNew: {
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  // 4 membuat function getAPIURL
  getAPIURL = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  };

  // Membuat function Post URL
  postAPIURL = () => {
    axios
      .post("http://localhost:3004/posts", this.state.blogPostNew)
      .then((res) => {
        this.getAPIURL();
        console.log(res);
      });
  };

  putDataURL = () => {
    axios
      .put(
        "http://localhost:3004/posts/" + this.state.blogPostNew.id,
        this.state.blogPostNew
      )
      .then((res) => {
        console.log(res);
        this.getAPIURL();
        this.setState({
          isUpdate: false,
          blogPostNew: {
            id: 1,
            title: "",
            body: "",
          },
        });
      });
  };

  // 6 Membuat mountingnya
  componentDidMount() {
    this.getAPIURL();
  }

  // 7 Membuat handleRemoove
  handleRemove = (id) => {
    axios.delete("http://localhost:3004/posts/" + id).then((res) => {
      this.getAPIURL();
    });
    // console.log(id);
  };

  // Membuat Handel ketika input sedang diketik
  handleChange = (e) => {
    let AmbilSemuaData = { ...this.state.blogPostNew };
    AmbilSemuaData[e.target.name] = e.target.value;
    // console.log(AmbilSemuaData);
    let timestamp = new Date().getTime();
    if (!this.state.isUpdate) {
      AmbilSemuaData["id"] = timestamp;
    }
    this.setState({
      blogPostNew: AmbilSemuaData,
    });
  };

  // 8 Memebuat handle submitnya
  handleSubmit = () => {
    // e.preventDefault();
    if (this.state.isUpdate) {
      this.putDataURL();
    } else {
      this.postAPIURL();
    }
  };

  handleUpdate = (data) => {
    this.setState({
      blogPostNew: data,
      isUpdate: true,
    });
    console.log(data);
  };
  render() {
    // 2 Membuat HTML + CSS
    // 3 membuat eventnya
    return (
      <Fragment>
        <h1>Input Berita</h1>
        <form action="">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="input Title"
            onChange={this.handleChange}
            value={this.state.blogPostNew.title}
          />

          <label htmlFor="content">Content</label>
          <textarea
            name="body"
            id="content"
            cols="30"
            rows="10"
            placeholder="Input Content"
            onChange={this.handleChange}
            value={this.state.blogPostNew.body}
          ></textarea>
          <button className="submit" onClick={this.handleSubmit}>
            Save
          </button>
        </form>

        <div className="container">
          <h1>Blog Berita</h1>
          {this.state.post.map((pos) => {
            return (
              <PostBerita
                key={pos.id}
                data={pos}
                onRemove={this.handleRemove}
                onUpdate={this.handleUpdate}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}
export default BlogBerita;
