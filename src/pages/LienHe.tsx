import { useState } from "react";
import { Building2, CalendarDays, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactItems = [
  { icon: Phone, label: "Hotline", value: "08.666.008.22", href: "tel:0866600822" },
  { icon: MessageCircle, label: "Zalo", value: "08.666.008.22", href: "https://zalo.me/0866600822" },
  { icon: MapPin, label: "Khu vực phục vụ", value: "Quảng Trị, Huế, Đà Nẵng, Quảng Bình" },
  { icon: Clock, label: "Thời gian", value: "Phục vụ 24/7" },
];

const serviceOptions = [
  "Xe đưa đón chuyên gia",
  "Xe doanh nghiệp theo tháng",
  "Xe hợp đồng dài hạn",
  "Đưa đón sân bay",
  "Xe hội nghị / sự kiện",
  "Tour doanh nghiệp / tiếp khách",
];

const LienHe = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary py-16 sm:py-20">
        <div className="container text-primary-foreground">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold mb-5">
              Liên hệ Tân Oanh Transport
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
              Nhận tư vấn & báo giá xe doanh nghiệp tại Quảng Trị
            </h1>
            <p className="text-lg opacity-90 leading-relaxed max-w-2xl">
              Gửi nhu cầu của bạn, chúng tôi sẽ tư vấn phương án xe phù hợp cho chuyên gia, doanh nghiệp, đoàn công tác, đưa đón sân bay và hợp đồng dài hạn.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container grid lg:grid-cols-5 gap-8 max-w-6xl">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Thông tin liên hệ</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                Phản hồi nhanh cho khách doanh nghiệp
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Với yêu cầu gấp, vui lòng gọi hotline hoặc Zalo để được hỗ trợ nhanh nhất. Với hợp đồng dài hạn, hãy gửi thông tin lịch trình để chúng tôi tư vấn chi tiết.
              </p>
            </div>

            <div className="grid gap-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="font-bold text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-bold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/70 rounded-2xl p-5 border border-border">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Cam kết phản hồi
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Yêu cầu gấp: gọi lại trong thời gian sớm nhất.</li>
                <li>• Hợp đồng tháng/dài hạn: tư vấn phương án xe và tài xế phù hợp.</li>
                <li>• Lịch trình đoàn công tác: hỗ trợ xây dựng kế hoạch di chuyển.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm">
              <div className="mb-6">
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Form báo giá</p>
                <h2 className="text-2xl font-extrabold text-foreground">Gửi yêu cầu vận chuyển</h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-bold text-foreground text-xl">Đã nhận yêu cầu!</p>
                  <p className="text-muted-foreground mt-2">Tân Oanh sẽ liên hệ lại trong thời gian sớm nhất.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1">Họ tên / Doanh nghiệp</label>
                      <Input placeholder="VD: Công ty ABC / Anh Minh" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1">Số điện thoại *</label>
                      <Input type="tel" placeholder="08xx xxx xxx" required className="h-12" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1">Dịch vụ cần tư vấn</label>
                      <select className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        {serviceOptions.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1">Thời gian dự kiến</label>
                      <Input placeholder="VD: 3 tháng / ngày 15-20/8" className="h-12" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1">Điểm đón</label>
                      <Input placeholder="VD: Sân bay Huế / Đông Hà" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-1">Điểm đến</label>
                      <Input placeholder="VD: KCN Quán Ngang / khách sạn" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-1">Nội dung chi tiết</label>
                    <Textarea rows={5} placeholder="VD: Cần xe 7 chỗ đưa đón chuyên gia từ khách sạn đến nhà máy hằng ngày, hợp đồng 3 tháng..." />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 font-semibold cta-shadow gap-2">
                    <Send className="h-4 w-4" /> Gửi yêu cầu báo giá
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-16">
        <div className="container max-w-6xl grid md:grid-cols-3 gap-5">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <Building2 className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-foreground mb-2">Doanh nghiệp & nhà máy</h3>
            <p className="text-sm text-muted-foreground leading-6">Xe đưa đón nhân sự, chuyên gia, lãnh đạo, đối tác, hợp đồng theo tháng/quý/năm.</p>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <CalendarDays className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-foreground mb-2">Lịch trình dài hạn</h3>
            <p className="text-sm text-muted-foreground leading-6">Tư vấn phương án vận hành ổn định, có tài xế, xe dự phòng và đầu mối điều phối.</p>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-bold text-foreground mb-2">Báo giá minh bạch</h3>
            <p className="text-sm text-muted-foreground leading-6">Báo giá theo nhu cầu thực tế, rõ phạm vi phục vụ, thời gian, tuyến đường và chi phí phát sinh nếu có.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-background">
  <div className="container">

    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-foreground">
        Vị trí Tân Oanh Transport
      </h2>

      <p className="text-muted-foreground mt-3">
        Dễ dàng tìm đường đến văn phòng hoặc liên hệ để được điều xe nhanh nhất.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl shadow-xl border border-border">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.3080620195615!2d107.1824151!3d16.9100896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e787406f1889%3A0xe593c238d3e4bc80!2zWGUgRHUgTOG7i2NoIFTDom4gT2FuaA!5e0!3m2!1svi!2s!4v1784003896155!5m2!1svi!2s"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />

    </div>

    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <a
        href="https://www.google.com/maps/place/Xe+Du+L%E1%BB%8Bch+T%C3%A2n+Oanh/@16.9100896,107.1824151,17z/data=!3m1!4b1!4m6!3m5!1s0x3140e787406f1889:0xe593c238d3e4bc80!8m2!3d16.9100896!4d107.1824151!16s%2Fg%2F11y_d1j64n"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90"
      >
        📍 Xem trên Google Maps
      </a>

      <a
        href="tel:0866600822"
        className="px-6 py-3 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
      >
        ☎ Gọi ngay
      </a>

    </div>

  </div>
</section>
    </>
  );
};

export default LienHe;
