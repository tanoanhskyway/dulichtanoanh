import { ArrowRight, BriefcaseBusiness, Building2, CalendarClock, CheckCircle2, MapPin, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "chuyen-gia",
    icon: BriefcaseBusiness,
    title: "Xe đưa đón chuyên gia",
    desc: "Đưa đón chuyên gia, kỹ sư, lãnh đạo và đối tác làm việc tại Quảng Trị.",
    points: ["Đón tiễn sân bay", "Xe riêng theo lịch", "Tài xế lịch sự"],
  },
  {
    id: "doanh-nghiep",
    icon: Building2,
    title: "Xe doanh nghiệp",
    desc: "Giải pháp xe phục vụ công ty, nhà máy, văn phòng đại diện và đối tác.",
    points: ["Xe công tác", "Điều phối nhanh", "Báo giá rõ ràng"],
  },
  {
    id: "hop-dong",
    icon: CalendarClock,
    title: "Xe hợp đồng dài hạn",
    desc: "Thuê xe theo tháng, theo quý hoặc theo năm với lịch trình ổn định.",
    points: ["Hợp đồng rõ ràng", "Chi phí cố định", "Có xe dự phòng"],
  },
  {
    id: "san-bay",
    icon: Plane,
    title: "Đưa đón sân bay",
    desc: "Đón tiễn sân bay Huế, Đà Nẵng và sân bay Quảng Trị khi đi vào khai thác.",
    points: ["Theo dõi lịch bay", "Đón đúng giờ", "Xe sạch sẽ"],
  },
  {
    id: "hoi-nghi",
    icon: Users,
    title: "Xe hội nghị & sự kiện",
    desc: "Phục vụ đoàn công tác, hội nghị, lễ khởi công, hội thảo và sự kiện doanh nghiệp.",
    points: ["Điều phối nhiều xe", "Lịch trình theo đoàn", "Hỗ trợ 24/7"],
  },
  {
    id: "tour-doanh-nghiep",
    icon: MapPin,
    title: "Tour doanh nghiệp",
    desc: "Kết hợp xe công tác với lịch trình tham quan, tiếp khách và trải nghiệm địa phương.",
    points: ["Tour Quảng Trị", "Huế – Quảng Bình", "Lịch trình riêng"],
  },
];

const Services = () => (
  <section id="dich-vu" className="py-16 bg-secondary/60 scroll-mt-24">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Dịch vụ chính</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Giải pháp vận chuyển cho doanh nghiệp</h2>
        </div>
        <a href="#bao-gia" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
          Nhận tư vấn dịch vụ <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <article key={service.id} id={service.id} className="rounded-3xl bg-card border border-border p-6 shadow-sm hover:shadow-xl transition-all scroll-mt-24">
            <div className="h-13 w-13 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
              <service.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-extrabold text-foreground mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
            <ul className="space-y-2 mb-6">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <a href="#bao-gia">
              <Button variant="outline" className="w-full font-bold">Nhận báo giá</Button>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
