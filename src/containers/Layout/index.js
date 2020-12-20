import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar';
// import SideDrawer from '../../components/Navigation/SideDrawer';
import Footer from '../../components/Footer';
import Category from '../../components/Category';
import ProductList from '../../components/ProductList';

import data from '../../data/shoes.json';
// import classes from './style.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
    shoes: [...data],
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };

  searchHandler = event => {
    let productName = event.target.value;

    if (productName) {
      let productFound = this.state.shoes.filter(
        prod => prod.title === productName,
      );

      this.setState({
        shoes: productFound,
      });
    }

    return this.state.shoes;
  };

  render() {
    return (
      <>
        <Toolbar
          drawerToggleClicked={this.SideDrawerToggleHandler}
          searchListProduct={this.searchHandler}
        />

        {/* <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        /> */}

        <Category />

        <ProductList data={this.state.shoes} showId={id => console.log(id)} />
        {/* <main className={classes.Content}>{this.props.children}</main> */}

        <Footer />
      </>
    );
  }
}

export default Layout;
