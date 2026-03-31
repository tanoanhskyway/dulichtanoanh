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
    intro: "Quảng Trị là điểm đến nổi bật miền Trung với sự kết hợp giữa du lịch lịch sử, tâm linh và biển đảo. Thuê xe du lịch Quảng Trị giúp bạn di chuyển thuận tiện, tiết kiệm chi phí và chủ động lịch trình.",
    highlights: [
      {
        name: "Thành cổ Quảng Trị",
        desc: "Thành cổ Quảng Trị là di tích lịch sử quốc gia đặc biệt, gắn liền với trận chiến 81 ngày đêm năm 1972. Đây là nơi tưởng niệm các anh hùng liệt sĩ, mang ý nghĩa lịch sử và tâm linh sâu sắc. Không gian yên bình, nhiều cây xanh, rất phù hợp cho tham quan và tìm hiểu lịch sử."
      },
      {
        name: "Địa đạo Vịnh Mốc",
        desc: "Địa đạo Vịnh Mốc là hệ thống hầm ngầm độc đáo từng là nơi sinh sống của người dân trong chiến tranh. Du khách có thể trải nghiệm không gian sống dưới lòng đất, khám phá kiến trúc độc đáo và tinh thần kiên cường của người Việt."
      },
      {
        name: "Bãi biển Cửa Việt",
        desc: "Bãi biển Cửa Việt nổi tiếng với cát trắng mịn, nước biển trong xanh, là điểm nghỉ dưỡng lý tưởng. Hải sản tươi ngon, giá rẻ và không gian thoáng đãng giúp nơi đây thu hút đông đảo du khách."
      },
      {
        name: "Cầu Hiền Lương – Sông Bến Hải",
        desc: "Cầu Hiền Lương là biểu tượng lịch sử chia cắt hai miền Nam – Bắc. Đây là điểm tham quan nổi tiếng với cột cờ, nhà trưng bày và cảnh quan mang đậm dấu ấn lịch sử."
      },
      {
        name: "Thánh địa La Vang",
        desc: "Thánh địa La Vang là trung tâm hành hương Công giáo lớn nhất Việt Nam. Không gian linh thiêng, yên bình rất phù hợp cho du lịch tâm linh và cầu bình an."
      }
    ],
    tips: "Nên đi từ tháng 3 đến tháng 8. Thuê xe dịch vụ Quảng Trị giúp tiết kiệm thời gian và chủ động lịch trình."
  },

  {
    id: "quang-binh",
    img: destQB,
    icon: Mountain,
    province: "Quảng Bình",
    title: "Tour du lịch Quảng Bình – Thiên đường hang động",
    intro: "Quảng Bình nổi tiếng với hệ thống hang động lớn nhất thế giới. Từ Quảng Trị, bạn có thể dễ dàng di chuyển bằng xe du lịch chỉ khoảng 2.5 giờ.",
    highlights: [
      {
        name: "Phong Nha – Kẻ Bàng",
        desc: "Di sản thiên nhiên thế giới với hệ thống hang động kỳ vĩ, sông ngầm và thạch nhũ tuyệt đẹp."
      },
      {
        name: "Hang Sơn Đoòng",
        desc: "Hang động lớn nhất thế giới, là điểm đến mơ ước của các tín đồ khám phá."
      },
      {
        name: "Động Thiên Đường",
        desc: "Được ví như cung điện dưới lòng đất với hệ thống thạch nhũ tráng lệ."
      },
      {
        name: "Suối Moọc",
        desc: "Dòng suối xanh ngọc giữa rừng, thích hợp nghỉ dưỡng và check-in."
      },
      {
        name: "Biển Nhật Lệ",
        desc: "Bãi biển đẹp, nước trong xanh, thích hợp thư giãn sau hành trình khám phá."
      }
    ],
    tips: "Đi mùa hè là đẹp nhất. Nên thuê xe Quảng Trị đi Quảng Bình để tiết kiệm chi phí."
  },

  {
    id: "hue",
    img: destHue,
    icon: Landmark,
    province: "Huế",
    title: "Tour du lịch Huế – Cố đô di sản",
    intro: "Huế mang vẻ đẹp cổ kính với lăng tẩm, cung điện và ẩm thực đặc sắc.",
    highlights: [
      {
        name: "Đại Nội Huế",
        desc: "Quần thể di tích UNESCO với kiến trúc cung đình độc đáo."
      },
      {
        name: "Lăng Tự Đức",
        desc: "Lăng đẹp nhất với phong cảnh thơ mộng."
      },
      {
        name: "Chùa Thiên Mụ",
        desc: "Ngôi chùa cổ nổi tiếng bên sông Hương."
      },
      {
        name: "Sông Hương",
        desc: "Du thuyền, nghe ca Huế là trải nghiệm không thể bỏ qua."
      },
      {
        name: "Chợ Đông Ba",
        desc: "Thiên đường ẩm thực Huế."
      }
    ],
    tips: "Nên đi 2 ngày. Thuê xe riêng giúp bạn chủ động hơn."
  },

  {
    id: "da-nang",
    img: destDN,
    icon: Sun,
    province: "Đà Nẵng",
    title: "Tour du lịch Đà Nẵng – Thành phố đáng sống",
    intro: "Đà Nẵng nổi tiếng với biển đẹp, cầu nổi tiếng và khu vui chơi đẳng cấp.",
    highlights: [
      {
        name: "Bà Nà Hills",
        desc: "Khu du lịch nổi tiếng với Cầu Vàng."
      },
      {
        name: "Biển Mỹ Khê",
        desc: "Một trong những bãi biển đẹp nhất thế giới."
      },
      {
        name: "Cầu Rồng",
        desc: "Biểu tượng thành phố với màn phun lửa độc đáo."
      },
      {
        name: "Ngũ Hành Sơn",
        desc: "Quần thể núi đá với nhiều hang động."
      },
      {
        name: "Hội An",
        desc: "Phố cổ lung linh, cách Đà Nẵng 30km."
      }
    ],
    tips: "Nên đi 3-4 ngày. Thuê xe Quảng Trị đi Đà Nẵng là tiện nhất."
  }
];

const TourDuLich = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container text-primary-foreground text-center">
        <h1 className="text-3xl font-bold mb-3">
          Tour Du Lịch Miền Trung – Xe Dịch Vụ Quảng Trị
        </h1>
        <p>
          Khám phá miền Trung cùng dịch vụ xe du lịch Quảng Trị uy tín.
        </p>
      </div>
    </section>

    <section className="py-12">
      <div className="container max-w-4xl space-y-16">
        {articles.map((article) => (
          <article key={article.id}>
            <img src={article.img} className="rounded-xl mb-4" />

            <h2 className="text-2xl font-bold mb-3">{article.title}</h2>

            <p className="mb-4">{article.intro}</p>

            {article.highlights.map((h) => (
              <div key={h.name} className="mb-3">
                <h4 className="font-bold">{h.name}</h4>
                <p>{h.desc}</p>
              </div>
            ))}

            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p>{article.tips}</p>
            </div>

            <a href="tel:0866600822">
              <Button className="mt-4">
                Gọi đặt xe: 08.666.00822
              </Button>
            </a>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default TourDuLich;
