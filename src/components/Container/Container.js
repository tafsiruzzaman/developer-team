import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';

const Container = () => {
    const [employees, setEmployees] = useState([]);
    useEffect( () => {
        fetch('./employees.JSON')
        .then(res => res.json())
        .then(data =>setEmployees(data))
    }, []);
    return (
        <div className='row'>
            <div className="col-lg-9">
                <div className="row row-cols-1 row-cols-md-3 gy-4 gx-lg-4 mb-4">
                    {
                        employees.map(employee => <Employee key={employee.key} employee={employee}></Employee>)
                    }
                </div>
            </div>
            <div className="col-lg-3 bg-danger">
                <h1>hi</h1>
            </div>
        </div>
    );
};

export default Container;