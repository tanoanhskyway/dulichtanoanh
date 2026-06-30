import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const mainLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Dịch vụ", href: "/#dich-vu" },
  { label: "Đội xe", href: "/#doi-xe" },
  { label: "Quy trình", href: "/#quy-trinh" },
  { label: "Blog", href: "/blog" },
  { label: "Địa điểm", href: "/dia-diem" },
  { label: "Tour", href: "/tour-du-lich" },
  { label: "Liên hệ", href: "/lien-he" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Tân Oanh Transport" className="h-16 w-auto object-contain" />
            <div className="hidden sm:block leading-tight">
              <p className="font-extrabold text-foreground text-sm tracking-wide">TÂN OANH</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Corporate Transportation</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold text-muted-foreground">
            {mainLinks.map((item) => (
              item.href.startsWith("/#") ? (
                <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className="px-3 py-2 rounded-lg hover:bg-secondary hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <a href="/#bao-gia" className="hidden md:block">
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

        <nav className="lg:hidden flex gap-1 overflow-x-auto pb-3 text-sm font-semibold text-muted-foreground whitespace-nowrap no-scrollbar">
          {mainLinks.map((item) => (
            item.href.startsWith("/#") ? (
              <a key={item.label} href={item.href} className="px-3 py-2 rounded-lg bg-secondary/70 hover:text-foreground transition-colors">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href} className="px-3 py-2 rounded-lg bg-secondary/70 hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
