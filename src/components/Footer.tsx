import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Tan Oanh Skyway" className="h-10 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm opacity-80 leading-relaxed">
            Dịch vụ xe ghép và xe du lịch uy tín tuyến Quảng Trị - Đà Nẵng. Đưa đón tận nơi 24/7.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Liên kết</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/xe-ghep" className="hover:opacity-100">Xe ghép Quảng Trị - Đà Nẵng</Link>
            <Link to="/xe-du-lich" className="hover:opacity-100">Xe tour - du lịch</Link>
            <Link to="/dia-diem" className="hover:opacity-100">Địa điểm du lịch</Link>
            <Link to="/gioi-thieu" className="hover:opacity-100">Giới thiệu</Link>
            <Link to="/lien-he" className="hover:opacity-100">Liên hệ</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Liên hệ</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:0866600822" className="hover:opacity-100">08.666.00822</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Đông Hà, Quảng Trị</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Hoạt động 24/7</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © 2026 XeQuảngTrị. Tất cả quyền được bảo lưu.
      </div>
    </div>
  </footer>
);

export default Footer;
