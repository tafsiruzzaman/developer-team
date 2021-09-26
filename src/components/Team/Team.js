import React from 'react';
import Added from '../Added/Added';

const Team = (props) => {
    const {team} = props;
    let cost = 0;
    for (const member of team) {
        cost = cost + member.salary;
    }
    return (
        <div className="ms-3">
            <h2>Member Added: {props.team.length}</h2>
            <h3>Total cost: $ {cost}</h3> <br />
            <h3>Team</h3>
            {
                team.map(member => <Added key={member.key} name={member.name} img={member.img}></Added>)
            }
            
        </div>
    );
};

export default Team;