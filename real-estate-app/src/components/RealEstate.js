import React, { Component } from 'react'
import Header from './Header';
import Filter from './Filter';
import Listings from "./Listings";
import listingData from './listingData';

export default class RealEstate extends Component {
    constructor(){
        super()
        this.state ={
            listingData
        }
    }


    render() {
        return (
            <div>
                <Header/>
                <section id="content-area">
                    <Filter/>
                    <Listings listingData={this.state.listingData} />
                </section>
            </div>
        )
    }
}
