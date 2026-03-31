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
          <p className="text-lg opacity-90">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container grid lg:grid-cols-2 gap-10 max-w-5xl">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Thông tin liên hệ</h2>
            
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Hotline", value: "0905.123.456", href: "tel:0905123456" },
                { icon: MessageCircle, label: "Zalo", value: "0905.123.456", href: "https://zalo.me/0905123456" },
                { icon: MapPin, label: "Địa chỉ", value: "Đông Hà, Quảng Trị" },
                { icon: Clock, label: "Giờ làm việc", value: "24/7 – Luôn sẵn sàng" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-card rounded-lg p-4 border border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-foreground hover:text-primary" target={item.href.startsWith("http") ? "_blank" : undefined}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30574.9!2d107.08!3d16.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13c5e5f5f5f%3A0x5f5f5f5f5f5f5f5f!2zxJDDtG5nIEjDoCwgUXXhuqNuZyBUcuG7iw!5e0!3m2!1svi!2s!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Đông Hà, Quảng Trị"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Gửi yêu cầu</h2>
            {submitted ? (
              <div className="bg-card rounded-xl p-8 text-center border border-border">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold text-foreground text-lg">Gửi thành công!</p>
                <p className="text-muted-foreground mt-1">Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-card rounded-xl p-6 border border-border shadow-sm space-y-4"
              >
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Họ tên</label>
                  <Input placeholder="Nguyễn Văn A" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Số điện thoại *</label>
                  <Input type="tel" placeholder="0905 xxx xxx" required className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Nội dung</label>
                  <Textarea placeholder="VD: Tôi muốn thuê xe 7 chỗ đi Đà Nẵng ngày 15/04..." rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full h-12 font-semibold cta-shadow">
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
