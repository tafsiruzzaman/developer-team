import React from 'react';
import './Employee.css'

const Employee = (props) => {
    const {name, designation, salary, age, address, img} = props.employee;
    return (
        <div className="col">
            <div className="card card_body shadow h-100">
                <div className="d-flex justify-content-center mt-3">
                    <img src={img} className="card-img-top rounded-circle w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title card-title-class"><span className="title-span">Name:</span> {name}</h5>
                    <h4 className="card-text-class">Designation: {designation}</h4>
                    <h4 className="card-text-class">Age: {age}</h4>
                    <h4 className="card-text-class">Address: {address}</h4>
                    <h4 className="card-text-class">Salary: $ {salary}</h4> <br />
                    <button onClick={() => props.handleAddToTeam(props.employee)} type="button" className="btn btn-warning"><i className="fas fa-user-plus"></i> Add To Team</button>
                </div>
            </div>
        </div>
    );
};

export default Employee;