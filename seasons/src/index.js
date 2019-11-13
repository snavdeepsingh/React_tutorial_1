import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            lng: null,
            errorMessage: ''
        };

        
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(position => {
            this.setState( {
                lat:position.coords.latitude,
                lng:position.coords.longitude
            })
        },
        err => {
            this.setState({errorMessage: err.message})
        })
    }

    componentDidUpdate(){
        console.log("updated");
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            )
        }
        if(!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            )
        }

        return <Spinner message="Please accept location request" />
    }

    render () {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


