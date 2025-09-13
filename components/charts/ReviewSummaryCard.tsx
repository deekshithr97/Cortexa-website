
import React from 'react';

const ReviewSummaryCard: React.FC = () => {
    return (
        <div className="absolute top-0 right-4 sm:right-12 w-48 h-40 bg-glass-gradient backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg transform -rotate-6">
            <h3 className="text-xs font-bold text-white tracking-wider">REVIEWS SUMMARY</h3>
            <div className="flex items-center justify-center h-full">
                <svg width="100" height="100" viewBox="0 0 36 36" className="transform -rotate-90">
                    <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#50207A"
                        strokeWidth="4"
                    />
                    <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 13.7825 23.8732"
                        fill="none"
                        stroke="#D6B9FC"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default ReviewSummaryCard;
