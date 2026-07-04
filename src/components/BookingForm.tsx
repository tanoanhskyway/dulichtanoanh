import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ phone: "", pickup: "", dropoff: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim()) return;

    try {
      await fetch("https://script.google.com/macros/s/AKfycbykzvzW1ZHu1LfOjAa_CuyiAqxVIc7VBdi8oAydCS9t-D74UQISt4de2oD1Ha2KV3MQ/exec", {
        method: "POST",
        body: JSON.stringify({
          phone: form.phone,
          pickup: form.pickup,
          dropoff: form.dropoff,
          source: "Tân Oanh Transport - Website",
        }),
      });

      setSubmitted(true);
    } catch (error) {
      alert("Gửi thất bại! Vui lòng gọi hotline 08.666.008.22");
    }
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-semibold text-foreground text-lg">Đã nhận yêu cầu!</p>
        <p className="text-muted-foreground mt-1">Tân Oanh sẽ liên hệ lại trong thời gian sớm nhất.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-lg border border-border flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Phone className="h-5 w-5 text-primary" /> Nhận báo giá nhanh
        </h3>
        <p className="text-sm text-muted-foreground mt-1">Xe chuyên gia, xe doanh nghiệp, hợp đồng dài hạn.</p>
      </div>
      <Input
        type="tel"
        placeholder="Số điện thoại *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
        className="h-12"
      />
      <Input
        placeholder="Điểm đón / doanh nghiệp"
        value={form.pickup}
        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
        className="h-12"
      />
      <Input
        placeholder="Điểm đến / nhu cầu xe"
        value={form.dropoff}
        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
        className="h-12"
      />
      <Button type="submit" size="lg" className="w-full h-12 font-semibold cta-shadow">
        Gọi lại tư vấn
      </Button>
    </form>
  );
};

export default BookingForm;
