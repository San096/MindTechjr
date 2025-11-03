import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { UserType } from '../App';
import { Search, MessageSquare, UserPlus } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  initials: string;
  role: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Ana Lima', initials: 'AL', role: 'Desenvolvedora Frontend', skills: ['React', 'TypeScript', 'UI/UX', 'Liderança'] },
  { id: 2, name: 'Lucas Silva', initials: 'LS', role: 'Desenvolvedor Backend', skills: ['Node.js', 'Python', 'MongoDB', 'Design de API'] },
  { id: 3, name: 'Maria Santos', initials: 'MS', role: 'Desenvolvedora Full Stack', skills: ['React', 'Node.js', 'PostgreSQL', 'DevOps'] },
  { id: 4, name: 'Pedro Costa', initials: 'PC', role: 'Desenvolvedor Mobile', skills: ['React Native', 'Swift', 'Flutter', 'UX Mobile'] },
  { id: 5, name: 'Julia Alves', initials: 'JA', role: 'Cientista de Dados', skills: ['Python', 'Machine Learning', 'SQL', 'Visualização de Dados'] },
  { id: 6, name: 'Rafael Mendes', initials: 'RM', role: 'Engenheiro DevOps', skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
  { id: 7, name: 'Beatriz Rocha', initials: 'BR', role: 'Designer UX', skills: ['Figma', 'Pesquisa de Usuário', 'Prototipagem', 'Design Systems'] },
  { id: 8, name: 'Carlos Dias', initials: 'CD', role: 'Engenheiro de QA', skills: ['Automação de Testes', 'Selenium', 'Testes de API', 'Agile'] },
];

interface SkillsPageProps {
  userType: UserType;
}

export function SkillsPage({ userType }: SkillsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-white mb-2">
          {userType === 'manager' ? 'Catálogo de Habilidades da Equipe' : 'Habilidades e Conexões Internas'}
        </h1>
        <p className="text-white/70">
          {userType === 'manager' 
            ? 'Explore as habilidades da sua equipe e identifique oportunidades de colaboração'
            : 'Conecte-se com colegas e descubra novas habilidades'
          }
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
          <Input
            placeholder="Buscar por nome ou habilidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card key={member.id} className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl hover:bg-white/15 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-[#007BFF] text-white">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-white mb-1">{member.name}</h3>
                  <p className="text-white/60">{member.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-white/70 mb-2">Habilidades:</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-[#007BFF]/20 text-blue-300 border-[#007BFF]/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 bg-[#007BFF] hover:bg-[#0056b3]">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mensagem
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <UserPlus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/60">Nenhum membro encontrado com sua busca</p>
        </div>
      )}
    </div>
  );
}
