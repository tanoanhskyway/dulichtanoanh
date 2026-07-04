import { useEffect } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Car,
  CheckCircle2,
  Hotel,
  MapPinned,
  Phone,
  Plane,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const vehicleGroups = [
  {
    icon: Car,
    name: "Xe 4 chỗ",
    desc: "Phù hợp lãnh đạo, khách công tác cá nhân, di chuyển nội tỉnh và sân bay.",
  },
  {
    icon: BriefcaseBusiness,
    name: "Xe 7 chỗ",
    desc: "Phù hợp chuyên gia, đối tác doanh nghiệp, nhóm kỹ sư và gia đình VIP.",
  },
  {
    icon: Users,
    name: "Xe 16 chỗ",
    desc: "Phù hợp đoàn công tác, đoàn khảo sát, sự kiện, hội nghị và tour doanh nghiệp.",
  },
];

const useCases = [
  "Đón tiễn chuyên gia tại sân bay Huế, Đà Nẵng",
  "Xe phục vụ lãnh đạo, đối tác và khách công tác",
  "Xe khảo sát khu công nghiệp, nhà máy, công trình",
  "Xe đưa đoàn doanh nghiệp đi Thành Cổ, Vịnh Mốc, Cửa Tùng",
  "Xe tour riêng cho khách sạn, resort và đoàn khách VIP",
  "Xe công tác Quảng Trị - Huế - Đà Nẵng - Quảng Bình",
];

const corporateTrips = [
  {
    icon: Plane,
    title: "Đưa đón sân bay",
    desc: "Huế, Đà Nẵng và sân bay Quảng Trị khi khai thác.",
  },
  {
    icon: Building2,
    title: "Khu công nghiệp",
    desc: "Đưa đón kỹ sư, chuyên gia, nhà thầu đến nhà máy và công trình.",
  },
  {
    icon: Hotel,
    title: "Khách sạn & đối tác",
    desc: "Xe riêng cho khách VIP, đoàn công tác và khách lưu trú dài ngày.",
  },
  {
    icon: MapPinned,
    title: "Tour doanh nghiệp",
    desc: "Kết hợp tham quan Quảng Trị, Huế, Quảng Bình sau lịch làm việc.",
  },
];

const XeDuLich = () => {
  useEffect(() => {
    document.title = "Xe doanh nghiệp & tour riêng Quảng Trị | Tân Oanh Transport";

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Dịch vụ xe doanh nghiệp, xe tour riêng, xe đưa đón chuyên gia và đoàn công tác tại Quảng Trị. Phục vụ Huế, Đà Nẵng, Quảng Bình, sân bay và khu công nghiệp."
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://dulichtanoanh.com/xe-du-lich");
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/80 py-20 text-primary-foreground">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-primary-foreground/20 px-4 py-2 text-sm font-semibold text-primary-foreground/80">
              Xe doanh nghiệp & tour riêng
            </p>
            <h1 className="mb-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Xe riêng phục vụ công tác, chuyên gia và tour doanh nghiệp tại Quảng Trị
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/82">
              Tân Oanh cung cấp xe 4 chỗ, 7 chỗ, 16 chỗ cho doanh nghiệp, chuyên gia,
              đoàn khảo sát, khách sạn và các chương trình tour riêng tại Quảng Trị,
              Huế, Đà Nẵng, Quảng Bình.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:0866600822">
                <Button size="lg" className="cta-shadow gap-2 font-semibold">
                  <Phone className="h-4 w-4" /> Gọi 08.666.008.22
                </Button>
              </a>
              <a href="/#bao-gia">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  Nhận báo giá <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/8 p-6 backdrop-blur">
            <h2 className="mb-4 text-xl font-bold">Phù hợp cho</h2>
            <div className="grid gap-3">
              {corporateTrips.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl bg-primary-foreground/8 p-4">
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-primary-foreground/75">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-10">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Đội xe linh hoạt</p>
              <h2 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl">
                Lựa chọn xe theo mục đích công tác và trải nghiệm khách hàng
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Doanh nghiệp không chỉ cần một chiếc xe, mà cần một phương án di chuyển
                đúng giờ, sạch sẽ, lịch sự và phù hợp với hình ảnh khi đón chuyên gia,
                lãnh đạo hoặc đối tác. Tân Oanh tư vấn loại xe theo số lượng khách,
                hành lý, lịch trình và tiêu chuẩn phục vụ.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {vehicleGroups.map((item) => (
                <div key={item.name} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold text-foreground">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-secondary p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-extrabold text-foreground">
                Các nhu cầu thường gặp
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-card p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-extrabold text-foreground">
                Tour doanh nghiệp: vừa công tác, vừa trải nghiệm Quảng Trị
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Với các đoàn chuyên gia hoặc đối tác ở lại Quảng Trị nhiều ngày, Tân Oanh
                có thể kết hợp xe công tác với lịch trình tham quan Thành Cổ Quảng Trị,
                Địa đạo Vịnh Mốc, Cửa Tùng, Cửa Việt, Huế hoặc Phong Nha. Đây là cách giúp
                doanh nghiệp tiếp khách chu đáo hơn mà vẫn kiểm soát lịch trình.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/tour-du-lich">
                  <Button variant="outline" className="font-semibold">
                    Xem tour du lịch
                  </Button>
                </a>
                <a href="/dia-diem">
                  <Button variant="outline" className="font-semibold">
                    Xem địa điểm nổi bật
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
              <h2 className="mb-3 text-2xl font-extrabold">Cần xe riêng cho lịch công tác?</h2>
              <p className="mb-5 text-primary-foreground/82">
                Gửi lịch trình, số lượng khách và loại xe mong muốn. Tân Oanh sẽ tư vấn phương án phù hợp và báo giá nhanh.
              </p>
              <a href="tel:0866600822">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Gọi tư vấn ngay
                </Button>
              </a>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <BookingForm />
          </aside>
        </div>
      </section>
    </>
  );
};

export default XeDuLich;
