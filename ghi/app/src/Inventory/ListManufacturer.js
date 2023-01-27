import React from 'react';

function ManufacturersList(x) {

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Manufacturers</th>
                    </tr>
                </thead>
                <tbody>
                {x.manufacturer.map(man => {
                    return (
                        <tr key={man.name}>
                            <td>{ man.name }</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    );
  }

export default ManufacturersList;
