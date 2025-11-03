import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { UserType } from '../App';
import { MessageSquare, Send, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface FeedbackPageProps {
  userType: UserType;
}

const feedbackTopics = [
  { name: 'Carga de Trabalho', value: 35, color: '#ef4444' },
  { name: 'Comunicação', value: 25, color: '#f59e0b' },
  { name: 'Ambiente de Trabalho', value: 20, color: '#10b981' },
  { name: 'Oportunidades de Crescimento', value: 15, color: '#3b82f6' },
  { name: 'Outros', value: 5, color: '#8b5cf6' },
];

const recentFeedback = [
  { topic: 'Carga de Trabalho', message: 'Necessário melhor distribuição de tarefas na equipe', impact: 'high', date: '2 dias atrás' },
  { topic: 'Comunicação', message: 'Atualizações mais frequentes da equipe seriam úteis', impact: 'medium', date: '3 dias atrás' },
  { topic: 'Ambiente de Trabalho', message: 'Escritório poderia ter melhor iluminação e cadeiras ergonômicas', impact: 'medium', date: '5 dias atrás' },
  { topic: 'Crescimento', message: 'Adoraria mais oportunidades de mentoria', impact: 'low', date: '1 semana atrás' },
];

export function FeedbackPage({ userType }: FeedbackPageProps) {
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmitFeedback = () => {
    if (!feedbackText.trim()) {
      toast.error('Por favor, insira seu feedback');
      return;
    }
    
    toast.success('Obrigado! Seu feedback anônimo foi enviado.');
    setFeedbackText('');
  };

  if (userType === 'manager') {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-white mb-2">Feedback e Insights da Equipe 💬</h1>
          <p className="text-white/70">Feedback anônimo dos membros da sua equipe</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-10 h-10 text-[#007BFF] mx-auto mb-2" />
              <p className="text-white">23 Feedbacks</p>
              <p className="text-white/60">Este mês</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-2" />
              <p className="text-white">+15% Participação</p>
              <p className="text-white/60">vs mês passado</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
            <CardContent className="p-6 text-center">
              <AlertCircle className="w-10 h-10 text-orange-400 mx-auto mb-2" />
              <p className="text-white">5 Alta Prioridade</p>
              <p className="text-white/60">Precisam de ação</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Feedback Topics Chart */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white">Distribuição de Tópicos de Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={feedbackTopics}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={(entry) => `${entry.name} (${entry.value}%)`}
                  >
                    {feedbackTopics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Suggested Actions */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Ações Sugeridas por IA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <p className="text-white mb-2">Abordar Preocupações com Carga de Trabalho</p>
                <p className="text-white/70 mb-3">Vários membros da equipe mencionaram carga de trabalho. Considere redistribuir tarefas.</p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-[#007BFF] hover:bg-[#0056b3]">
                    Aplicar Sugestão
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Marcar como Feito
                  </Button>
                </div>
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <p className="text-white mb-2">Melhorar Comunicação da Equipe</p>
                <p className="text-white/70 mb-3">Agende reuniões semanais de sincronização para melhorar o alinhamento da equipe.</p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-[#007BFF] hover:bg-[#0056b3]">
                    Aplicar Sugestão
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Marcar como Feito
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Feedback */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white">Feedbacks Anônimos Recentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentFeedback.map((feedback, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border ${
                  feedback.impact === 'high' 
                    ? 'bg-red-500/10 border-red-500/30' 
                    : feedback.impact === 'medium'
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : 'bg-blue-500/10 border-blue-500/30'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-[#007BFF]">{feedback.topic}</span>
                  <span className="text-white/60">{feedback.date}</span>
                </div>
                <p className="text-white">{feedback.message}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Member view
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-white mb-2">Feedback Anônimo 💬</h1>
        <p className="text-white/70">Sua voz molda o futuro do MindTech Jr</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl mb-6">
        <CardHeader>
          <CardTitle className="text-white">Enviar Feedback Anônimo</CardTitle>
          <p className="text-white/70">
            Compartilhe seus pensamentos, sugestões ou preocupações anonimamente. Seu feedback nos ajuda a melhorar a plataforma e o ambiente de trabalho.
          </p>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Compartilhe seus pensamentos aqui... (Isso é completamente anônimo)"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            className="min-h-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4"
          />
          <Button 
            onClick={handleSubmitFeedback}
            className="w-full bg-[#007BFF] hover:bg-[#0056b3]"
          >
            <Send className="w-4 h-4 mr-2" />
            Enviar Feedback
          </Button>
        </CardContent>
      </Card>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-10 h-10 text-[#007BFF] mx-auto mb-3" />
            <p className="text-white mb-1">100% Anônimo</p>
            <p className="text-white/60">Sua identidade nunca é revelada</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <p className="text-white mb-1">Impacto Direto</p>
            <p className="text-white/60">A gestão revisa todos os feedbacks</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6 text-center">
            <Lightbulb className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
            <p className="text-white mb-1">Melhoria Contínua</p>
            <p className="text-white/60">Agimos com base em suas sugestões</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
