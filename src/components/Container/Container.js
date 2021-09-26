import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Team from '../Team/Team';

const Container = () => {
    const [employees, setEmployees] = useState([]);
    useEffect( () => {
        fetch('./employees.JSON')
        .then(res => res.json())
        .then(data =>setEmployees(data))
    }, []);
    const [team, setTeam] = useState([]);
    
    const handleAddToTeam = (employee) => {
        const newTeam = [...team, employee];
        setTeam(newTeam);
    };
    return (
        <div className='row'>
            <div className="col-lg-9">
                <div className="row row-cols-1 row-cols-md-3 gy-4 gx-lg-4 mb-4">
                    {
                        employees.map(employee => <Employee key={employee.key} employee={employee} handleAddToTeam={handleAddToTeam}></Employee>)
                    }
                </div>
            </div>
            <div className="col-lg-3">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default Container;