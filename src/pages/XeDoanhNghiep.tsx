import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Car,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Headphones,
  MapPin,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const services = [
  { icon: Car, title: "Xe công tác", desc: "Xe phục vụ lãnh đạo, nhân sự quản lý, đoàn khảo sát và đối tác." },
  { icon: Users, title: "Xe đưa đón nhân sự", desc: "Lịch trình cố định cho văn phòng, nhà máy, công trình và khu công nghiệp." },
  { icon: Route, title: "Xe tiếp khách", desc: "Đón khách tại sân bay, khách sạn, nhà hàng, văn phòng và điểm làm việc." },
  { icon: CalendarClock, title: "Xe trực doanh nghiệp", desc: "Xe và tài xế sẵn sàng theo khung giờ, theo ngày hoặc theo tháng." },
];

const why = [
  "Không cần đầu tư mua xe và quản lý tài xế nội bộ",
  "Có phương án xe dự phòng khi phát sinh lịch trình",
  "Chi phí rõ ràng, dễ quản lý theo tháng hoặc theo chuyến",
  "Phù hợp doanh nghiệp mới mở văn phòng, nhà máy hoặc dự án tại Quảng Trị",
];

const process = ["Tiếp nhận nhu cầu", "Tư vấn phương án", "Gửi báo giá", "Ký hợp đồng", "Điều phối xe", "Đối soát định kỳ"];

const XeDoanhNghiep = () => (
  <>
    <section className="relative bg-foreground text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.15),rgba(0,0,0,0.55))]" />
      <div className="container relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm mb-6">
              <BadgeCheck className="h-4 w-4" />
              Corporate Transportation tại Quảng Trị
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Dịch vụ xe doanh nghiệp tại Quảng Trị
            </h1>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-2xl mb-8">
              Tân Oanh Transport cung cấp giải pháp xe phục vụ doanh nghiệp, nhà máy, khu công nghiệp, văn phòng đại diện, nhà thầu và đoàn công tác với quy trình chuyên nghiệp, linh hoạt và rõ ràng.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:0866600822">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-semibold h-12 px-8">
                  Tư vấn ngay
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Dịch vụ chính</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Giải pháp xe cho hoạt động vận hành doanh nghiệp</h2>
          <p className="text-muted-foreground leading-relaxed">
            Từ một chuyến xe tiếp khách đến xe trực dài hạn, Tân Oanh có thể điều phối linh hoạt theo nhu cầu thực tế của doanh nghiệp.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item) => (
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
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-secondary p-8 md:p-10">
            <Building2 className="h-12 w-12 text-primary mb-5" />
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5">Vì sao doanh nghiệp nên thuê xe ngoài?</h2>
            <div className="grid gap-4">
              {why.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Quy trình hợp tác</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-6">Rõ ràng từ bước đầu tiên</h2>
            <div className="grid gap-3">
              {process.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{index + 1}</div>
                  <span className="font-semibold text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <ClipboardCheck className="h-12 w-12 mx-auto mb-5 opacity-90" />
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Cần phương án xe cho doanh nghiệp?</h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-8">
          Gửi nhu cầu xe, lịch trình dự kiến và số lượng khách. Tân Oanh sẽ tư vấn phương án phù hợp để doanh nghiệp dễ vận hành và kiểm soát chi phí.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:0866600822">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-semibold h-12 px-8">
              Gọi hotline
            </Button>
          </a>
          <Link to="/lien-he">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
              Gửi yêu cầu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default XeDoanhNghiep;
