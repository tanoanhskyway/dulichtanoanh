import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <img src={logo} alt="Tân Oanh Transport" className="h-16 w-auto max-w-[180px] object-contain mb-4 bg-white rounded-lg p-2" />
          <p className="text-sm opacity-80 leading-relaxed">
            Tân Oanh Transport cung cấp giải pháp xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn, xe hội nghị, xe sân bay và tour doanh nghiệp tại Quảng Trị.
          </p>
          <p className="text-xs opacity-60 mt-4">Corporate Transportation & Travel Solutions</p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Dịch vụ doanh nghiệp</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-80">
            <a href="/#dich-vu" className="hover:opacity-100">Xe đưa đón chuyên gia</a>
<a href="/#dich-vu" className="hover:opacity-100">Xe doanh nghiệp</a>
<a href="/#dich-vu" className="hover:opacity-100">Xe hợp đồng dài hạn</a>
<a href="/#dich-vu" className="hover:opacity-100">Xe hội nghị & sân bay</a>
<a href="/#doi-xe" className="hover:opacity-100">Đội xe Tân Oanh</a>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Du lịch & SEO</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/tour-du-lich" className="hover:opacity-100">Tour & du lịch Quảng Trị</Link>
            <Link to="/dia-diem" className="hover:opacity-100">Địa điểm du lịch</Link>
            <Link to="/blog" className="hover:opacity-100">Blog kinh nghiệm</Link>
            <Link to="/gioi-thieu" className="hover:opacity-100">Giới thiệu Tân Oanh</Link>
            <Link to="/lien-he" className="hover:opacity-100">Liên hệ báo giá</Link>
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
              <span>Liên hệ để cập nhật email</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Cửa Việt, Quảng Trị</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Phục vụ 24/7</span>
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
