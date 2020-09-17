import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <section id="filter">
                <div className="inside">
                
                <select name="neighbourhood" onChange={this.props.change}>
                    <option value="Ridgewood">Ridgewood</option>
                    <option value="Hicksville">Hicksville</option>
                    <option value="Glen Cove">Glen Cove</option>
                    <option value="NEW YORK">NEW YORK</option>
                    <option value="queens">queens</option>
                </select>
                <select name="housetype" onChange={this.props.change}>
                    <option value="Ranch">Ranch</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Studio">Studio</option>
                    <option value="Room">Room</option>
                </select>
                <select name="rooms" onChange={this.props.change}>
                    <option value="1">1 BR</option>
                    <option value="2">2 BR</option>
                    <option value="3">3 BR</option>
                    <option value="4">4 BR</option>
                    <option value="5">5 BR</option>
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
