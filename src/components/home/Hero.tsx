import { ArrowRight, Car, Clock, FileCheck2, MapPin, Star } from "lucide-react";
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

const Hero = () => (
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

        <div id="bao-gia" className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md scroll-mt-24">
          <BookingForm />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
