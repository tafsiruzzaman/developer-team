import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        fetch('./employees.JSON')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default Header;