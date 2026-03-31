import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://zalo.me/0866600822"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(211,84%,45%)] text-[hsl(0,0%,100%)] shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat Zalo"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" className="w-5 h-5" />
    </a>
    <a
      href="tel:0866600822"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-110 transition-transform animate-bounce"
      aria-label="Gọi ngay"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingButtons;
