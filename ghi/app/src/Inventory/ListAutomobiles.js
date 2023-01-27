import React, {useEffect, useState} from 'react';


function ListAutomobiles({automobiles, getAutomobile}) {
    if (automobiles === undefined) {
        return null;
    }
        getAutomobile()

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>VIN</th>
                <th>Color</th>
                <th>Year</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {automobiles.map(automobile => {
                return (
                <tr key={automobile.id}>
                    <td>{ automobile.vin}</td>
                    <td>{ automobile.color}</td>
                    <td>{ automobile.year}</td>
                    <td>{ automobile.manufacturer }</td>
                    <td>{ automobile.model }</td>
                </tr>
                );
            })}
            </tbody>
        </table>
    );
    }




export default ListAutomobiles;
