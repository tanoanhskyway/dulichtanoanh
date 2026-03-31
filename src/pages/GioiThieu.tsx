import { Shield, Clock, Heart, Award } from "lucide-react";

const commitments = [
  { icon: Shield, title: "An toàn tuyệt đối", desc: "Xe đời mới, bảo hiểm đầy đủ, tài xế có bằng chuyên nghiệp" },
  { icon: Clock, title: "Đúng giờ cam kết", desc: "Luôn có mặt đúng hẹn, không để quý khách phải chờ đợi" },
  { icon: Heart, title: "Phục vụ tận tâm", desc: "Đội ngũ tài xế thân thiện, hỗ trợ hành lý, nước uống miễn phí" },
  { icon: Award, title: "Giá cả hợp lý", desc: "Báo giá minh bạch, không phát sinh, cạnh tranh nhất thị trường" },
];

const GioiThieu = () => (
  <>
    <section className="bg-primary py-16">
      <div className="container text-primary-foreground text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Giới Thiệu</h1>
        <p className="text-lg opacity-90">Đơn vị dịch vụ xe du lịch uy tín tại Quảng Trị</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container max-w-3xl">
        <div className="prose prose-lg text-muted-foreground space-y-4 mb-12">
          <p>
            <strong className="text-foreground">TanOanhSkyWay</strong> được thành lập với sứ mệnh cung cấp dịch vụ vận chuyển 
            hành khách chất lượng cao tại khu vực miền Trung Việt Nam. Với hơn <strong className="text-foreground">5 năm kinh nghiệm</strong> trong 
            lĩnh vực xe du lịch và xe ghép, chúng tôi tự hào phục vụ hàng nghìn lượt khách mỗi năm.
          </p>
          <p>
            Đội xe hiện đại gồm xe 4 chỗ, 7 chỗ và 16 chỗ, tất cả đều là xe đời mới, 
            được bảo dưỡng định kỳ, đảm bảo an toàn và thoải mái cho mọi hành trình.
          </p>
          <p>
            Tuyến chính: <strong className="text-foreground">Quảng Trị – Đà Nẵng</strong>, cùng các tuyến đi Huế, Quảng Bình 
            và phục vụ du lịch trong/ngoài tỉnh theo yêu cầu.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground text-center mb-8">Cam kết dịch vụ</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {commitments.map((c) => (
            <div key={c.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default GioiThieu;
