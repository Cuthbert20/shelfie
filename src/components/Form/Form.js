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
        this.addNewThing = this.addNewThing.bind(this)
    }
    componentDidMount(){
        axios.get('/api/things')
        .then(res => {
            this.setState({
                everyThing: res.data
            })
            console.log(res.data)
        }).catch(err => alert(err))
    }
    // handleChange(e){
    //     console.log(e.target.name)
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    //------------------------------------------------------------------------------------------------
    addNewThing() {                                        //don't know why thing_img won't show up
        const {productName: thing_name, price: thing_price, img: thing_img} = this.state
        console.log(this.state.img)
        axios.post('/api/things',{thing_name, thing_price, thing_img})
        .then(res => {
            this.setState({
                everyThing: res.data
            })
        })
        .catch(err => console.log('error is this', err))
    }
    
    removeThing = () => {
        // picking the first element is necessary. couldn't remeber how to pick multi elms
        document.getElementsByClassName("inputs")[0].value = ""
        document.getElementsByClassName("inputs")[1].value = ""
        document.getElementsByClassName("inputs")[2].value = ""

    }
    render() {
        let thingList = this.state.everyThing.map(val => (
            <div key={val.thing_id}>
                <main>
                    {/* THIS Displays fine but, when I try to take the value from my input I am getting a 500 error */}
                    {val.thing_name}
                </main>
            </div>
        ))
        return(
            <div>
                <h1>Form</h1>
                {thingList}
                <input  className='inputs' onChange={e => this.setState({img: e.target.value})} placeholder="Image URL" type="text" name="img" />
                <input  className='inputs' onChange={e => this.setState({productName: e.target.value})} placeholder="Product Name" type="text" name="productName" />
                <input  className='inputs' onChange={e => this.setState({price: e.target.value})} placeholder="Price" type="text" name="price" />
                <button onClick={this.addNewThing} >Add to Inventory</button>
                <button onClick={this.removeThing} >Cancel</button>
                <button  >DELETE</button>
            </div>
        )
    }
}