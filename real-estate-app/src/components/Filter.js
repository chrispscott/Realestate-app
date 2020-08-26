import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <section id="filter">
                <div className="inside">
                
                <select name="neighbourhood">
                    <option>Ridgewood</option>
                    <option>Hicksville</option>
                    <option>Glen Cove</option>
                    <option>NEW YORK</option>
                </select>
                <select name="housetype">
                    <option>Ridgewood</option>
                    <option>Hicksville</option>
                    <option>Glen Cove</option>
                    <option>NEW YORK</option>
                </select>
                <select name="rooms">
                    <option>1 BR</option>
                    <option>2 BR</option>
                    <option>3 BR</option>
                    <option>4 BR</option>
                    <option>5 BR</option>
                </select>
                <div className="filters price">
                    <span className="title">price</span>
                    <input type="text" name="min-price" className="min-price"></input>
                    <input type="text" name="max-price" className="max-price"></input>
                </div>
                <div className="filters floor-space">
                    <span className="title">floor space</span>
                    <input type="text" name="min-floor-space" className="min-floor-space"></input>
                    <input type="text" name="max-floor-space" className="max-floor-space"></input>
                </div>
                <div className="filters extras">
                    <span className="title">Extras</span>
                    <label>
                        <span>Elevators </span>
                        <input type="checkbox" value="elavator" name="extras"></input>
                    </label>
                    <label>
                        <span>Swimmiing Pool </span>
                        <input type="checkbox" value="swimming-pool" name="extras"></input>
                    </label>
                    <label>
                        <span>Finished basement </span>
                        <input type="checkbox" value="Finished basement" name="extras"></input>
                    </label>
                    <label>
                        <span>Gym</span>
                        <input type="checkbox" value="gym" name="extras"></input>
                    </label>
                </div>
                </div>
                

            </section>
        )
    }
}
