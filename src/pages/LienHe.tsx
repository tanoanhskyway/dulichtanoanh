import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LienHe = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Liên Hệ</h1>
          <p className="text-lg opacity-90">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid lg:grid-cols-2 gap-10 max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">
              Thông tin liên hệ
            </h2>

            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Hotline",
                  value: "08.666.008.22",
                  href: "tel:0866600822",
                },
                {
                  icon: MessageCircle,
                  label: "Zalo",
                  value: "08.666.008.22",
                  href: "https://zalo.me/0866600822",
                },
                {
                  icon: MapPin,
                  label: "Địa chỉ",
                  value: "Cửa Việt, Quảng Trị",
                },
                {
                  icon: Clock,
                  label: "Giờ làm việc",
                  value: "24/7 – Luôn sẵn sàng",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-card rounded-lg p-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.3079583877475!2d107.17984017603955!3d16.910094716377735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e787406f1889%3A0xe593c238d3e4bc80!2zWGUgRHUgTOG7i2NoIFTDom4gT2FuaA!5e0!3m2!1svi!2s!4v1775137403865!5m2!1svi!2s"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Xe Du Lịch Tân Oanh"
              />
            </div>

            <div className="bg-card rounded-lg p-4 border border-border space-y-3">
              <p className="text-sm text-muted-foreground leading-6">
                <span className="font-semibold text-foreground">
                  Xe Du Lịch Tân Oanh
                </span>{" "}
                chuyên cung cấp xe ghép Quảng Trị, xe dịch vụ Quảng Trị đi Huế,
                Đà Nẵng, Quảng Bình và các tuyến miền Trung. Hỗ trợ đưa đón tận
                nơi, linh hoạt thời gian, phục vụ 24/7.
              </p>

              <a
                href="https://www.google.com/maps/place/Xe+Du+L%E1%BB%8Bch+T%C3%A2n+Oanh/@16.9100947,107.1798402,17z"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                <MapPin className="h-4 w-4" />
                Xem trên Google Maps
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Gửi yêu cầu
            </h2>

            {submitted ? (
              <div className="bg-card rounded-xl p-8 text-center border border-border">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold text-foreground text-lg">
                  Gửi thành công!
                </p>
                <p className="text-muted-foreground mt-1">
                  Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm space-y-4"
              >
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">
                    Họ tên
                  </label>
                  <Input placeholder="Nguyễn Văn A" className="h-12" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">
                    Số điện thoại *
                  </label>
                  <Input
                    type="tel"
                    placeholder="0905 xxx xxx"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">
                    Nội dung
                  </label>
                  <Textarea
                    placeholder="VD: Tôi muốn thuê xe 7 chỗ đi Đà Nẵng ngày 15/04..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 font-semibold cta-shadow"
                >
                  Gửi yêu cầu
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LienHe;
