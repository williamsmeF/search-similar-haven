
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Send, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm Coveo AI assistant. How can I help you today?",
    sender: "ai",
    timestamp: new Date(),
  },
];

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses = [
        "I can help you discover more about Coveo's AI-powered solutions for your business.",
        "Coveo offers search relevance, recommendations, and AI solutions. What would you like to learn more about?",
        "Our platform combines search, recommendations, and AI to deliver personalized digital experiences.",
        "Would you like to book a demo to see our platform in action?",
        "Coveo's solutions can help transform how your customers and employees find information.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newAiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    
    if (!isOpen) {
      toast({
        title: "Chat assistant opened",
        description: "Ask me anything about Coveo's solutions!",
        duration: 3000,
      });
    }
  };

  const renderMessages = () => {
    return messages.map((message) => (
      <div
        key={message.id}
        className={`mb-4 max-w-[80%] ${
          message.sender === "user"
            ? "ml-auto bg-coveo-blue text-white"
            : "mr-auto bg-muted text-foreground"
        } rounded-lg p-3 shadow`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="block mt-1 text-xs opacity-70">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    ));
  };

  return (
    <>
      {/* Mobile version (sheet) */}
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg btn-hover z-50"
              onClick={toggleChat}
            >
              <MessageCircle size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col h-[90vh] p-0">
            <div className="bg-coveo-blue text-white p-4 flex justify-between items-center">
              <h3 className="font-bold text-lg">Coveo Assistant</h3>
              <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </Button>
            </div>
            <div className="flex-grow overflow-auto p-4 bg-background">
              {renderMessages()}
              {isLoading && (
                <div className="flex space-x-2 mr-auto bg-muted text-foreground rounded-lg p-3 shadow items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-4 bg-muted border-t border-border">
              <div className="flex items-center space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-grow"
                />
                <Button type="submit" size="icon" disabled={isLoading || !inputMessage.trim()}>
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      ) : (
        /* Desktop version (fixed positioning) */
        <>
          <Button
            className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg btn-hover z-50"
            onClick={toggleChat}
          >
            <MessageCircle size={24} />
          </Button>
          
          {isOpen && (
            <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-background rounded-lg shadow-xl flex flex-col z-50 border border-border overflow-hidden" style={{ height: "400px" }}>
              <div className="bg-coveo-blue text-white p-3 flex justify-between items-center">
                <h3 className="font-medium">Coveo Assistant</h3>
                <Button variant="ghost" size="icon" className="text-white h-8 w-8" onClick={toggleChat}>
                  <X size={16} />
                </Button>
              </div>
              <div className="flex-grow overflow-auto p-4">
                {renderMessages()}
                {isLoading && (
                  <div className="flex space-x-2 mr-auto bg-muted text-foreground rounded-lg p-3 shadow items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-3 bg-muted border-t border-border">
                <div className="flex items-center space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-grow"
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !inputMessage.trim()}>
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ChatBox;
