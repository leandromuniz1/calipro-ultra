
export type BodyType = 'magro' | 'largo';
export type GoalType = 'secar' | 'ganhar' | 'saude';
export type UserLevel = 'iniciante' | 'intermediario' | 'avancado';
export type TrainingFocus = 'forca' | 'hipertrofia' | 'resistencia';
export type EquipmentType = 'chao' | 'barras' | 'completo';

export interface UserProfile {
  name: string;
  weight: number;
  height: number;
  body: BodyType;
  goal: GoalType;
  level: UserLevel;
  focus: TrainingFocus;
  equipment: EquipmentType;
  frequency: number; 
  maxPushups: number;
  maxPullups: number;
  maxSquats: number;
  maxPlankTime: number;
}

export interface WorkoutHistoryEntry {
  date: string;
  calories: number;
  duration: number;
}

export interface UserStats {
  workoutsCount: number;
  streak: number;
  lastDate: string | null;
  repsMod: Record<string, number>;
  history: WorkoutHistoryEntry[];
  xp: number;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  instructions: string[];
  tips: string;
  muscles: string[];
  base: number;
  rest: number;
}

export interface Meal {
  id: string;
  time: string;
  description: string;
  preparation: string;
  img: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export enum AppTab {
  HOME = 'home',
  TRAIN = 'train',
  DIET = 'diet',
  PROFILE = 'profile'
}

export interface WorkoutState {
  isActive: boolean;
  exerciseIndex: number;
  currentSet: number;
  totalSets: number;
  isResting: boolean;
  restTimeRemaining: number;
}
