import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Car,
  CheckCircle2,
  Clock,
  FileText,
  Headphones,
  Repeat,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const packages = [
  { title: "Theo tháng", desc: "Phù hợp doanh nghiệp cần xe cố định cho lãnh đạo, chuyên gia hoặc văn phòng." },
  { title: "Theo quý", desc: "Phù hợp dự án, công trình, đoàn chuyên gia làm việc trong giai đoạn ngắn." },
  { title: "Theo năm", desc: "Phù hợp nhà máy, khu công nghiệp, công ty có nhu cầu vận chuyển ổn định dài hạn." },
];

const included = [
  { icon: Car, title: "Xe phù hợp nhu cầu", desc: "4 chỗ, 7 chỗ, 16 chỗ hoặc phương án phối hợp nhiều xe." },
  { icon: Users, title: "Tài xế chuyên nghiệp", desc: "Lịch sự, đúng giờ, quen tuyến, hiểu yêu cầu phục vụ khách doanh nghiệp." },
  { icon: Wrench, title: "Bảo dưỡng & vận hành", desc: "Giảm gánh nặng quản lý xe, tài xế, bảo dưỡng và xử lý phát sinh." },
  { icon: FileText, title: "Hợp đồng rõ ràng", desc: "Thỏa thuận phạm vi phục vụ, lịch trình, chi phí và phương thức thanh toán." },
];

const reasons = [
  "Chủ động phương tiện mà không cần mua xe",
  "Dễ kiểm soát chi phí vận hành theo kỳ",
  "Có thể điều chỉnh lịch trình theo nhu cầu thực tế",
  "Phù hợp doanh nghiệp mới đầu tư hoặc mở rộng tại Quảng Trị",
];

const XeHopDongDaiHan = () => (
  <>
    <section className="relative bg-foreground text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.15),rgba(0,0,0,0.55))]" />
      <div className="container relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm mb-6">
              <BadgeCheck className="h-4 w-4" />
              Thuê xe theo tháng, quý, năm
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Xe hợp đồng dài hạn tại Quảng Trị
            </h1>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-2xl mb-8">
              Giải pháp thuê xe dài hạn cho doanh nghiệp, chuyên gia, nhà máy, công trình và văn phòng đại diện. Tối ưu chi phí, giảm gánh nặng quản lý và đảm bảo lịch trình ổn định.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:0866600822">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow font-semibold h-12 px-8">
                  Gọi tư vấn
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
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Gói dịch vụ</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Linh hoạt theo thời gian sử dụng</h2>
          <p className="text-muted-foreground leading-relaxed">
            Tùy nhu cầu vận hành, doanh nghiệp có thể chọn xe theo tháng, theo quý hoặc theo năm với lịch trình được thống nhất rõ ràng.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((item) => (
            <div key={item.title} className="rounded-2xl bg-background border border-border p-7 shadow-sm hover:shadow-md transition-shadow">
              <CalendarClock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Bao gồm</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-6">Một giải pháp vận hành trọn gói</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item.title} className="rounded-2xl bg-card border border-border p-6 shadow-sm">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-secondary p-8 md:p-10">
            <Repeat className="h-12 w-12 text-primary mb-5" />
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-5">Khi nào nên thuê xe dài hạn?</h2>
            <div className="grid gap-4">
              {reasons.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Clock, title: "Ổn định lịch trình" },
            { icon: ShieldCheck, title: "An toàn & đúng giờ" },
            { icon: FileText, title: "Hợp đồng rõ ràng" },
            { icon: Headphones, title: "Hỗ trợ 24/7" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-background border border-border p-6 text-center shadow-sm">
              <item.icon className="h-9 w-9 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Cần thuê xe hợp đồng dài hạn?</h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-8">
          Liên hệ Tân Oanh để được tư vấn phương án xe, lịch trình và chi phí phù hợp với doanh nghiệp của bạn.
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
    </section>
  </>
);

export default XeHopDongDaiHan;
