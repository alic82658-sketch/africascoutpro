'use client';

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0D1A] to-[#12172B] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in-up">
          {/* Brain Icon */}
          <div className="text-6xl mb-6 animate-float">
            🧠
          </div>

          {/* Title */}
          <h1 className="font-heading text-5xl font-bold text-white mb-4 leading-tight">
            Révèle ton intelligence de jeu en 5 minutes
          </h1>

          {/* Benefits */}
          <div className="space-y-3 text-[#A8B2D1] text-base">
            <div className="flex items-center justify-center gap-3">
              <span>⏱</span>
              <span>5 questions</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span>🎯</span>
              <span>Ton profil tactique</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="w-full h-14 bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Commencer le Test →
        </button>
      </div>
    </div>
  );
}
