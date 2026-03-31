import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Camera, Mountain, Landmark, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import destQT from "@/assets/dest-quangtri.jpg";
import destQB from "@/assets/dest-quangbinh.jpg";
import destHue from "@/assets/dest-hue.jpg";
import destDN from "@/assets/dest-danang.jpg";

const articles = [
  {
    id: "quang-tri",
    img: destQT,
    icon: Landmark,
    province: "Quảng Trị",
    title: "Tour du lịch Quảng Trị – Khám phá vùng đất lịch sử và biển đẹp",
    intro: "Quảng Trị không chỉ nổi tiếng với những di tích lịch sử hào hùng mà còn sở hữu những bãi biển hoang sơ tuyệt đẹp. Đây là điểm đến lý tưởng cho những ai yêu thích du lịch kết hợp tìm hiểu văn hóa – lịch sử.",
    highlights: [
      {
  name: "Thành cổ Quảng Trị",
  desc: "Thành cổ Quảng Trị là di tích lịch sử quốc gia đặc biệt, gắn liền với trận chiến 81 ngày đêm năm 1972. Đây là nơi tưởng niệm các anh hùng liệt sĩ đã hy sinh vì độc lập dân tộc. Không gian yên bình, trang nghiêm cùng hệ thống bảo tàng giúp du khách hiểu sâu sắc hơn về lịch sử Việt Nam. Đây là điểm du lịch tâm linh và giáo dục lịch sử rất ý nghĩa khi đến Quảng Trị."
},
      { name: "Địa đạo Vịnh Mốc", desc: "Hệ thống địa đạo độc đáo nằm sâu trong lòng đất, từng là nơi sinh sống của hàng trăm người dân trong chiến tranh. Một công trình kiến trúc ngầm đáng kinh ngạc." },
      { name: "Bãi biển Cửa Việt", desc: "Bãi biển đẹp với cát trắng mịn, nước trong xanh, lý tưởng cho nghỉ dưỡng và tắm biển. Hải sản tươi sống giá rẻ là điểm cộng lớn." },
      { name: "Cầu Hiền Lương – Sông Bến Hải", desc: "Biểu tượng chia cắt hai miền Nam – Bắc, nay là điểm tham quan du lịch nổi tiếng với cột cờ Hiền Lương." },
      { name: "Thánh Địa La Vang", desc: "Trung tâm hành hương Công giáo lớn nhất Việt Nam, thu hút hàng triệu lượt khách mỗi năm." },
    ],
    tips: "Thời điểm lý tưởng để du lịch Quảng Trị là từ tháng 3 đến tháng 8, khi thời tiết nắng ấm, biển lặng. Nên dành 2-3 ngày để khám phá trọn vẹn các điểm đến.",
  },
  {
    id: "quang-binh",
    img: destQB,
    icon: Mountain,
    province: "Quảng Bình",
    title: "Tour du lịch Quảng Bình – Thiên đường hang động kỳ vĩ nhất thế giới",
    intro: "Quảng Bình được mệnh danh là 'Vương quốc hang động' với hệ thống hang động đa dạng bậc nhất thế giới. Từ Quảng Trị, bạn chỉ mất khoảng 2.5 giờ di chuyển bằng xe dịch vụ Quảng Trị để đến với thiên đường này.",
    highlights: [
      { name: "Vườn Quốc gia Phong Nha – Kẻ Bàng", desc: "Di sản thiên nhiên thế giới UNESCO với hệ thống hang động khổng lồ. Động Phong Nha với hệ thống sông ngầm dài nhất, thạch nhũ lung linh huyền ảo." },
      { name: "Hang Sơn Đoòng", desc: "Hang động lớn nhất thế giới, kỳ quan thiên nhiên có một không hai. Tour khám phá 4 ngày 3 đêm sẽ là trải nghiệm đáng nhớ nhất cuộc đời." },
      { name: "Động Thiên Đường", desc: "Dài hơn 31km, được ví như 'cung điện trong lòng đất' với thạch nhũ đa sắc, kiến tạo hàng triệu năm." },
      { name: "Suối Moọc", desc: "Dòng suối trong vắt tuyệt đẹp giữa rừng nguyên sinh, lý tưởng cho hoạt động chèo thuyền kayak và bơi lội." },
      { name: "Bãi biển Nhật Lệ", desc: "Bãi biển đẹp nổi tiếng của Đồng Hới, nơi nghỉ ngơi lý tưởng sau những chuyến khám phá hang động." },
    ],
    tips: "Nên đặt xe du lịch Quảng Trị đi Quảng Bình sớm, đặc biệt vào mùa hè (tháng 5-8). Xe 7 chỗ phù hợp cho gia đình, nhóm bạn 4-6 người.",
  },
  {
    id: "hue",
    img: destHue,
    icon: Landmark,
    province: "Huế",
    title: "Tour du lịch Huế – Cố đô thơ mộng với di sản văn hóa UNESCO",
    intro: "Huế – kinh đô cuối cùng của triều Nguyễn, nổi tiếng với hệ thống lăng tẩm, cung điện và nền ẩm thực tinh tế. Từ Quảng Trị đi Huế bằng xe ghép Quảng Trị chỉ mất khoảng 1.5 giờ, rất thuận tiện cho chuyến du lịch trong ngày.",
    highlights: [
      { name: "Đại Nội Huế", desc: "Quần thể di tích Cố đô Huế – Di sản Văn hóa Thế giới UNESCO. Hoàng thành rộng lớn với Ngọ Môn, Điện Thái Hòa, Tử Cấm Thành và nhiều công trình kiến trúc cung đình đặc sắc." },
      { name: "Lăng Tự Đức", desc: "Lăng tẩm đẹp nhất trong hệ thống lăng vua Nguyễn, được xây dựng như một khu vườn thượng uyển với hồ sen, đình tạ, thơ mộng." },
      { name: "Chùa Thiên Mụ", desc: "Ngôi chùa cổ nhất Huế, biểu tượng tâm linh của vùng đất cố đô, nằm bên bờ sông Hương thơ mộng." },
      { name: "Sông Hương & Cầu Trường Tiền", desc: "Đi thuyền trên sông Hương ngắm hoàng hôn, nghe ca Huế là trải nghiệm không thể bỏ qua khi đến Huế." },
      { name: "Chợ Đông Ba", desc: "Chợ truyền thống lớn nhất Huế, nơi lý tưởng để thưởng thức ẩm thực Huế: bún bò, bánh bèo, nem lụi, chè Huế." },
    ],
    tips: "Thuê xe dịch vụ Quảng Trị đi Huế giúp bạn chủ động lịch trình. Nên dành 2 ngày để khám phá Huế trọn vẹn. Thời tiết đẹp nhất từ tháng 2 đến tháng 4.",
  },
  {
    id: "da-nang",
    img: destDN,
    icon: Sun,
    province: "Đà Nẵng",
    title: "Tour du lịch Đà Nẵng – Thành phố đáng sống nhất Việt Nam",
    intro: "Đà Nẵng là điểm đến du lịch hàng đầu miền Trung với biển đẹp, cầu nổi tiếng và khu vui chơi đẳng cấp quốc tế. Xe ghép Quảng Trị đi Đà Nẵng chỉ mất khoảng 3.5 giờ, giúp bạn tiết kiệm chi phí di chuyển tối đa.",
    highlights: [
      { name: "Bà Nà Hills & Cầu Vàng", desc: "Khu du lịch trên đỉnh núi với Cầu Vàng nổi tiếng thế giới, làng Pháp cổ kính, vườn hoa tuyệt đẹp và nhiều trò chơi hấp dẫn." },
      { name: "Bãi biển Mỹ Khê", desc: "Được Forbes bình chọn là một trong những bãi biển đẹp nhất hành tinh, cát trắng mịn, nước trong xanh, lý tưởng cho tắm biển và thể thao dưới nước." },
      { name: "Cầu Rồng", desc: "Cây cầu biểu tượng của Đà Nẵng với thiết kế hình rồng ấn tượng, phun lửa và nước vào cuối tuần." },
      { name: "Ngũ Hành Sơn", desc: "Quần thể 5 ngọn núi đá vôi với nhiều hang động, chùa chiền và tầm nhìn panorama tuyệt đẹp." },
      { name: "Phố cổ Hội An (cách 30km)", desc: "Di sản Văn hóa Thế giới UNESCO với kiến trúc cổ kính, đèn lồng rực rỡ, ẩm thực phong phú – kết hợp tour Đà Nẵng – Hội An rất lý tưởng." },
    ],
    tips: "Đặt xe du lịch Quảng Trị đi Đà Nẵng loại 7 chỗ hoặc 16 chỗ cho nhóm đông sẽ tiết kiệm hơn. Mùa đẹp nhất: tháng 3-8. Nên dành 3-4 ngày cho Đà Nẵng – Hội An.",
  },
];

const TourDuLich = () => (
  <>
    {/* Hero */}
    <section className="bg-primary py-16">
      <div className="container text-primary-foreground text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Tour Du Lịch Miền Trung – Xe Dịch Vụ Quảng Trị
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Khám phá Quảng Trị, Quảng Bình, Huế, Đà Nẵng cùng dịch vụ <strong>xe du lịch Quảng Trị</strong> uy tín, giá tốt. Đặt xe ghép hoặc xe riêng, đưa đón tận nơi.
        </p>
      </div>
    </section>

    {/* Quick nav */}
    <section className="py-6 bg-secondary">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-3">
          {articles.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <MapPin className="h-4 w-4" /> {a.province}
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Articles */}
    <section className="py-12">
      <div className="container max-w-4xl space-y-16">
        {articles.map((article, idx) => (
          <article key={article.id} id={article.id} className="scroll-mt-24">
            {/* Article header image */}
            <div className="relative rounded-xl overflow-hidden mb-6 shadow-md">
              <img
                src={article.img}
                alt={`Tour du lịch ${article.province} - xe dịch vụ Quảng Trị`}
                className="w-full h-64 sm:h-80 object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                width={1200}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 p-6 text-primary-foreground">
                <span className="inline-flex items-center gap-1.5 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  <article.icon className="h-3.5 w-3.5" /> {article.province}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">{article.title}</h2>
              </div>
            </div>

            {/* Intro */}
            <p className="text-muted-foreground leading-relaxed mb-6">{article.intro}</p>

            {/* Highlights */}
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" /> Điểm đến nổi bật tại {article.province}
            </h3>
            <div className="space-y-4 mb-6">
              {article.highlights.map((h) => (
                <div key={h.name} className="bg-card rounded-xl p-5 border border-border">
                  <h4 className="font-bold text-foreground mb-1">{h.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="bg-secondary rounded-xl p-5 mb-6">
              <h4 className="font-bold text-foreground mb-2">💡 Mẹo du lịch</h4>
              <p className="text-sm text-muted-foreground">{article.tips}</p>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-foreground font-semibold mb-2">
                🚗 Đặt <strong>xe ghép Quảng Trị</strong> hoặc <strong>xe du lịch Quảng Trị</strong> đi {article.province} ngay hôm nay!
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Dịch vụ <strong>xe dịch vụ Quảng Trị</strong> uy tín, đưa đón tận nơi, giá tốt nhất.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:0866600822">
                  <Button className="cta-shadow gap-2">
                    Gọi đặt xe: 08.666.00822 <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link to="/lien-he">
                  <Button variant="outline" className="gap-2">
                    Liên hệ tư vấn
                  </Button>
                </Link>
              </div>
            </div>

            {idx < articles.length - 1 && <hr className="mt-12 border-border" />}
          </article>
        ))}
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 bg-primary">
      <div className="container text-center text-primary-foreground">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Sẵn sàng khám phá miền Trung?
        </h2>
        <p className="opacity-90 mb-6 max-w-lg mx-auto">
          Đặt <strong>xe ghép Quảng Trị</strong>, <strong>xe du lịch Quảng Trị</strong> hoặc <strong>xe dịch vụ Quảng Trị</strong> ngay để nhận giá tốt nhất!
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:0866600822">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 cta-shadow">
              Gọi 08.666.00822
            </Button>
          </a>
          <Link to="/xe-ghep">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
              Xem tuyến xe ghép
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default TourDuLich;
