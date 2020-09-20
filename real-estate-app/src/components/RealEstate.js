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
            city:'All',
            homeType:'All',
            rooms: 0,
            min_price: 0,
            max_price: 1000000,
            min_floor_space: 0,
            max_floor_space: 50000,
            Finished_basement: false,
            elavator: false,
            swimming_pool: false,
            gym: false,
            populateFormsData: '',
            sortby: 'price-dsc',
        }
        this.change=this.change.bind(this)
        this.filteredData = this.filteredData.bind(this)
        this.populateForms = this.populateForms.bind(this)
    }

    change(event) {
        let name = event.target.name
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state)
            this.filteredData()
        })
        

    }

    componentWillMount(){
        let listingData = this.state.listingData.sort((a,b) => {
            return a.price - b.price
        })


        this.setState({
            listingData
        })
    }


    filteredData() {
        let newData = this.state.listingData.filter((item) => {
            return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorspace >= this.state.min_floor_space && item.floorspace <= this.state.max_floor_space && item.rooms >= this.state.rooms
        })

        if(this.state.city != "All") {
            newData = newData.filter((item) => {
                return item.city == this.state.city
            })
        }

        if(this.state.homeType != "All") {
            newData = newData.filter((item) => {
                return item.homeType == this.state.homeType
            })
        }


        if(this.state.sortby == 'price-dsc') {
            newData = newData.sort((a,b) => {
                return a.price - b.price
            })
        }
        
        if(this.state.sortby == 'price-asc') {
            newData = newData.sort((a,b) => {
                return b.price - a.price
            })
        }




        this.setState({
            filteredData:newData
        })
    }

    populateForms() {
        //city
        let cities = this.state.listingData.map((item) => {
           return item.city
        })
        cities = new Set(cities)
        cities = [...cities]

        cities = cities.sort()


        ///homeType
        let homeTypes = this.state.listingData.map((item) => {
            return item.homeTypes
         })
         homeTypes = new Set(homeTypes)
         homeTypes = [...homeTypes]

         homeTypes = homeTypes.sort()


        // bedrooms
        let bedRooms = this.state.listingData.map((item) => {
            return item.bedRooms
         })
         bedRooms = new Set(bedRooms)
         bedRooms = [...bedRooms]

         bedRooms = bedRooms.sort()

         this.setState({
             populateFormsData:{
                 homeTypes,
                 bedRooms,
                 cities
             }
         }, () => {
             console.log(this.state)
         })
    }



    render() {
        return (
            <div>
                <Header/>
                <section id="content-area">
                    <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
                    <Listings listingData={this.state.filteredData}  change ={this.change}/>
                </section>
            </div>
        )
    }
}
