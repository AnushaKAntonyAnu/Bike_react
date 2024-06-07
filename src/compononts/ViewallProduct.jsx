import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewallProduct = () => {
    const [data, changeData] = useState(
        [
            { "brand": "Hero", "name": "Splender", "Price": "40,000", "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_1nSYe75vEJKX96-49rXiNF7koL71mnFdQ&s"},
            { "brand": "Bajaj", "name": "Pulsar", "Price": "60,000", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm76DFvXtyfDBmLI8SWxTDWYwAu3Iqr7o8xw&s"},
            { "brand": "Yamaha", "name": "YZF Series", "Price": "25,000", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVqRKcpFvpo9dMDuyZWNZTS0y-Sbb-FwaNQ&s" },
            { "brand": "Yamaha", "name": "YZF Series", "Price": "25,000", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7scz_sGQAB6RZpxiJkOhh4jW3xvHNqFsWw&s" },
            { "brand": "Yamaha", "name": "YZF Series", "Price": "25,000", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatzvyAJYjYqqvfZnGBZHHQhO6jxUWpsNrxQ&s" },
            { "brand": "Yamaha", "name": "YZF Series", "Price": "25,000", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmjBFd_d3mbKdHLnErf3ZG1raj83qICsTWw&s" },
            { "brand": "Yamaha", "name": "YZF Series", "Price": "25,000", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVmsn8f32E0DFiHvqT7yhsRP3knQhXZuo7w&s" },
            { "brand": "Yamaha", "name": "YZF Series", "Price": "25,000", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffE2U56EhXbV-TU5PYpk6BN-r9x59HuEuaw&s" }
        ]
    )



    return (
        <div>
            <NavBar />
            <h3 align="center" ><u>ViewAll Bike</u></h3><br></br>
            <div className="container">

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card" >
                                            <img height="200px" src={value.img} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.brand}</h5>
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.Price}</p>
                                                <a href="#" class="btn btn-primary">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>

                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallProduct