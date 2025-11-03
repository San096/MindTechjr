import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, Clock, Award, Play } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: 'technical' | 'soft' | 'ai';
  duration: string;
  progress?: number;
  xp: number;
  description: string;
}

const courses: Course[] = [
  { id: 1, title: 'Padrões Avançados de React', category: 'technical', duration: '6 horas', progress: 65, xp: 200, description: 'Domine padrões avançados e melhores práticas de React' },
  { id: 2, title: 'Fundamentos de Liderança', category: 'soft', duration: '4 horas', progress: 30, xp: 150, description: 'Desenvolva habilidades essenciais de liderança e gestão de equipes' },
  { id: 3, title: 'IA na Prática', category: 'ai', duration: '8 horas', xp: 300, description: 'Aprenda a integrar IA em aplicações do mundo real' },
  { id: 4, title: 'Fundamentos de TypeScript', category: 'technical', duration: '5 horas', xp: 180, description: 'Mergulhe fundo em TypeScript e segurança de tipos' },
  { id: 5, title: 'Comunicação Eficaz', category: 'soft', duration: '3 horas', xp: 120, description: 'Melhore suas habilidades de comunicação em ambientes profissionais' },
  { id: 6, title: 'Introdução ao Machine Learning', category: 'ai', duration: '10 horas', xp: 350, description: 'Introdução aos conceitos e algoritmos de machine learning' },
  { id: 7, title: 'Melhores Práticas Node.js', category: 'technical', duration: '7 horas', xp: 220, description: 'Construa aplicações backend escaláveis com Node.js' },
  { id: 8, title: 'Inteligência Emocional', category: 'soft', duration: '4 horas', xp: 150, description: 'Desenvolva inteligência emocional para melhor colaboração em equipe' },
];

export function CoursesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : activeTab === 'inprogress'
    ? courses.filter(c => c.progress !== undefined && c.progress > 0)
    : courses.filter(c => c.category === activeTab);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-white mb-2">Centro de Aprendizado 📚</h1>
        <p className="text-white/70">Expanda suas habilidades e ganhe XP</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-10 h-10 text-[#007BFF] mx-auto mb-2" />
            <p className="text-white">2 Em Progresso</p>
            <p className="text-white/60">Cursos ativos</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6 text-center">
            <Award className="w-10 h-10 text-[#007BFF] mx-auto mb-2" />
            <p className="text-white">8 Concluídos</p>
            <p className="text-white/60">Cursos finalizados</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
          <CardContent className="p-6 text-center">
            <Clock className="w-10 h-10 text-[#007BFF] mx-auto mb-2" />
            <p className="text-white">42 Horas</p>
            <p className="text-white/60">Tempo total de aprendizado</p>
          </CardContent>
        </Card>
      </div>

      {/* Course Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6 bg-white/5">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
            Todos
          </TabsTrigger>
          <TabsTrigger value="inprogress" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
            Em Progresso
          </TabsTrigger>
          <TabsTrigger value="technical" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
            Técnicos
          </TabsTrigger>
          <TabsTrigger value="soft" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
            Soft Skills
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
            IA
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white mb-2">{course.title}</CardTitle>
                      <p className="text-white/60">{course.description}</p>
                    </div>
                    <Badge className="bg-[#007BFF]/20 text-blue-300 border-[#007BFF]/30 ml-2">
                      {course.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-white/70">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{course.xp} XP</span>
                    </div>
                  </div>

                  {course.progress !== undefined && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/70">Progresso</span>
                        <span className="text-white">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <Button 
                    className={`w-full ${course.progress ? 'bg-green-600 hover:bg-green-700' : 'bg-[#007BFF] hover:bg-[#0056b3]'}`}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {course.progress ? 'Continuar Curso' : 'Iniciar Curso'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
