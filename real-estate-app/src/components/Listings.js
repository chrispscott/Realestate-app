import React, { Component } from 'react'

export default class Listings extends Component {
    render() {
        return (
            <section className="listings">

                <section className="search-area">
                    <input type="text" name="search" />
                </section>


                <section className="sortby">
                    <div> 390 results found</div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby">
                            <option value="price-asc">Highest Price</option>
                            <option value="price-asc">Lowest Price</option>
                        </select>
                        <div className="view">
                            <i className="fas fa-list"></i>
                            <i className="fas fa-bars"></i>
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
                                </div>
                            </div>
                        </div>

                    </div>


                </section>



                <section className="pagination">

                </section>


                
            </section>
        )
    }
}
