import React from 'react';

const Added = (props) => {
    const {name, img} = props;
    return (
        <div className="d-flex align-items-center mb-3">
            <img className='w-25 rounded-circle me-3' src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Added;