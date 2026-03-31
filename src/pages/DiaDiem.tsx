import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import destQT from "@/assets/dest-quangtri.jpg";
import destQB from "@/assets/dest-quangbinh.jpg";
import destHue from "@/assets/dest-hue.jpg";
import destDN from "@/assets/dest-danang.jpg";

const destinations = [
  {
    img: destQT, name: "Quảng Trị",
    desc: "Thành cổ Quảng Trị, địa đạo Vịnh Mốc, bãi biển Cửa Việt – vùng đất lịch sử và thiên nhiên tươi đẹp.",
    transport: "Di chuyển nội tỉnh bằng xe 4-7 chỗ, giá từ 300.000đ/chuyến"
  },
  {
    img: destQB, name: "Quảng Bình",
    desc: "Phong Nha – Kẻ Bàng, hang Sơn Đoòng, suối Moọc – thiên đường hang động kỳ vĩ nhất Việt Nam.",
    transport: "Xe từ Quảng Trị đi Phong Nha, chỉ ~2.5 giờ, giá từ 800.000đ"
  },
  {
    img: destHue, name: "Huế",
    desc: "Đại Nội, lăng tẩm, sông Hương – cố đô thơ mộng với di sản văn hóa UNESCO.",
    transport: "Xe ghép QT → Huế hàng ngày, 150.000đ/khách"
  },
  {
    img: destDN, name: "Đà Nẵng",
    desc: "Cầu Rồng, Bà Nà Hills, bãi biển Mỹ Khê – thành phố đáng sống nhất Việt Nam.",
    transport: "Xe ghép QT → ĐN hàng ngày, 250.000đ/khách"
  },
];

const DiaDiem = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container text-primary-foreground text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Địa Điểm Du Lịch</h1>
        <p className="text-lg opacity-90 max-w-xl mx-auto">Khám phá những điểm đến hấp dẫn trên hành trình của bạn</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {destinations.map((d) => (
            <article key={d.name} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
              <img src={d.img} alt={`Du lịch ${d.name}`} className="w-full h-52 object-cover" loading="lazy" width={800} height={600} />
              <div className="p-5">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" /> {d.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-3">{d.desc}</p>
                <div className="bg-secondary rounded-lg p-3 text-sm">
                  <p className="font-medium text-secondary-foreground">🚗 {d.transport}</p>
                </div>
                <a href="tel:0905123456" className="block mt-4">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    Đặt xe đi {d.name} <ArrowRight className="h-3 w-3" />
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default DiaDiem;
