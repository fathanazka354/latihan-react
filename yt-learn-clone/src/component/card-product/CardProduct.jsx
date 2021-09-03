import React, { Component } from "react";

class CardProduct extends Component {
  // Mengubah nilai yang diinputkan perlu diinisialisasi
  state = {
    order: 0,
    name: "Fathan",
  };

  // Mengubah nilai yang dikurangi pada yang kita inputkan dan pada troley
  handleMinus = () => {
    // Apbaila state nya lebih dari 0 maka jalankan fungsi ini
    if (this.state.order > 0) {
      // Mengubah nilainya
      this.setState(
        {
          order: this.state.order - 1,
        },
        // Mengubah nilai yang ada di troley dengan mengirimkan nilai state ordr yang terbaru
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  // Mengubah nilai yang dikurangi pada yang kita inputkan dan pada troley
  handlePlus = () => {
    // Mengubah nilainya
    this.setState(
      {
        order: this.state.order + 1,
      },
      // Mengubah nilai yang ada di troley dengan mengirimkan nilai state ordr yang terbaru

      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  // Setelah dirubah maka perlu function untuk mengirimkan value ke file product
  handleCounterChange = (valueKirimanStateBaru) => {
    // Mengirimkan nilai ke product
    this.props.onHandleCounterChange(valueKirimanStateBaru);
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="/product.jpg" height="400px" alt="" />
        </div>
        <p className="product-title">Kosmetik Ampuh</p>
        <p className="product-price">Rp 120000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
