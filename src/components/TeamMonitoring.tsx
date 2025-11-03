import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Progress } from './ui/progress';
import { Search, Eye, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { Input } from './ui/input';

interface TeamMember {
  id: number;
  name: string;
  initials: string;
  role: string;
  energy: number;
  engagement: number;
  status: 'high' | 'moderate' | 'low';
  coursesCompleted: number;
  eventsAttended: number;
  streak: number;
  trend: 'up' | 'down' | 'stable';
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Ana Lima', initials: 'AL', role: 'Desenvolvedora Frontend', energy: 45, engagement: 50, status: 'low', coursesCompleted: 8, eventsAttended: 3, streak: 5, trend: 'down' },
  { id: 2, name: 'Lucas Silva', initials: 'LS', role: 'Desenvolvedor Backend', energy: 60, engagement: 65, status: 'moderate', coursesCompleted: 6, eventsAttended: 2, streak: 8, trend: 'down' },
  { id: 3, name: 'Maria Santos', initials: 'MS', role: 'Desenvolvedora Full Stack', energy: 88, engagement: 92, status: 'high', coursesCompleted: 12, eventsAttended: 8, streak: 22, trend: 'up' },
  { id: 4, name: 'Pedro Costa', initials: 'PC', role: 'Desenvolvedor Mobile', energy: 85, engagement: 88, status: 'high', coursesCompleted: 10, eventsAttended: 7, streak: 18, trend: 'up' },
  { id: 5, name: 'Julia Alves', initials: 'JA', role: 'Cientista de Dados', energy: 82, engagement: 85, status: 'high', coursesCompleted: 9, eventsAttended: 6, streak: 15, trend: 'stable' },
  { id: 6, name: 'Rafael Mendes', initials: 'RM', role: 'Engenheiro DevOps', energy: 75, engagement: 78, status: 'moderate', coursesCompleted: 7, eventsAttended: 5, streak: 12, trend: 'stable' },
  { id: 7, name: 'Beatriz Rocha', initials: 'BR', role: 'Designer UX', energy: 90, engagement: 95, status: 'high', coursesCompleted: 11, eventsAttended: 9, streak: 25, trend: 'up' },
  { id: 8, name: 'Carlos Dias', initials: 'CD', role: 'Engenheiro de QA', energy: 78, engagement: 80, status: 'high', coursesCompleted: 8, eventsAttended: 6, streak: 14, trend: 'stable' },
  { id: 9, name: 'Fernanda Lima', initials: 'FL', role: 'Gerente de Produto', energy: 72, engagement: 75, status: 'moderate', coursesCompleted: 5, eventsAttended: 4, streak: 10, trend: 'stable' },
  { id: 10, name: 'Gabriel Souza', initials: 'GS', role: 'Engenheiro de Software', energy: 68, engagement: 70, status: 'moderate', coursesCompleted: 6, eventsAttended: 3, streak: 9, trend: 'down' },
];

export function TeamMonitoring() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'moderate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'low': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-white mb-2">Monitoramento da Equipe 👥</h1>
        <p className="text-white/70">Acompanhe o bem-estar e engajamento da sua equipe</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
          <Input
            placeholder="Buscar membros da equipe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </div>

      {/* Team Members Table */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white">Visão Geral da Equipe ({filteredMembers.length} membros)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className={`p-4 rounded-xl border transition-all ${
                  member.status === 'low' 
                    ? 'bg-red-500/5 border-red-500/30' 
                    : member.status === 'moderate'
                    ? 'bg-yellow-500/5 border-yellow-500/30'
                    : 'bg-green-500/5 border-green-500/30'
                } hover:bg-white/10`}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-[#007BFF] text-white">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white">{member.name}</h3>
                      <Badge className={getStatusColor(member.status)}>
                        {member.status}
                      </Badge>
                      {member.trend === 'down' && (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                      {member.trend === 'up' && (
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      )}
                    </div>
                    <p className="text-white/60 mb-3">{member.role}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white/70">Nível de Energia</span>
                          <span className="text-white">{member.energy}%</span>
                        </div>
                        <Progress value={member.energy} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white/70">Engajamento</span>
                          <span className="text-white">{member.engagement}%</span>
                        </div>
                        <Progress value={member.engagement} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-[#007BFF] hover:bg-[#0056b3]"
                        onClick={() => setSelectedMember(member)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#0A1128] border-white/20 text-white max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-white flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-[#007BFF] text-white">
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p>{member.name}</p>
                            <p className="text-white/60">{member.role}</p>
                          </div>
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6 mt-4">
                        {/* Energy & Engagement */}
                        <div className="grid grid-cols-2 gap-4">
                          <Card className="bg-white/10 border-white/20">
                            <CardContent className="p-4">
                              <p className="text-white/70 mb-2">Nível de Energia</p>
                              <p className="text-white mb-2">{member.energy}%</p>
                              <Progress value={member.energy} className="h-2" />
                            </CardContent>
                          </Card>
                          <Card className="bg-white/10 border-white/20">
                            <CardContent className="p-4">
                              <p className="text-white/70 mb-2">Engajamento</p>
                              <p className="text-white mb-2">{member.engagement}%</p>
                              <Progress value={member.engagement} className="h-2" />
                            </CardContent>
                          </Card>
                        </div>

                        {/* Activity Stats */}
                        <Card className="bg-white/10 border-white/20">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-2">
                              <Activity className="w-5 h-5" />
                              Visão Geral de Atividades
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="grid grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                              <p className="text-white">{member.coursesCompleted}</p>
                              <p className="text-white/60">Cursos</p>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                              <p className="text-white">{member.eventsAttended}</p>
                              <p className="text-white/60">Eventos</p>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-lg">
                              <p className="text-white">{member.streak} dias</p>
                              <p className="text-white/60">Sequência</p>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Recommendations */}
                        <Card className="bg-blue-500/10 border-blue-500/30">
                          <CardHeader>
                            <CardTitle className="text-white">Recomendações</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-2 text-white/80">
                            {member.status === 'low' && (
                              <>
                                <p>• Agende uma conversa individual para discutir a carga de trabalho</p>
                                <p>• Considere redistribuir algumas tarefas</p>
                                <p>• Incentive a participação em eventos sociais da equipe</p>
                              </>
                            )}
                            {member.status === 'moderate' && (
                              <>
                                <p>• Monitore os níveis de engajamento de perto</p>
                                <p>• Incentive a conclusão de cursos</p>
                                <p>• Reconheça conquistas recentes</p>
                              </>
                            )}
                            {member.status === 'high' && (
                              <>
                                <p>• Ótimo desempenho! Considere oportunidades de mentoria</p>
                                <p>• Reconheça publicamente as conquistas</p>
                                <p>• Envolva em projetos estratégicos</p>
                              </>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
