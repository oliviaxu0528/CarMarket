import React from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phone_number: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({address: value})
    }

    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({phone_number: value})
    }


    async componentDidMount() {
        const url = 'http://localhost:8100/api/sales_rest/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({customer: data.customer})
        }
    }

    async handleSubmit(event) {
      event.preventDefault();
      const data = {...this.state};
      delete data.customer;
      const url = 'http://localhost:8090/api/sales_rest/';
      const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
              'Content-Type': 'application/json',
          },
      };
      const response = await fetch(url, fetchConfig);
      if (response.ok) {
          const newCustomer = await response.json();
          const cleared = {
              name: '',
              address: '',
              phone_number: '',
          };
          this.setState(cleared);
      }
  }

    render() {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a New Customer</h1>
                <form onSubmit={this.handleSubmit} id="create-customer-form">
                <div className="form-floating mb-3">
                    <input value={this.state.customer} onChange={this.handleCustomerChange} placeholder="Customer" required type="text" name="customer" id="customer" className="form-control" />
                    <label htmlFor="customer">Customer</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.address} onChange={this.handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                    <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.phone_number} onChange={this.handlePhoneNumberChange} placeholder="PhoneNumber" required type="text" name="phone_number" id="phone_number" className="form-control" />
                    <label htmlFor="phone_number">Phone Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
}

export default CustomerForm;
