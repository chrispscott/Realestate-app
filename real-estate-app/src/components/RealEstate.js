import React, { Component } from 'react'
import Header from './Header';
import Filter from './Filter';
import Listings from "./Listings";
import listingData from './listingData';

export default class RealEstate extends Component {
    constructor(){
        super()
        this.state ={
            listingData,
            min_price: 0,
            max_price: 1000000,
            min_floor_space: 0,
            max_floor_space: 50000,
            Finished_basement: false,
            elavator: false,
            swimming_pool: false,
            gym: false,
        }
        this.change=this.change.bind(this)
    }

    change(event) {
        let name = event.target.name
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state)
        })
        

    }


    render() {
        return (
            <div>
                <Header/>
                <section id="content-area">
                    <Filter change={this.change} globalState={this.state} />
                    <Listings listingData={this.state.listingData} />
                </section>
            </div>
        )
    }
}
