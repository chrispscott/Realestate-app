import React, { Component } from 'react'

export default class Listings extends Component {
    render() {
        return (
            <section id="listings">

                <section className="search-area">
                    <input type="text" name="search" />
                </section>


                <section className="sortby-area">
                    <div className="results"> 390 results found</div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby">
                            <option value="price-asc">Highest Price</option>
                            <option value="price-asc">Lowest Price</option>
                        </select>
                        <div className="view">
                        <i class="fa fa-list" aria-hidden="true"></i>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>
                </section>



                <section className="listings-results">
                    <div className="listing">
                        <div className="listing-img">
                            <span className="Address"> Address</span>
                            <div className="details">
                                <div className="user-img"></div>
                                <div className="user-details">
                                    <span className="user-name">Nina Smith</span>
                                    <span className="post-date">05/05/2017</span>
                                </div>
                                <div className="listing-details">
                                    <div className="floor-space">
                                     <i class="fa fa-square-o" aria-hidden="true"></i>
                                    </div>
                                    <span>1000 ft&sup2;</span>
                                    <div className="bedrooms">
                                        <i className="fa fa-bed" aria-hidden="true"></i>
                                        <span>3 bedrooms</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-info">
                            <span>$1000 / month</span>
                            <span>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                Glen Cove NY
                            </span>
                        </div>
                    </div>
                </section>



                <section className="pagination">
                    <ul className="pagination-nums">
                        <li> prev</li>
                        <li> 1</li>
                        <li> 2</li>
                        <li> 3</li>
                        <li> 4</li>
                        <li> 5</li>
                        <li> next</li>
                    </ul>
                </section>


                
            </section>
        )
    }
}
