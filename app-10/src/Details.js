import React, { Component } from "react"
import axios from 'axios'
import "./product.css"

class Details extends Component {
    constructor() {
        super()
        this.state= {
            product: {}
        };
    }

    componentDidMount() {
        axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({product: res.data});
        })
    }

    render() {
        const product = this.state.product;
        
        const details = (
            <div className="details">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <h3>Price: $ {product.price}.00</h3>
            </div>
        )
         return (
            <div>
                {details}
            </div>
    )}
}

export default Details;