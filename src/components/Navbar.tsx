import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Tân Oanh Transport" className="h-12 w-auto" />
          <div className="hidden sm:block leading-tight">
            <p className="font-extrabold text-foreground text-sm tracking-wide">TÂN OANH</p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Corporate Transportation</p>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <a href="/#bao-gia" className="hidden sm:block">
            <Button variant="outline" className="font-semibold">
              Nhận báo giá
            </Button>
          </a>
          <a href="tel:0866600822">
            <Button className="cta-shadow gap-2 font-semibold">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">08.666.008.22</span>
              <span className="sm:hidden">Gọi</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
