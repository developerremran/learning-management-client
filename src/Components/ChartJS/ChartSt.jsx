import { Legend } from 'chart.js';
import { Tooltip } from 'flowbite-react';
import React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const ChartSt = () => {

  const data = [
    { name: 'January', sales: 65 },
    { name: 'February', sales: 59 },
    { name: 'March', sales: 80 },
    { name: 'April', sales: 81 },
    { name: 'May', sales: 56 },
    { name: 'June', sales: 55 },
  ];
  return (
    <div>
       <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#8884d8" />
    </BarChart>
    </div>
  );
};

export default ChartSt;