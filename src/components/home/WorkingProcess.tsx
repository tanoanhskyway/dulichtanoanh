const process = [
  "Tiếp nhận yêu cầu",
  "Tư vấn lịch trình",
  "Gửi báo giá",
  "Ký hợp đồng",
  "Điều xe phục vụ",
  "Chăm sóc & tối ưu",
];

const WorkingProcess = () => (
  <section id="quy-trinh" className="py-16 bg-background scroll-mt-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Quy trình hợp tác</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Rõ ràng từ yêu cầu đến vận hành</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {process.map((step, index) => (
          <div key={step} className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-extrabold">
              {index + 1}
            </div>
            <p className="font-bold text-foreground text-sm">{step}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkingProcess;
