import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {  // every component undergoes life cyle method.
    state = {      //state is like a global object contains all specific thing in that specific component.
        advice:'',
    };

    componentDidMount() {     //componentDidMount is a life cycle method.
        this.fetchAdvice();
    }
  
    // method is nothing but a function belongs to a class. thats why we didnt use const in fetchAvice.
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip;
            this.setState({advice});
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        const {advice} = this.state;
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>Give me advice!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;