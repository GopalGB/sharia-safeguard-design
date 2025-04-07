
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const ComplianceStatus = () => {
  // Animation state
  const [animated, setAnimated] = useState(false);
  
  // Mock data for compliance statistics
  const data = [
    { name: 'Compliant', value: 68, color: '#4ade80' },
    { name: 'Needs Review', value: 22, color: '#fbbf24' },
    { name: 'Non-Compliant', value: 10, color: '#f87171' }
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Custom animation for pie chart
  // Using 'ease' as AnimationTiming enum value, not a string
  const animationProps = animated ? {
    isAnimationActive: true,
    animationDuration: 1000,
    animationEasing: "ease" as const
  } : {
    isAnimationActive: false
  };

  return (
    <Card className="transition-all duration-500 hover:shadow-lg">
      <CardHeader className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navyTrust/5 to-mutedTeal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardTitle className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">Compliance Status</CardTitle>
        <CardDescription className="relative z-10">Overview of document compliance with UAE regulations</CardDescription>
      </CardHeader>
      <CardContent 
        className={`h-[300px] transition-opacity duration-500 ${animated ? 'opacity-100' : 'opacity-0'}`}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              {...animationProps}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Percentage']} 
              contentStyle={{ 
                borderRadius: '0.5rem', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: 'none',
                animation: 'fadeIn 0.2s ease-out'
              }}
            />
            <Legend 
              wrapperStyle={{
                paddingTop: '20px',
                animation: animated ? 'fadeIn 0.5s ease-out' : 'none'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ComplianceStatus;
