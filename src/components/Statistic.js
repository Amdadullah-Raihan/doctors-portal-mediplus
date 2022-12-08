import React from 'react';

const Statistic = ({statistic}) => {
    return (
        <div className='statistic-card'>
            <i className={statistic.icon}></i>
            <h3>{statistic.number}</h3>
            <p>{statistic.title}</p>
        </div>
    );
};

export default Statistic;