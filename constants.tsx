
import React from 'react';
import { Exercise, Meal } from './types';

export const EXERCISE_DB: Exercise[] = [
  { 
    id: 'pushup', 
    name: 'Flexão de Braço', 
    description: 'Exercício fundamental de empurrar para peitoral e tríceps.',
    instructions: [
      'Posicione as mãos na largura dos ombros',
      'Mantenha o corpo reto como uma tábua (core contraído)',
      'Desça até o peito quase tocar o solo',
      'Cotovelos devem formar um ângulo de 45° com o corpo',
      'Empurre de volta à posição inicial de forma explosiva'
    ],
    tips: 'Não deixe o quadril cair. Se estiver difícil, apoie os joelhos no chão para manter a técnica perfeita.',
    muscles: ['Peitoral', 'Tríceps', 'Ombros'],
    base: 10, 
    rest: 45 
  },
  { 
    id: 'squat', 
    name: 'Agachamento', 
    description: 'O rei dos exercícios de pernas para força e estabilidade.',
    instructions: [
      'Pés na largura dos ombros, pontas levemente para fora',
      'Inicie o movimento jogando o quadril para trás',
      'Desça até as coxas ficarem paralelas ao chão ou abaixo',
      'Mantenha o peito aberto e olhar para frente',
      'Suba fazendo força nos calcanhares'
    ],
    tips: 'Mantenha os calcanhares sempre colados no chão para proteger seus joelhos.',
    muscles: ['Quadríceps', 'Glúteos', 'Lombar'],
    base: 15, 
    rest: 30 
  },
  { 
    id: 'plank', 
    name: 'Prancha Abdominal', 
    description: 'Isometria pura para um core blindado.',
    instructions: [
      'Apoie os antebraços no chão alinhados com os ombros',
      'Estenda as pernas e mantenha o corpo reto',
      'Contraia abdômen e glúteos intensamente',
      'Respire de forma curta e controlada',
      'Mantenha o pescoço em posição neutra'
    ],
    tips: 'Imagine que está puxando o umbigo em direção às suas costas.',
    muscles: ['Abdômen', 'Lombar', 'Serrátil'],
    base: 30, 
    rest: 30 
  },
  { 
    id: 'lunges', 
    name: 'Afundo Dinâmico', 
    description: 'Trabalho unilateral para equilíbrio e definição muscular.',
    instructions: [
      'Fique em pé com os pés na largura do quadril',
      'Dê um passo largo à frente',
      'Desça o joelho de trás até quase tocar o solo',
      'Ambas as pernas devem formar ângulos de 90°',
      'Retorne à posição inicial e troque a perna'
    ],
    tips: 'Mantenha o tronco ereto. Não deixe o joelho da frente passar da linha dos dedos do pé.',
    muscles: ['Pernas', 'Glúteos', 'Estabilizadores'],
    base: 12, 
    rest: 45 
  }
];

export const DIET_DATA: Meal[] = [
  { 
    id: 'breakfast', 
    time: "Café da Manhã", 
    description: "Ovos Mexidos + Pão Integral", 
    preparation: "Bata 3 ovos com pitada de sal. Aqueça a frigideira com fio de azeite. Mexa até dourar. Sirva com pão integral torrado.",
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=300",
    calories: 380,
    protein: 22,
    carbs: 28,
    fats: 18
  },
  { 
    id: 'lunch', 
    time: "Almoço", 
    description: "Frango Grelhado com Arroz", 
    preparation: "Tempere o frango com limão e ervas. Grelhe em fogo médio. Sirva com 100g de arroz integral e salada verde.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
    calories: 550,
    protein: 48,
    carbs: 60,
    fats: 10
  },
  { 
    id: 'snack', 
    time: "Lanche da Tarde", 
    description: "Iogurte Proteico com Banana", 
    preparation: "Misture iogurte grego natural com 1 scoop de whey. Adicione a banana em rodelas e 30g de aveia por cima.",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300",
    calories: 310,
    protein: 25,
    carbs: 40,
    fats: 5
  },
  { 
    id: 'dinner', 
    time: "Jantar", 
    description: "Tilápia com Batata Doce", 
    preparation: "Tempere o peixe. Grelhe por 4 minutos cada lado. Asse a batata doce em rodelas com alecrim por 20 minutos.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
    calories: 420,
    protein: 38,
    carbs: 35,
    fats: 12
  }
];

export const ICONS = {
  ZAP: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71L15.34 3H16.15L15 8.29H20L8.66 21H7.85L9 15.71H4Z"/></svg>,
  HOME: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  DUMBBELL: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.5 6.5 11 11"/><path d="m11.8 5.8 5.4 5.4"/><path d="m5.8 11.8 5.4 5.4"/><path d="M11 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/><path d="M17.5 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/><path d="M3.5 11a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/><path d="M10 17.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/></svg>,
  APPLE: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.88 0 3.05-1.12 3.54-1.63a8.1 8.1 0 0 0 1.95-3.32c.11-.34.25-.66.42-.96 1-.3 1.83-1.07 2.22-2.1.25-.66.25-1.39 0-2.05a3.44 3.44 0 0 0-1.85-2.05c-1.33-.65-2.73-.24-3.66.52a4.4 4.4 0 0 1-5.24 0c-.93-.76-2.33-1.17-3.66-.52a3.44 3.44 0 0 0-1.85 2.05c-.25.66-.25 1.39 0 2.05.39 1.03 1.22 1.8 2.22 2.1.17.3.31.62.42.96a8.1 8.1 0 0 0 1.95 3.32c.49.51 1.66 1.63 3.54 1.63Z"/><path d="M12 5V3"/><path d="M11 3h2"/></svg>,
  USER: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  X: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
  AWARD: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  FLAME: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.5 3.5 6.5 1 1.5 1.5 3 1.5 4.5 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.66.67-3.16 1.75-4.25.333.667.667 1.25 1 1.75"/></svg>,
  SHIELD: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
  CROWN: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>,
  CHEVRONS_RIGHT: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>,
  INFO: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
  TIMER: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  TRENDING_UP: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  CALENDAR: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  CHEF: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>,
  CHEVRON_LEFT: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>,
  CHEVRON_RIGHT: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
};
