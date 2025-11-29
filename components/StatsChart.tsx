import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Statistic } from '../types';

interface Props {
  data: Statistic[];
}

const StatsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-80 w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Admission Statistics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
          />
          <Legend />
          <Bar dataKey="sanctioned" name="Sanctioned" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="admitted" name="Admitted" fill="#0036F5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;