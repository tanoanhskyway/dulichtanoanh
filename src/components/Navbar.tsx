import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Dịch vụ", href: "/#services" },
  { label: "Đội xe", href: "/#fleet" },
  { label: "Quy trình", href: "/#process" },
  { label: "Tour", href: "/tour-du-lich" },
  { label: "Địa điểm", href: "/dia-diem" },
  { label: "Blog", href: "/blog" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const renderNavItem = (item: { label: string; href: string }, mobile = false) => {
    const className = mobile
      ? "px-4 py-3 rounded-md text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted"
      : "px-3 py-2 rounded-md text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors";

    if (item.href.startsWith("/#")) {
      return (
        <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={className}>
          {item.label}
        </a>
      );
    }

    return (
      <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className={className}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Tân Oanh Transport" className="h-12 w-auto" />
          <div className="hidden sm:block leading-tight">
            <p className="font-extrabold text-foreground text-sm tracking-wide">TÂN OANH</p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Corporate Transportation</p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:0866600822">
            <Button className="cta-shadow gap-2 font-semibold">
              <Phone className="h-4 w-4" />
              08.666.008.22
            </Button>
          </a>
        </div>

        <button className="xl:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-card animate-slide-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => renderNavItem(item, true))}
            <a href="tel:0866600822" className="mt-2">
              <Button className="w-full cta-shadow gap-2 font-semibold">
                <Phone className="h-4 w-4" />
                08.666.008.22
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
