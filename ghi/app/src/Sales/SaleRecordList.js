import React, { useEffect, useState } from 'react';


function SaleRecordList(salerecord) {
  return (
    <div className="atable table-striped">
        <h1>Sales Records</h1>
            <table
            className="table table-striped table-hover"
            style={{
                backgroundColor: "#f5f5f5",
                marginBottom: "50px",
                borderRadius: 10,
            }}
            >
            <thead>
                <tr>
                <th>Sales person</th>
                <th>Employee Number</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Sale price</th>
                </tr>
            </thead>
            <tbody>
                {salerecord.salerecord.map(salesrecord => {
                    return (
                        <tr key={salesrecord.id}>
                            <td>{salesrecord.salesman.name}</td>
                            <td>{salesrecord.salesman.employee_number}</td>
                            <td>{salesrecord.customer.name}</td>
                            <td>{salesrecord.automobile.vin}</td>
                            <td>{salesrecord.sale_price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  );
}

export default SaleRecordList;