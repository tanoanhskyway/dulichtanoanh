import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import car4 from "@/assets/car-4seat.jpg";
import car7 from "@/assets/car-7seat.jpg";
import car16 from "@/assets/car-16seat.jpg";

const vehicles = [
  { img: car4, name: "Xe 4 chỗ", desc: "Sedan đời mới, phù hợp 1-3 khách", price: "Từ 500.000đ/ngày" },
  { img: car7, name: "Xe 7 chỗ", desc: "SUV/MPV rộng rãi, phù hợp gia đình", price: "Từ 800.000đ/ngày" },
  { img: car16, name: "Xe 16 chỗ", desc: "Xe khách mini, phù hợp đoàn", price: "Từ 1.200.000đ/ngày" },
];

const trips = [
  "Quảng Trị → Phong Nha (Quảng Bình)",
  "Quảng Trị → Huế city tour",
  "Quảng Trị → Đà Nẵng – Hội An",
  "Quảng Trị → Bà Nà Hills",
  "Tour DMZ Quảng Trị trong ngày",
  "Đưa đón sân bay Đà Nẵng / Huế",
];

const XeDuLich = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container text-primary-foreground text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Xe Du Lịch Quảng Trị</h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto">Xe 4 – 7 – 16 chỗ, phục vụ mọi hành trình trong và ngoài tỉnh</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Dòng xe cho thuê</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {vehicles.map((v) => (
                <div key={v.name} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm">
                  <img src={v.img} alt={v.name} className="w-full h-40 object-cover" loading="lazy" width={800} height={600} />
                  <div className="p-4">
                    <h3 className="font-bold text-foreground">{v.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{v.desc}</p>
                    <p className="text-primary font-bold">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Gợi ý hành trình</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {trips.map((t) => (
                <div key={t} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-2">Báo giá linh hoạt</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Giá thuê xe phụ thuộc loại xe, quãng đường và thời gian thuê. Liên hệ để nhận báo giá chính xác nhất.
            </p>
            <a href="tel:0905123456">
              <Button className="cta-shadow gap-2">
                Liên hệ ngay <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <BookingForm />
        </div>
      </div>
    </section>
  </>
);

export default XeDuLich;
