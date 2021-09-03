import React, { Component } from "react";

class LifeCycle extends Component {
  // Urutan Yang dijalankan :
  // 1 Constructor
  // 2 getDerivedStateFromProps
  // 3 render
  // 4 componentdidmount : Kalau tidak ada update maka cukup sampai sini
  // 5 getDerivedStateFromProps
  // 6 shouldComponentUpdate : Haruskah diupdate datanya atau tidak: kalau mengembalikan nilai true maka lanjut diupdate
  // 7 componentDidUpdate : ini akan muncul kalau nomer 6 bernilai true

  constructor(props) {
    // menggunakan super dikarenakan menggunakan component
    super(props);
    this.state = {
      name: "Fathan",
      count: 1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     name: "Azka",
    //   });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // Akan muncul state berikutnya dan state saat ini, kegunaannya untuk bisa membandingkan state sebelumnya dan sesudahnya
    console.log("nextState: ", nextState);
    console.log("ThisState: ", this.state);

    // Ketika state count sudah mencapai 4 maka angka tidak akan bertambah
    if (this.state.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      // Ketika diklik maka akan bertambah terus sampai angka ke 4
      <button onClick={this.handleClick}>Klik Aja {this.state.count}</button>
    );
  }
}

export default LifeCycle;
