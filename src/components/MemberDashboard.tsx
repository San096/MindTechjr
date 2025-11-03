import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { AvantinhoMascot } from './AvantinhoMascot';
import { PageType } from '../App';
import { 
  Smile, 
  Meh, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Calendar,
  Award,
  Zap
} from 'lucide-react';

interface MemberDashboardProps {
  onNavigate: (page: PageType) => void;
}

export function MemberDashboard({ onNavigate }: MemberDashboardProps) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white mb-2">Bem-vindo de Volta! 👋</h1>
        <p className="text-white/70">Aqui está sua visão geral de bem-estar e desenvolvimento</p>
      </div>

      {/* Avantinho Message */}
      <Card className="bg-gradient-to-r from-[#007BFF]/20 to-purple-500/20 backdrop-blur-lg border-white/20 mb-8 rounded-2xl">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <AvantinhoMascot size="md" />
            <div className="flex-1">
              <p className="text-white mb-3">
                👽 <strong>Olá!</strong> Seu nível de energia está ótimo esta semana! Que tal explorar um novo curso de IA na Prática? Você está a apenas 50 XP do próximo nível!
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-[#007BFF] hover:bg-[#0056b3]">
                  Ver Sugestões
                </Button>
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Talvez Depois
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <Smile className="w-5 h-5" />
              Estado Emocional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-1">Muito Motivado</p>
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              Excelente
            </Badge>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Nível de Energia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-2">85%</p>
            <Progress value={85} className="h-2" />
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <Award className="w-5 h-5" />
              XP Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-1">1.450 XP</p>
            <p className="text-white/60">Nível 14</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white/70 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Sequência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white mb-1">12 Dias</p>
            <p className="text-white/60">Continue assim! 🔥</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Continue Aprendendo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-white">IA na Prática</p>
                <span className="text-white/60">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-white">Habilidades de Liderança</p>
                <span className="text-white/60">30%</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
            <Button 
              className="w-full bg-[#007BFF] hover:bg-[#0056b3]"
              onClick={() => onNavigate('courses')}
            >
              Ver Todos os Cursos
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Próximos Eventos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 p-3 bg-white/5 rounded-xl">
              <div className="bg-[#007BFF] rounded-lg p-3 flex flex-col items-center justify-center min-w-[60px]">
                <span className="text-white">Nov</span>
                <span className="text-white">02</span>
              </div>
              <div className="flex-1">
                <p className="text-white">Trilha em Equipe</p>
                <p className="text-white/60">Sábado, 14:00</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-white/5 rounded-xl">
              <div className="bg-purple-500 rounded-lg p-3 flex flex-col items-center justify-center min-w-[60px]">
                <span className="text-white">Nov</span>
                <span className="text-white">05</span>
              </div>
              <div className="flex-1">
                <p className="text-white">Encontro do Clube do Livro</p>
                <p className="text-white/60">Terça-feira, 18:00</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-white/30 text-white hover:bg-white/10"
              onClick={() => onNavigate('community')}
            >
              Ver Todos os Eventos
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Users className="w-5 h-5" />
            Atividade Recente
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-white">Conquistou badge "Aprendiz Rápido"</p>
              <p className="text-white/60">2 horas atrás</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-white">Completou curso "Fundamentos do React"</p>
              <p className="text-white/60">Ontem</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-white">Entrou no grupo "Noite de Jogos"</p>
              <p className="text-white/60">2 dias atrás</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
