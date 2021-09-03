import "./Product.css";
import CardProduct from "../../component/card-product/CardProduct";
import React, { Component, Fragment } from "react";

class Product extends Component {
  // Diinisialisasi dulu apa saja value yang dibutuhkan
  state = {
    order: 0,
    name: "Fathan",
  };

  //   Untuk mengubah vaalue yang ada di troli sesuai dengan yang diinputkan
  //   1
  handleCounterChange = (valueDikirimDariCardProduct) => {
    //   Apabila menggunakan statefull component/ class maka perlu memanggail menggunakan this.
    this.setState({
      order: valueDikirimDariCardProduct,
    });
  };
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="/logo.jpg" alt="" width="50px" />
          </div>
          <div className="troley">
            <img src="/shopping-cart.png" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>

        {/* menerima nilai dan mengirim event yang dibutuhkan */}
        {/* Apabila menggunakan event maka menggunkan arrow function */}
        <CardProduct
          onHandleCounterChange={(valueDariCardProduct) =>
            this.handleCounterChange(valueDariCardProduct)
          }
        />
      </Fragment>
    );
  }
}

export default Product;
