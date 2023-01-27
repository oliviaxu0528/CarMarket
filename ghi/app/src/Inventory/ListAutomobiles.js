import React from 'react';

export default function AutomobileList(x){
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                {x.automobile.map((automobile, index) => {
                    return (
                        <tr key={index}>
                            <td>{ automobile.vin }</td>
                            <td>{ automobile.color }</td>
                            <td>{ automobile.year }</td>
                            <td>{ automobile.model.name }</td>
                            <td>{ automobile.model.manufacturer.name }</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    );
  }
