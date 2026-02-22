import { QuizAnswer, QuizResult, TacticalProfile, Rarity, QuizCompetency } from './types';
import { rapidQuestions, completeQuestions, allQuestions } from './questions';

// Calcul du score total
function calculateTotalScore(answers: QuizAnswer[], questions: typeof allQuestions): number {
  let total = 0;
  const maxPossible = questions.length * 10;

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options.find(opt => opt.id === answer.optionId);
      if (option) {
        total += option.points;
      }
    }
  });

  return Math.round((total / maxPossible) * 100);
}

// Déterminer la rareté selon le score
function getRarity(score: number): Rarity {
  if (score >= 95) return 'elite';
  if (score >= 85) return 'gold';
  if (score >= 70) return 'silver';
  return 'bronze';
}

// Calculer les scores par compétence
function calculateCompetencies(answers: QuizAnswer[], questions: typeof allQuestions) {
  const competencyScores: Record<QuizCompetency, { total: number; count: number }> = {
    lecture: { total: 0, count: 0 },
    scanning: { total: 0, count: 0 },
    decision: { total: 0, count: 0 },
    tactique: { total: 0, count: 0 },
    sansBalle: { total: 0, count: 0 },
    pressing: { total: 0, count: 0 }
  };

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options.find(opt => opt.id === answer.optionId);
      if (option) {
        competencyScores[option.competency].total += option.points;
        competencyScores[option.competency].count += 1;
      }
    }
  });

  // Normaliser sur 100
  const normalized: Record<QuizCompetency, number> = {
    lecture: 0,
    scanning: 0,
    decision: 0,
    tactique: 0,
    sansBalle: 0,
    pressing: 0
  };

  Object.entries(competencyScores).forEach(([key, value]) => {
    if (value.count > 0) {
      normalized[key as QuizCompetency] = Math.round((value.total / (value.count * 10)) * 100);
    }
  });

  return normalized;
}

// Déterminer le profil tactique dominant
function getDominantProfile(answers: QuizAnswer[], questions: typeof allQuestions): TacticalProfile {
  const profileCounts: Record<TacticalProfile, number> = {
    'Finisseur Explosif': 0,
    'Playmaker Créatif': 0,
    'Ball Winner': 0,
    'Organisateur Défensif': 0,
    'Ailier Percutant': 0,
    'Gardien Moderne': 0
  };

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options.find(opt => opt.id === answer.optionId);
      if (option) {
        profileCounts[option.profile] += 1;
      }
    }
  });

  return Object.entries(profileCounts).reduce((a, b) => 
    a[1] > b[1] ? a : b
  )[0] as TacticalProfile;
}

// Calculer le percentile (simulé)
function calculatePercentile(score: number): number {
  if (score >= 90) return Math.floor(Math.random() * 5) + 5; // Top 5-10%
  if (score >= 80) return Math.floor(Math.random() * 8) + 12; // Top 12-20%
  if (score >= 70) return Math.floor(Math.random() * 10) + 25; // Top 25-35%
  if (score >= 60) return Math.floor(Math.random() * 15) + 40; // Top 40-55%
  return Math.floor(Math.random() * 20) + 60; // Top 60-80%
}

// Générer le texte de feedback personnalisé
function generateFeedback(
  firstName: string,
  score: number,
  profile: TacticalProfile,
  percentile: number,
  topCompetency: QuizCompetency
): string {
  const profileDescriptions: Record<TacticalProfile, string> = {
    'Finisseur Explosif': 'qui excellent en prise de décision sous pression',
    'Playmaker Créatif': 'qui ont une vision périphérique exceptionnelle',
    'Ball Winner': 'qui anticipent parfaitement les récupérations',
    'Organisateur Défensif': 'qui orchestrent le jeu avec intelligence',
    'Ailier Percutant': 'qui exploitent les espaces avec vitesse',
    'Gardien Moderne': 'qui lisent le jeu depuis l\'arrière'
  };

  const competencyNames: Record<QuizCompetency, string> = {
    lecture: 'lecture de jeu',
    scanning: 'scanning périphérique',
    decision: 'prise de décision',
    tactique: 'compréhension tactique',
    sansBalle: 'jeu sans ballon',
    pressing: 'pressing intelligent'
  };

  return `${firstName}, ton intelligence de jeu te classe dans les ${percentile}% ${profileDescriptions[profile]}.`;
}

// Fonction principale : calculer le résultat du TEST RAPIDE
export function calculateRapidResult(answers: QuizAnswer[], firstName: string): QuizResult {
  const score = calculateTotalScore(answers, rapidQuestions);
  const rarity = getRarity(score);
  const profile = getDominantProfile(answers, rapidQuestions);
  const competencies = calculateCompetencies(answers, rapidQuestions);
  const percentile = calculatePercentile(score);

  const topCompetency = Object.entries(competencies).reduce((a, b) => 
    a[1] > b[1] ? a : b
  )[0] as QuizCompetency;

  const weakCompetency = Object.entries(competencies).reduce((a, b) => 
    a[1] < b[1] ? a : b
  )[0] as QuizCompetency;

  const feedbackText = generateFeedback(firstName, score, profile, percentile, topCompetency);

  // Pour le test rapide, on donne une range estimée
  const scoreRange = {
    min: Math.max(50, score - 5),
    max: Math.min(100, score + 5)
  };

  return {
    score,
    scoreRange,
    rarity,
    profile,
    competencies,
    topCompetency,
    weakCompetency,
    percentile,
    feedbackText
  };
}

// Fonction principale : calculer le résultat du TEST COMPLET
export function calculateCompleteResult(
  rapidAnswers: QuizAnswer[], 
  completeAnswers: QuizAnswer[], 
  firstName: string
): QuizResult {
  const allAnswers = [...rapidAnswers, ...completeAnswers];
  const score = calculateTotalScore(allAnswers, allQuestions);
  const rarity = getRarity(score);
  const profile = getDominantProfile(allAnswers, allQuestions);
  const competencies = calculateCompetencies(allAnswers, allQuestions);
  const percentile = calculatePercentile(score);

  const topCompetency = Object.entries(competencies).reduce((a, b) => 
    a[1] > b[1] ? a : b
  )[0] as QuizCompetency;

  const weakCompetency = Object.entries(competencies).reduce((a, b) => 
    a[1] < b[1] ? a : b
  )[0] as QuizCompetency;

  const feedbackText = generateFeedback(firstName, score, profile, percentile, topCompetency);

  return {
    score,
    rarity,
    profile,
    competencies,
    topCompetency,
    weakCompetency,
    percentile,
    feedbackText
  };
}

// Compétence en français
export function getCompetencyLabel(competency: QuizCompetency): string {
  const labels: Record<QuizCompetency, string> = {
    lecture: 'Lecture de jeu',
    scanning: 'Scanning',
    decision: 'Décision',
    tactique: 'Tactique',
    sansBalle: 'Sans ballon',
    pressing: 'Pressing'
  };
  return labels[competency];
}

// Rareté en français
export function getRarityLabel(rarity: Rarity): string {
  const labels: Record<Rarity, string> = {
    bronze: 'Bronze',
    silver: 'Silver',
    gold: 'Gold',
    elite: 'Elite'
  };
  return labels[rarity];
}

// Nombre d'étoiles selon rareté
export function getRarityStars(rarity: Rarity): string {
  const stars: Record<Rarity, string> = {
    bronze: '⭐⭐',
    silver: '⭐⭐⭐',
    gold: '⭐⭐⭐⭐',
    elite: '⭐⭐⭐⭐⭐'
  };
  return stars[rarity];
}
