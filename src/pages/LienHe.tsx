import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  Building2,
  Car,
  Plane,
  FileText,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "Hotline tư vấn",
    value: "08.666.008.22",
    href: "tel:0866600822",
  },
  {
    icon: MessageCircle,
    label: "Zalo đặt xe",
    value: "08.666.008.22",
    href: "https://zalo.me/0866600822",
  },
  {
    icon: MapPin,
    label: "Khu vực phục vụ",
    value: "Quảng Trị, Huế, Đà Nẵng và miền Trung",
  },
  {
    icon: Clock,
    label: "Thời gian hỗ trợ",
    value: "24/7 – nhận lịch gấp và hợp đồng dài hạn",
  },
];

const serviceNeeds = [
  {
    icon: Building2,
    title: "Xe doanh nghiệp",
    desc: "Đưa đón lãnh đạo, nhân sự, đối tác và khách công tác.",
  },
  {
    icon: ShieldCheck,
    title: "Xe đưa đón chuyên gia",
    desc: "Phục vụ chuyên gia nước ngoài, kỹ sư, nhà đầu tư làm việc tại Quảng Trị.",
  },
  {
    icon: FileText,
    title: "Hợp đồng dài hạn",
    desc: "Thuê xe theo tháng, theo quý hoặc theo năm, có lịch trình ổn định.",
  },
  {
    icon: Plane,
    title: "Đưa đón sân bay",
    desc: "Đón tiễn sân bay Huế, Đà Nẵng và sân bay Quảng Trị khi khai thác.",
  },
];

const commitments = [
  "Tư vấn nhanh theo nhu cầu thực tế của doanh nghiệp",
  "Báo giá rõ ràng theo chuyến, theo ngày hoặc hợp đồng tháng",
  "Tài xế lịch sự, đúng giờ, ưu tiên an toàn và bảo mật lịch trình",
  "Có thể phục vụ xe 4 chỗ, 7 chỗ, 16 chỗ và xe VIP theo yêu cầu",
];

const LienHe = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%)]" />
        <div className="container relative text-primary-foreground">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <Headphones className="h-4 w-4" />
              Tư vấn xe doanh nghiệp 24/7
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Liên hệ Tân Oanh Transport
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 opacity-90 sm:text-lg">
              Nhận báo giá xe đưa đón chuyên gia, xe doanh nghiệp, xe hợp đồng
              dài hạn, xe hội nghị và đưa đón sân bay tại Quảng Trị. Phù hợp
              cho doanh nghiệp, nhà máy, nhà thầu, khách sạn và khách công tác.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="tel:0866600822">
                <Button size="lg" className="h-12 bg-accent px-7 font-semibold text-accent-foreground hover:bg-accent/90 cta-shadow">
                  Gọi 08.666.008.22
                </Button>
              </a>
              <a href="https://zalo.me/0866600822" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="h-12 border-primary-foreground/40 px-7 text-primary-foreground hover:bg-primary-foreground/10">
                  Nhắn Zalo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                Thông tin liên hệ
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Kết nối nhanh với Tân Oanh
              </h2>
              <p className="mt-3 text-muted-foreground leading-7">
                Bạn có thể gọi trực tiếp hoặc gửi thông tin nhu cầu. Tân Oanh sẽ
                tư vấn phương án xe phù hợp và báo giá rõ ràng theo lịch trình.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactInfo.map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="mt-1 block font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-foreground">
                Dịch vụ thường được doanh nghiệp yêu cầu
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {serviceNeeds.map((service) => (
                  <div key={service.title} className="rounded-xl bg-secondary/60 p-4">
                    <service.icon className="mb-3 h-6 w-6 text-primary" />
                    <p className="font-semibold text-foreground">{service.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-lg sm:p-7">
            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                Gửi yêu cầu báo giá
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                Nhận tư vấn trong thời gian sớm nhất
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Form này giúp ghi nhận thông tin ban đầu. Với lịch gấp, vui lòng
                gọi hotline hoặc nhắn Zalo để được phản hồi nhanh hơn.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl border border-border bg-secondary/60 p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-bold text-foreground">Đã ghi nhận yêu cầu</p>
                <p className="mt-2 text-muted-foreground">
                  Cảm ơn bạn. Để xử lý nhanh hơn, bạn có thể gọi trực tiếp
                  hotline 08.666.008.22.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a href="tel:0866600822">
                    <Button>Gọi ngay</Button>
                  </a>
                  <a href="https://zalo.me/0866600822" target="_blank" rel="noreferrer">
                    <Button variant="outline">Nhắn Zalo</Button>
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">
                      Họ tên
                    </label>
                    <Input placeholder="Nguyễn Văn A" className="h-12" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">
                      Số điện thoại *
                    </label>
                    <Input type="tel" placeholder="0905 xxx xxx" required className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Đơn vị / doanh nghiệp
                  </label>
                  <Input placeholder="Tên công ty, nhà máy, khách sạn..." className="h-12" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">
                      Nhu cầu dịch vụ
                    </label>
                    <Input placeholder="VD: xe chuyên gia, xe tháng..." className="h-12" />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">
                      Thời gian dự kiến
                    </label>
                    <Input placeholder="VD: 15/08, 3 tháng, hằng ngày..." className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    Nội dung yêu cầu
                  </label>
                  <Textarea
                    placeholder="VD: Cần xe 7 chỗ đưa đón 2 chuyên gia từ khách sạn ở Đông Hà đến KCN, đi trong 3 tháng, cần báo giá hợp đồng tháng..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="h-12 w-full font-semibold cta-shadow">
                  Gửi yêu cầu báo giá <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-xs leading-5 text-muted-foreground">
                  Bằng việc gửi yêu cầu, bạn đồng ý để Tân Oanh liên hệ lại nhằm
                  tư vấn dịch vụ phù hợp. Với nhu cầu gấp, vui lòng gọi hotline.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-14">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              Cam kết phục vụ
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Tập trung vào sự đúng giờ, an toàn và chuyên nghiệp
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Với khách doanh nghiệp, một chuyến xe không chỉ là di chuyển. Đó
              là lịch trình làm việc, hình ảnh đón tiếp đối tác và sự tin cậy của
              đơn vị vận hành.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {commitments.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.3079583877475!2d107.17984017603955!3d16.910094716377735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3140e787406f1889%3A0xe593c238d3e4bc80!2zWGUgRHUgTOG7i2NoIFTDom4gT2FuaA!5e0!3m2!1svi!2s!4v1775137403865!5m2!1svi!2s"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ Tân Oanh Transport"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LienHe;
