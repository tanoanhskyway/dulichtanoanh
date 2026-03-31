import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BookingPopup = () => {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ phone: "", pickup: "", dropoff: "" });

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup_dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("popup_dismissed", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.phone.trim()) return;
    setSubmitted(true);
    setTimeout(handleClose, 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4">
      <div className="relative bg-card rounded-xl shadow-2xl w-full max-w-md animate-slide-in overflow-hidden">
        <div className="bg-primary p-5 text-primary-foreground">
          <button onClick={handleClose} className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground" aria-label="Đóng">
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Phone className="h-5 w-5" /> Đặt xe nhanh
          </h2>
          <p className="text-sm opacity-90 mt-1">Để lại thông tin, chúng tôi gọi lại ngay!</p>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <p className="font-semibold text-foreground">Cảm ơn bạn! Chúng tôi sẽ liên hệ ngay.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Số điện thoại *</label>
              <Input
                type="tel"
                placeholder="0905 xxx xxx"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="h-12 text-base"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Điểm đón</label>
              <Input
                placeholder="VD: Đông Hà, Quảng Trị"
                value={form.pickup}
                onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                className="h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Điểm trả</label>
              <Input
                placeholder="VD: Đà Nẵng"
                value={form.dropoff}
                onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
                className="h-12"
              />
            </div>
            <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold cta-shadow">
              Gọi lại cho tôi
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingPopup;
