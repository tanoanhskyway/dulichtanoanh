import { Award, Building2, Clock, FileCheck2, MapPin, ShieldCheck, Users, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const strengths = [
  {
    icon: ShieldCheck,
    title: "An toàn & đúng giờ",
    desc: "Ưu tiên lịch trình của doanh nghiệp, chuyên gia và đoàn công tác. Xe được kiểm tra trước mỗi chuyến.",
  },
  {
    icon: FileCheck2,
    title: "Hợp đồng rõ ràng",
    desc: "Hỗ trợ hợp đồng theo chuyến, theo tháng, theo quý hoặc dài hạn. Phù hợp với bộ phận hành chính doanh nghiệp.",
  },
  {
    icon: Clock,
    title: "Phục vụ 24/7",
    desc: "Sẵn sàng đưa đón sân bay, khách sạn, khu công nghiệp, nhà máy và các lịch trình phát sinh ngoài giờ.",
  },
  {
    icon: Car,
    title: "Đội xe linh hoạt",
    desc: "Xe 4 chỗ, 7 chỗ, 16 chỗ và xe VIP phục vụ chuyên gia, lãnh đạo, đối tác, đoàn khảo sát và khách công tác.",
  },
];

const customers = [
  "Doanh nghiệp và văn phòng đại diện",
  "Khu công nghiệp, nhà máy, nhà thầu",
  "Chuyên gia nước ngoài, kỹ sư, ban lãnh đạo",
  "Khách sạn, công ty tổ chức sự kiện",
  "Đoàn khảo sát đầu tư, đoàn công tác",
  "Khách du lịch doanh nghiệp và tour riêng",
];

const GioiThieu = () => (
  <>
    <section className="bg-gradient-to-br from-foreground via-foreground to-primary py-16 sm:py-20">
      <div className="container text-primary-foreground">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold mb-5">
            Tân Oanh Transport
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
            Đối tác vận chuyển doanh nghiệp & chuyên gia tại Quảng Trị
          </h1>
          <p className="text-lg opacity-90 leading-relaxed max-w-2xl">
            Tân Oanh Transport định hướng trở thành đơn vị cung cấp giải pháp vận chuyển chuyên nghiệp cho doanh nghiệp, chuyên gia, nhà thầu, khách công tác và khách du lịch tại Quảng Trị, Huế, Đà Nẵng và khu vực miền Trung.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to="/lien-he">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold cta-shadow">
                Nhận báo giá
              </Button>
            </Link>
            <a href="tel:0866600822">
              <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                Gọi 08.666.008.22
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 sm:py-16">
      <div className="container grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Về chúng tôi</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-5">
            Từ dịch vụ xe du lịch đến giải pháp vận chuyển doanh nghiệp
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Tân Oanh Transport</strong> phát triển từ kinh nghiệm phục vụ xe du lịch, xe dịch vụ và đưa đón khách tại Quảng Trị. Với định hướng mới, chúng tôi tập trung mạnh vào nhóm khách hàng doanh nghiệp: chuyên gia, lãnh đạo, nhà đầu tư, nhà thầu, khách công tác và các đoàn làm việc dài ngày.
            </p>
            <p>
              Chúng tôi không chỉ cung cấp một chuyến xe, mà xây dựng một quy trình vận chuyển ổn định: tiếp nhận nhu cầu, tư vấn phương án xe, báo giá rõ ràng, bố trí tài xế phù hợp, theo dõi lịch trình và hỗ trợ phát sinh trong suốt quá trình phục vụ.
            </p>
            <p>
              Mục tiêu của Tân Oanh là trở thành đối tác vận chuyển đáng tin cậy khi Quảng Trị phát triển mạnh về khu công nghiệp, sân bay, du lịch và dịch vụ doanh nghiệp trong những năm tới.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
          <h3 className="font-bold text-xl text-foreground mb-5">Chúng tôi phục vụ</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {customers.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-secondary/70 p-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 bg-secondary/60">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Năng lực dịch vụ</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Vì sao doanh nghiệp chọn Tân Oanh?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((item) => (
            <div key={item.title} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-14 sm:py-16">
      <div className="container grid lg:grid-cols-3 gap-6">
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <Building2 className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-bold text-xl text-foreground mb-2">Tầm nhìn</h3>
          <p className="text-muted-foreground leading-relaxed">
            Trở thành thương hiệu vận chuyển doanh nghiệp được nhắc đến đầu tiên tại Quảng Trị khi doanh nghiệp cần xe cho chuyên gia, đối tác và đoàn công tác.
          </p>
        </div>
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <Award className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-bold text-xl text-foreground mb-2">Sứ mệnh</h3>
          <p className="text-muted-foreground leading-relaxed">
            Mang đến dịch vụ vận chuyển an toàn, đúng giờ, minh bạch và chuyên nghiệp, giúp doanh nghiệp yên tâm tập trung vào công việc chính.
          </p>
        </div>
        <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
          <MapPin className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-bold text-xl text-foreground mb-2">Khu vực phục vụ</h3>
          <p className="text-muted-foreground leading-relaxed">
            Quảng Trị, Đông Hà, Cửa Việt, các khu công nghiệp, Huế, Đà Nẵng, Quảng Bình và các hành trình miền Trung theo yêu cầu.
          </p>
        </div>
      </div>
    </section>

    <section className="py-14 bg-primary">
      <div className="container text-center text-primary-foreground">
        <Users className="h-10 w-10 mx-auto mb-4 opacity-90" />
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Bạn cần đơn vị vận chuyển cho doanh nghiệp?
        </h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-6">
          Tân Oanh sẵn sàng tư vấn phương án xe đưa đón chuyên gia, xe hợp đồng dài hạn, xe sân bay và xe phục vụ đoàn công tác.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/lien-he">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold cta-shadow">
              Gửi yêu cầu báo giá
            </Button>
          </Link>
          <a href="tel:0866600822">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Gọi hotline
            </Button>
          </a>
        </div>
      </div>
    </section>
  </>
);

export default GioiThieu;
