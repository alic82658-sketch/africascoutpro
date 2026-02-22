import { QuizQuestion } from './types';

// Questions pour TEST RAPIDE (5 questions)
export const rapidQuestions: QuizQuestion[] = [
  {
    id: 'rapid-1',
    type: 'text',
    scenario: 'Ton équipe perd le ballon en phase offensive.',
    question: 'Tu es milieu de terrain. Que fais-tu EN PREMIER ?',
    options: [
      {
        id: 'a',
        text: 'Sprinter vers le porteur de balle',
        points: 5,
        profile: 'Ball Winner',
        competency: 'pressing'
      },
      {
        id: 'b',
        text: 'Couper la ligne de passe centrale',
        points: 10,
        profile: 'Organisateur Défensif',
        competency: 'tactique'
      },
      {
        id: 'c',
        text: 'Reculer vers ma défense',
        points: 6,
        profile: 'Organisateur Défensif',
        competency: 'decision'
      },
      {
        id: 'd',
        text: 'Crier des consignes à mes coéquipiers',
        points: 7,
        profile: 'Playmaker Créatif',
        competency: 'lecture'
      }
    ]
  },
  {
    id: 'rapid-2',
    type: 'text',
    scenario: 'Ton équipe attaque. Ton attaquant fait un appel en profondeur mais il y a hors-jeu.',
    question: 'Que fais-tu ?',
    options: [
      {
        id: 'a',
        text: 'Jouer la passe immédiatement',
        points: 3,
        profile: 'Ailier Percutant',
        competency: 'decision'
      },
      {
        id: 'b',
        text: 'Attendre qu\'il revienne en position légale',
        points: 10,
        profile: 'Playmaker Créatif',
        competency: 'lecture'
      },
      {
        id: 'c',
        text: 'Passer à un coéquipier latéral',
        points: 7,
        profile: 'Organisateur Défensif',
        competency: 'tactique'
      },
      {
        id: 'd',
        text: 'Conduire le ballon vers l\'avant',
        points: 6,
        profile: 'Ailier Percutant',
        competency: 'decision'
      }
    ]
  },
  {
    id: 'rapid-3',
    type: 'text',
    scenario: 'Tu reçois le ballon dos au but à 20 mètres. Un défenseur te colle.',
    question: 'Que fais-tu ?',
    options: [
      {
        id: 'a',
        text: 'Protéger et jouer une passe rapide',
        points: 9,
        profile: 'Finisseur Explosif',
        competency: 'decision'
      },
      {
        id: 'b',
        text: 'Tenter un contrôle orienté pour te retourner',
        points: 6,
        profile: 'Ailier Percutant',
        competency: 'decision'
      },
      {
        id: 'c',
        text: 'Faire une remise en une touche',
        points: 10,
        profile: 'Playmaker Créatif',
        competency: 'lecture'
      },
      {
        id: 'd',
        text: 'Provoquer la faute en protégeant',
        points: 5,
        profile: 'Ball Winner',
        competency: 'tactique'
      }
    ]
  },
  {
    id: 'rapid-4',
    type: 'text',
    scenario: 'Ton équipe mène 1-0 à la 85e minute. L\'adversaire pousse fort.',
    question: 'Comment gères-tu cette phase ?',
    options: [
      {
        id: 'a',
        text: 'Garder le ballon avec passes courtes',
        points: 10,
        profile: 'Organisateur Défensif',
        competency: 'tactique'
      },
      {
        id: 'b',
        text: 'Chercher la contre-attaque',
        points: 7,
        profile: 'Ailier Percutant',
        competency: 'decision'
      },
      {
        id: 'c',
        text: 'Tout le monde en défense',
        points: 5,
        profile: 'Gardien Moderne',
        competency: 'tactique'
      },
      {
        id: 'd',
        text: 'Presser haut pour étouffer',
        points: 6,
        profile: 'Ball Winner',
        competency: 'pressing'
      }
    ]
  },
  {
    id: 'rapid-5',
    type: 'visual',
    scenario: 'L\'adversaire conduit vers toi.',
    question: 'Que fais-tu ?',
    visual: {
      adversaire: { x: 50, y: 30 },
      joueur: { x: 50, y: 60 },
      coequipiers: [{ x: 70, y: 60 }]
    },
    options: [
      {
        id: 'a',
        text: 'Je sors au contact immédiat',
        points: 6,
        profile: 'Ball Winner',
        competency: 'pressing'
      },
      {
        id: 'b',
        text: 'Je recule en canalisant vers le côté',
        points: 10,
        profile: 'Organisateur Défensif',
        competency: 'tactique'
      },
      {
        id: 'c',
        text: 'J\'attends mon coéquipier en couverture',
        points: 9,
        profile: 'Organisateur Défensif',
        competency: 'lecture'
      },
      {
        id: 'd',
        text: 'Je fais une faute tactique si besoin',
        points: 7,
        profile: 'Ball Winner',
        competency: 'decision'
      }
    ]
  }
];

// Questions supplémentaires pour TEST COMPLET (5 questions de plus)
export const completeQuestions: QuizQuestion[] = [
  {
    id: 'complete-1',
    type: 'text',
    scenario: 'Ton équipe subit une forte pression. Le gardien a le ballon sans solution propre.',
    question: 'Que fais-tu ?',
    options: [
      {
        id: 'a',
        text: 'Jouer long vers l\'attaquant',
        points: 7,
        profile: 'Finisseur Explosif',
        competency: 'decision'
      },
      {
        id: 'b',
        text: 'Me démarquer dans une zone sûre',
        points: 10,
        profile: 'Organisateur Défensif',
        competency: 'sansBalle'
      },
      {
        id: 'c',
        text: 'Demander de jouer en touche',
        points: 8,
        profile: 'Playmaker Créatif',
        competency: 'tactique'
      },
      {
        id: 'd',
        text: 'Laisser le gardien gérer',
        points: 2,
        profile: 'Gardien Moderne',
        competency: 'lecture'
      }
    ]
  },
  {
    id: 'complete-2',
    type: 'text',
    scenario: 'Tu es ailier. Ton équipe a un corner dans les arrêts de jeu à 0-0.',
    question: 'Où te positionnes-tu ?',
    options: [
      {
        id: 'a',
        text: 'Dans la surface pour la reprise',
        points: 5,
        profile: 'Finisseur Explosif',
        competency: 'decision'
      },
      {
        id: 'b',
        text: 'En retrait pour la seconde balle',
        points: 10,
        profile: 'Playmaker Créatif',
        competency: 'lecture'
      },
      {
        id: 'c',
        text: 'Près du point de penalty',
        points: 8,
        profile: 'Ailier Percutant',
        competency: 'sansBalle'
      },
      {
        id: 'd',
        text: 'Rester derrière contre la contre-attaque',
        points: 7,
        profile: 'Organisateur Défensif',
        competency: 'tactique'
      }
    ]
  },
  {
    id: 'complete-3',
    type: 'text',
    scenario: 'L\'adversaire construit depuis l\'arrière avec un gardien relanceur.',
    question: 'Comment organises-tu ton pressing ?',
    options: [
      {
        id: 'a',
        text: 'Presser immédiatement le gardien',
        points: 4,
        profile: 'Ball Winner',
        competency: 'pressing'
      },
      {
        id: 'b',
        text: 'Orienter vers le défenseur le plus faible',
        points: 10,
        profile: 'Ball Winner',
        competency: 'lecture'
      },
      {
        id: 'c',
        text: 'Bloquer la passe centrale',
        points: 8,
        profile: 'Organisateur Défensif',
        competency: 'tactique'
      },
      {
        id: 'd',
        text: 'Attendre qu\'il avance',
        points: 3,
        profile: 'Gardien Moderne',
        competency: 'decision'
      }
    ]
  },
  {
    id: 'complete-4',
    type: 'text',
    scenario: 'Ton équipe a une touche profonde. L\'adversaire est mal replacé.',
    question: 'Comment exploites-tu cette situation ?',
    options: [
      {
        id: 'a',
        text: 'Jouer rapidement avant qu\'ils se replacent',
        points: 10,
        profile: 'Playmaker Créatif',
        competency: 'lecture'
      },
      {
        id: 'b',
        text: 'Jouer court et sécurisé',
        points: 5,
        profile: 'Organisateur Défensif',
        competency: 'decision'
      },
      {
        id: 'c',
        text: 'Appeler plusieurs joueurs pour surnombre',
        points: 8,
        profile: 'Ailier Percutant',
        competency: 'sansBalle'
      },
      {
        id: 'd',
        text: 'Lancer long vers la surface',
        points: 6,
        profile: 'Finisseur Explosif',
        competency: 'decision'
      }
    ]
  },
  {
    id: 'complete-5',
    type: 'visual',
    scenario: 'Tu observes un espace entre leurs lignes défensives.',
    question: 'Comment exploites-tu cet espace ?',
    visual: {
      adversaire: { x: 50, y: 40 },
      joueur: { x: 50, y: 70 },
      coequipiers: [
        { x: 30, y: 70 },
        { x: 70, y: 60 }
      ]
    },
    options: [
      {
        id: 'a',
        text: 'Demander le ballon et conduire',
        points: 9,
        profile: 'Playmaker Créatif',
        competency: 'decision'
      },
      {
        id: 'b',
        text: 'Faire un appel entre les lignes',
        points: 10,
        profile: 'Playmaker Créatif',
        competency: 'sansBalle'
      },
      {
        id: 'c',
        text: 'Jouer une passe filtrante pour l\'attaquant',
        points: 8,
        profile: 'Finisseur Explosif',
        competency: 'lecture'
      },
      {
        id: 'd',
        text: 'Jouer large pour étirer',
        points: 7,
        profile: 'Ailier Percutant',
        competency: 'tactique'
      }
    ]
  }
];

// Toutes les questions combinées
export const allQuestions = [...rapidQuestions, ...completeQuestions];
