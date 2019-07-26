import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            everyThing: [],
            img: '',
            productName: "",
            price: ''
        }
    }
    handleChange(e){
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addNewThing(){
        const {productName: thing_name, price: thing_price, img: thing_img} = this.state
        axios.post('/api/things', {thing_name,thing_price,thing_img})
        .then(res => {
            this.setState({
                everyThing: res.data
            })
        })
    }
    removeThing()  {
        document.getElementsByClassName("inputs").value = ""
    }
    render() {
        return(
            <div>
                <h1>Form</h1>
                <input  className='inputs' onChange={e => this.handleChange(e)} placeholder="Image URL" type="text" name="img" />
                <input  className='inputs' onChange={e => this.handleChange(e)} placeholder="Product Name" type="text" name="productName" />
                <input  className='inputs' onChange={e => this.handleChange(e)} placeholder="Price" type="text" name="price" />
                <button onClick={this.addNewThing} >Add to Inventory</button>
                <button onClick={this.removeThing} >Cancel</button>
            </div>
        )
    }
}