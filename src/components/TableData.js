import React, { Component } from "react";

class TableData extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.dataTable = this.dataTable.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    dataTable() {
        let { allData } = this.props;

        let dataTableForm = [];

        for (let i = 0; i < allData.length; i++) {
            dataTableForm.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{allData[i].id}</td>
                    <td>{allData[i].fullname}</td>
                    <td>{allData[i].dob}</td>
                    <td>{allData[i].email}</td>
                    <td>
                        <button onClick={this.deleteItem}>Xoa</button>
                    </td>
                </tr>
            );
        }

        return dataTableForm;
    }

    deleteItem(event) {
        let { rowIndex } = event.target.parentNode.parentNode;
        this.props.deleteData(rowIndex - 1);
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>MSSV</th>
                            <th>Ho ten</th>
                            <th>Ngay sinh</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                        {this.dataTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;