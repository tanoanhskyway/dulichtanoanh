import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Car,
  CheckCircle2,
  Clock,
  FileCheck2,
  Headphones,
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
import heroCar from "@/assets/hero-car.jpg";
import car4 from "@/assets/car-4seat.jpg";
import car7 from "@/assets/car-7seat.jpg";
import car16 from "@/assets/car-16seat.jpg";

const scrollLinks = {
  quote: "#bao-gia",
  services: "#dich-vu",
  customers: "#khach-hang",
  fleet: "#doi-xe",
  process: "#quy-trinh",
};

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Xe đưa đón chuyên gia",
    desc: "Đón tiễn chuyên gia, kỹ sư, lãnh đạo và đối tác làm việc tại Quảng Trị.",
    detail: "Phù hợp chuyên gia Hàn Quốc, Nhật Bản, Trung Quốc, Đài Loan, khách công tác và lãnh đạo doanh nghiệp.",
  },
  {
    icon: Building2,
    title: "Xe doanh nghiệp",
    desc: "Giải pháp xe phục vụ công ty, nhà máy, khu công nghiệp và văn phòng đại diện.",
    detail: "Có thể điều xe theo ngày, theo lịch cố định hoặc theo nhu cầu phát sinh của doanh nghiệp.",
  },
  {
    icon: CalendarClock,
    title: "Hợp đồng dài hạn",
    desc: "Thuê xe theo tháng, theo quý hoặc theo năm với lịch trình ổn định, rõ ràng.",
    detail: "Phù hợp doanh nghiệp không muốn tự mua xe, tuyển tài xế, bảo dưỡng và quản lý vận hành.",
  },
  {
    icon: Plane,
    title: "Đưa đón sân bay",
    desc: "Đón tiễn sân bay Huế, Đà Nẵng và sân bay Quảng Trị khi đi vào khai thác.",
    detail: "Theo dõi lịch trình, hỗ trợ bảng tên, đón khách tại sân bay, khách sạn, nhà máy hoặc văn phòng.",
  },
  {
    icon: Users,
    title: "Xe hội nghị, sự kiện",
    desc: "Điều phối nhiều xe phục vụ hội thảo, đón đoàn, lễ khởi công và sự kiện doanh nghiệp.",
    detail: "Có thể phối hợp nhiều dòng xe cho đoàn lãnh đạo, khách mời, kỹ thuật và nhân sự sự kiện.",
  },
  {
    icon: Route,
    title: "Xe khảo sát công trình",
    desc: "Phục vụ đoàn khảo sát, nhà thầu, kỹ sư và nhà đầu tư đi thực địa tại Quảng Trị.",
    detail: "Linh hoạt lịch trình đi khu công nghiệp, công trình, cảng biển, cửa khẩu, dự án và địa điểm khảo sát.",
  },
];

const customers = [
  { icon: Building2, title: "Doanh nghiệp", desc: "Xe công tác, xe trực, xe đưa đón đối tác và khách hàng quan trọng." },
  { icon: Wrench, title: "Nhà máy & KCN", desc: "Vận chuyển chuyên gia, kỹ sư, nhân sự và đoàn kiểm tra nhà máy." },
  { icon: BriefcaseBusiness, title: "Chuyên gia", desc: "Xe riêng, lịch trình bảo mật, đón tiễn đúng giờ, tài xế lịch sự." },
  { icon: MapPin, title: "Nhà thầu", desc: "Xe khảo sát dự án, công trình, nhà máy, khu công nghiệp và cảng biển." },
  { icon: Plane, title: "Khách công tác", desc: "Đón tiễn sân bay, khách sạn, văn phòng, nhà máy và địa điểm họp." },
  { icon: Users, title: "Đoàn sự kiện", desc: "Điều phối xe hội nghị, hội thảo, đón đoàn, lễ khởi công và hội nghị khách hàng." },
];

const advantages = [
  { icon: Headphones, title: "Điều phối 24/7", desc: "Luôn có người tiếp nhận lịch trình và xử lý phát sinh nhanh." },
  { icon: FileCheck2, title: "Hợp đồng rõ ràng", desc: "Phù hợp nhu cầu thuê xe tháng, thuê xe dài hạn và khách doanh nghiệp." },
  { icon: CheckCircle2, title: "Xuất hóa đơn", desc: "Hỗ trợ chứng từ, báo giá và quy trình thanh toán cho doanh nghiệp." },
  { icon: ShieldCheck, title: "An toàn & bảo mật", desc: "Tài xế lịch sự, bảo mật lịch trình và thông tin khách hàng." },
  { icon: Car, title: "Xe sạch, đúng chuẩn", desc: "Xe 4-7-16 chỗ, xe VIP, nội thất sạch sẽ, vận hành ổn định." },
  { icon: Clock, title: "Đúng giờ", desc: "Cam kết đúng lịch trình, đặc biệt với sân bay, hội nghị và lịch công tác." },
];

const fleet = [
  { img: car4, title: "Xe 4 chỗ", desc: "Phù hợp lãnh đạo, chuyên gia, khách công tác cá nhân và lịch trình riêng." },
  { img: car7, title: "Xe 7 chỗ", desc: "Phù hợp đoàn nhỏ, kỹ sư, đối tác, khách VIP và gia đình chuyên gia." },
  { img: car16, title: "Xe 16 chỗ", desc: "Phù hợp đoàn khảo sát, hội nghị, sự kiện và nhân sự công ty." },
];

const process = [
  "Tiếp nhận nhu cầu",
  "Tư vấn lịch trình",
  "Gửi báo giá",
  "Thống nhất hợp đồng",
  "Điều phối xe",
  "Theo dõi & chăm sóc",
];

const testimonials = [
  {
    name: "Khách doanh nghiệp",
    location: "Đông Hà, Quảng Trị",
    text: "Tài xế đúng giờ, xe sạch, hỗ trợ lịch trình công tác rất tốt.",
  },
  {
    name: "Đoàn khảo sát dự án",
    location: "Khu vực Quảng Trị",
    text: "Lịch trình thay đổi nhiều nhưng Tân Oanh điều phối linh hoạt và chuyên nghiệp.",
  },
  {
    name: "Khách công tác",
    location: "Sân bay Huế - Quảng Trị",
    text: "Đón tiễn đúng giờ, liên hệ nhanh, phù hợp cho khách đi công tác.",
  },
];

const Index = () => (
  <>
    <section id="trang-chu" className="relative min-h-[88vh] md:min-h-[76vh] flex items-center overflow-hidden scroll-mt-20">
      <img
        src={heroCar}
        alt="Tân Oanh Transport - xe đưa đón chuyên gia và doanh nghiệp tại Quảng Trị"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/35" />
      <div className="container relative z-10 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2 text-sm font-medium mb-5 animate-fade-in-up">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Tân Oanh Transport • Phục vụ 24/7 tại Quảng Trị
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-5 animate-fade-in-up">
              Đối tác vận chuyển doanh nghiệp & chuyên gia tại Quảng Trị
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-7 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Dịch vụ xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn, xe hội nghị, xe VIP và đưa đón sân bay với tiêu chuẩn chuyên nghiệp, đúng giờ và an toàn.
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
            <div className="grid grid-cols-3 gap-3 mt-8 max-w-xl text-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-3">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs opacity-80">Điều phối</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-3">
                <p className="text-2xl font-bold">4-16</p>
                <p className="text-xs opacity-80">Chỗ ngồi</p>
              </div>
              <div className="rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 p-3">
                <p className="text-2xl font-bold">B2B</p>
                <p className="text-xs opacity-80">Doanh nghiệp</p>
              </div>
            </div>
          </div>
          <div id="bao-gia" className="hidden md:block animate-fade-in-up scroll-mt-24" style={{ animationDelay: "0.3s" }}>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>

    <section className="md:hidden container -mt-8 relative z-10 mb-8 scroll-mt-24" id="bao-gia-mobile">
      <BookingForm />
    </section>

    <section id="dich-vu" className="py-16 bg-card scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold mb-2">Dịch vụ trọng tâm</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Giải pháp vận chuyển cho doanh nghiệp</h2>
          <p className="text-muted-foreground">
            Tân Oanh tập trung phục vụ khách công tác, chuyên gia, nhà máy, khu công nghiệp, đoàn khảo sát và các hợp đồng vận chuyển dài hạn tại Quảng Trị.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-background rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.desc}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.detail}</p>
              <a href={scrollLinks.quote} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                Nhận tư vấn <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="khach-hang" className="py-16 bg-secondary scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-semibold mb-2">Khách hàng mục tiêu</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Phục vụ đúng nhu cầu của từng nhóm khách</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Thay vì chỉ bán một chuyến xe, Tân Oanh xây dựng giải pháp di chuyển phù hợp cho từng nhóm khách: doanh nghiệp, nhà máy, chuyên gia, nhà thầu, khách công tác và đoàn sự kiện.
            </p>
            <a href={scrollLinks.quote}>
              <Button className="cta-shadow">
                Trao đổi nhu cầu của bạn <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {customers.map((customer) => (
              <a key={customer.title} href={scrollLinks.quote} className="bg-card rounded-xl p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
                <customer.icon className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">{customer.title}</h3>
                <p className="text-sm text-muted-foreground">{customer.desc}</p>
              </a>
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
              <img src={item.img} alt={item.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-5">
                  <span className="px-3 py-1 rounded-full bg-secondary">Sạch sẽ</span>
                  <span className="px-3 py-1 rounded-full bg-secondary">Điều hòa</span>
                  <span className="px-3 py-1 rounded-full bg-secondary">Tài xế riêng</span>
                </div>
                <a href={scrollLinks.quote} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Báo giá xe này <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="ly-do-chon" className="py-16 bg-card scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold mb-2">Lý do chọn Tân Oanh</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Tiêu chuẩn phù hợp với khách doanh nghiệp</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((a) => (
            <div key={a.title} className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <a.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="quy-trinh" className="py-16 bg-secondary scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold mb-2">Quy trình hợp tác</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Rõ ràng từ tư vấn đến điều phối xe</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {process.map((step, index) => (
            <div key={step} className="bg-card rounded-xl p-5 border border-border shadow-sm text-center relative">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold">{index + 1}</div>
              <p className="font-semibold text-sm text-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="danh-gia" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-semibold mb-2">Đánh giá</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">Khách hàng nói gì?</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 italic leading-relaxed">&quot;{t.text}&quot;</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="lien-he-nhan-bao-gia" className="py-16 bg-primary scroll-mt-20">
      <div className="container text-center text-primary-foreground">
        <p className="font-semibold text-accent mb-2">Tân Oanh Transport</p>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Bạn cần giải pháp vận chuyển chuyên nghiệp?</h2>
        <p className="opacity-90 mb-6 max-w-2xl mx-auto">
          Liên hệ Tân Oanh để nhận tư vấn xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng dài hạn, xe sân bay, xe hội nghị và xe khảo sát tại Quảng Trị.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={scrollLinks.quote}>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 cta-shadow">
              Nhận báo giá
            </Button>
          </a>
          <a href="tel:0866600822">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
              Gọi 08.666.008.22
            </Button>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Index;
