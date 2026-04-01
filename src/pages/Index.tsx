import { Link } from "react-router-dom";
import { Clock, DollarSign, Shield, ArrowRight, Star, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import heroCar from "@/assets/hero-car.jpg";
import car4 from "@/assets/car-4seat.jpg";
import car7 from "@/assets/car-7seat.jpg";

const advantages = [
  { icon: Clock, title: "Đúng giờ", desc: "Cam kết đón đúng giờ, không để khách chờ" },
  { icon: DollarSign, title: "Giá minh bạch", desc: "Báo giá rõ ràng, không phát sinh chi phí" },
  { icon: Shield, title: "Tài xế chuyên nghiệp", desc: "Kinh nghiệm lâu năm, thân thiện, an toàn" },
];

const routes = [
  { from: "Đông Hà", to: "Đà Nẵng", price: "400.000đ/khách", time: "~3.5 giờ" },
  { from: "Cửa Việt", to: "Đà Nẵng", price: "450.000đ/khách", time: "~4 giờ" },
  { from: "Cửa Tùng", to: "Sân bay Phú bài", price: "300.000đ/khách", time: "~2 giờ" },
  { from: "Quảng Trị", to: "Sân bay Đà Nẵng", price: "400.000đ/khách", time: "~3.5 giờ" },
];

const testimonials = [
  { name: "Anh Tuấn", location: "Đông Hà", text: "Dịch vụ rất tốt, tài xế thân thiện, đúng giờ. Sẽ ủng hộ lần sau!", rating: 5 },
  { name: "Chị Hương", location: "Đà Nẵng", text: "Xe sạch sẽ, thoải mái. Giá hợp lý, rất hài lòng.", rating: 5 },
  { name: "Anh Minh", location: "Huế", text: "Đặt xe nhanh gọn, được đón tận nhà. Rất tiện lợi!", rating: 5 },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[85vh] md:min-h-[70vh] flex items-center overflow-hidden">
      <img src={heroCar} alt="Xe du lịch Quảng Trị - Đà Nẵng" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container relative z-10 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up">
              Dịch vụ xe Quảng Trị – Đà Nẵng uy tín, giá tốt
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Xe ghép – xe riêng – đưa đón tận nơi 24/7
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a href="tel:0866600822">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 cta-shadow text-base font-semibold h-12 px-8">
                  Đặt xe ngay
                </Button>
              </a>
              <Link to="/xe-ghep">
                <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                  Xem tuyến xe
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>

    {/* Mobile Booking Form */}
    <section className="md:hidden container -mt-8 relative z-10 mb-8">
      <BookingForm />
    </section>

    {/* Services */}
    <section className="py-16 bg-card">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">Dịch vụ nổi bật</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link to="/xe-ghep" className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img src={car4} alt="Xe ghép Quảng Trị Đà Nẵng" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={800} height={600} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-0 p-5 text-primary-foreground">
              <h3 className="text-lg font-bold flex items-center gap-2"><Users className="h-5 w-5" /> Xe ghép Quảng Trị – Đà Nẵng</h3>
              <p className="text-sm opacity-80">Tuyến cố định, giá tiết kiệm</p>
            </div>
          </Link>
          <Link to="/xe-du-lich" className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img src={car7} alt="Xe du lịch" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={800} height={600} />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-0 p-5 text-primary-foreground">
              <h3 className="text-lg font-bold flex items-center gap-2"><MapPin className="h-5 w-5" /> Xe tour du lịch </h3>
              <p className="text-sm opacity-80">4-7-16 chỗ, đi mọi nơi</p>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* Advantages */}
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">Vì sao chọn chúng tôi?</h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {advantages.map((a) => (
            <div key={a.title} className="bg-card rounded-xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <a.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Popular routes */}
    <section className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">Tuyến phổ biến</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {routes.map((r) => (
            <div key={r.from + r.to} className="bg-card rounded-xl p-5 flex items-center justify-between shadow-sm border border-border">
              <div>
                <p className="font-semibold text-foreground">{r.from} → {r.to}</p>
                <p className="text-sm text-muted-foreground">{r.time}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary text-lg">{r.price}</p>
                <a href="tel:0866600822">
                  <Button size="sm" variant="outline" className="mt-1 gap-1 text-xs">
                    Đặt ngay <ArrowRight className="h-3 w-3" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-10">Khách hàng nói gì?</h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 italic">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary">
      <div className="container text-center text-primary-foreground">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sẵn sàng đặt xe?</h2>
        <p className="opacity-90 mb-6 max-w-md mx-auto">Liên hệ ngay để được tư vấn và đặt xe nhanh nhất!</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:0866600822">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 cta-shadow">
              Gọi 08.666.008.22
            </Button>
          </a>
          <Link to="/lien-he">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
              Liên hệ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Index;
