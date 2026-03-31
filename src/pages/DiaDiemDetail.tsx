import { useParams } from "react-router-dom";

type Place = {
  title: string;
  content: string;
  images?: string[];
};

const data: Record<string, Place> = {
  /* QUẢNG TRỊ */

  "thanh-co-quang-tri": {
    title: "Thành cổ Quảng Trị",
    images: [
      "https://cms.junglebosstours.com/assets/9dba0c19-b575-4fc7-b973-439dc1a6114f?format=webp",
      "https://your-image-link-2.com",
      "https://your-image-link-3.com",
    ],
    content: `Thành cổ Quảng Trị là di tích lịch sử đặc biệt gắn liền với trận chiến 81 ngày đêm năm 1972, một dấu mốc bi tráng trong lịch sử dân tộc Việt Nam. Đây không chỉ là điểm đến mang giá trị lịch sử sâu sắc mà còn là nơi để du khách, cựu chiến binh và thế hệ trẻ tìm hiểu, tưởng niệm và tri ân những hy sinh to lớn của cha ông.

Khi đến tham quan Thành cổ Quảng Trị, du khách sẽ cảm nhận được không gian trang nghiêm, yên bình nhưng đầy xúc động. Khuôn viên rộng rãi, nhiều cây xanh cùng các công trình tưởng niệm tạo nên một điểm dừng chân ý nghĩa cho những ai muốn tìm hiểu thêm về lịch sử Việt Nam. Đây cũng là một trong những địa điểm nổi bật trong hành trình khám phá Quảng Trị, đặc biệt phù hợp với du khách yêu thích du lịch văn hóa và du lịch lịch sử.

Thời điểm thích hợp để tham quan Thành cổ Quảng Trị thường là từ tháng 3 đến tháng 8, khi thời tiết khô ráo và thuận lợi cho việc di chuyển. Du khách nên lựa chọn trang phục lịch sự, đồng thời giữ thái độ trang nghiêm khi tham quan khu vực tưởng niệm để thể hiện sự tôn trọng đối với giá trị lịch sử của di tích.

Ngoài ý nghĩa lịch sử, Thành cổ Quảng Trị còn có vị trí thuận tiện để kết hợp tham quan các địa điểm nổi tiếng khác như Cầu Hiền Lương, Địa đạo Vịnh Mốc hay Biển Cửa Việt. Vì vậy, nơi đây thường được nhiều du khách lựa chọn trong các hành trình khám phá miền Trung.

--- 

Nếu bạn đang có kế hoạch đến Thành cổ Quảng Trị, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi trở nên thuận tiện và tiết kiệm hơn. Hiện nay, TanOanh Sky Way đang được nhiều du khách lựa chọn nhờ sự linh hoạt, đưa đón tận nơi và phù hợp với nhiều nhóm khách khác nhau.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tối ưu giúp tiết kiệm chi phí mà vẫn đảm bảo và tiện lợi trong suốt hành trình. Đây là hình thức di chuyển ngày càng phổ biến và phù hợp với nhu cầu du lịch hiện đại.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Quảng Trị và khu vực miền Trung, bạn có thể tham khảo các tour du lịch Tân Oanh. Dịch vụ này sẽ giúp bạn tối ưu thời gian, chi phí và có trải nghiệm trọn vẹn hơn trong chuyến đi.

👉 Liên hệ ngay để đặt xe dịch vụ Quảng Trị nhanh chóng, an toàn  
👉 Đặt xe ghép Quảng Trị giá rẻ – khởi hành linh hoạt mỗi ngày  
👉 Đồng hành cùng du lịch Tân Oanh để khám phá trọn vẹn miền Trung

Thành cổ Quảng Trị không chỉ là một điểm đến du lịch, mà còn là nơi lưu giữ ký ức lịch sử thiêng liêng của dân tộc. Đây chắc chắn là điểm dừng chân ý nghĩa mà bạn không nên bỏ lỡ trong hành trình khám phá Việt Nam.`
  },

  "dia-dao-vinh-moc": {
    title: "Địa đạo Vịnh Mốc",
    content: `Địa đạo Vịnh Mốc là hệ thống đường hầm nằm sâu trong lòng đất tại huyện Vĩnh Linh.
Địa đạo được xây dựng trong thời chiến tranh để người dân sinh sống và tránh bom đạn.`,
  },

  "cau-hien-luong-ben-hai": {
    title: "Cầu Hiền Lương – Sông Bến Hải",
    content: `Cầu Hiền Lương là biểu tượng lịch sử của sự chia cắt hai miền Nam Bắc trong thời kỳ chiến tranh Việt Nam.`,
  },

  "bien-cua-viet": {
    title: "Biển Cửa Việt",
    content: `Biển Cửa Việt nổi tiếng với bãi cát trắng mịn, nước biển trong xanh và hải sản tươi ngon.`,
  },

  "thanh-dia-la-vang": {
    title: "Thánh địa La Vang",
    content: `La Vang là trung tâm hành hương Công giáo lớn nhất Việt Nam.`,
  },

  "dao-con-co": {
    title: "Đảo Cồn Cỏ",
    content: `Đảo Cồn Cỏ là hòn đảo nhỏ ngoài khơi Quảng Trị với hệ sinh thái biển phong phú và cảnh quan hoang sơ.`,
  },

  "bien-cua-tung": {
    title: "Biển Cửa Tùng",
    content: `Cửa Tùng từng được mệnh danh là nữ hoàng của các bãi biển miền Trung.`,
  },

  "rung-ru-linh": {
    title: "Rừng nguyên sinh Rú Lịnh",
    content: `Rú Lịnh là khu rừng nguyên sinh hiếm hoi còn lại tại Quảng Trị với hệ sinh thái đa dạng.`,
  },

  /* QUẢNG BÌNH */

  "phong-nha-ke-bang": {
    title: "Phong Nha – Kẻ Bàng",
    content: `Phong Nha Kẻ Bàng là di sản thiên nhiên thế giới nổi tiếng với hệ thống hang động lớn nhất châu Á.`,
  },

  "hang-son-doong": {
    title: "Hang Sơn Đoòng",
    content: `Hang Sơn Đoòng là hang động lớn nhất thế giới được phát hiện tại Quảng Bình.`,
  },

  "dong-thien-duong": {
    title: "Động Thiên Đường",
    content: `Động Thiên Đường dài hơn 31km với hệ thống thạch nhũ tuyệt đẹp.`,
  },

  "suoi-mooc": {
    title: "Suối Moọc",
    content: `Suối Moọc là điểm du lịch sinh thái nổi tiếng với làn nước xanh ngọc.`,
  },

  "bien-nhat-le": {
    title: "Biển Nhật Lệ",
    content: `Biển Nhật Lệ nằm tại thành phố Đồng Hới với bãi cát trắng mịn và nước biển trong xanh.`,
  },

  "con-cat-quang-phu": {
    title: "Cồn cát Quang Phú",
    content: `Cồn cát Quang Phú là địa điểm trượt cát và check in nổi tiếng của Quảng Bình.`,
  },

  "hang-en": {
    title: "Hang Én",
    content: `Hang Én là hang động lớn thứ ba thế giới nằm trong vườn quốc gia Phong Nha Kẻ Bàng.`,
  },

  "bien-bao-ninh": {
    title: "Biển Bảo Ninh",
    content: `Bãi biển Bảo Ninh nổi tiếng với khung cảnh hoang sơ và yên bình.`,
  },

  /* HUẾ */

  "dai-noi-hue": {
    title: "Đại Nội Huế",
    content: `Đại Nội Huế là quần thể cung điện và thành quách của triều Nguyễn được UNESCO công nhận.`,
  },

  "lang-tu-duc": {
    title: "Lăng Tự Đức",
    content: `Lăng Tự Đức nổi tiếng với cảnh quan thơ mộng và kiến trúc hài hòa với thiên nhiên.`,
  },

  "chua-thien-mu": {
    title: "Chùa Thiên Mụ",
    content: `Chùa Thiên Mụ là ngôi chùa cổ nổi tiếng nằm bên bờ sông Hương.`,
  },

  "song-huong-hue": {
    title: "Sông Hương",
    content: `Sông Hương là biểu tượng thơ mộng của thành phố Huế.`,
  },

  "cho-dong-ba": {
    title: "Chợ Đông Ba",
    content: `Chợ Đông Ba là khu chợ nổi tiếng với ẩm thực đặc sản Huế.`,
  },

  "lang-khai-dinh": {
    title: "Lăng Khải Định",
    content: `Lăng Khải Định có kiến trúc độc đáo pha trộn giữa Á và Âu.`,
  },

  "bien-lang-co": {
    title: "Biển Lăng Cô",
    content: `Lăng Cô là một trong những vịnh biển đẹp nhất thế giới.`,
  },

  "doi-vong-canh": {
    title: "Đồi Vọng Cảnh",
    content: `Đồi Vọng Cảnh là điểm ngắm hoàng hôn nổi tiếng tại Huế.`,
  },

  /* ĐÀ NẴNG */

  "ba-na-hills": {
    title: "Bà Nà Hills",
    content: `Bà Nà Hills nổi tiếng với Cầu Vàng và khu du lịch trên đỉnh núi.`,
  },

  "bien-my-khe": {
    title: "Biển Mỹ Khê",
    content: `Mỹ Khê là một trong những bãi biển đẹp nhất hành tinh.`,
  },

  "cau-rong-da-nang": {
    title: "Cầu Rồng Đà Nẵng",
    content: `Cầu Rồng là biểu tượng của thành phố Đà Nẵng và có thể phun lửa vào cuối tuần.`,
  },

  "ngu-hanh-son": {
    title: "Ngũ Hành Sơn",
    content: `Ngũ Hành Sơn là quần thể núi đá vôi với nhiều chùa và hang động.`,
  },

  "pho-co-hoi-an": {
    title: "Phố cổ Hội An",
    content: `Phố cổ Hội An là di sản văn hóa thế giới nổi tiếng.`,
  },

  "ban-dao-son-tra": {
    title: "Bán đảo Sơn Trà",
    content: `Sơn Trà là khu bảo tồn thiên nhiên nổi tiếng của Đà Nẵng.`,
  },

  "cau-tinh-yeu-da-nang": {
    title: "Cầu Tình Yêu",
    content: `Cầu Tình Yêu là địa điểm check-in nổi tiếng bên sông Hàn.`,
  },

  "asia-park-da-nang": {
    title: "Asia Park",
    content: `Asia Park là công viên giải trí nổi tiếng với vòng quay Sun Wheel.`,
  },
};

const DiaDiemDetail = () => {
  const { slug } = useParams();
  const place = data[slug as string];

  if (!place) {
    return <div className="container py-20">Không tìm thấy địa điểm</div>;
  }

  return (
    <div className="container max-w-3xl py-16">
      <h1 className="text-3xl font-bold mb-6">{place.title}</h1>

      {place.images && place.images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {place.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${place.title} ${index + 1}`}
              className="w-full h-56 object-cover rounded-lg"
            />
          ))}
        </div>
      )}

      <p className="leading-8 text-lg text-muted-foreground whitespace-pre-line">
        {place.content}
      </p>
    </div>
  );
};

export default DiaDiemDetail;
