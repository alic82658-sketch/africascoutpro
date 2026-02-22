// Types pour le système de quiz

export type TacticalProfile = 
  | 'Finisseur Explosif'
  | 'Playmaker Créatif'
  | 'Ball Winner'
  | 'Organisateur Défensif'
  | 'Ailier Percutant'
  | 'Gardien Moderne';

export type Rarity = 'bronze' | 'silver' | 'gold' | 'elite';

export type Position = 
  | 'GK' 
  | 'CB' 
  | 'LB' 
  | 'RB' 
  | 'CDM' 
  | 'CM' 
  | 'CAM' 
  | 'LW' 
  | 'RW' 
  | 'ST' 
  | 'CF';

export interface QuizOption {
  id: string;
  text: string;
  points: number;
  profile: TacticalProfile;
  competency: QuizCompetency;
}

export type QuizCompetency = 
  | 'lecture' 
  | 'scanning' 
  | 'decision' 
  | 'tactique' 
  | 'sansBalle' 
  | 'pressing';

export interface QuizQuestion {
  id: string;
  type: 'text' | 'visual';
  scenario: string;
  question: string;
  options: QuizOption[];
  visual?: {
    adversaire: { x: number; y: number };
    joueur: { x: number; y: number };
    coequipiers?: Array<{ x: number; y: number }>;
  };
}

export interface QuizAnswer {
  questionId: string;
  optionId: string;
  timestamp: number;
}

export interface QuizProgress {
  firstName: string;
  position?: Position;
  answers: QuizAnswer[];
  currentQuestion: number;
  testType: 'rapid' | 'complete';
  startedAt: number;
}

export interface QuizResult {
  score: number;
  scoreRange?: { min: number; max: number }; // Pour test rapide
  rarity: Rarity;
  profile: TacticalProfile;
  competencies: {
    lecture: number;
    scanning: number;
    decision: number;
    tactique: number;
    sansBalle: number;
    pressing: number;
  };
  topCompetency: QuizCompetency;
  weakCompetency: QuizCompetency;
  percentile: number; // Top X%
  feedbackText: string;
}

export interface PlayerCardData {
  firstName: string;
  lastName?: string;
  position: Position;
  country?: string;
  countryFlag?: string;
  city?: string;
  iqScore: number;
  iqScoreRange?: { min: number; max: number };
  rarity: Rarity;
  profile: TacticalProfile;
  stats: {
    pace?: number;
    shooting?: number;
    passing?: number;
    dribbling?: number;
    defending?: number;
    physical?: number;
    diving?: number;
    handling?: number;
    reflexes?: number;
  };
  isProvisional: boolean;
}
