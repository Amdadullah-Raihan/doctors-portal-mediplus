import React, { useEffect, useState } from 'react';
import Statistic from './Statistic';
import './Statistics.css'


const Statistics = () => {
    const [statistics, setStatistics] = useState([])
    useEffect(()=>{
        fetch('./statistics.json')
        .then(res=>res.json())
        .then(data=>setStatistics(data))
    },[])
    return (
        <div className='statistics-section'>
            <div className="transparent-statistics-div">

            </div>
            <div className="statistics-container container">
                {
                    statistics.map(statistic => <Statistic key={statistic.id} statistic={statistic}></Statistic>)
                }
            </div>
        </div>
    );
};

export default Statistics;