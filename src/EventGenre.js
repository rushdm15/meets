import React, { useEffect, useState } from 'react';
import { PieChart, Pie, 
    // Cell, 
    ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    
// eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { setData(() => getData()); }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map(genre => {
      const value = events.filter(event => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value };
    });
    return data;
    };
    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    // ];

// eslint-disable-next-line 
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelline={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                </Pie>    
            </PieChart>
        </ResponsiveContainer>

    );
}


export default EventGenre;