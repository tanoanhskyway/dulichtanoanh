import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Camera, Mountain, Landmark, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import destQT from "@/assets/dest-quangtri.jpg";
import destQB from "@/assets/dest-quangbinh.jpg";
import destHue from "@/assets/dest-hue.jpg";
import destDN from "@/assets/dest-danang.jpg";

const articles = [
{
id:"quang-tri",
img:destQT,
icon:Landmark,
province:"Quảng Trị",
title:"Tour du lịch Quảng Trị – Khám phá vùng đất lịch sử và biển đẹp",
intro:"Quảng Trị không chỉ nổi tiếng với những di tích lịch sử hào hùng mà còn sở hữu những bãi biển hoang sơ tuyệt đẹp.",
highlights:[

{ name:"Thành cổ Quảng Trị", slug:"thanh-co-quang-tri", desc:"Di tích lịch sử quốc gia đặc biệt gắn liền với trận chiến 81 ngày đêm năm 1972." },

{ name:"Địa đạo Vịnh Mốc", slug:"dia-dao-vinh-moc", desc:"Hệ thống địa đạo nổi tiếng nằm sâu trong lòng đất tại huyện Vĩnh Linh." },

{ name:"Cầu Hiền Lương – Sông Bến Hải", slug:"cau-hien-luong-ben-hai", desc:"Biểu tượng lịch sử chia cắt hai miền Nam – Bắc trong thời kỳ chiến tranh." },

{ name:"Bãi biển Cửa Việt", slug:"bien-cua-viet", desc:"Bãi biển đẹp nổi tiếng với cát trắng mịn và hải sản tươi ngon." },

{ name:"Thánh địa La Vang", slug:"thanh-dia-la-vang", desc:"Trung tâm hành hương Công giáo lớn nhất Việt Nam." },

{ name:"Đảo Cồn Cỏ", slug:"dao-con-co", desc:"Hòn đảo du lịch nổi tiếng của Quảng Trị với hệ sinh thái biển nguyên sơ." },

{ name:"Bãi biển Cửa Tùng", slug:"bien-cua-tung", desc:"Bãi biển được mệnh danh là nữ hoàng của các bãi biển miền Trung." },

{ name:"Rừng nguyên sinh Rú Lịnh", slug:"rung-ru-linh", desc:"Khu rừng nguyên sinh với hệ sinh thái đa dạng hiếm có tại Quảng Trị." }

],
tips:"Thời điểm lý tưởng để du lịch Quảng Trị là từ tháng 3 đến tháng 8."
},

{
id:"quang-binh",
img:destQB,
icon:Mountain,
province:"Quảng Bình",
title:"Tour du lịch Quảng Bình – Thiên đường hang động kỳ vĩ",
intro:"Quảng Bình được mệnh danh là vương quốc hang động với nhiều kỳ quan thiên nhiên nổi tiếng thế giới.",
highlights:[

{ name:"Phong Nha – Kẻ Bàng", slug:"phong-nha-ke-bang", desc:"Di sản thiên nhiên thế giới với hệ thống hang động khổng lồ." },

{ name:"Hang Sơn Đoòng", slug:"hang-son-doong", desc:"Hang động lớn nhất thế giới với hệ sinh thái độc đáo." },

{ name:"Động Thiên Đường", slug:"dong-thien-duong", desc:"Hang động dài hơn 31km với thạch nhũ tuyệt đẹp." },

{ name:"Suối Moọc", slug:"suoi-mooc", desc:"Dòng suối xanh ngọc nằm giữa rừng nguyên sinh." },

{ name:"Bãi biển Nhật Lệ", slug:"bien-nhat-le", desc:"Bãi biển đẹp nổi tiếng của thành phố Đồng Hới." },

{ name:"Cồn cát Quang Phú", slug:"con-cat-quang-phu", desc:"Địa điểm trượt cát và check-in nổi tiếng." },

{ name:"Hang Én", slug:"hang-en", desc:"Hang động lớn thứ ba thế giới với cảnh quan kỳ vĩ." },

{ name:"Biển Bảo Ninh", slug:"bien-bao-ninh", desc:"Bãi biển hoang sơ với khung cảnh yên bình." }

],
tips:"Mùa đẹp nhất du lịch Quảng Bình là từ tháng 3 đến tháng 8."
},

{
id:"hue",
img:destHue,
icon:Landmark,
province:"Huế",
title:"Tour du lịch Huế – Cố đô thơ mộng với di sản UNESCO",
intro:"Huế nổi tiếng với quần thể di tích triều Nguyễn và nền ẩm thực cung đình đặc sắc.",
highlights:[

{ name:"Đại Nội Huế", slug:"dai-noi-hue", desc:"Quần thể di tích cố đô Huế được UNESCO công nhận." },

{ name:"Lăng Tự Đức", slug:"lang-tu-duc", desc:"Lăng vua nổi tiếng với cảnh quan thơ mộng." },

{ name:"Chùa Thiên Mụ", slug:"chua-thien-mu", desc:"Ngôi chùa cổ nằm bên bờ sông Hương." },

{ name:"Sông Hương", slug:"song-huong-hue", desc:"Biểu tượng thơ mộng của thành phố Huế." },

{ name:"Chợ Đông Ba", slug:"cho-dong-ba", desc:"Khu chợ truyền thống nổi tiếng với ẩm thực Huế." },

{ name:"Lăng Khải Định", slug:"lang-khai-dinh", desc:"Lăng vua với kiến trúc pha trộn Đông Tây." },

{ name:"Biển Lăng Cô", slug:"bien-lang-co", desc:"Một trong những vịnh biển đẹp nhất thế giới." },

{ name:"Đồi Vọng Cảnh", slug:"doi-vong-canh", desc:"Điểm ngắm hoàng hôn đẹp tại Huế." }

],
tips:"Thời điểm đẹp nhất du lịch Huế từ tháng 2 đến tháng 4."
},

{
id:"da-nang",
img:destDN,
icon:Sun,
province:"Đà Nẵng",
title:"Tour du lịch Đà Nẵng – Thành phố đáng sống nhất Việt Nam",
intro:"Đà Nẵng là trung tâm du lịch miền Trung với biển đẹp và nhiều khu vui chơi nổi tiếng.",
highlights:[

{ name:"Bà Nà Hills – Cầu Vàng", slug:"ba-na-hills", desc:"Khu du lịch nổi tiếng với cây cầu vàng biểu tượng." },

{ name:"Bãi biển Mỹ Khê", slug:"bien-my-khe", desc:"Một trong những bãi biển đẹp nhất hành tinh." },

{ name:"Cầu Rồng", slug:"cau-rong-da-nang", desc:"Cây cầu biểu tượng của Đà Nẵng có thể phun lửa." },

{ name:"Ngũ Hành Sơn", slug:"ngu-hanh-son", desc:"Quần thể núi đá vôi với nhiều hang động và chùa cổ." },

{ name:"Phố cổ Hội An", slug:"pho-co-hoi-an", desc:"Di sản văn hóa thế giới cách Đà Nẵng 30km." },

{ name:"Bán đảo Sơn Trà", slug:"ban-dao-son-tra", desc:"Khu bảo tồn thiên nhiên nổi tiếng với chùa Linh Ứng." },

{ name:"Cầu Tình Yêu", slug:"cau-tinh-yeu-da-nang", desc:"Địa điểm check-in nổi tiếng bên sông Hàn." },

{ name:"Asia Park", slug:"asia-park-da-nang", desc:"Công viên giải trí với vòng quay Sun Wheel." }

],
tips:"Mùa đẹp nhất du lịch Đà Nẵng từ tháng 3 đến tháng 8."
}

];

const TourDuLich = () => (
<>
<section className="py-12">
<div className="container max-w-4xl space-y-16">

{articles.map((article)=>(
<article key={article.id} id={article.id}>
  <img
  src={article.img}
  alt={article.title}
  className="w-full h-[300px] object-cover rounded-xl mb-6"
/>

<h2 className="text-2xl font-bold mb-3">{article.title}</h2>

<p className="text-muted-foreground mb-6">{article.intro}</p>

<h3 className="text-lg font-bold mb-4 flex items-center gap-2">
<Camera className="h-5 w-5 text-primary"/> Điểm đến nổi bật
</h3>

<div className="space-y-4">

{article.highlights.map((h)=>(
<div key={h.slug} className="bg-card rounded-xl border p-5">

<h4 className="font-bold text-lg mb-1">

<Link
to={`/dia-diem/${h.slug}`}
className="hover:text-primary"
>

{h.name}

</Link>

</h4>

<p className="text-sm text-muted-foreground">
{h.desc}
</p>

</div>
))}

</div>

</article>
))}

</div>
</section>
</>
)

export default TourDuLich
