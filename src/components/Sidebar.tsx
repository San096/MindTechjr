import { UserType, PageType } from '../App';
import { 
  Home, 
  Users, 
  Lightbulb, 
  GraduationCap, 
  MessageSquare, 
  BarChart3, 
  Trophy, 
  Settings,
  LogOut,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface SidebarProps {
  userType: UserType;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onLogout: () => void;
}

export function Sidebar({ userType, currentPage, onNavigate, onLogout }: SidebarProps) {
  const memberNavItems = [
    { id: 'dashboard' as PageType, icon: Home, label: 'Início' },
    { id: 'chat' as PageType, icon: MessageSquare, label: 'Avantinho' },
    { id: 'skills' as PageType, icon: Lightbulb, label: 'Habilidades' },
    { id: 'courses' as PageType, icon: GraduationCap, label: 'Cursos' },
    { id: 'community' as PageType, icon: Users, label: 'Comunidade' },
    { id: 'gamification' as PageType, icon: Trophy, label: 'Reconhecimento' },
    { id: 'feedback' as PageType, icon: MessageSquare, label: 'Feedback' },
  ];

  const managerNavItems = [
    { id: 'dashboard' as PageType, icon: Home, label: 'Início' },
    { id: 'team' as PageType, icon: Users, label: 'Equipe' },
    { id: 'skills' as PageType, icon: Lightbulb, label: 'Habilidades' },
    { id: 'courses' as PageType, icon: GraduationCap, label: 'Cursos' },
    { id: 'chat' as PageType, icon: MessageSquare, label: 'Chat' },
    { id: 'reports' as PageType, icon: BarChart3, label: 'Relatórios' },
    { id: 'gamification' as PageType, icon: Trophy, label: 'Reconhecimento' },
    { id: 'feedback' as PageType, icon: MessageSquare, label: 'Feedback' },
  ];

  const navItems = userType === 'manager' ? managerNavItems : memberNavItems;

  return (
    <aside className="w-64 bg-white/5 backdrop-blur-lg border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="w-6 h-6 text-[#007BFF]" />
          <span>MindTech Jr</span>
        </div>
        <p className="text-white/60 mt-1">
          {userType === 'manager' ? 'Portal do Gestor' : 'Portal do Membro'}
        </p>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#007BFF] text-white">
              {userType === 'manager' ? 'CO' : 'ME'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-white truncate">
              {userType === 'manager' ? 'Carla Oliveira' : 'Membro da Equipe'}
            </p>
            <p className="text-white/60 truncate">
              {userType === 'manager' ? 'Líder de Dev' : 'Desenvolvedor'}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-[#007BFF] text-white shadow-lg shadow-blue-500/30'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
          onClick={() => {}}
        >
          <Settings className="w-5 h-5 mr-3" />
          Configurações
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sair
        </Button>
      </div>
    </aside>
  );
}
