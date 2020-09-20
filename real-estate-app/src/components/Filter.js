import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(){
        super()
        this.state ={
            
        }
        this.cities = this.cities.bind(this)
    }






    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.props.populateAction()
    }

    cities(){
        if(this.props.globalState.populateFormsData.cities != undefined) {
            let { cities} =this.props.globalState.populateFormsData
            console.log(cities)
            return cities.map((item) => {
                return(
                    <option key={item} value={item}>{item}</option>
                )   
            })
        }
    }


    homeTypes(){
        if(this.props.globalState.populateFormsData.homeTypes != undefined) {
            let { homeTypes } =this.props.globalState.populateFormsData
            console.log(homeTypes)
            return homeTypes.map((item) => {
                return(
                    <option key={item} value={item}>{item}</option>
                )   
            })
        }
    }
    bedrooms(){
        if(this.props.globalState.populateFormsData.bedrooms != undefined) {
            let { bedrooms } =this.props.globalState.populateFormsData
            console.log(bedrooms)
            return bedrooms.map((item) => {
                return(
                    <option key={item} value={item}>{item}</option>
                )   
            })
        }
        
    }




    render() {
        return (
            <section id="filter">
                <div className="inside">

                <label htmlFor="city">City</label>
                <select name="city" onChange={this.props.change}>
                    <option value="All">All</option>
                    {this.cities()}
                </select>

                <label className=" homeType">Home Type</label>
                <select name="homeType" onChange={this.props.change}>
                    <option value="All">All</option>
                    <option value="Ranch">Ranch</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Studio">Studio</option>
                    <option value="Room">Room</option>
                    <option value="Condo">Condo</option>
                </select>

                <label className="rooms">Rooms</label>
                <select name="rooms" onChange={this.props.change}>
                    <option value="0">0+</option>
                    <option value="1">1+ BR</option>
                    <option value="2">2+ BR</option>
                    <option value="3">3+ BR</option>
                    <option value="4">4+ BR</option>
                    <option value="5">5+ BR</option>
                </select>
                <div className="filters price">
                    <span className="title">price</span>
                    <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}></input>
                    <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}></input>
                </div>
                <div className="filters floor-space">
                    <span className="title">floor space</span>
                    <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space}></input>
                    <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space}></input>
                </div>
                <div className="filters extras">
                    <span className="title">Extras</span>
                    <label>
                        <span>Elevators </span>
                        <input type="checkbox" value="elavator" name="elavator" onChange={this.props.change}></input>
                    </label>
                    <label>
                        <span>Swimmiing Pool </span>
                        <input type="checkbox" value="swimming_pool" name="swimming_pool" onChange={this.props.change}></input>
                    </label>
                    <label>
                        <span>Finished basement </span>
                        <input type="checkbox" value="Finished_basement" name="Finished_basement" onChange={this.props.change}></input>
                    </label>
                    <label>
                        <span>Gym</span>
                        <input type="checkbox" value="gym" name="gym" onChange={this.props.change}></input>
                    </label>
                </div>
                </div>
                

            </section>
        )
    }
}
