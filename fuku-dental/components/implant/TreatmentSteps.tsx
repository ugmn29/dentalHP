import React, { ReactNode } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  duration?: string;
  icon?: ReactNode;
}

interface TreatmentStepsProps {
  steps: Step[];
  compact?: boolean;
}

export function TreatmentSteps({ steps, compact = false }: TreatmentStepsProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="relative flex gap-4 md:gap-6 group">
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div className={`
              w-12 h-12 md:w-16 md:h-16 rounded-full 
              ${step.icon ? 'bg-white border-2 border-[#395b45] text-[#395b45]' : 'bg-[#395b45] text-white'} 
              flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0 shadow-md z-10 relative
            `}>
              {step.icon ? (
                <div className="w-6 h-6 md:w-8 md:h-8">{step.icon}</div>
              ) : (
                step.number
              )}
              {/* Number bagde if icon is present */}
              {step.icon && (
                <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[#395b45] text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                  {step.number}
                </div>
              )}
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-gradient-to-b from-[#395b45] to-[#c8ddd0]/50 my-1" />
            )}
          </div>

          {/* Content */}
          <div className={`pb-8 ${compact ? 'pb-8' : 'pb-12'} flex-1 pt-1 md:pt-2`}>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className={`font-bold text-[#2d4835] ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}>
                {step.title}
              </h3>
              {step.duration && (
                <span className="text-xs bg-[#FF9F43]/10 text-[#FF9F43] px-2 py-1 rounded-full font-bold border border-[#FF9F43]/20">
                  {step.duration}
                </span>
              )}
            </div>
            <p className={`text-gray-600 leading-relaxed ${compact ? 'text-sm' : 'text-base'}`}>
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
