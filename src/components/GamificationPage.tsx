import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { UserType } from '../App';
import { Trophy, Award, Star, Medal, Crown, Zap } from 'lucide-react';

interface LeaderboardMember {
  rank: number;
  name: string;
  initials: string;
  xp: number;
  badges: number;
  streak: number;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  earned: boolean;
}

const leaderboard: LeaderboardMember[] = [
  { rank: 1, name: 'Ana Lima', initials: 'AL', xp: 2450, badges: 12, streak: 28 },
  { rank: 2, name: 'Pedro Costa', initials: 'PC', xp: 2280, badges: 10, streak: 21 },
  { rank: 3, name: 'Maria Santos', initials: 'MS', xp: 2150, badges: 11, streak: 19 },
  { rank: 4, name: 'Julia Alves', initials: 'JA', xp: 1980, badges: 9, streak: 15 },
  { rank: 5, name: 'You', initials: 'ME', xp: 1450, badges: 7, streak: 12 },
  { rank: 6, name: 'Lucas Silva', initials: 'LS', xp: 1320, badges: 6, streak: 10 },
  { rank: 7, name: 'Rafael Mendes', initials: 'RM', xp: 1180, badges: 8, streak: 8 },
  { rank: 8, name: 'Beatriz Rocha', initials: 'BR', xp: 1050, badges: 5, streak: 7 },
];

const achievements: Achievement[] = [
  { id: 1, title: 'Aprendiz Rápido', description: 'Complete 5 cursos em um mês', icon: Zap, color: 'text-yellow-400', earned: true },
  { id: 2, title: 'Jogador de Equipe', description: 'Participe de 10 eventos da comunidade', icon: Star, color: 'text-blue-400', earned: true },
  { id: 3, title: 'Consistente', description: 'Mantenha uma sequência de 30 dias', icon: Medal, color: 'text-orange-400', earned: false },
  { id: 4, title: 'Mentor', description: 'Ajude 5 membros da equipe', icon: Crown, color: 'text-purple-400', earned: false },
  { id: 5, title: 'Buscador de Conhecimento', description: 'Complete 20 cursos', icon: Award, color: 'text-green-400', earned: true },
  { id: 6, title: 'Principal Contribuidor', description: 'Fique no top 3 por um mês', icon: Trophy, color: 'text-red-400', earned: false },
];

const recognitions = [
  { name: 'Ana Lima', reason: 'Excelente revisão de código e mentoria', time: '2 horas atrás', by: 'Carla Oliveira' },
  { name: 'Pedro Costa', reason: 'Excelente resolução de problema crítico', time: '5 horas atrás', by: 'Tech Lead' },
  { name: 'Maria Santos', reason: 'Ótima colaboração e espírito de equipe', time: '1 dia atrás', by: 'Gerente de Projeto' },
];

interface GamificationPageProps {
  userType: UserType;
}

export function GamificationPage({ userType }: GamificationPageProps) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-white mb-2">Reconhecimento e Gamificação 🏆</h1>
        <p className="text-white/70">
          {userType === 'manager' 
            ? 'Celebre as conquistas da sua equipe e dê reconhecimento'
            : 'Acompanhe seu progresso e celebre conquistas'
          }
        </p>
      </div>

      {userType === 'manager' && (
        <Card className="bg-gradient-to-r from-[#007BFF]/20 to-purple-500/20 backdrop-blur-lg border-white/20 mb-8 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white mb-2">Reconhecer um Membro da Equipe</h3>
                <p className="text-white/70">Dê elogios públicos e impulsione o moral da equipe</p>
              </div>
              <Button className="bg-[#007BFF] hover:bg-[#0056b3]">
                <Award className="w-4 h-4 mr-2" />
                Reconhecer Membro
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Leaderboard */}
        <Card className="lg:col-span-2 bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Ranking - Melhores Desempenhos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leaderboard.map((member) => (
              <div 
                key={member.rank}
                className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                  member.name === 'You' 
                    ? 'bg-[#007BFF]/20 border border-[#007BFF]/40' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    member.rank === 1 ? 'bg-yellow-500' : 
                    member.rank === 2 ? 'bg-gray-400' : 
                    member.rank === 3 ? 'bg-orange-600' : 
                    'bg-white/20'
                  }`}>
                    <span className="text-white">{member.rank}</span>
                  </div>
                  <Avatar>
                    <AvatarFallback className="bg-[#007BFF] text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white">{member.name}</p>
                    <p className="text-white/60">{member.xp} XP</p>
                  </div>
                </div>
                <div className="flex gap-4 text-white/70">
                  <div className="text-center">
                    <Award className="w-5 h-5 mx-auto mb-1" />
                    <span>{member.badges}</span>
                  </div>
                  <div className="text-center">
                    <Zap className="w-5 h-5 mx-auto mb-1" />
                    <span>{member.streak}d</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white">Suas Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-white">Posição #5</p>
                <p className="text-white/60">de 10 membros</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Star className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white">1.450 XP</p>
                <p className="text-white/60">Nível 14</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <Zap className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <p className="text-white">Sequência de 12 Dias</p>
                <p className="text-white/60">Continue assim! 🔥</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Achievements */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl mb-8">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Award className="w-5 h-5" />
            Conquistas e Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.id}
                  className={`p-4 rounded-xl border ${
                    achievement.earned 
                      ? 'bg-white/10 border-white/30' 
                      : 'bg-white/5 border-white/10 opacity-50'
                  }`}
                >
                  <Icon className={`w-10 h-10 ${achievement.color} mb-3`} />
                  <h3 className="text-white mb-1">{achievement.title}</h3>
                  <p className="text-white/60">{achievement.description}</p>
                  {achievement.earned && (
                    <Badge className="mt-3 bg-green-500/20 text-green-300 border-green-500/30">
                      Conquistado ✓
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recognition Wall */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Star className="w-5 h-5" />
            Mural de Reconhecimento
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recognitions.map((recognition, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-xl">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 mt-1" />
                <div className="flex-1">
                  <p className="text-white mb-1">
                    <strong>{recognition.name}</strong> foi reconhecido(a)
                  </p>
                  <p className="text-white/70 mb-2">"{recognition.reason}"</p>
                  <p className="text-white/50">
                    Por {recognition.by} • {recognition.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
