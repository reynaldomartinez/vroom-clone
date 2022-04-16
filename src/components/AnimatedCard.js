import React from 'react';

function AnimatedCard() {
  return (
    <div className="border border-blue-300 shadow rounded-md w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
        <div className="rounded-none bg-slate-700 h-24 w-48"></div>
        <div className="flex-1 space-y-6 py-4">
            <div className="space-y-2">
                <div className="flex flex-col">
                    <div className="h-3 w-48 bg-slate-700 rounded"></div>
                </div>
                <div className="h-3 w-48 bg-slate-700 rounded"></div>
                <div className="h-5 w-48 bg-slate-700 rounded"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AnimatedCard;