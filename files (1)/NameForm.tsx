'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NameFormProps {
  onSubmit: (firstName: string) => void;
}

export function NameForm({ onSubmit }: NameFormProps) {
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim().length >= 2) {
      onSubmit(firstName.trim());
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0D1A] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Pour personnaliser ton résultat :
            </h2>
          </div>

          {/* Input */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-[#A8B2D1] uppercase tracking-wide">
              Ton prénom
            </label>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ex: Amadou"
              className="h-14 text-lg bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#00D9FF] focus:ring-[#00D9FF]/20"
              autoFocus
              required
              minLength={2}
            />
          </div>

          {/* CTA */}
          <Button
            type="submit"
            disabled={firstName.trim().length < 2}
            className="w-full h-14 bg-gradient-to-r from-[#00D9FF] to-[#7C3AED] text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Lancer mon Test →
          </Button>

          {/* Optional link */}
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-[#00D9FF] hover:underline"
              onClick={() => onSubmit('Joueur')} // Fallback anonyme
            >
              Continuer sans personnaliser →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
