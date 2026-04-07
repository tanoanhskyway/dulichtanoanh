import { useEffect } from "react";
import { Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";
import car4 from "@/assets/car-4seat.jpg";
import car7 from "@/assets/car-7seat.jpg";

const schedule = [
  { time: "05:00", route: "Đông Hà → Đà Nẵng" },
  { time: "07:00", route: "Đông Hà → Đà Nẵng" },
  { time: "09:00", route: "Đông Hà → Đà Nẵng" },
  { time: "12:00", route: "Đà Nẵng → Đông Hà" },
  { time: "14:00", route: "Đà Nẵng → Đông Hà" },
  { time: "17:00", route: "Đà Nẵng → Đông Hà" },
];

const pricing = [
  { route: "Đông Hà – Đà Nẵng", price: "400.000đ/khách" },
  { route: "Cửa Việt – Đà Nẵng", price: "450.000đ/khách" },
  { route: "Đông Hà – Sân bay Phú Bài", price: "250.000đ/khách" },
  { route: "Cửa Tùng – Sân bay Phú Bài", price: "300.000đ/khách" },
];

const reasons = [
  "Đưa đón tận nơi trong nội thành",
  "Giá tiết kiệm hơn thuê xe riêng",
  "Xe đời mới, máy lạnh, sạch sẽ",
  "Khởi hành nhiều chuyến mỗi ngày",
  "Phù hợp khách lẻ và nhóm nhỏ",
  "Hỗ trợ đặt xe nhanh qua điện thoại và Zalo",
];

const XeGhep = () => {
  useEffect(() => {
    document.title = "Xe ghép Quảng Trị đi Đà Nẵng, Huế | Giá rẻ 24/7 | Tân Oanh";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Dịch vụ xe ghép Quảng Trị đi Đà Nẵng, Huế, sân bay Phú Bài. Đưa đón tận nơi, giá rẻ, xe đời mới, chạy hàng ngày. Gọi ngay 08.666.008.22 để đặt xe nhanh."
      );
    }

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", "https://dulichtanoanh.com/xe-ghep");

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Xe ghép Quảng Trị đi Đà Nẵng, Huế | Giá rẻ 24/7 | Tân Oanh"
      );
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Xe ghép Quảng Trị đi Đà Nẵng, Huế, sân bay. Đưa đón tận nơi, lịch chạy hàng ngày, giá tiết kiệm."
      );
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", "https://dulichtanoanh.com/xe-ghep");
    }
  }, []);

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Xe ghép Quảng Trị – Đà Nẵng
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Dịch vụ xe ghép Quảng Trị đi Đà Nẵng, Huế và sân bay với lịch chạy
            hàng ngày, đưa đón tận nơi, giá tiết kiệm và hỗ trợ đặt xe nhanh
            24/7.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Dịch vụ xe ghép Quảng Trị
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Xe ghép Quảng Trị là lựa chọn phù hợp cho khách đi lẻ, nhóm nhỏ
                hoặc người cần di chuyển thường xuyên giữa Quảng Trị, Huế và Đà
                Nẵng. Với ưu điểm giá rẻ, đón trả tận nơi và khởi hành nhiều
                chuyến mỗi ngày, hình thức này giúp bạn tiết kiệm chi phí mà vẫn
                đảm bảo thuận tiện trong suốt hành trình.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <img
                src={car4}
                alt="Xe ghép Quảng Trị 4 chỗ đi Đà Nẵng"
                className="rounded-xl w-full h-48 object-cover shadow-sm"
                loading="lazy"
                width={800}
                height={600}
              />
              <img
                src={car7}
                alt="Xe ghép Quảng Trị 7 chỗ đưa đón tận nơi"
                className="rounded-xl w-full h-48 object-cover shadow-sm"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Vì sao nên chọn xe ghép Quảng Trị?
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {reasons.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-border p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Lịch chạy trong ngày
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {schedule.map((s, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-lg p-4 border border-border flex items-center gap-3"
                  >
                    <span className="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm font-bold">
                      {s.time}
                    </span>
                    <span className="text-sm text-foreground">{s.route}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" /> Giá tham khảo
              </h2>
              <div className="space-y-3">
                {pricing.map((p) => (
                  <div
                    key={p.route}
                    className="bg-card rounded-lg p-4 border border-border flex items-center justify-between"
                  >
                    <span className="text-foreground font-medium">{p.route}</span>
                    <span className="text-primary font-bold text-lg">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Xe ghép Quảng Trị đi Đà Nẵng, Huế giá rẻ 24/7
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Dịch vụ xe ghép Quảng Trị hiện là lựa chọn phổ biến cho khách du
                lịch và người dân cần di chuyển giữa Quảng Trị, Huế và Đà Nẵng.
                Với ưu điểm giá hợp lý, đưa đón tận nơi và lịch chạy linh hoạt,
                xe ghép giúp bạn tiết kiệm chi phí nhưng vẫn đảm bảo sự thuận
                tiện và thoải mái.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                So với xe khách truyền thống, xe ghép Quảng Trị mang lại trải
                nghiệm chủ động hơn. Bạn không cần phải ra bến xe, không phải
                chờ đợi lâu và có thể được hỗ trợ đón trả trong nội thành. Đây
                là giải pháp phù hợp cho khách đi lẻ, nhóm nhỏ, người đi công
                tác hoặc khách du lịch muốn di chuyển nhanh giữa các điểm du
                lịch miền Trung.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Các tuyến xe ghép Quảng Trị phổ biến hiện nay gồm Quảng Trị đi
                Đà Nẵng, Quảng Trị đi Huế và Quảng Trị đi sân bay Phú Bài. Thời
                gian di chuyển từ Quảng Trị đến Đà Nẵng thường khoảng 3 đến 4
                tiếng, tùy điểm đón và tình hình giao thông. Nếu bạn cần đi Huế
                trong ngày hoặc cần nối chuyến sân bay, xe ghép cũng là phương
                án rất tiện lợi.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Khi lựa chọn xe ghép Quảng Trị, bạn nên ưu tiên đơn vị uy tín,
                xe sạch sẽ, tài xế kinh nghiệm và có hỗ trợ đặt xe nhanh qua
                hotline hoặc Zalo. Đặt sớm trước giờ khởi hành sẽ giúp bạn chủ
                động hơn về lịch trình, đặc biệt trong các dịp cuối tuần, lễ và
                mùa du lịch cao điểm.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Nếu bạn đang tìm kiếm xe ghép Quảng Trị đi Đà Nẵng, xe ghép
                Quảng Trị đi Huế hoặc xe ghép Quảng Trị đi sân bay với giá rẻ
                và đưa đón tận nơi, Tân Oanh luôn sẵn sàng hỗ trợ nhanh chóng,
                đúng giờ và an toàn.
              </p>

              <div className="pt-2 space-y-2">
                <p className="font-semibold text-foreground">
                  👉 Hotline đặt xe: 08.666.008.22
                </p>
                <p className="font-semibold text-foreground">
                  👉 Zalo hỗ trợ nhanh: 08.666.008.22
                </p>
                <p className="font-semibold text-foreground">
                  👉 Xe ghép Quảng Trị khởi hành linh hoạt mỗi ngày
                </p>
              </div>
            </div>

            <a href="tel:0866600822">
              <Button
                size="lg"
                className="w-full sm:w-auto cta-shadow h-12 px-8 text-base font-semibold gap-2 mt-4"
              >
                Đặt xe ngay <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default XeGhep;
