import { BriefcaseBusiness, Building2, Headphones, MapPin, Route, Users, Wrench } from "lucide-react";

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

const Customers = () => (
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
);

export default Customers;
