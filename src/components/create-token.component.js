import React, {Component} from 'react';
import axios from 'axios';

export default class CreateToken extends Component {

    constructor(props){
        super(props);

        this.state = {
            tokenName: '',
            priceUsd: ''
        }

        // this.onTokenNameChange = this.onTokenNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

    }

    // onTokenNameChange(e){
    //     this.setState({
    //         tokenName: e.target.value
    //     })
    // }

    onValueChange(e){
        this.setState({
            [e.target.dataset.name] : e.target.value
        })
    };

    onSubmit(e){
        e.preventDefault();

        const crypto = {
            tokenName: this.state.tokenName,
            priceUsd: this.state.priceUsd
        }

        axios.post('http://localhost:5000/crypto/add', crypto)
            .then(res => window.location = "/")
            .catch(err => console.log('Error: ' + err));
    }

    render(){
        return(
            <div className="container">
                <h1>Add Token</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Token Name</label>
                        <input type="text" className="form-control" data-name="tokenName" required onChange={this.onValueChange} />
                    </div>

                    <div className="form-group">
                        <label>Price in USD</label>
                        <input type="number" step="0.01" className="form-control" data-name="priceUsd" required onChange={this.onValueChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
                



            </div>
        )
    }

}