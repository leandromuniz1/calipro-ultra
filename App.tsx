
import React, { useState, useEffect, useCallback } from 'react';
import { UserProfile, UserStats, AppTab } from './types';
import { storageService } from './services/storageService';
import { Onboarding } from './components/Onboarding';
import { Home } from './components/Home';
import { WorkoutList } from './components/WorkoutList';
import { DietList } from './components/DietList';
import { ProfileTab } from './components/ProfileTab';
import { WorkoutSession } from './components/WorkoutSession';
import { ICONS, EXERCISE_DB } from './constants';

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(storageService.getProfile());
  const [stats, setStats] = useState<UserStats>(storageService.getStats());
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);

  useEffect(() => {
    if (profile) storageService.setProfile(profile);
  }, [profile]);

  useEffect(() => {
    storageService.setStats(stats);
  }, [stats]);

  const handleFinishWorkout = useCallback((calories: number, duration: number) => {
    const todayStr = new Date().toISOString();
    const todayKey = new Date().toDateString();
    
    setStats(prev => {
      const newRepsMod = { ...prev.repsMod };
      EXERCISE_DB.forEach(ex => {
        newRepsMod[ex.id] = (newRepsMod[ex.id] || ex.base) + 1;
      });

      let newStreak = prev.streak;
      if (prev.lastDate !== todayKey) {
        newStreak++;
      }

      const newHistory = [...(prev.history || []), { 
        date: todayStr, 
        calories, 
        duration 
      }];

      return {
        ...prev,
        workoutsCount: prev.workoutsCount + 1,
        streak: newStreak,
        lastDate: todayKey,
        repsMod: newRepsMod,
        history: newHistory
      };
    });

    setIsWorkoutActive(false);
    setTimeout(() => {
      alert(`Missão Cumprida! 🔥\nEnergia Gasta: ${calories} kcal\nTempo: ${duration} min`);
    }, 100);
  }, []);

  if (!profile) {
    return <Onboarding onComplete={setProfile} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto max-w-[480px] p-5 pb-32 safe-top">
        {activeTab === AppTab.HOME && <Home profile={profile} stats={stats} />}
        {activeTab === AppTab.TRAIN && <WorkoutList stats={stats} onStart={() => setIsWorkoutActive(true)} />}
        {activeTab === AppTab.DIET && <DietList />}
        {activeTab === AppTab.PROFILE && <ProfileTab profile={profile} onUpdate={setProfile} />}
        
        <footer className="mt-12 mb-4 text-center opacity-40">
          <p className="text-[9px] font-black text-[#a1a1aa] uppercase tracking-[0.4em]">
            Desenvolvido por Leandro Muniz
          </p>
        </footer>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-[#18181b]/90 backdrop-blur-xl border-t border-[#3f3f46] flex justify-around safe-bottom z-50">
        <NavButton active={activeTab === AppTab.HOME} onClick={() => setActiveTab(AppTab.HOME)} label="Início" icon={ICONS.HOME} />
        <NavButton active={activeTab === AppTab.TRAIN} onClick={() => setActiveTab(AppTab.TRAIN)} label="Treino" icon={ICONS.DUMBBELL} />
        <NavButton active={activeTab === AppTab.DIET} onClick={() => setActiveTab(AppTab.DIET)} label="Dieta" icon={ICONS.APPLE} />
        <NavButton active={activeTab === AppTab.PROFILE} onClick={() => setActiveTab(AppTab.PROFILE)} label="Perfil" icon={ICONS.USER} />
      </nav>

      {isWorkoutActive && (
        <WorkoutSession 
          stats={stats} 
          onFinish={handleFinishWorkout} 
          onCancel={() => setIsWorkoutActive(false)} 
        />
      )}
    </div>
  );
};

const NavButton = ({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-4 flex flex-col items-center gap-1 transition-colors ${active ? 'text-[#10b981]' : 'text-[#a1a1aa]'}`}
  >
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
  </button>
);

export default App;
