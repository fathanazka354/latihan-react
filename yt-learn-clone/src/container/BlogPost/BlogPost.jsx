import axios from "axios";
import React, { Component, Fragment } from "react";
import Post from "../Post/Post";
import "./BlogPost.css";

class BlogPost extends Component {
  state = {
    post: [],
    blogPostNew: {
      id: 1,
      title: "",
      body: "",
    },
  };

  getAPIURL = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  };

  postDataAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.blogPostNew).then(
      (res) => {
        this.getAPIURL();
        console.log(res);
      },
      (err) => {
        console.log("error :", err);
      }
    );
  };

  componentDidMount() {
    //   Menggunakan fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    //   Menggunakan axios
    this.getAPIURL();
  }

  handleRemove = (id) => {
    axios.delete("http://localhost:3004/posts/" + id).then((res) => {
      this.getAPIURL();
    });
  };

  handleChange = (e) => {
    let AmbilAllObj = { ...this.state.blogPostNew };
    AmbilAllObj[e.target.name] = e.target.value;
    let timestamp = new Date().getTime();
    AmbilAllObj["id"] = timestamp;
    this.setState({
      blogPostNew: AmbilAllObj,
    });
  };

  handleSubmit = () => {
    this.postDataAPI();
  };
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="add title"
            onChange={this.handleChange}
          />
          <label htmlFor="blogcontent">Blog Content</label>
          <textarea
            name="body"
            id="body-content"
            cols="30"
            rows="10"
            placeholder="add body content"
            onChange={this.handleChange}
          ></textarea>
          <button onClick={this.handleSubmit}>Add Blog</button>
        </div>
        {this.state.post.map((pos) => {
          return <Post key={pos.id} data={pos} onRemove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}
export default BlogPost;

// Cara membuat submit berdasarkan value
// 1 buat event pada inpuutannya dan tentukan nama handleEventnya
// 2 buat handleEventnya
// 3 Ambil semua properti yang ada di dalam object
// 4 tentukan target name dan isikan dengan value targetnya
// 5 tulis setstate dengan ketentuan object yang akan diubah

// Cara membuat event click pada button
// 1 buatt nama event pada buttonnya
// 2 buat event handlenya
// 3 tentukan jenis methof yang akan dipilih, yaitu menggunakan methode post
// 4 buat functionnya agar mempermudah dalam penggunaan
// 5 karena menggunakan methode post maka menggunakan yang post
// 6 setelah data dipost maka data diambil kembali updateanya
// 7 maka data berhasil di mounting

// Perbedaan get dengan post: get cukup mencantumkan URLnya saja, apabila menggunakan effect tambahan maka cukup menambahkan ? lalu diikuti URLnya. sedangkan post: menuliskan URL beserta data yang akan dikirim, lalu memanggil get untuk menampilkan data secara real time
