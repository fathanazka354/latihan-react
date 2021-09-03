import React, { Component } from "react";
// import YoutubeComp from "../component/youtube-comp/YoutubeComp";
// import Product from "../component/product/Product";
import LifeCycle from "./LifeCycleComp/LifeCycle";
import BlogPost from "./BlogPost/BlogPost";

class Home extends Component {
  state = {
    showComponents: true,
    showParagraph: true,
    // count: this.props.count,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showComponents: false,
      });
    }, 10000);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (this.state.count >= 4) {
  //       this.setState({
  //         showParagraph: false,
  //       });
  //     }
  //   }
  render() {
    return (
      <div>
        {/* <YoutubeComp
          time="7.12"
          title="Tutorial React JS #1"
          name="Fathan Azka"
        />
        <YoutubeComp
          time="4.12"
          title="Tutorial React JS #2"
          name="Fathan Azka"
        />
        <YoutubeComp
          time="5.12"
          title="Tutorial React JS #3"
          name="Fathan Azka"
        />
        <YoutubeComp
          time="2.12"
          title="Tutorial React JS #4"
          name="Fathan Azka"
        />
        <YoutubeComp
          time="16.12"
          title="Tutorial React JS #5"
          name="Fathan Azka"
        />

        <p>Counter</p>
        <hr />
        <Product /> */}
        {/* {this.state.showComponents ? <LifeCycle /> : <p>Maaf Kosong</p>} */}
        {/* {this.state.showParagraph ? null : <p>Maaf sudah pull</p>} */}
        <BlogPost />
      </div>
    );
  }
}
export default Home;
