import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Tân Oanh Transport" className="h-10 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm opacity-80 leading-relaxed">
            Tân Oanh cung cấp giải pháp xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn, xe sân bay, xe hội nghị và tour du lịch tại Quảng Trị.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Dịch vụ</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:opacity-100">Xe đưa đón chuyên gia</Link>
            <Link to="/xe-du-lich" className="hover:opacity-100">Xe doanh nghiệp & hợp đồng dài hạn</Link>
            <Link to="/tour-du-lich" className="hover:opacity-100">Tour & du lịch</Link>
            <Link to="/gioi-thieu" className="hover:opacity-100">Giới thiệu</Link>
            <Link to="/lien-he" className="hover:opacity-100">Liên hệ</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Liên hệ</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:0866600822" className="hover:opacity-100">08.666.008.22</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>Tư vấn báo giá xe doanh nghiệp</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Cửa Việt, Quảng Trị</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Điều phối 24/7</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © 2026 Tân Oanh Transport. Tất cả quyền được bảo lưu.
      </div>
    </div>
  </footer>
);

export default Footer;
