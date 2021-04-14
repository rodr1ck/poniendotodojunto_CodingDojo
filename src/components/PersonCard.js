import React, { Component } from 'react';

class PersonCard extends Component {    

    constructor(props) {
        super(props);
        this.state = {
          age: props.age,
        };
        console.log(`%cConstructor`, `color: yellow; font-size: 2rem;`)
    }

    happyBirthday = () => {
        this.setState({ age: this.state.age + 1 });
      };

    render() {        
        return (            
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>     
                <h3>Age: {this.state.age} </h3> 
                <h3>Hair color: {this.props.hairColor} </h3>  
                <button onClick={this.happyBirthday}>Birthday button for {this.props.firstName}, {this.props.lastName}</button>
            </div>
        );    
    }
}

export default PersonCard;