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
        dropoff: form.dropoff
      })
    });

    setSubmitted(true);
  } catch (error) {
    alert("Gửi thất bại!");
  }
};

  if (submitted) {
    return (
      <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border">
        <div className="text-4xl mb-3">✅</div>
        <p className="font-semibold text-foreground text-lg">Cảm ơn bạn!</p>
        <p className="text-muted-foreground mt-1">Chúng tôi sẽ liên hệ ngay trong ít phút.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-lg border border-border flex flex-col gap-4">
      <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
        <Phone className="h-5 w-5 text-primary" /> Đặt xe nhanh
      </h3>
      <Input
        type="tel"
        placeholder="Số điện thoại *"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
        className="h-12"
      />
      <Input
        placeholder="Điểm đón"
        value={form.pickup}
        onChange={(e) => setForm({ ...form, pickup: e.target.value })}
        className="h-12"
      />
      <Input
        placeholder="Điểm trả"
        value={form.dropoff}
        onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
        className="h-12"
      />
      <Button type="submit" size="lg" className="w-full h-12 font-semibold cta-shadow">
        Gọi lại cho tôi
      </Button>
    </form>
  );
};

export default BookingForm;
