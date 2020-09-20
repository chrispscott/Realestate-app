import React, { Component } from 'react'
import listingData from './listingData'

export default class Listings extends Component {
    constructor(){
        super()
        this.state ={
            
        }
        this.loopListing = this.loopListing.bind(this)
    }

    loopListing () {   
        let {listingData} = this.props

        if(listingData == undefined || listingData.length == 0) {
            return "sorry your filter did not match any listing"
        }

        return listingData.map((listing) => {
            return (<div className="col-md-3">
            <div className="listing">
                  <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center` }}>
                       <span className="address"> {listing.address} </span>
                           <div className="details">
   
                           <div className="col-md-3">
                               <div className="user-img"></div>
                           </div>
   
   
                           <div className="col-md-9">
                               <div className="user-details">
                                   <span className="user-name">Nina Smith</span>
                                   <span className="post-date">05/05/2017</span>
                               </div>
                               <div className="listing-details">
                               <div className="floor-space">
                                   <i className="fa fa-square-o" aria-hidden="true"></i>
                               </div>
                                   <span>1000 ft&sup2;</span>
                                   <div className="bedrooms">
                                     <i className="fa fa-bed" aria-hidden="true"></i>
                                       <span>{listing.bedrooms}</span>
                                    </div>
                               </div>
                                <div className="view-btn">
                                               view listing
                                   </div>
                               </div>
   
   
   
                                   </div>
               </div>
               <div className="bottom-info">
                   <span className="price">{listing.price}</span>
                       <span className="location">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                   {listing.city}, {listing.state}
                       </span>
               </div>
           </div>
       </div>)

        })

    }



    render() {
        return (
            <section id="listings">

                <section className="search-area">
                    <input type="text" name="search" />
                </section>


                <section className="sortby-area">
                    <div className="results"> 390 results found</div>
                    <div className="sort-options">
                        <select name="sortby" className="sortby" onChange={this.props.change}>
                            <option value="price-dsc">Lowest Price</option>
                            <option value="price-asc">Highest Price</option>
                        </select>
                        <div className="view">
                        <i className="fa fa-list" aria-hidden="true"></i>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                    </div>
                </section>



                <section className="listings-results">
                   {this.loopListing()} 
                </section>



                <section id="pagination">
                    <ul className="pages">
                        <li> prev</li>
                        <li className="active"> 1</li>
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
