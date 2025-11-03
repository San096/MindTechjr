import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { AvantinhoMascot } from './AvantinhoMascot';
import { UserType } from '../App';
import { Sparkles, Stars } from 'lucide-react';

interface LoginPageProps {
  onLogin: (userType: UserType) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (type: UserType) => {
    onLogin(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1128] via-[#001f54] to-[#007BFF] relative overflow-hidden">
      {/* Cosmic particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-[#007BFF]" />
              <h1 className="text-white">MindTech Jr</h1>
              <Stars className="w-8 h-8 text-[#007BFF]" />
            </div>
            <p className="text-white/80">Plataforma de Engajamento, Bem-estar e Desenvolvimento</p>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl rounded-2xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-white text-center">Bem-vindo de Volta</CardTitle>
              <CardDescription className="text-white/70 text-center">
                Entre para continuar sua jornada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="member" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/5">
                  <TabsTrigger value="member" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
                    Membro
                  </TabsTrigger>
                  <TabsTrigger value="manager" className="data-[state=active]:bg-[#007BFF] data-[state=active]:text-white">
                    Gestor
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="member">
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin('member'); }}>
                    <div className="space-y-2">
                      <Label htmlFor="email-member" className="text-white">Email</Label>
                      <Input
                        id="email-member"
                        type="email"
                        placeholder="seu.email@mindtech.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-member" className="text-white">Senha</Label>
                      <Input
                        id="password-member"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white">
                      Entrar
                    </Button>
                    <p className="text-center text-white/60">
                      Não tem uma conta?{' '}
                      <a href="#" className="text-[#007BFF] hover:underline">
                        Criar conta
                      </a>
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="manager">
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin('manager'); }}>
                    <div className="space-y-2">
                      <Label htmlFor="email-manager" className="text-white">Email</Label>
                      <Input
                        id="email-manager"
                        type="email"
                        placeholder="gestor@mindtech.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-manager" className="text-white">Senha</Label>
                      <Input
                        id="password-manager"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white">
                      Entrar como Gestor
                    </Button>
                    <p className="text-center text-white/60">
                      Login de membro?{' '}
                      <a href="#" className="text-[#007BFF] hover:underline">
                        Trocar para membro
                      </a>
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Avantinho greeting */}
          <div className="mt-6 flex items-start gap-3 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl">
            <AvantinhoMascot size="sm" />
            <div className="flex-1">
              <p className="text-white">
                👽 Olá! Bem-vindo ao MindTech Jr. Pronto para impulsionar seu engajamento e bem-estar?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
