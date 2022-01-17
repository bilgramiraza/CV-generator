import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
export default class app extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
