import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FAQ } from "@/Constants";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const generateId = () => `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      content: "Bonjour ! Comment puis-je vous aider avec Valoris Securities ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: generateId(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setLoading(true);
    setTyping(true);

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
              "HTTP-Referer": "https://valoris.ma",
              "X-Title": "Valoris Securities",
            },
            body: JSON.stringify({
              model: "deepseek/deepseek-r1-0528:free",
              messages: [
                {
                  role: "user",
                  content: `${FAQ} Voici la question de l'utilisateur : ${newMessage}`,
                },
              ],
            }),
          });

      const data = await response.json();
      let reply = data?.choices?.[0]?.message?.content || "Réponse non disponible.";
      reply = reply.replace(/\\boxed{([^}]+)}/g, "$1");

      const botMessage: Message = {
        id: generateId(),
        content: reply,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          content: "Désolé, une erreur s'est produite lors de la récupération de la réponse.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
      setTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <Card className="w-80 shadow-lg">
          <CardHeader className="flex justify-between items-center border-b px-4 py-2">
            <span className="font-semibold text-primary">Support Valoris</span>
            <X className="cursor-pointer" onClick={toggleChat} />
          </CardHeader>
          <CardContent className="h-64 overflow-y-auto space-y-3 px-4 py-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className="flex items-center space-x-2 max-w-xs">
                  {msg.sender === "bot" && (
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/documents/chatbot.PNG" />
                      <AvatarFallback>V</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`px-3 py-2 rounded-lg text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gradient-to-r from-purple-200 to-pink-100 text-gray-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 max-w-xs animate-pulse">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/bot.png" />
                    <AvatarFallback>🤖</AvatarFallback>
                  </Avatar>
        
                  <div className="px-3 py-2 rounded-lg text-sm bg-gray-300 text-gray-600">
                    Le bot est en train d'écrire...
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex items-center gap-2 px-4 py-2 border-t">
            <Input
              placeholder="Écrivez un message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={loading}
            />
            <Button
              size="icon"
              onClick={handleSendMessage}
              disabled={loading || !newMessage.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Button className="rounded-full p-3 shadow-lg" onClick={toggleChat}>
          <MessageCircle className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default SupportChat; 