import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  duration?: string;
}

interface TreatmentStepsProps {
  steps: Step[];
  compact?: boolean;
}

export function TreatmentSteps({ steps, compact = false }: TreatmentStepsProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="relative flex gap-4 md:gap-6">
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#395b45] text-white flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0 shadow-md">
              {step.number}
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-[#395b45]/20 my-1" />
            )}
          </div>

          {/* Content */}
          <div className={`pb-8 ${compact ? 'pb-6' : 'pb-10'} flex-1`}>
            <div className="flex items-center gap-3 mb-1">
              <h3 className={`font-bold text-[#2d4835] ${compact ? 'text-base' : 'text-lg md:text-xl'}`}>
                {step.title}
              </h3>
              {step.duration && (
                <span className="text-xs bg-[#FF9F43]/10 text-[#FF9F43] px-2 py-0.5 rounded-full font-semibold">
                  {step.duration}
                </span>
              )}
            </div>
            <p className={`text-gray-600 leading-relaxed ${compact ? 'text-sm' : 'text-sm md:text-base'}`}>
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
