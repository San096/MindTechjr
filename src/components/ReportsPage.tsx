import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Area, AreaChart } from 'recharts';
import { Download, TrendingUp, Users, Activity, Award } from 'lucide-react';

const weeklyEngagement = [
  { week: 'Semana 1', engagement: 75, wellbeing: 78, productivity: 72 },
  { week: 'Semana 2', engagement: 78, wellbeing: 80, productivity: 75 },
  { week: 'Semana 3', engagement: 72, wellbeing: 74, productivity: 70 },
  { week: 'Semana 4', engagement: 82, wellbeing: 85, productivity: 80 },
  { week: 'Semana 5', engagement: 85, wellbeing: 88, productivity: 83 },
];

const courseCompletion = [
  { month: 'Jan', technical: 12, soft: 8, ai: 5 },
  { month: 'Fev', technical: 15, soft: 10, ai: 7 },
  { month: 'Mar', technical: 18, soft: 12, ai: 9 },
  { month: 'Abr', technical: 22, soft: 15, ai: 11 },
  { month: 'Mai', technical: 20, soft: 14, ai: 10 },
];

const eventParticipation = [
  { event: 'Trilhas', participants: 8 },
  { event: 'Clube do Livro', participants: 6 },
  { event: 'Noite de Jogos', participants: 12 },
  { event: 'Workshops', participants: 15 },
  { event: 'Social', participants: 18 },
];

export function ReportsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white mb-2">Relatórios e Análises 📊</h1>
            <p className="text-white/70">Insights profundos sobre desempenho e bem-estar da equipe</p>
          </div>
          <div className="flex gap-3">
            <Select defaultValue="month">
              <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Selecionar período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última Semana</SelectItem>
                <SelectItem value="month">Último Mês</SelectItem>
                <SelectItem value="quarter">Último Trimestre</SelectItem>
                <SelectItem value="year">Último Ano</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#007BFF] hover:bg-[#0056b3]">
              <Download className="w-4 h-4 mr-2" />
              Exportar PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-green-400">+8%</span>
            </div>
            <p className="text-white mb-1">Engajamento Médio</p>
            <p className="text-white/60">85%</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-blue-400" />
              <span className="text-blue-400">+12%</span>
            </div>
            <p className="text-white mb-1">Participação em Eventos</p>
            <p className="text-white/60">78%</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-8 h-8 text-purple-400" />
              <span className="text-purple-400">+15%</span>
            </div>
            <p className="text-white mb-1">Pontuação de Bem-estar</p>
            <p className="text-white/60">88%</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400">+20%</span>
            </div>
            <p className="text-white mb-1">Cursos Concluídos</p>
            <p className="text-white/60">45</p>
          </CardContent>
        </Card>
      </div>

      {/* Engagement Trends */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl mb-8">
        <CardHeader>
          <CardTitle className="text-white">Tendências de Engajamento, Bem-estar e Produtividade</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyEngagement}>
              <defs>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#007BFF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#007BFF" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorWellbeing" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProductivity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="week" stroke="#ffffff60" />
              <YAxis stroke="#ffffff60" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(10, 17, 40, 0.95)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="engagement" stroke="#007BFF" fillOpacity={1} fill="url(#colorEngagement)" />
              <Area type="monotone" dataKey="wellbeing" stroke="#10b981" fillOpacity={1} fill="url(#colorWellbeing)" />
              <Area type="monotone" dataKey="productivity" stroke="#f59e0b" fillOpacity={1} fill="url(#colorProductivity)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Completion by Category */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white">Conclusão de Cursos por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseCompletion}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="month" stroke="#ffffff60" />
                <YAxis stroke="#ffffff60" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10, 17, 40, 0.95)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Legend />
                <Bar dataKey="technical" fill="#007BFF" name="Técnicos" />
                <Bar dataKey="soft" fill="#10b981" name="Soft Skills" />
                <Bar dataKey="ai" fill="#8b5cf6" name="IA" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Event Participation */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white">Participação em Eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={eventParticipation} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis type="number" stroke="#ffffff60" />
                <YAxis dataKey="event" type="category" stroke="#ffffff60" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10, 17, 40, 0.95)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="participants" fill="#007BFF" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
