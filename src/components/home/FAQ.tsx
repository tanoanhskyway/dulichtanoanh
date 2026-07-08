import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Tân Oanh có nhận xe hợp đồng theo tháng không?",
    a: "Có. Chúng tôi nhận xe theo tháng, theo quý hoặc theo năm cho doanh nghiệp, nhà máy, văn phòng và chuyên gia.",
  },
  {
    q: "Có phục vụ đưa đón chuyên gia nước ngoài không?",
    a: "Có. Tân Oanh có thể bố trí xe riêng, tài xế lịch sự, đón tiễn sân bay và phục vụ lịch trình làm việc tại Quảng Trị.",
  },
  {
    q: "Có xuất hóa đơn, hợp đồng và báo giá không?",
    a: "Có thể hỗ trợ hợp đồng, báo giá rõ ràng và chứng từ theo nhu cầu của doanh nghiệp.",
  },
  {
    q: "Có phục vụ sân bay Huế, Đà Nẵng không?",
    a: "Có. Chúng tôi phục vụ tuyến Quảng Trị – sân bay Huế, Quảng Trị – sân bay Đà Nẵng và sẵn sàng cho sân bay Quảng Trị khi khai thác.",
  },
];

const FAQ = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Câu hỏi thường gặp</h2>
      </div>
      <div className="max-w-4xl mx-auto grid gap-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex gap-3">
              <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-extrabold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
