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
        images: [
      "https://your-image-link-2.com",
      "https://your-image-link-2.com",
      "https://your-image-link-3.com",
    ],
    content:`Địa đạo Vịnh Mốc là một trong những công trình lịch sử đặc biệt và độc đáo nhất tại Quảng Trị, nằm ở huyện Vĩnh Linh – vùng đất từng chịu nhiều bom đạn ác liệt trong chiến tranh. Đây không chỉ là một di tích lịch sử mà còn là minh chứng sống động cho ý chí kiên cường và tinh thần bất khuất của người dân miền Trung.

Hệ thống địa đạo được xây dựng hoàn toàn trong lòng đất với chiều dài hàng trăm mét, gồm nhiều tầng khác nhau, có đầy đủ các khu vực sinh hoạt như phòng ở, giếng nước, phòng y tế và cả nơi sinh hoạt cộng đồng. Điều đặc biệt là trong suốt thời gian chiến tranh, nhiều gia đình đã sinh sống ổn định dưới lòng đất tại đây, thậm chí có cả trẻ em được sinh ra trong địa đạo.

Khi tham quan Địa đạo Vịnh Mốc, du khách sẽ có cơ hội trực tiếp đi sâu vào lòng đất, trải nghiệm không gian sống thực tế của người dân thời chiến. Không khí bên trong mát mẻ quanh năm, các lối đi được thiết kế thông minh giúp tránh bom đạn và đảm bảo an toàn. Đây là trải nghiệm rất khác biệt so với các điểm du lịch thông thường.

Ngoài giá trị lịch sử, khu vực xung quanh Địa đạo Vịnh Mốc còn có cảnh quan thiên nhiên khá đẹp, gần biển và thuận tiện kết hợp tham quan các địa điểm nổi tiếng khác như Cầu Hiền Lương – Sông Bến Hải hay Thành cổ Quảng Trị. Vì vậy, nhiều du khách thường lựa chọn điểm đến này trong hành trình khám phá miền Trung.

Thời điểm lý tưởng để tham quan Địa đạo Vịnh Mốc là từ tháng 3 đến tháng 8, khi thời tiết khô ráo, thuận lợi cho việc di chuyển và tham quan. Du khách nên mang giày thể thao và trang phục gọn gàng để dễ dàng di chuyển trong các đường hầm.

---

Nếu bạn đang có kế hoạch khám phá Địa đạo Vịnh Mốc, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi trở nên thuận tiện và tiết kiệm hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị đang được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi, linh hoạt về thời gian và phù hợp với nhiều nhóm khách khác nhau.

Đối với những du khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tối ưu giúp tiết kiệm chi phí mà vẫn đảm bảo sự комфорт và tiện lợi. Đây là hình thức di chuyển ngày càng phổ biến và rất phù hợp với xu hướng du lịch hiện đại.

Ngoài ra, nếu bạn muốn có một hành trình trọn vẹn, kết hợp nhiều điểm tham quan nổi tiếng tại Quảng Trị và khu vực miền Trung, bạn có thể lựa chọn các tour du lịch Tân Oanh. Với lịch trình được thiết kế sẵn, bạn sẽ tiết kiệm được thời gian, chi phí và có trải nghiệm tốt hơn.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá trọn vẹn miền Trung

Địa đạo Vịnh Mốc không chỉ là một điểm tham quan, mà còn là nơi giúp mỗi người hiểu rõ hơn về lịch sử và trân trọng giá trị của hòa bình ngày hôm nay. Đây chắc chắn là điểm đến bạn không nên bỏ lỡ khi đến Quảng Trị.`
  },

  "cau-hien-luong-ben-hai": {
    title: "Cầu Hiền Lương – Sông Bến Hải",
    content:`Cầu Hiền Lương – Sông Bến Hải là biểu tượng lịch sử đặc biệt của Việt Nam, từng là ranh giới chia cắt hai miền Nam – Bắc trong suốt thời kỳ chiến tranh. Nơi đây mang đậm dấu ấn lịch sử và là điểm tham quan ý nghĩa đối với du khách.

Khi đến đây, du khách có thể tham quan cầu Hiền Lương, bảo tàng và khu vực di tích lịch sử, đồng thời tìm hiểu về giai đoạn lịch sử đầy biến động của đất nước.

---

Để di chuyển thuận tiện đến Cầu Hiền Lương, bạn có thể lựa chọn xe dịch vụ Quảng Trị với lịch trình linh hoạt. Nếu muốn tiết kiệm chi phí, xe ghép Quảng Trị là lựa chọn phù hợp.

Ngoài ra, các tour du lịch Tân Oanh cũng cung cấp hành trình kết hợp nhiều địa điểm lịch sử trong khu vực.

👉 Đặt xe dịch vụ Quảng Trị – tiện lợi, nhanh chóng  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – khám phá trọn vẹn miền Trung

Cầu Hiền Lương là điểm đến mang nhiều ý nghĩa lịch sử và cảm xúc.`
  },

  "bien-cua-viet": {
    title: "Biển Cửa Việt",
    content:`Biển Cửa Việt là một trong những bãi biển đẹp và nổi tiếng tại Quảng Trị, thu hút du khách bởi bãi cát trắng mịn, nước biển trong xanh và không khí trong lành. Đây là điểm đến lý tưởng cho các chuyến nghỉ dưỡng và du lịch biển.

Du khách có thể tắm biển, thưởng thức hải sản tươi ngon và tận hưởng không gian yên bình tại đây.

---

Để đến Biển Cửa Việt thuận tiện, bạn có thể lựa chọn xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị tùy theo nhu cầu và ngân sách.

Nếu muốn kết hợp tham quan nhiều địa điểm, du lịch Tân Oanh là lựa chọn phù hợp giúp bạn tối ưu hành trình.

👉 Xe dịch vụ Quảng Trị – di chuyển thoải mái  
👉 Xe ghép Quảng Trị – giá rẻ, tiện lợi  
👉 Du lịch Tân Oanh – tour trọn gói hấp dẫn

Biển Cửa Việt là điểm dừng chân lý tưởng cho chuyến du lịch miền Trung.`
  },

  "thanh-dia-la-vang": {
    title: "Thánh địa La Vang",
    content: `La Vang là trung tâm hành hương Công giáo lớn nhất Việt Nam.`,
  },

  "dao-con-co": {
    title: "Đảo Cồn Cỏ",
    content:`Đảo Cồn Cỏ là hòn đảo nhỏ nằm ngoài khơi Quảng Trị, nổi bật với hệ sinh thái biển phong phú và cảnh quan thiên nhiên hoang sơ. Đây là điểm đến lý tưởng cho những ai yêu thích khám phá và trải nghiệm thiên nhiên.

Du khách có thể tham gia các hoạt động như lặn biển, câu cá và khám phá hệ sinh thái biển độc đáo.

---

Để di chuyển ra đảo thuận tiện, bạn nên sử dụng xe dịch vụ Quảng Trị để đến cảng, hoặc lựa chọn xe ghép Quảng Trị nếu đi theo nhóm nhỏ.

Ngoài ra, du lịch Tân Oanh cung cấp các tour kết hợp tham quan đảo và các điểm du lịch khác.

👉 Xe dịch vụ Quảng Trị – linh hoạt lịch trình  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – trải nghiệm trọn gói

Đảo Cồn Cỏ là điểm đến hấp dẫn cho những ai yêu thiên nhiên và biển đảo.`
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
    content:`Phong Nha – Kẻ Bàng là di sản thiên nhiên thế giới nổi tiếng với hệ thống hang động kỳ vĩ và đa dạng sinh học phong phú. Đây là điểm đến hàng đầu tại miền Trung Việt Nam.

Du khách có thể khám phá các hang động, tham gia các hoạt động du lịch sinh thái và trải nghiệm thiên nhiên hoang sơ.

---

Để đến Phong Nha thuận tiện, bạn có thể sử dụng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị tùy theo nhu cầu.

Ngoài ra, du lịch Tân Oanh cung cấp nhiều tour khám phá hang động hấp dẫn.

👉 Xe dịch vụ Quảng Trị – tiện lợi, nhanh chóng  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – tour khám phá chuyên nghiệp

Phong Nha – Kẻ Bàng là điểm đến không thể bỏ qua khi du lịch miền Trung.`
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
    content:`Đại Nội Huế là quần thể di tích lịch sử thuộc cố đô Huế, được UNESCO công nhận là di sản văn hóa thế giới. Đây là nơi lưu giữ nhiều giá trị văn hóa và kiến trúc đặc sắc của triều Nguyễn.

Du khách có thể tham quan cung điện, lăng tẩm và tìm hiểu về lịch sử triều đại phong kiến Việt Nam.

---

Để di chuyển đến Huế thuận tiện, bạn có thể lựa chọn xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh cung cấp các tour kết hợp Huế – Đà Nẵng – Hội An rất thuận tiện.

👉 Xe dịch vụ Quảng Trị – đưa đón tận nơi  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – hành trình trọn gói

Đại Nội Huế là điểm đến mang đậm dấu ấn văn hóa và lịch sử.`
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
