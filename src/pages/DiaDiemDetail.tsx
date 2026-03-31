import { useParams } from "react-router-dom";

const places:any = {

"thanh-co-quang-tri":{
title:"Thành cổ Quảng Trị",
content:"Thành cổ Quảng Trị là di tích lịch sử đặc biệt gắn liền với trận chiến 81 ngày đêm năm 1972."
},

"dia-dao-vinh-moc":{
title:"Địa đạo Vịnh Mốc",
content:"Địa đạo nổi tiếng nằm ở huyện Vĩnh Linh với hệ thống đường hầm sâu dưới lòng đất."
},

"cau-hien-luong-ben-hai":{
title:"Cầu Hiền Lương – Sông Bến Hải",
content:"Biểu tượng lịch sử chia cắt hai miền Nam – Bắc trong thời kỳ chiến tranh."
},

"bien-cua-viet":{
title:"Biển Cửa Việt",
content:"Bãi biển nổi tiếng của Quảng Trị với cát trắng và hải sản tươi ngon."
},

"dao-con-co":{
title:"Đảo Cồn Cỏ",
content:"Hòn đảo du lịch nổi tiếng của Quảng Trị với hệ sinh thái biển nguyên sơ."
},

"phong-nha-ke-bang":{
title:"Phong Nha – Kẻ Bàng",
content:"Di sản thiên nhiên thế giới nổi tiếng với hệ thống hang động kỳ vĩ."
},

"hang-son-doong":{
title:"Hang Sơn Đoòng",
content:"Hang động lớn nhất thế giới nằm tại Quảng Bình."
},

"dai-noi-hue":{
title:"Đại Nội Huế",
content:"Quần thể di tích cố đô Huế được UNESCO công nhận."
},

"ba-na-hills":{
title:"Bà Nà Hills",
content:"Khu du lịch nổi tiếng của Đà Nẵng với Cầu Vàng."
}

};

export default function DiaDiemDetail(){

const { slug } = useParams();

const place = places[slug as string];

if(!place){
return <div className="container py-10">Không tìm thấy địa điểm</div>;
}

return(

<div className="container max-w-3xl py-10">

<h1 className="text-3xl font-bold mb-4">
{place.title}
</h1>

<p className="text-muted-foreground leading-relaxed">
{place.content}
</p>

</div>

);

}
