
import React from 'react';

const Bar: React.FC<{ height: string; color: string; }> = ({ height, color }) => (
    <div className={`w-4 rounded-full ${color}`} style={{ height }}></div>
);

const CompetitiveRatingsCard: React.FC = () => {
    const barData = [
        { height: '60%', color: 'bg-brand-lavender' },
        { height: '80%', color: 'bg-brand-periwinkle' },
        { height: '40%', color: 'bg-brand-lavender' },
        { height: '70%', color: 'bg-brand-periwinkle' },
        { height: '50%', color: 'bg-brand-lavender' },
    ];
    
    return (
        <div className="absolute bottom-16 left-0 sm:left-8 w-56 h-48 bg-glass-gradient backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg transform rotate-3">
             <h3 className="text-xs font-bold text-white tracking-wider">COMPETITIVE RATINGS</h3>
             <div className="flex items-end justify-between h-3/4 mt-2 px-2">
                {barData.map((bar, index) => (
                    <Bar key={index} height={bar.height} color={bar.color} />
                ))}
             </div>
        </div>
    );
};

export default CompetitiveRatingsCard;
