import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  Car,
  CheckCircle2,
  Clock,
  FileText,
  Headphones,
  MapPin,
  Plane,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const benefits = [
  "Đón tiễn chuyên gia, kỹ sư, lãnh đạo và đối tác đúng giờ",
  "Lịch trình bảo mật, điều phối linh hoạt theo yêu cầu doanh nghiệp",
  "Xe riêng sạch sẽ, tài xế lịch sự, hỗ trợ lịch trình công tác",
  "Có hợp đồng, chứng từ và hóa đơn khi doanh nghiệp cần",
];

const useCases = [
  { icon: Plane, title: "Đón tiễn sân bay", desc: "Sân bay Huế, Đà Nẵng và sân bay Quảng Trị khi đi vào khai thác." },
  { icon: MapPin, title: "Khách sạn - nhà máy", desc: "Đưa đón chuyên gia từ khách sạn đến khu công nghiệp, công trình, văn phòng." },
  { icon: BriefcaseBusiness, title: "Lịch công tác trong ngày", desc: "Đi họp, khảo sát, tiếp khách, ăn tối, làm việc với đối tác." },
  { icon: CalendarClock, title: "Phục vụ dài ngày", desc: "Xe riêng theo ngày, theo tuần hoặc theo lịch trình cố định." },
];

const standards = [
  { icon: Clock, title: "Đúng giờ", desc: "Xác nhận lịch trình rõ ràng, tài xế có mặt trước giờ hẹn." },
  { icon: ShieldCheck, title: "An toàn", desc: "Xe được kiểm tra, tài xế kinh nghiệm, ưu tiên sự thoải mái của khách." },
  { icon: FileText, title: "Hợp đồng rõ ràng", desc: "Phù hợp doanh nghiệp cần hồ sơ, thanh toán và chứng từ minh bạch." },
  { icon: Headphones, title: "Hỗ trợ 24/7", desc: "Tiếp nhận thay đổi lịch trình, phát sinh chuyến và điều xe nhanh." },
];

const XeDuaDonChuyenGia = () => (
  <>
    <section className="relative overflow-hidden bg-foreground text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%),linear-gradient(135deg,rgba(0,0,0,0.1),rgba(0,0,0,0.45))]" />
      <div className="container relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm mb-6">
              <BadgeCheck className="h-4 w-4" />
              Dịch vụ cho chuyên gia, kỹ sư, lãnh đạo và đối tác
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Xe đưa đón chuyên gia tại Quảng Trị
            </h1>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-2xl mb-8">
              Tân Oanh Transport cung cấp xe riêng phục vụ chuyên gia, kỹ sư, lãnh đạo doanh nghiệp và đối tác làm việc tại Quảng Trị, Huế, Đà Nẵng và các khu công nghiệp lân cận.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:0866600822">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-semibold h-12 px-8">
                  Gọi 08.666.008.22
                </Button>
              </a>
              <a href="#quote">
                <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                  Nhận báo giá <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div id="quote" className="rounded-2xl bg-background/95 p-2 shadow-2xl">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Giải pháp chuyên nghiệp</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5">Doanh nghiệp cần sự ổn định, không chỉ một chuyến xe</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Với khách chuyên gia, điều quan trọng không chỉ là giá. Doanh nghiệp cần xe đúng giờ, tài xế lịch sự, lịch trình bảo mật, có khả năng xử lý phát sinh và làm việc được theo hợp đồng rõ ràng.
            </p>
            <div className="grid gap-3">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Tiêu chuẩn phục vụ</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground">Những yếu tố doanh nghiệp quan tâm</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {standards.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm">
              <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 text-center shadow-xl">
          <Car className="h-12 w-12 mx-auto mb-5 opacity-90" />
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Cần xe đưa đón chuyên gia tại Quảng Trị?</h2>
          <p className="opacity-90 max-w-2xl mx-auto mb-8">
            Gửi lịch trình hoặc gọi hotline để được tư vấn phương án xe phù hợp cho chuyên gia, kỹ sư, đoàn công tác hoặc đối tác doanh nghiệp.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:0866600822">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-semibold h-12 px-8">
                Gọi hotline
              </Button>
            </a>
            <Link to="/lien-he">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                Gửi yêu cầu báo giá
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default XeDuaDonChuyenGia;
