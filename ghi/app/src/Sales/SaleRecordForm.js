import React, {useEffect, useState} from 'react'

function SaleRecordForm() {
    const [automobile, setAutomobile] = useState('');
    const [salesman, setSalesman] = useState('');
    const [customer, setCustomer] = useState('');
    const [sale_price, setSalePrice] = useState('');
    const [automobiles, setAutomobiles] = useState([]);
    const [salesmans, setSalesmans] = useState([]);
    const [customers, setCustomers] = useState([]);


    const handlAutomobileChange = (event) => {
        const value = event.target.value;
        setAutomobile(value);
    }

    const handleSalesmanChange = (event) => {
        const value = event.target.value;
        setSalesman(value);
    }

    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }

    const handleSalePriceChange = (event) => {
        const value = event.target.value;
        setSalePrice(value);
    }

//handle submit post request
    const handleSubmit = async (event) => {
        event.preventDefault();
            const data = {};
            data.automobile = automobile;
            data.salesman = salesman;
            data.customer = customer;
            data.sale_price = sale_price;

        const Url = 'http://localhost:8091/sales/';
        const fetchConfig = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(Url, fetchConfig);
        if (response.ok) {
          const newsale = await response.json();
          setAutomobile('');
          setSalesman('');
          setCustomer('');
          setSalePrice('');
        }
      }

//fetch the automobile, salesman and customer
      const fetchAutomobile = async () => {
        const url = 'http://localhost:8091/automobilevos';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setAutomobiles(data.automobiles);
        }
      }

      const fetchSalesman = async () => {
        const url = 'http://localhost:8091/salesman/';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setSalesmans(data.salesman);
        }
      }

      const fetchCustomer = async () => {
        const url = 'http://localhost:8091/customers/';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setCustomers(data.customers);
        }
      }
      useEffect(() => {
        fetchAutomobile();
        fetchSalesman();
        fetchCustomer();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a sales record</h1>
                    <form onSubmit={handleSubmit} id="create-sales-form">
                        <div className="mb-3">
                            <select value={automobile} onChange={handlAutomobileChange} required id="autmobile" name="automobile" className="form-select">
                                <option value="">Choose an Automobile</option>
                                {automobiles.map((automobile,index) => {
                                    if (automobile.availability === true) {
                                        return (
                                            <option key={index} value={automobile.vin}>
                                                {automobile.vin}
                                            </option>
                                        )
                                    }
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select value={salesman} onChange={handleSalesmanChange} required id="salesman" name="salesman" className="form-select">
                                <option value="">Choose a Sales Person</option>
                                {salesmans.map((salesman,index) => {
                                        return (
                                            <option key={index} value={salesman.name}>
                                                {salesman.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select value={customer} onChange={handleCustomerChange} required id="customer" name="customer" className="form-select">
                                <option value="">Choose a Customer</option>
                                {customers.map((customer,index) => {
                                        return (
                                            <option key={index} value={customer.name}>
                                                {customer.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={sale_price} onChange={handleSalePriceChange} placeholder="Price" required type="number" name="sale_price" id="sale_price" className="form-control"/>
                            <label htmlFor="sale_price">Price</label>
                        </div>
                    <button className="btn btn-primary">Create</button>
                  </form>
                </div>
            </div>
        </div>
    );
    }


export default SaleRecordForm;
