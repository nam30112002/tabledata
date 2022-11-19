import React, { Component } from "react";

class AddData extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let id = event.target.id.value;
        let fullname = event.target.fullname.value;
        let dob = event.target.dob.value;
        let email = event.target.email.value;

        if (!id || !fullname || !dob || !email) return;

        this.props.appendData({
            id: id,
            fullname: fullname,
            dob: dob,
            email: email,
        });

        event.target.id.value = "";
        event.target.fullname.value = "";
        event.target.dob.value = "";
        event.target.email.value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="id" placeholder="MSSV" />
                <input type="text" name="fullname" placeholder="Ho va ten" />
                <input type="text" name="dob" placeholder="Ngay sinh" />
                <input type="text" name="email" placeholder="Email" />
                <button type="submit">Them</button>
            </form>
        );
    }
}

export default AddData;