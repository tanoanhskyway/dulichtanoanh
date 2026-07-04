import { useEffect } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CheckCircle2,
  FileText,
  Phone,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const solutions = [
  {
    icon: BriefcaseBusiness,
    title: "Xe đưa đón chuyên gia",
    desc: "Phục vụ chuyên gia, kỹ sư, lãnh đạo và đối tác làm việc tại Quảng Trị.",
  },
  {
    icon: Building2,
    title: "Xe doanh nghiệp",
    desc: "Giải pháp xe cho công ty, nhà máy, văn phòng đại diện và khu công nghiệp.",
  },
  {
    icon: CalendarClock,
    title: "Hợp đồng dài hạn",
    desc: "Thuê xe theo tháng, quý hoặc năm với lịch trình ổn định, rõ ràng.",
  },
  {
    icon: Plane,
    title: "Đưa đón sân bay",
    desc: "Đón tiễn sân bay Huế, Đà Nẵng và sân bay Quảng Trị khi đi vào khai thác.",
  },
];

const commitments = [
  "Tư vấn phương án xe phù hợp với nhu cầu doanh nghiệp",
  "Tài xế lịch sự, đúng giờ, quen tuyến Quảng Trị - Huế - Đà Nẵng",
  "Có thể phục vụ theo lịch cố định, theo ngày hoặc theo tháng",
  "Hỗ trợ hợp đồng, chứng từ và hóa đơn theo nhu cầu",
  "Điều phối linh hoạt khi phát sinh lịch trình công tác",
  "Phù hợp chuyên gia nước ngoài, đoàn khảo sát và đối tác doanh nghiệp",
];

const XeGhep = () => {
  useEffect(() => {
    document.title = "Xe đưa đón chuyên gia & doanh nghiệp Quảng Trị | Tân Oanh Transport";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Tân Oanh Transport tập trung cung cấp xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn và xe sân bay tại Quảng Trị. Liên hệ 08.666.008.22 để nhận báo giá."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://dulichtanoanh.com/xe-ghep");
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-foreground py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_34%)]" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-primary-foreground/20 px-4 py-2 text-sm font-semibold text-primary-foreground/80">
              Tân Oanh Transport
            </p>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Chuyển hướng sang xe chuyên gia & doanh nghiệp tại Quảng Trị
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/82">
              Tân Oanh hiện ưu tiên cung cấp giải pháp xe riêng, xe doanh nghiệp,
              xe hợp đồng dài hạn, đưa đón chuyên gia và đưa đón sân bay. Nếu bạn
              đang cần phương án di chuyển ổn định, chuyên nghiệp và có thể ký hợp
              đồng, chúng tôi sẵn sàng tư vấn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:0866600822">
                <Button size="lg" className="cta-shadow gap-2 font-semibold">
                  <Phone className="h-4 w-4" /> Gọi 08.666.008.22
                </Button>
              </a>
              <a href="/#bao-gia">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  Nhận báo giá <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/8 p-6 backdrop-blur">
            <h2 className="mb-4 text-xl font-bold">Dịch vụ phù hợp hơn cho doanh nghiệp</h2>
            <div className="space-y-3">
              {solutions.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl bg-primary-foreground/8 p-4">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-primary-foreground/75">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-10">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Định vị mới</p>
              <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl">
                Không còn tập trung vào xe ghép tuyến cố định
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Để phục vụ tốt hơn nhu cầu phát triển của Quảng Trị trong giai đoạn
                khu công nghiệp, sân bay và doanh nghiệp đầu tư mới, Tân Oanh chuyển
                trọng tâm sang dịch vụ vận chuyển có tính ổn định và chuyên nghiệp
                hơn: xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng theo tháng
                và xe phục vụ công tác.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-secondary p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-extrabold text-foreground">
                Bạn cần xe đi Huế, Đà Nẵng hoặc sân bay?
              </h2>
              <p className="mb-5 text-muted-foreground leading-relaxed">
                Tân Oanh vẫn hỗ trợ các hành trình Quảng Trị - Huế - Đà Nẵng - sân bay
                theo hình thức xe riêng, xe công tác hoặc xe theo lịch đặt trước. Liên hệ
                để được tư vấn phương án phù hợp nhất cho cá nhân, nhóm chuyên gia hoặc doanh nghiệp.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0866600822">
                  <Button className="cta-shadow gap-2 font-semibold">
                    <Phone className="h-4 w-4" /> Gọi tư vấn
                  </Button>
                </a>
                <a href="/#dich-vu">
                  <Button variant="outline" className="font-semibold">
                    Xem giải pháp vận chuyển
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-5">
                <ShieldCheck className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-bold text-foreground">An toàn</h3>
                <p className="mt-2 text-sm text-muted-foreground">Xe sạch, tài xế kinh nghiệm, lịch trình rõ ràng.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <FileText className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-bold text-foreground">Hợp đồng</h3>
                <p className="mt-2 text-sm text-muted-foreground">Phù hợp làm việc dài hạn với công ty và nhà máy.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <Users className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-bold text-foreground">Chuyên nghiệp</h3>
                <p className="mt-2 text-sm text-muted-foreground">Phục vụ chuyên gia, lãnh đạo, đối tác và đoàn khảo sát.</p>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <BookingForm />
          </aside>
        </div>
      </section>
    </>
  );
};

export default XeGhep;
