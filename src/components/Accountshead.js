import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";



class AccountsHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountHeadName: '',
      AccountType: ''
    };

    this.changeAccountsName = this.changeAccountsName.bind(this)
    this.changeAccountType = this.changeAccountType.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeAccountsName(event) {
    this.setState({
      AccountHeadName:event.target.value
    });
  }

  changeAccountType(event) {
    this.setState({
      AccountType: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const registered = {
      AccountHeadName: this.state.AccountHeadName,
      AccountType: this.state.AccountType
    };

    axios.post("http://localhost:3000", registered).then((response) => console.log(response.data));
    window.location = './Submitted';

    this.setstate({
      AccountHeadName: '',
      AccountType:''
    });
  }

  render() {
    
    return (
      <div className="container">
        <h2>AccountsHead</h2>
        <p>This is test description</p>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Account Head Name</label>
            <span>*This field is required</span>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Account Head Name"
              onChange={this.changeAccountsName}
              value={this.state.AccountHeadName}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Account Type</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={this.changeAccountType}
              value={this.state.AccountType}
            >
              <option hidden selected>
                Account Type
              </option>
              <option>Assets</option>
              <option>Liabilities</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AccountsHead;
