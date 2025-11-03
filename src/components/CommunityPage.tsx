import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Users, MapPin, Plus } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  group: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  color: string;
}

interface Group {
  id: number;
  name: string;
  members: number;
  description: string;
  icon: string;
}

const events: Event[] = [
  { id: 1, title: 'Trilha em Equipe', group: 'Clube de Trilha', date: 'Nov 02', time: '14:00', location: 'Parque da Montanha', participants: 8, color: 'bg-blue-500' },
  { id: 2, title: 'Encontro do Clube do Livro', group: 'Clube de Leitura', date: 'Nov 05', time: '18:00', location: 'Lounge do Escritório', participants: 6, color: 'bg-purple-500' },
  { id: 3, title: 'Noite de Jogos', group: 'Comunidade Gamer', date: 'Nov 08', time: '19:00', location: 'Sala de Jogos', participants: 12, color: 'bg-green-500' },
  { id: 4, title: 'Caminhada Fotográfica', group: 'Entusiastas de Foto', date: 'Nov 10', time: '10:00', location: 'Centro da Cidade', participants: 5, color: 'bg-orange-500' },
];

const groups: Group[] = [
  { id: 1, name: 'Clube de Trilha', members: 15, description: 'Explore a natureza e mantenha-se ativo em grupo', icon: '⛰️' },
  { id: 2, name: 'Clube de Leitura', members: 12, description: 'Compartilhe e discuta grandes livros', icon: '📚' },
  { id: 3, name: 'Comunidade Gamer', members: 20, description: 'Jogue e compita em partidas amigáveis', icon: '🎮' },
  { id: 4, name: 'Entusiastas de Foto', members: 8, description: 'Capture momentos e melhore suas habilidades fotográficas', icon: '📸' },
  { id: 5, name: 'Esquadrão Culinário', members: 10, description: 'Compartilhe receitas e experiências gastronômicas', icon: '👨‍🍳' },
  { id: 6, name: 'Equipe Fitness', members: 18, description: 'Exercite-se junto e mantenha-se saudável', icon: '💪' },
];

export function CommunityPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-white mb-2">Comunidade e Atividades 🌟</h1>
        <p className="text-white/70">Conecte-se com colegas e participe de eventos empolgantes</p>
      </div>

      {/* Upcoming Events */}
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Próximos Eventos
          </CardTitle>
          <Button className="bg-[#007BFF] hover:bg-[#0056b3]">
            <Plus className="w-4 h-4 mr-2" />
            Criar Evento
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
              <div className={`${event.color} rounded-lg p-4 flex flex-col items-center justify-center min-w-[80px]`}>
                <span className="text-white">{event.date.split(' ')[0]}</span>
                <span className="text-white">{event.date.split(' ')[1]}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">{event.title}</h3>
                <div className="flex flex-wrap gap-3 text-white/60 mb-2">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{event.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Badge className="bg-[#007BFF]/20 text-blue-300 border-[#007BFF]/30">
                  {event.group}
                </Badge>
              </div>
              <div className="flex items-center">
                <Button className="bg-[#007BFF] hover:bg-[#0056b3]">
                  Participar
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Interest Groups */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white">Grupos de Interesse</h2>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Plus className="w-4 h-4 mr-2" />
            Criar Grupo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id} className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{group.icon}</div>
                <h3 className="text-white mb-2">{group.name}</h3>
                <p className="text-white/60 mb-3">{group.description}</p>
                <div className="flex items-center justify-center gap-1 text-white/70">
                  <Users className="w-4 h-4" />
                  <span>{group.members} membros</span>
                </div>
              </div>
              <Button className="w-full bg-[#007BFF] hover:bg-[#0056b3]">
                Entrar no Grupo
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
