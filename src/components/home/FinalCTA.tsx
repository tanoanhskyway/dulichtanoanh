import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const phoneNumber = "0866600822";
const displayPhone = "08.666.008.22";

const FinalCTA = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="container text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Bạn đang tìm đối tác vận chuyển cho doanh nghiệp?</h2>
      <p className="max-w-2xl mx-auto opacity-90 mb-7 text-lg">
        Gửi yêu cầu để Tân Oanh tư vấn phương án xe đưa đón chuyên gia, xe doanh nghiệp hoặc hợp đồng dài hạn phù hợp với lịch trình của bạn.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="#bao-gia">
          <Button size="lg" className="bg-amber-400 text-slate-950 hover:bg-amber-300 font-extrabold h-12 px-8">
            Nhận báo giá
          </Button>
        </a>
        <a href={`tel:${phoneNumber}`}>
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 font-extrabold">
            Gọi {displayPhone}
          </Button>
        </a>
        <Link to="/lien-he">
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 font-extrabold">
            Trang liên hệ
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTA;
