import React from 'react';

function AnimatedCard() {
  return (
    <div class="border border-blue-300 shadow rounded-md w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
        <div class="rounded-none bg-slate-700 h-24 w-48"></div>
        <div class="flex-1 space-y-6 py-4">
            <div class="space-y-2">
                <div class="flex flex-col">
                    <div class="h-3 w-48 bg-slate-700 rounded"></div>
                </div>
                <div class="h-3 w-48 bg-slate-700 rounded"></div>
                <div class="h-5 w-48 bg-slate-700 rounded"></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AnimatedCard;