import React, { Component } from "react";

import AddData from "./components/AddData";
import TableData from "./components/TableData";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allData: [],
        };

        this.appendData = this.appendData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    appendData(data) {
        this.setState({
            allData: [...this.state.allData, data],
        });
    }

    deleteData(index) {
        this.setState({
            allData: this.state.allData.filter((_, i) => i !== index),
        });
    }

    render() {
        return (
            <div className="App">
                <AddData appendData={this.appendData} />
                <TableData
                    allData={this.state.allData}
                    deleteData={this.deleteData}
                />
            </div>
        );
    }
}

export default App;