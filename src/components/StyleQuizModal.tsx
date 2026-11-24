
import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { STYLE_QUIZ_QUESTIONS } from '../data/sampleData';
import { DesignStyle } from '../types';

interface StyleQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResultStyle: (style: DesignStyle) => void;
}

export const StyleQuizModal: React.FC<StyleQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectResultStyle
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<DesignStyle[]>([]);
  const [matchedStyle, setMatchedStyle] = useState<DesignStyle | null>(null);

  if (!isOpen) return null;

  const currentQuestion = STYLE_QUIZ_QUESTIONS[currentStep];

  const handleOptionSelect = (style: DesignStyle) => {
    const nextAnswers = [...selectedAnswers, style];
    setSelectedAnswers(nextAnswers);

    if (currentStep < STYLE_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finished quiz -> compute top style
      const frequencyMap: Record<string, number> = {};
      nextAnswers.forEach(s => {
        frequencyMap[s] = (frequencyMap[s] || 0) + 1;
      });
      const topStyle = (Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b)) as DesignStyle;
      setMatchedStyle(topStyle);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setMatchedStyle(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {matchedStyle ? (
          <div className="text-center py-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Architectural DNA</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              {matchedStyle}
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Your design preferences reflect an affinity for organic minimalism, soothing warm light, clean sculptural forms, and high-end natural finishes.
            </p>

            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => {
                  onSelectResultStyle(matchedStyle);
                  onClose();
                }}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Explore {matchedStyle} Studio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="p-3 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white"
                title="Retake Quiz"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-widest">
                Question {currentStep + 1} of {STYLE_QUIZ_QUESTIONS.length}
              </span>
              <h3 className="font-serif text-2xl text-white font-medium mt-1">
                {currentQuestion.question}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">{currentQuestion.subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOptionSelect(option.style)}
                  className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-400/60 cursor-pointer group transition-all p-3 space-y-3"
                >
                  <img
                    src={option.imageUrl}
                    alt={option.label}
                    className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="text-xs font-medium text-white group-hover:text-amber-300 transition-colors">{option.label}</h4>
                    <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};