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
  Clock,
  FileCheck2,
  Headphones,
  HelpCircle,
  Newspaper,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const phoneNumber = "0866600822";
const displayPhone = "08.666.008.22";

const heroStats = [
  { icon: Car, label: "Đội xe 4–45 chỗ" },
  { icon: FileCheck2, label: "Hợp đồng & VAT" },
  { icon: Clock, label: "Phục vụ 24/7" },
  { icon: MapPin, label: "Quảng Trị – Huế – Đà Nẵng" },
];

const businessMetrics = [
  { value: "24/7", label: "Điều phối & hỗ trợ lịch trình" },
  { value: "4–45", label: "Chỗ, phù hợp nhiều quy mô đoàn" },
  { value: "B2B", label: "Tập trung khách doanh nghiệp" },
  { value: "VAT", label: "Hỗ trợ hợp đồng & chứng từ" },
];

const trustedFields = [
  "Nhà máy & khu công nghiệp",
  "Nhà thầu xây dựng",
  "Doanh nghiệp FDI",
  "Khách sạn & sự kiện",
  "Đoàn khảo sát đầu tư",
  "Khách công tác cao cấp",
];

const customers = [
  {
    icon: Building2,
    title: "Khu công nghiệp",
    desc: "Đưa đón chuyên gia, kỹ sư, cán bộ quản lý và đối tác đến nhà máy, công trình.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Doanh nghiệp",
    desc: "Xe công tác, xe tiếp khách, xe hợp đồng theo tháng, quý hoặc năm.",
  },
  {
    icon: Wrench,
    title: "Nhà thầu",
    desc: "Phục vụ đoàn khảo sát, đội kỹ thuật, nhân sự công trình và lịch trình linh hoạt.",
  },
  {
    icon: Users,
    title: "Chuyên gia nước ngoài",
    desc: "Đón tiễn sân bay, di chuyển khách sạn – nhà máy – nhà hàng – điểm làm việc.",
  },
  {
    icon: Headphones,
    title: "Khách sạn & sự kiện",
    desc: "Xe VIP, xe đoàn, xe hội nghị, đưa đón khách công tác và khách cao cấp.",
  },
  {
    icon: Route,
    title: "Khách du lịch doanh nghiệp",
    desc: "Kết hợp xe công tác với tour trải nghiệm Quảng Trị, Huế, Quảng Bình.",
  },
];

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

const fleet = [
  {
    name: "Carnival / Sedona",
    tag: "Chuyên gia VIP",
    desc: "Không gian rộng, phù hợp lãnh đạo, chuyên gia và khách cao cấp.",
  },
  {
    name: "Fortuner / SUV",
    tag: "Công tác linh hoạt",
    desc: "Phù hợp di chuyển công trình, nhà máy, đường dài và lịch trình nhiều điểm.",
  },
  {
    name: "Innova / Xpander",
    tag: "Nhóm nhỏ",
    desc: "Chi phí hợp lý cho nhân sự công ty, chuyên gia và khách công tác.",
  },
  {
    name: "Transit / 16 chỗ",
    tag: "Đoàn công tác",
    desc: "Phục vụ đoàn khảo sát, sự kiện, hội nghị và đưa đón nhóm nhân sự.",
  },
];

const reasons = [
  { icon: Clock, title: "Đúng giờ", desc: "Lịch trình doanh nghiệp cần sự chính xác. Tân Oanh ưu tiên đúng giờ trong từng chuyến đi." },
  { icon: FileCheck2, title: "Hợp đồng rõ ràng", desc: "Phù hợp cho doanh nghiệp cần hồ sơ, báo giá, hợp đồng và chứng từ minh bạch." },
  { icon: ShieldCheck, title: "An toàn & bảo mật", desc: "Tài xế chuyên nghiệp, bảo mật lịch trình khách hàng và thông tin di chuyển." },
  { icon: Headphones, title: "Điều phối 24/7", desc: "Hỗ trợ thay đổi lịch, điều xe, xử lý phát sinh và chăm sóc khách hàng nhanh chóng." },
  { icon: Car, title: "Đội xe phù hợp", desc: "Từ xe 4 chỗ, 7 chỗ đến xe đoàn, đáp ứng nhiều nhu cầu doanh nghiệp khác nhau." },
  { icon: BadgeCheck, title: "Tư duy B2B", desc: "Không chỉ là thuê xe, mà là giải pháp vận chuyển ổn định cho doanh nghiệp." },
];

const commitments = [
  { icon: ClipboardCheck, title: "Đúng xe – đúng lịch", desc: "Xác nhận loại xe, tài xế, thời gian và điểm đón trước khi phục vụ." },
  { icon: FileCheck2, title: "Minh bạch chi phí", desc: "Báo giá rõ ràng theo chuyến, theo ngày hoặc theo hợp đồng dài hạn." },
  { icon: ShieldCheck, title: "An toàn lịch trình", desc: "Ưu tiên tài xế kinh nghiệm, xe sạch sẽ và bảo mật thông tin khách hàng." },
  { icon: Headphones, title: "Phản hồi nhanh", desc: "Tiếp nhận yêu cầu báo giá, đổi lịch hoặc điều xe trong thời gian ngắn." },
];

const testimonials = [
  { role: "Trưởng phòng hành chính", company: "Doanh nghiệp sản xuất", text: "Điều chúng tôi cần là đúng giờ, xe sạch và có người điều phối khi lịch thay đổi. Tân Oanh phù hợp với nhu cầu đó." },
  { role: "Quản lý dự án", company: "Nhà thầu xây dựng", text: "Lịch trình khảo sát nhiều điểm nhưng được tư vấn khá rõ ràng. Cách làm việc chuyên nghiệp hơn thuê xe lẻ." },
  { role: "Khách công tác", company: "Đoàn đối tác", text: "Dịch vụ phù hợp khi cần đón sân bay, đi nhà máy và kết hợp tham quan Quảng Trị trong cùng lịch trình." },
];

const blogPreview = [
  { title: "Kinh nghiệm thuê xe đưa đón chuyên gia tại Quảng Trị", href: "/blog" },
  { title: "Doanh nghiệp nên thuê xe hợp đồng hay tự mua xe?", href: "/blog" },
  { title: "Các khu công nghiệp Quảng Trị và nhu cầu vận chuyển chuyên gia", href: "/blog" },
];

const process = [
  "Tiếp nhận yêu cầu",
  "Tư vấn lịch trình",
  "Gửi báo giá",
  "Ký hợp đồng",
  "Điều xe phục vụ",
  "Chăm sóc & tối ưu",
];

const industrialZones = [
  "KCN Quán Ngang",
  "KCN Tây Bắc Hồ Xá",
  "KCN Nam Đông Hà",
  "Khu kinh tế Đông Nam",
  "Sân bay Quảng Trị",
  "Cảng Cửa Việt",
];

const faqs = [
  {
    q: "Tân Oanh có nhận xe hợp đồng theo tháng không?",
    a: "Có. Chúng tôi nhận xe theo tháng, theo quý hoặc theo năm cho doanh nghiệp, nhà máy, văn phòng và chuyên gia.",
  },
  {
    q: "Có phục vụ đưa đón chuyên gia nước ngoài không?",
    a: "Có. Tân Oanh có thể bố trí xe riêng, tài xế lịch sự, đón tiễn sân bay và phục vụ lịch trình làm việc tại Quảng Trị.",
  },
  {
    q: "Có xuất hóa đơn, hợp đồng và báo giá không?",
    a: "Có thể hỗ trợ hợp đồng, báo giá rõ ràng và chứng từ theo nhu cầu của doanh nghiệp.",
  },
  {
    q: "Có phục vụ sân bay Huế, Đà Nẵng không?",
    a: "Có. Chúng tôi phục vụ tuyến Quảng Trị – sân bay Huế, Quảng Trị – sân bay Đà Nẵng và sẵn sàng cho sân bay Quảng Trị khi khai thác.",
  },
];

const Index = () => (
  <>
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="container relative py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-50 mb-5">
              <Star className="h-4 w-4 text-amber-300" />
              Corporate Transportation & Travel Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Đối tác vận chuyển doanh nghiệp tại Quảng Trị
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-7">
              Tân Oanh Transport cung cấp xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn, xe sân bay, xe hội nghị và tour doanh nghiệp với tiêu chuẩn chuyên nghiệp, đúng giờ và an toàn.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#bao-gia">
                <Button size="lg" className="bg-amber-400 text-slate-950 hover:bg-amber-300 cta-shadow h-12 px-8 font-bold">
                  Nhận báo giá <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={`tel:${phoneNumber}`}>
                <Button size="lg" variant="outline" className="h-12 px-8 border-white/30 text-white hover:bg-white/10 font-bold">
                  Gọi {displayPhone}
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <item.icon className="h-5 w-5 text-amber-300 mb-2" />
                  <p className="text-sm font-semibold text-white/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="bao-gia" className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-background border-b border-border">
      <div className="container py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {businessMetrics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">{item.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 bg-card">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Đối tác tin tưởng</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Phục vụ các nhóm khách hàng có nhu cầu di chuyển chuyên nghiệp</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1">
            {trustedFields.map((field) => (
              <div key={field} className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-bold text-foreground text-center">
                {field}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Khách hàng chúng tôi phục vụ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Giải pháp cho doanh nghiệp, chuyên gia và đối tác công tác</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {customers.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="dich-vu" className="py-16 bg-secondary/60">
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
            <article key={service.id} id={service.id} className="rounded-3xl bg-card border border-border p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
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

    <section id="doi-xe" className="py-16 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Đội xe</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Đáp ứng nhiều nhu cầu di chuyển của doanh nghiệp</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleet.map((car) => (
            <div key={car.name} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-900 mb-5 flex items-center justify-center text-white">
                <Car className="h-12 w-12 opacity-80" />
              </div>
              <span className="inline-block rounded-full bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 mb-3">{car.tag}</span>
              <h3 className="font-extrabold text-foreground text-lg mb-2">{car.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{car.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-slate-950 text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-2">Lý do chọn Tân Oanh</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Không chỉ là thuê xe, mà là đối tác vận chuyển ổn định</h2>
            <p className="text-white/70 leading-relaxed">
              Với khách doanh nghiệp, điều quan trọng không chỉ là giá. Đó là sự đúng giờ, hợp đồng rõ ràng, khả năng điều phối, xe phù hợp và xử lý phát sinh nhanh.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <item.icon className="h-6 w-6 text-amber-300 mb-3" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Cam kết vận hành</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Những tiêu chuẩn doanh nghiệp cần ở một đối tác vận chuyển</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {commitments.map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-extrabold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="quy-trinh" className="py-16 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Quy trình hợp tác</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Rõ ràng từ yêu cầu đến vận hành</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {process.map((step, index) => (
            <div key={step} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-extrabold">
                {index + 1}
              </div>
              <p className="font-bold text-foreground text-sm">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Khu vực trọng điểm</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Đón đầu nhu cầu vận chuyển tại các khu công nghiệp Quảng Trị</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tân Oanh định hướng phục vụ doanh nghiệp, nhà máy, chuyên gia và nhà đầu tư khi hạ tầng Quảng Trị phát triển mạnh trong thời gian tới.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {industrialZones.map((zone) => (
              <div key={zone} className="rounded-2xl bg-card border border-border p-5 flex items-center gap-3 shadow-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="font-bold text-foreground">{zone}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Câu hỏi thường gặp</h2>
        </div>
        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-3">
                <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-extrabold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-slate-950 text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-2">Đánh giá khách hàng</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Nhận xét từ các nhóm khách hàng doanh nghiệp</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <div key={item.role} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <p className="text-sm text-white/75 leading-relaxed mb-5 italic">“{item.text}”</p>
              <p className="font-extrabold">{item.role}</p>
              <p className="text-sm text-white/55">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Blog & kiến thức</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Nội dung hỗ trợ SEO và tư vấn khách doanh nghiệp</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {blogPreview.map((post) => (
            <Link key={post.title} to={post.href} className="group rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <Newspaper className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-extrabold text-foreground group-hover:text-primary transition-colors mb-3">{post.title}</h3>
              <p className="text-sm text-muted-foreground">Đọc thêm để hiểu cách lựa chọn giải pháp vận chuyển phù hợp cho doanh nghiệp.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Bạn đang tìm đối tác vận chuyển cho doanh nghiệp?</h2>
        <p className="max-w-2xl mx-auto opacity-90 mb-7 text-lg">
          Gửi yêu cầu để Tân Oanh tư vấn phương án xe đưa đón chuyên gia, xe doanh nghiệp hoặc hợp đồng dài hạn phù hợp với lịch trình của bạn.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#bao-gia">
            <Button size="lg" className="bg-amber-400 text-slate-950 hover:bg-amber-300 font-extrabold h-12 px-8">
              Nhận báo giá
            </Button>
          </a>
          <a href={`tel:${phoneNumber}`}>
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 font-extrabold">
              Gọi {displayPhone}
            </Button>
          </a>
          <Link to="/lien-he">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 font-extrabold">
              Trang liên hệ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Index;
