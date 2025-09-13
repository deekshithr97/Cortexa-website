
import React from 'react';

const TeamUsageCard: React.FC = () => {
    const circumference = 2 * Math.PI * 15.9155;
    const strokeDashoffset = circumference - (25 / 100) * circumference;

    return (
        <div className="absolute bottom-4 right-0 sm:right-8 w-40 h-40 bg-glass-gradient backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg transform rotate-12">
            <h3 className="text-xs font-bold text-white tracking-wider">TEAM USAGE</h3>
            <div className="relative flex items-center justify-center h-full">
                <svg width="80" height="80" viewBox="0 0 36 36">
                    <circle
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="transparent"
                        stroke="#50207A"
                        strokeWidth="3"
                    />
                    <circle
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="transparent"
                        stroke="#838CE5"
                        strokeWidth="3"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        transform="rotate(-90 18 18)"
                    />
                </svg>
                <span className="absolute text-xl font-bold text-white">25%</span>
            </div>
        </div>
    );
};

export default TeamUsageCard;
