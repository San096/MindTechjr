import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { AvantinhoMascot } from './AvantinhoMascot';
import { PageType } from '../App';
import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  MessageSquare,
  Award,
  Activity,
  CheckCircle
} from 'lucide-react';
import { Cell, Pie, PieChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';

interface ManagerDashboardProps {
  onNavigate: (page: PageType) => void;
}

const energyData = [
  { name: 'Alta Energia', value: 6, color: '#10b981' },
  { name: 'Moderada', value: 3, color: '#f59e0b' },
  { name: 'Baixa Energia', value: 1, color: '#ef4444' },
];

const engagementTrend = [
  { week: 'W1', engagement: 75 },
  { week: 'W2', engagement: 78 },
  { week: 'W3', engagement: 72 },
  { week: 'W4', engagement: 82 },
  { week: 'W5', engagement: 85 },
];

export function ManagerDashboard({ onNavigate }: ManagerDashboardProps) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white mb-2">Dashboard de Liderança da Equipe 👋</h1>
        <p className="text-white/70">Olá Carla! Aqui está a visão geral de bem-estar e engajamento da sua equipe</p>
      </div>

      {/* Avantinho Insight */}
      <Card className="bg-gradient-to-r from-[#007BFF]/20 to-purple-500/20 backdrop-blur-lg border-white/20 mb-8 rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <AvantinhoMascot size="md" />
            <div className="flex-1">
              <p className="text-white mb-3">
                👽 <strong>Olá Carla!</strong> Dois membros parecem sobrecarregados esta semana. A energia da Ana caiu 15% e o Lucas está mostrando sinais de estresse. Que tal planejar um café em equipe ou conversas individuais?
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-[#007BFF] hover:bg-[#0056b3]">
                  Ver Detalhes
                </Button>
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Agendar Pausa
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Tamanho da Equipe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-1">10 Desenvolvedores</p>
            <p className="text-white/60">Todos Ativos</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Engajamento Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-1">85%</p>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              +5% vs semana passada
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Alertas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-1">2 Membros</p>
            <p className="text-white/60">Precisam de atenção</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-1">5 Novos</p>
            <p className="text-white/60">Esta semana</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white">Distribuição de Energia da Equipe</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={energyData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {energyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {energyData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-white/70">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white">Tendência de Engajamento (5 Semanas)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={engagementTrend}>
                <XAxis dataKey="week" stroke="#ffffff60" />
                <YAxis stroke="#ffffff60" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line type="monotone" dataKey="engagement" stroke="#007BFF" strokeWidth={3} dot={{ fill: '#007BFF', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Team Alerts */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl mb-8">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Membros da Equipe Precisando de Atenção
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <span className="text-white">AL</span>
              </div>
              <div>
                <p className="text-white">Ana Lima</p>
                <p className="text-white/60">Energia: 45% (-15% esta semana)</p>
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-[#007BFF] hover:bg-[#0056b3]"
              onClick={() => onNavigate('team')}
            >
              Ver Detalhes
            </Button>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <span className="text-white">LS</span>
              </div>
              <div>
                <p className="text-white">Lucas Silva</p>
                <p className="text-white/60">Energia: 60% (Baixo engajamento em eventos)</p>
              </div>
            </div>
            <Button 
              size="sm" 
              className="bg-[#007BFF] hover:bg-[#0056b3]"
              onClick={() => onNavigate('team')}
            >
              Ver Detalhes
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card 
          className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl cursor-pointer hover:bg-white/20 transition-all"
          onClick={() => onNavigate('team')}
        >
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-[#007BFF] mx-auto mb-3" />
            <p className="text-white mb-1">Monitoramento da Equipe</p>
            <p className="text-white/60">Ver todos os membros</p>
          </CardContent>
        </Card>

        <Card 
          className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl cursor-pointer hover:bg-white/20 transition-all"
          onClick={() => onNavigate('reports')}
        >
          <CardContent className="p-6 text-center">
            <Activity className="w-12 h-12 text-[#007BFF] mx-auto mb-3" />
            <p className="text-white mb-1">Relatórios e Métricas</p>
            <p className="text-white/60">Insights profundos</p>
          </CardContent>
        </Card>

        <Card 
          className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl cursor-pointer hover:bg-white/20 transition-all"
          onClick={() => onNavigate('gamification')}
        >
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 text-[#007BFF] mx-auto mb-3" />
            <p className="text-white mb-1">Reconhecer Equipe</p>
            <p className="text-white/60">Dar elogios</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
