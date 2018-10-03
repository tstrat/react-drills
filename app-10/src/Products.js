import React, { Component } from "react"
import axios from 'axios'
import {Link} from "react-router-dom";
import "./product.css";

class Products extends Component {
    constructor() {
        super()
        this.state= {
            products:[]
        };
    }

    componentDidMount() {
        axios.get("https://practiceapi.devmountain.com/products")
        .then(res => {
            this.setState({products:res.data});
        })
    }


    render() {
        const productList = this.state.products.map((product,i) => 
            product.image ?
            (
                <Link to={`/details/${product.id}`} key={i}>
                    <img src={product.image} alt={product.title}/>
                </Link>
            ) :
            (<h1>{product.title}</h1>)
        )

        return (
            <div>
                <h1>Products</h1>
                {productList}
            </div>
    )}
}

export default Products;