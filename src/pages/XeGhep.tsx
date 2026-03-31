import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import car4 from "@/assets/car-4seat.jpg";
import car7 from "@/assets/car-7seat.jpg";

const schedule = [
  { time: "05:00", route: "Đông Hà → Đà Nẵng" },
  { time: "07:00", route: "Đông Hà → Đà Nẵng" },
  { time: "09:00", route: "Đông Hà → Đà Nẵng" },
  { time: "12:00", route: "Đà Nẵng → Đông Hà" },
  { time: "14:00", route: "Đà Nẵng → Đông Hà" },
  { time: "17:00", route: "Đà Nẵng → Đông Hà" },
];

const pricing = [
  { route: "Đông Hà – Đà Nẵng", price: "400.000đ/khách" },
  { route: "Cửa Việt – Đà Nẵng", price: "450.000đ/khách" },
  { route: "Đông Hà – Sân bay Phú Bài", price: "250.000đ/khách" },
  { route: "Cửa Tùng – Sân bay Phú bài", price: "300.000đ/khách" },
];

const XeGhep = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container text-primary-foreground text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Xe Ghép Quảng Trị – Đà Nẵng</h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto">Tuyến cố định hàng ngày, đưa đón tận nơi, giá tiết kiệm</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dịch vụ xe ghép</h2>
            <p className="text-muted-foreground leading-relaxed">
              Xe ghép tuyến Quảng Trị - Đà Nẵng hoạt động hàng ngày với nhiều chuyến trong ngày. 
              Đón/trả tận nơi trong nội thành, xe đời mới, máy lạnh, thoải mái. 
              Phù hợp cho cá nhân, nhóm nhỏ cần di chuyển tiết kiệm.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <img src={car4} alt="Xe 4 chỗ" className="rounded-xl w-full h-48 object-cover shadow-sm" loading="lazy" width={800} height={600} />
            <img src={car7} alt="Xe 7 chỗ" className="rounded-xl w-full h-48 object-cover shadow-sm" loading="lazy" width={800} height={600} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" /> Lịch chạy trong ngày
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {schedule.map((s, i) => (
                <div key={i} className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm font-bold">{s.time}</span>
                  <span className="text-sm text-foreground">{s.route}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> Giá tham khảo
            </h2>
            <div className="space-y-3">
              {pricing.map((p) => (
                <div key={p.route} className="bg-card rounded-lg p-4 border border-border flex items-center justify-between">
                  <span className="text-foreground font-medium">{p.route}</span>
                  <span className="text-primary font-bold text-lg">{p.price}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="tel:0905123456">
            <Button size="lg" className="w-full sm:w-auto cta-shadow h-12 px-8 text-base font-semibold gap-2 mt-4">
              Đặt xe ngay <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <BookingForm />
        </div>
      </div>
    </section>
  </>
);

export default XeGhep;
