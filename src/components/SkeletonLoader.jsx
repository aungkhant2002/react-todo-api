import React from 'react'

const SkeletonLoader = () => {
    return (
        <div className="animate-pulse">
            <div className="bg-white/5 backdrop-blur-md shadow-lg flex justify-between items-center border border-white/20 p-3 rounded-xl mb-3 last:mb-0">
                <div className="flex justify-between gap-3">
                    <div className="bg-gray-400 h-5 w-5"></div>
                    <div className="bg-gray-400 h-5 w-40"></div>
                </div>
                <div className="bg-gray-400 h-5 w-20"></div>
            </div>
            <div className="bg-white/5 backdrop-blur-md shadow-lg flex justify-between items-center border border-white/20 p-3 rounded-xl mb-3 last:mb-0">
                <div className="flex justify-between gap-3">
                    <div className="bg-gray-400 h-5 w-5"></div>
                    <div className="bg-gray-400 h-5 w-40"></div>
                </div>
                <div className="bg-gray-400 h-5 w-20"></div>
            </div>
            <div className="bg-white/5 backdrop-blur-md shadow-lg flex justify-between items-center border border-white/20 p-3 rounded-xl mb-3 last:mb-0">
                <div className="flex justify-between gap-3">
                    <div className="bg-gray-400 h-5 w-5"></div>
                    <div className="bg-gray-400 h-5 w-40"></div>
                </div>
                <div className="bg-gray-400 h-5 w-20"></div>
            </div>
        </div>
    )
}

export default SkeletonLoader