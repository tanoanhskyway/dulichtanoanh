import { BadgeCheck, Car, Clock, FileCheck2, Headphones, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Đúng giờ", desc: "Lịch trình doanh nghiệp cần sự chính xác. Tân Oanh ưu tiên đúng giờ trong từng chuyến đi." },
  { icon: FileCheck2, title: "Hợp đồng rõ ràng", desc: "Phù hợp cho doanh nghiệp cần hồ sơ, báo giá, hợp đồng và chứng từ minh bạch." },
  { icon: ShieldCheck, title: "An toàn & bảo mật", desc: "Tài xế chuyên nghiệp, bảo mật lịch trình khách hàng và thông tin di chuyển." },
  { icon: Headphones, title: "Điều phối 24/7", desc: "Hỗ trợ thay đổi lịch, điều xe, xử lý phát sinh và chăm sóc khách hàng nhanh chóng." },
  { icon: Car, title: "Đội xe phù hợp", desc: "Từ xe 4 chỗ, 7 chỗ đến xe đoàn, đáp ứng nhiều nhu cầu doanh nghiệp khác nhau." },
  { icon: BadgeCheck, title: "Tư duy B2B", desc: "Không chỉ là thuê xe, mà là giải pháp vận chuyển ổn định cho doanh nghiệp." },
];

const WhyChoose = () => (
  <section className="py-16 bg-slate-950 text-white">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-amber-300 mb-2">Lý do chọn Tân Oanh</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Không chỉ là thuê xe, mà là đối tác vận chuyển ổn định</h2>
          <p className="text-white/70 leading-relaxed">
            Với khách doanh nghiệp, điều quan trọng không chỉ là giá. Đó là sự đúng giờ, hợp đồng rõ ràng, khả năng điều phối, xe phù hợp và xử lý phát sinh nhanh.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <item.icon className="h-6 w-6 text-amber-300 mb-3" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
