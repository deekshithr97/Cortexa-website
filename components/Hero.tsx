import React from 'react';
import ReviewSummaryCard from './charts/ReviewSummaryCard';
import CompetitiveRatingsCard from './charts/CompetitiveRatingsCard';
import TeamUsageCard from './charts/TeamUsageCard';
import StarIcon from './icons/StarIcon';

const Hero: React.FC = () => {
    return (
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
                    A better way to manage hotels with AI
                </h1>
                <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
                    Set a new standard for hotel operations with Cortexa. Optimize everything from guest reviews to staff training with our AI-driven platform.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button className="w-full sm:w-auto bg-brand-lavender text-brand-dark-bg font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity">
                        GET STARTED
                    </button>
                    <button className="w-full sm:w-auto border border-gray-600 text-white font-bold py-3 px-6 rounded-md hover:bg-white/10 transition-colors">
                        LEARN MORE
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
                    <div className="flex -space-x-2">
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-dark-bg" src="https://picsum.photos/id/1005/32/32" alt="User 1"/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-dark-bg" src="https://picsum.photos/id/1011/32/32" alt="User 2"/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-dark-bg" src="https://picsum.photos/id/1027/32/32" alt="User 3"/>
                        <img className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-dark-bg" src="https://picsum.photos/id/10/32/32" alt="User 4"/>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                        </div>
                        <p className="text-xs text-gray-500">Join 10k+ happy hoteliers</p>
                    </div>
                </div>
            </div>

            {/* Right Content - Visuals */}
            <div className="relative h-[450px] lg:h-[550px]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <ReviewSummaryCard />
                    <CompetitiveRatingsCard />
                    <TeamUsageCard />
                </div>
            </div>
        </div>
    );
};

export default Hero;