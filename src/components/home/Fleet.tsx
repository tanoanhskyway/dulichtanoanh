import { Car } from "lucide-react";

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

const Fleet = () => (
  <section id="doi-xe" className="py-16 bg-background scroll-mt-24">
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
);

export default Fleet;
