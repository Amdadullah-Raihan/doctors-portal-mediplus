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
        <div className='statistics-section d-flex justify-content-center py-5'>
           
                <div className="transparent-statistics-div">

                </div>
                <div className="statistics-container container py-5 row row-cols-1 row-cols-lg-4">
                    {
                        statistics.map(statistic => <Statistic key={statistic.id} statistic={statistic}></Statistic>)
                    }
                </div>
           
        </div>
    );
};

export default Statistics;