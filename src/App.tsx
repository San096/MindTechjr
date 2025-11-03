import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { MemberDashboard } from './components/MemberDashboard';
import { ManagerDashboard } from './components/ManagerDashboard';
import { AvantinhoChat } from './components/AvantinhoChat';
import { SkillsPage } from './components/SkillsPage';
import { CoursesPage } from './components/CoursesPage';
import { CommunityPage } from './components/CommunityPage';
import { GamificationPage } from './components/GamificationPage';
import { FeedbackPage } from './components/FeedbackPage';
import { TeamMonitoring } from './components/TeamMonitoring';
import { ReportsPage } from './components/ReportsPage';
import { Sidebar } from './components/Sidebar';
import { Toaster } from './components/ui/sonner';

export type UserType = 'member' | 'manager' | null;
export type PageType = 'login' | 'dashboard' | 'chat' | 'skills' | 'courses' | 'community' | 'gamification' | 'feedback' | 'team' | 'reports';

function App() {
  const [userType, setUserType] = useState<UserType>(null);
  const [currentPage, setCurrentPage] = useState<PageType>('login');

  const handleLogin = (type: UserType) => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentPage('login');
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  if (currentPage === 'login') {
    return (
      <>
        <LoginPage onLogin={handleLogin} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0A1128] via-[#001f54] to-[#007BFF] overflow-hidden">
      <Sidebar
        userType={userType}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />
      
      <main className="flex-1 overflow-y-auto">
        {currentPage === 'dashboard' && userType === 'member' && (
          <MemberDashboard onNavigate={handleNavigate} />
        )}
        {currentPage === 'dashboard' && userType === 'manager' && (
          <ManagerDashboard onNavigate={handleNavigate} />
        )}
        {currentPage === 'chat' && <AvantinhoChat />}
        {currentPage === 'skills' && <SkillsPage userType={userType} />}
        {currentPage === 'courses' && <CoursesPage />}
        {currentPage === 'community' && <CommunityPage />}
        {currentPage === 'gamification' && <GamificationPage userType={userType} />}
        {currentPage === 'feedback' && <FeedbackPage userType={userType} />}
        {currentPage === 'team' && userType === 'manager' && <TeamMonitoring />}
        {currentPage === 'reports' && userType === 'manager' && <ReportsPage />}
      </main>
      
      <Toaster />
    </div>
  );
}

export default App;
