import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck2,
  Headphones,
  HelpCircle,
  MapPin,
  Newspaper,
  Plane,
  Route,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const scrollLinks = {
  quote: "#bao-gia",
  services: "#dich-vu",
  expert: "#chuyen-gia",
  business: "#doanh-nghiep",
  contract: "#hop-dong",
  airport: "#airport",
  fleet: "#doi-xe",
  process: "#quy-trinh",
  faq: "#faq",
  blog: "#blog-preview",
  travel: "#dia-diem-du-lich",
  cta: "#tu-van",
};

const services = [
  {
    id: scrollLinks.expert,
    icon: BriefcaseBusiness,
    title: "Xe đưa đón chuyên gia",
    desc: "Phục vụ chuyên gia, kỹ sư, lãnh đạo, đối tác nước ngoài làm việc tại Quảng Trị.",
  },
  {
    id: scrollLinks.business,
    icon: Building2,
    title: "Xe doanh nghiệp",
    desc: "Xe công tác, xe trực công ty, xe đưa đón đối tác, khách hàng và nhân sự.",
  },
  {
    id: scrollLinks.contract,
    icon: CalendarClock,
    title: "Hợp đồng dài hạn",
    desc: "Thuê xe theo tháng, quý, năm với lịch trình ổn định và chi phí rõ ràng.",
  },
  {
    id: scrollLinks.airport,
    icon: Plane,
    title: "Đưa đón sân bay",
    desc: "Đón tiễn sân bay Huế, Đà Nẵng và sân bay Quảng Trị khi đi vào khai thác.",
  },
  {
    id: "#hoi-nghi",
    icon: Users,
    title: "Xe hội nghị, sự kiện",
    desc: "Điều phối nhiều xe phục vụ hội nghị, hội thảo, lễ khởi công, đón đoàn.",
  },
  {
    id: "#khao-sat",
    icon: Route,
    title: "Xe khảo sát công trình",
    desc: "Phục vụ nhà đầu tư, nhà thầu, kỹ sư đi khảo sát KCN, cảng biển, cửa khẩu.",
  },
];

const customers = [
  { icon: Building2, title: "Doanh nghiệp", desc: "Xe công tác, xe trực, xe đưa đón lãnh đạo và đối tác." },
  { icon: Wrench, title: "Nhà máy & KCN", desc: "Vận chuyển chuyên gia, kỹ sư và đoàn kiểm tra nhà máy." },
  { icon: BriefcaseBusiness, title: "Chuyên gia nước ngoài", desc: "Xe riêng, lịch trình bảo mật, đón tiễn đúng giờ." },
  { icon: MapPin, title: "Nhà thầu", desc: "Xe khảo sát dự án, công trình, khu công nghiệp và cảng biển." },
  { icon: Plane, title: "Khách công tác", desc: "Đón sân bay, khách sạn, văn phòng và địa điểm họp." },
  { icon: Users, title: "Đoàn sự kiện", desc: "Điều phối xe hội nghị, hội thảo, lễ khởi công và đón đoàn." },
];

const fleet = [
  { title: "Xe 4 chỗ", tag: "Chuyên gia cá nhân", desc: "Phù hợp lãnh đạo, khách công tác cá nhân, chuyên gia cần lịch trình riêng.", features: ["Riêng tư", "Nhanh gọn", "Linh hoạt"] },
  { title: "Xe 7 chỗ", tag: "Đối tác & đoàn nhỏ", desc: "Phù hợp kỹ sư, đoàn khảo sát nhỏ, đối tác, khách VIP và gia đình chuyên gia.", features: ["Rộng rãi", "Hành lý tốt", "Đường dài"] },
  { title: "Xe 16 chỗ", tag: "Hội nghị & khảo sát", desc: "Phù hợp đoàn khảo sát, hội nghị, sự kiện, đoàn kỹ thuật và nhân sự công ty.", features: ["Đoàn đông", "Điều phối dễ", "Tối ưu chi phí"] },
];

const advantages = [
  { icon: Headphones, title: "Điều phối 24/7", desc: "Tiếp nhận lịch trình, xác nhận xe và xử lý phát sinh nhanh." },
  { icon: FileCheck2, title: "Hợp đồng rõ ràng", desc: "Phù hợp thuê xe tháng, thuê xe dài hạn và khách doanh nghiệp." },
  { icon: CheckCircle2, title: "Hỗ trợ hóa đơn", desc: "Hỗ trợ báo giá, chứng từ và quy trình thanh toán cho doanh nghiệp." },
  { icon: ShieldCheck, title: "An toàn & bảo mật", desc: "Tài xế lịch sự, bảo mật lịch trình và thông tin khách hàng." },
  { icon: Car, title: "Xe sạch, đúng chuẩn", desc: "Xe 4-7-16 chỗ, xe VIP, nội thất sạch sẽ, vận hành ổn định." },
  { icon: Clock, title: "Đúng giờ", desc: "Cam kết đúng lịch trình, đặc biệt với sân bay, hội nghị và lịch công tác." },
];

const process = [
  { title: "Tiếp nhận nhu cầu", desc: "Bạn gửi lịch trình, số lượng khách, loại xe và yêu cầu riêng." },
  { title: "Tư vấn phương án", desc: "Tân Oanh đề xuất loại xe, lịch đón, phương án dự phòng." },
  { title: "Gửi báo giá", desc: "Báo giá rõ ràng theo chuyến, theo ngày hoặc hợp đồng dài hạn." },
  { title: "Thống nhất hợp đồng", desc: "Chốt lịch trình, điều kiện phục vụ, thanh toán và chứng từ." },
  { title: "Điều phối xe", desc: "Tài xế nhận lịch, xác nhận điểm đón và phục vụ đúng giờ." },
  { title: "Theo dõi & chăm sóc", desc: "Hỗ trợ thay đổi lịch trình, phản hồi sau chuyến và chăm sóc dài hạn." },
];

const faqs = [
  { q: "Tân Oanh có nhận hợp đồng xe tháng cho doanh nghiệp không?", a: "Có. Chúng tôi nhận xe hợp đồng theo tháng, quý hoặc năm cho doanh nghiệp, nhà máy, văn phòng đại diện và đoàn chuyên gia." },
  { q: "Có phục vụ đón tiễn sân bay Huế, Đà Nẵng không?", a: "Có. Tân Oanh phục vụ đón tiễn sân bay Huế, Đà Nẵng và sẽ triển khai tuyến sân bay Quảng Trị khi sân bay đi vào khai thác." },
  { q: "Có thể điều phối nhiều xe cho hội nghị, sự kiện không?", a: "Có. Chúng tôi có thể điều phối xe 4 chỗ, 7 chỗ, 16 chỗ cho đoàn công tác, hội nghị, hội thảo, lễ khởi công và đón đoàn." },
  { q: "Có hỗ trợ báo giá và chứng từ cho doanh nghiệp không?", a: "Có. Tân Oanh hỗ trợ báo giá rõ ràng, hợp đồng và các chứng từ cần thiết theo nhu cầu của doanh nghiệp." },
];

const blogPosts = [
  { title: "Kinh nghiệm thuê xe đưa đón chuyên gia tại Quảng Trị", desc: "Những tiêu chí doanh nghiệp nên kiểm tra trước khi chọn đơn vị vận chuyển chuyên gia.", href: "/blog" },
  { title: "Thuê xe doanh nghiệp hay mua xe riêng: phương án nào tối ưu?", desc: "So sánh chi phí, vận hành, tài xế, bảo dưỡng và tính linh hoạt cho doanh nghiệp.", href: "/blog" },
  { title: "Dịch vụ xe cho khu công nghiệp: nhu cầu sẽ tăng như thế nào?", desc: "Khi hạ tầng và KCN phát triển, nhu cầu xe công tác, chuyên gia, hội nghị sẽ tăng mạnh.", href: "/blog" },
];

const travelPlaces = [
  { title: "Thành Cổ Quảng Trị", desc: "Điểm đến lịch sử phù hợp cho đoàn doanh nghiệp, đối tác và khách công tác." },
  { title: "Địa đạo Vịnh Mốc", desc: "Trải nghiệm văn hóa - lịch sử đặc trưng của Quảng Trị." },
  { title: "Biển Cửa Tùng - Cửa Việt", desc: "Phù hợp lịch trình nghỉ ngắn, tiếp khách, tour cuối tuần." },
  { title: "Nghĩa trang Trường Sơn", desc: "Điểm đến trang trọng trong các chương trình tri ân và tham quan." },
];

const Index = () => (
  <>
    <section id="trang-chu" className="relative min-h-[88vh] md:min-h-[78vh] flex items-center overflow-hidden scroll-mt-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0,transparent_28%),radial-gradient(circle_at_80%_80%,hsl(var(--primary))_0,transparent_32%)]" />

      <div className="container relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm font-medium mb-5 animate-fade-in-up">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Tân Oanh Transport • Phục vụ doanh nghiệp tại Quảng Trị
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-5 animate-fade-in-up">
              Đối tác vận chuyển doanh nghiệp & chuyên gia tại Quảng Trị
            </h1>

            <p className="text-lg sm:text-xl opacity-90 mb-7 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn, xe hội nghị, xe VIP và đưa đón sân bay với tiêu chuẩn chuyên nghiệp, đúng giờ và an toàn.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href={scrollLinks.quote}>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow text-base font-semibold h-12 px-8">
                  Nhận báo giá <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="tel:0866600822">
                <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                  Hotline 08.666.008.22
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl text-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-3"><p className="text-2xl font-bold">24/7</p><p className="text-xs opacity-80">Điều phối</p></div>
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-3"><p className="text-2xl font-bold">4-16</p><p className="text-xs opacity-80">Chỗ ngồi</p></div>
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-3"><p className="text-2xl font-bold">B2B</p><p className="text-xs opacity-80">Doanh nghiệp</p></div>
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-3"><p className="text-2xl font-bold">QT</p><p className="text-xs opacity-80">Quảng Trị</p></div>
            </div>
          </div>

          <div id="bao-gia" className="hidden lg:block animate-fade-in-up scroll-mt-24" style={{ animationDelay: "0.3s" }}>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>

    <section className="lg:hidden container -mt-8 relative z-10 mb-8 scroll-mt-24" id="bao-gia-mobile">
      <BookingForm />
    </section>

    <section id="dich-vu" className="py-16 bg-card scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold mb-2">Dịch vụ trọng tâm</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Giải pháp vận chuyển hiển thị ngay trên trang chủ</h2>
          <p className="text-muted-foreground">Khách không cần bấm sang trang khác. Toàn bộ dịch vụ chính của Tân Oanh được trình bày ngay trên một trang để dễ xem, dễ hiểu và dễ liên hệ.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a key={service.title} href={service.id} className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Xem ngay trên trang <ChevronRight className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section id="chuyen-gia" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-semibold mb-2">Xe đưa đón chuyên gia</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Phục vụ chuyên gia, kỹ sư và lãnh đạo làm việc tại Quảng Trị</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Tân Oanh cung cấp xe riêng cho chuyên gia nước ngoài, kỹ sư, lãnh đạo doanh nghiệp, đoàn khảo sát và đối tác đến làm việc tại nhà máy, khu công nghiệp, công trình hoặc văn phòng.</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {["Đón sân bay, khách sạn, nhà máy", "Tài xế lịch sự, đúng giờ", "Xe sạch, riêng tư, an toàn", "Lịch trình linh hoạt theo ngày"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-primary" />{item}</div>
              ))}
            </div>
            <a href={scrollLinks.quote}><Button className="cta-shadow">Nhận báo giá xe chuyên gia <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-primary-foreground shadow-xl">
            <BriefcaseBusiness className="h-12 w-12 text-accent mb-5" />
            <h3 className="text-2xl font-bold mb-3">Tiêu chuẩn B2B</h3>
            <p className="opacity-85 leading-relaxed">Phù hợp cho doanh nghiệp cần sự ổn định, kín đáo, đúng giờ và có đầu mối điều phối rõ ràng.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="doanh-nghiep" className="py-16 bg-secondary scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold mb-2">Xe doanh nghiệp</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Giải pháp cho doanh nghiệp, nhà máy và khu công nghiệp</h2>
          <p className="text-muted-foreground">Thay vì chỉ gọi từng chuyến xe lẻ, doanh nghiệp có thể có một đối tác vận chuyển ổn định cho mọi lịch trình công tác.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {customers.map((customer) => (
            <a key={customer.title} href={scrollLinks.quote} className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
              <customer.icon className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">{customer.title}</h3>
              <p className="text-sm text-muted-foreground">{customer.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section id="hop-dong" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-card border border-border p-8 shadow-sm">
            <CalendarClock className="h-12 w-12 text-primary mb-5" />
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Xe hợp đồng dài hạn</h2>
            <p className="text-muted-foreground leading-relaxed">Phù hợp doanh nghiệp cần xe trực, xe đưa đón chuyên gia, xe phục vụ lãnh đạo hoặc xe công tác theo lịch ổn định trong tháng, quý hoặc năm.</p>
          </div>
          <div className="grid gap-4">
            {["Chi phí rõ ràng, dễ dự toán", "Không cần tự tuyển và quản lý tài xế", "Có phương án xe thay thế khi cần", "Phù hợp hợp đồng tháng, quý, năm"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"><CheckCircle2 className="h-5 w-5 text-primary" /><span className="font-medium text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="airport" className="py-16 bg-card scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-semibold mb-2">Airport Transfer</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Đưa đón sân bay Huế, Đà Nẵng và Quảng Trị</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Phục vụ khách công tác, chuyên gia, đối tác và đoàn doanh nghiệp cần xe đưa đón sân bay đúng giờ, lịch sự, có xác nhận lịch trình rõ ràng.</p>
            <a href={scrollLinks.quote}><Button className="cta-shadow">Đặt xe sân bay <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Sân bay Huế", "Sân bay Đà Nẵng", "Sân bay Quảng Trị"].map((item) => (
              <div key={item} className="rounded-2xl bg-background p-6 border border-border text-center"><Plane className="h-8 w-8 mx-auto text-primary mb-3" /><p className="font-bold text-foreground">{item}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="doi-xe" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold mb-2">Đội xe</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Linh hoạt cho nhiều lịch trình công tác</h2>
          <p className="text-muted-foreground">Xe 4 chỗ, 7 chỗ, 16 chỗ và các dòng xe phục vụ khách VIP, đoàn khảo sát, hội nghị, sân bay và hợp đồng dài hạn.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {fleet.map((item) => (
            <div key={item.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-52 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center text-primary-foreground">
                <div className="text-center px-6"><Car className="h-12 w-12 mx-auto mb-4 text-accent" /><p className="text-sm uppercase tracking-widest opacity-70">{item.tag}</p><h3 className="text-2xl font-extrabold mt-1">{item.title}</h3></div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-5">{item.features.map((feature) => <span key={feature} className="px-3 py-1 rounded-full bg-secondary">{feature}</span>)}</div>
                <a href={scrollLinks.quote} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">Báo giá xe này <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="quy-trinh" className="py-16 bg-secondary scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10"><p className="text-primary font-semibold mb-2">Quy trình hợp tác</p><h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Rõ ràng từ tư vấn đến điều phối xe</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.map((step, index) => (
            <div key={step.title} className="bg-card rounded-xl p-5 border border-border shadow-sm">
              <div className="flex items-start gap-4"><div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{index + 1}</div><div><h3 className="font-bold text-foreground mb-1">{step.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="faq" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10"><p className="text-primary font-semibold mb-2">FAQ</p><h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Câu hỏi thường gặp</h2></div>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {faqs.map((item) => (
            <div key={item.q} className="bg-card rounded-xl p-6 border border-border shadow-sm"><HelpCircle className="h-6 w-6 text-primary mb-3" /><h3 className="font-bold text-foreground mb-2">{item.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p></div>
          ))}
        </div>
      </div>
    </section>

    <section id="blog-preview" className="py-16 bg-card scroll-mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"><div><p className="text-primary font-semibold mb-2">Blog & kiến thức</p><h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">Nội dung SEO hỗ trợ doanh nghiệp</h2><p className="text-muted-foreground max-w-2xl">Blog được giữ lại để xây dựng SEO dài hạn về xe doanh nghiệp, chuyên gia, sân bay, khu công nghiệp và du lịch công vụ.</p></div><Link to="/blog"><Button variant="outline">Xem Blog</Button></Link></div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.title} to={post.href} className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"><Newspaper className="h-7 w-7 text-primary mb-4" /><h3 className="font-bold text-foreground mb-2">{post.title}</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.desc}</p><span className="text-sm font-semibold text-primary inline-flex items-center gap-2">Đọc thêm <ArrowRight className="h-4 w-4" /></span></Link>
          ))}
        </div>
      </div>
    </section>

    <section id="dia-diem-du-lich" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"><div><p className="text-primary font-semibold mb-2">Tour & địa điểm du lịch</p><h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">Giữ lại du lịch để phục vụ đối tác và tăng SEO</h2><p className="text-muted-foreground max-w-2xl">Doanh nghiệp đưa chuyên gia, đối tác đến Quảng Trị thường có nhu cầu tham quan, tiếp khách, đi tour ngắn. Vì vậy Blog, Tour và Địa điểm vẫn là tài sản SEO quan trọng.</p></div><div className="flex gap-3"><Link to="/tour-du-lich"><Button variant="outline">Xem Tour</Button></Link><Link to="/dia-diem"><Button>Địa điểm</Button></Link></div></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {travelPlaces.map((place) => (
            <Link key={place.title} to="/dia-diem" className="rounded-2xl bg-card border border-border p-5 shadow-sm hover:shadow-md transition-shadow"><MapPin className="h-7 w-7 text-primary mb-3" /><h3 className="font-bold text-foreground mb-2">{place.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{place.desc}</p></Link>
          ))}
        </div>
      </div>
    </section>

    <section id="tu-van" className="py-16 bg-primary scroll-mt-20">
      <div className="container text-center text-primary-foreground">
        <p className="font-semibold text-accent mb-2">Tân Oanh Transport</p>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Bạn cần giải pháp vận chuyển chuyên nghiệp?</h2>
        <p className="opacity-90 mb-6 max-w-2xl mx-auto">Liên hệ Tân Oanh để nhận tư vấn xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn, xe sân bay, xe hội nghị và xe khảo sát tại Quảng Trị.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={scrollLinks.quote}><Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 cta-shadow">Nhận báo giá</Button></a>
          <a href="tel:0866600822"><Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">Gọi 08.666.008.22</Button></a>
        </div>
      </div>
    </section>
  </>
);

export default Index;
