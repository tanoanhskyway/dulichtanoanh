import { MapPin } from "lucide-react";

const industrialZones = [
  "KCN Quán Ngang",
  "KCN Tây Bắc Hồ Xá",
  "KCN Nam Đông Hà",
  "Khu kinh tế Đông Nam",
  "Sân bay Quảng Trị",
  "Cảng Cửa Việt",
];

const IndustrialZones = () => (
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
);

export default IndustrialZones;
