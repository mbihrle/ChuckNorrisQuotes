import { React, Component } from "react";

import "./App.css";
import Card from "../components/Card/Card";

class App extends Component {
    constructor() {
        super();
        this.state = {
            quote: "Hallo",
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => response.json())
            .then((quote) => {
                this.setState({ quote: quote.value }, () =>
                    console.log("myState: ", this.state)
                );
            });
    }

    render() {
        console.log("render");
        return (
            <div>
                <div className="flex">
                    <div className="w-60 pa1"></div>
                    <div className="w-30 pa1 tc">
                        <h1 id="header" className="mt5">
                            Zitate Chuck Norris
                        </h1>
                        <div className="mt7">
                            <Card quote={this.state.quote} />
                        </div>
                    </div>
                    <div className="w-10 pa1"></div>
                </div>
            </div>
        );
    }
}

export default App;
