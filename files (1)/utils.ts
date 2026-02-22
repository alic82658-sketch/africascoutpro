import { QuizProgress, QuizResult } from './types';

const STORAGE_KEY = 'africascoutpro_quiz';
const STORAGE_EXPIRY = 24 * 60 * 60 * 1000; // 24 heures

// Sauvegarder la progression
export function saveQuizProgress(progress: QuizProgress): void {
  if (typeof window === 'undefined') return;
  
  try {
    const data = {
      progress,
      timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Erreur sauvegarde quiz:', error);
  }
}

// Charger la progression
export function loadQuizProgress(): QuizProgress | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored);
    const age = Date.now() - data.timestamp;

    // Expirer après 24h
    if (age > STORAGE_EXPIRY) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    return data.progress;
  } catch (error) {
    console.error('Erreur chargement quiz:', error);
    return null;
  }
}

// Effacer la progression
export function clearQuizProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

// Sauvegarder le résultat
export function saveQuizResult(result: QuizResult): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = `${STORAGE_KEY}_result`;
    localStorage.setItem(key, JSON.stringify(result));
  } catch (error) {
    console.error('Erreur sauvegarde résultat:', error);
  }
}

// Charger le résultat
export function loadQuizResult(): QuizResult | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const key = `${STORAGE_KEY}_result`;
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Erreur chargement résultat:', error);
    return null;
  }
}

// Générer un slug unique pour la carte
export function generateCardSlug(firstName: string): string {
  const base = firstName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-');
  
  const timestamp = Date.now().toString(36);
  return `${base}-${timestamp}`;
}

// Formater le temps écoulé
export function formatElapsedTime(startedAt: number): string {
  const elapsed = Math.floor((Date.now() - startedAt) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Obtenir l'icône emoji selon le poste
export function getPositionEmoji(position: string): string {
  const emojis: Record<string, string> = {
    GK: '🧤',
    CB: '🛡️',
    LB: '⬅️',
    RB: '➡️',
    CDM: '🛡️',
    CM: '🎯',
    CAM: '🎯',
    LW: '⚡',
    RW: '⚡',
    ST: '🏃',
    CF: '🏃'
  };
  return emojis[position] || '⚽';
}

// Calculer les stats par défaut selon le profil
export function generateDefaultStats(profile: string) {
  const statsMap: Record<string, any> = {
    'Finisseur Explosif': {
      pace: 88,
      shooting: 85,
      passing: 70,
      dribbling: 78,
      defending: 40,
      physical: 82
    },
    'Playmaker Créatif': {
      pace: 75,
      shooting: 72,
      passing: 90,
      dribbling: 85,
      defending: 55,
      physical: 68
    },
    'Ball Winner': {
      pace: 78,
      shooting: 62,
      passing: 74,
      dribbling: 70,
      defending: 88,
      physical: 85
    },
    'Organisateur Défensif': {
      pace: 72,
      shooting: 60,
      passing: 82,
      dribbling: 72,
      defending: 85,
      physical: 80
    },
    'Ailier Percutant': {
      pace: 92,
      shooting: 75,
      passing: 72,
      dribbling: 88,
      defending: 38,
      physical: 70
    },
    'Gardien Moderne': {
      diving: 78,
      handling: 75,
      reflexes: 80,
      pace: 55,
      physical: 72
    }
  };

  return statsMap[profile] || statsMap['Playmaker Créatif'];
}

// Partage social
export async function shareCard(firstName: string, score: number, profile: string) {
  const text = `J'ai obtenu ${score}/100 au test de QI Footballistique d'AfricaScoutPro ! Profil : ${profile}`;
  const url = window.location.origin;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Mon Score QI Footballistique',
        text,
        url
      });
      return true;
    } catch (error) {
      console.error('Erreur partage:', error);
      return false;
    }
  } else {
    // Fallback: copier dans le presse-papier
    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      return true;
    } catch (error) {
      console.error('Erreur copie:', error);
      return false;
    }
  }
}
