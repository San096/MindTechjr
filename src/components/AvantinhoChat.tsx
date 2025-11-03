import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { AvantinhoMascot } from './AvantinhoMascot';
import { Send, Smile, Meh, Frown } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'avantinho';
  timestamp: Date;
}

export function AvantinhoChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👽 Olá! Eu sou o Avantinho, seu assistente de bem-estar emocional. Como você está se sentindo hoje?",
      sender: 'avantinho',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleMoodSelect = (mood: string) => {
    const userMsg: Message = {
      id: messages.length + 1,
      text: mood,
      sender: 'user',
      timestamp: new Date(),
    };

    let response = '';
    if (mood.includes('😊')) {
      response = "👽 Isso é ótimo! Sua energia positiva é contagiante. Que tal canalizá-la para aprender algo novo hoje? Recomendo dar uma olhada no curso 'IA na Prática'!";
    } else if (mood.includes('😐')) {
      response = "👽 Sentir-se neutro é normal! Às vezes só precisamos de um pequeno impulso. Que tal dar uma caminhada curta ou conversar com um colega? Sua energia importa para nós!";
    } else {
      response = "👽 Sinto muito que você esteja se sentindo assim. Lembre-se, ter dias difíceis é normal. Gostaria que eu sugerisse algumas atividades relaxantes ou te conectasse com sua equipe para apoio?";
    }

    const avantinhoMsg: Message = {
      id: messages.length + 2,
      text: response,
      sender: 'avantinho',
      timestamp: new Date(),
    };

    setMessages([...messages, userMsg, avantinhoMsg]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsg: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    const responses = [
      "👽 Essa é uma ótima pergunta! Com base no seu progresso atual, sugiro focar no desenvolvimento de soft skills. Você está indo muito bem com habilidades técnicas!",
      "👽 Eu entendo! Equilibrar trabalho e aprendizado pode ser desafiador. Que tal reservar apenas 15 minutos por dia? Pequenos passos levam a grandes conquistas!",
      "👽 Excelente reflexão! Você já pensou em entrar na comunidade 'Clube do Livro'? Você pode encontrar pessoas com interesses similares lá!",
      "👽 Ótimo trabalho mantendo o engajamento! Você ganhou 30 XP por sua atividade recente. Continue com o trabalho fantástico!",
    ];

    const avantinhoMsg: Message = {
      id: messages.length + 2,
      text: responses[Math.floor(Math.random() * responses.length)],
      sender: 'avantinho',
      timestamp: new Date(),
    };

    setMessages([...messages, userMsg, avantinhoMsg]);
    setInputText('');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-white mb-2">Converse com o Avantinho 👽</h1>
        <p className="text-white/70">Seu assistente pessoal de bem-estar emocional</p>
      </div>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl flex-1 flex flex-col">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-white flex items-center gap-3">
            <AvantinhoMascot size="sm" animate={false} />
            Avantinho - Online
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl p-4 ${
                  message.sender === 'user'
                    ? 'bg-[#007BFF] text-white'
                    : 'bg-white/20 text-white'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs opacity-60 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </CardContent>

        <div className="p-4 border-t border-white/10">
          {/* Mood Quick Reactions */}
          <div className="flex gap-2 mb-3 justify-center">
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => handleMoodSelect('😊 Me sentindo ótimo!')}
            >
              <Smile className="w-4 h-4 mr-2" />
              Ótimo
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => handleMoodSelect('😐 Me sentindo ok')}
            >
              <Meh className="w-4 h-4 mr-2" />
              Ok
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => handleMoodSelect('😞 Me sentindo pra baixo')}
            >
              <Frown className="w-4 h-4 mr-2" />
              Baixo
            </Button>
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Digite sua mensagem..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-[#007BFF] hover:bg-[#0056b3]"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
