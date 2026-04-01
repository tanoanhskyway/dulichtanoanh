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
      "https://quangbinhtravel.vn/wp-content/uploads/2025/02/thanh-co-quang-tri-2-1024x576.jpg",
      "https://bcp.cdnchinhphu.vn/334894974524682240/2025/4/29/thanh-co-quang-tri-2-1745940289655357673123.jpg",
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
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2024/10/24/2824-14-31-25.jpg",
      "https://i.ytimg.com/vi/rk54KqVVRhI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBXsh2gC5kIlGO04vfmnjhPi-5VVQ",
      "https://images2.thanhnien.vn/528068263637045248/2025/4/17/b6fb41e5542be775be3a-17448558778211424847224.jpg",
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
        images: [
      "https://bcp.cdnchinhphu.vn/334894974524682240/2025/4/14/dl3-cauhienluongsongbenhai-vituyen17homnay20230425153740-1744623159965304727765.jpg",
      "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2025-04/cau_hien_luong_in_bong_tren_song_ben_hai.jpg",
      "https://netintravel.com/wp-content/uploads/2025/09/cau-hien-luong-1.jpg",
content:`Cầu Hiền Lương – Sông Bến Hải là một trong những biểu tượng lịch sử quan trọng của Việt Nam, từng là ranh giới chia cắt hai miền Nam – Bắc trong thời kỳ chiến tranh. Đây là địa điểm mang giá trị lịch sử sâu sắc và thu hút nhiều du khách đến tham quan.

Khi đến đây, du khách sẽ được tìm hiểu về giai đoạn lịch sử đầy biến động của đất nước, tham quan các công trình như cầu Hiền Lương, nhà trưng bày và các di tích liên quan.

Không gian nơi đây mang lại cảm giác trang nghiêm, giúp mỗi người hiểu rõ hơn về giá trị của hòa bình ngày nay.

Bạn có thể kết hợp tham quan Cầu Hiền Lương với các điểm gần đó như Địa đạo Vịnh Mốc hoặc Thành cổ Quảng Trị.

---

Để di chuyển thuận tiện, bạn có thể lựa chọn xe dịch vụ Quảng Trị giúp chủ động thời gian. Nếu đi nhóm nhỏ, xe ghép Quảng Trị là lựa chọn tiết kiệm.

Ngoài ra, các tour du lịch Tân Oanh sẽ giúp bạn khám phá trọn vẹn khu vực này.

👉 Xe dịch vụ Quảng Trị – tiện lợi, nhanh chóng  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – hành trình trọn gói

Cầu Hiền Lương là điểm đến giàu ý nghĩa lịch sử mà bạn nên ghé thăm.`
  },

  "bien-cua-viet": {
    title: "Biển Cửa Việt",
            images: [
      "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/05_2021/du-lich-bien-cua-viet-o-dau.jpg",
      "https://t.cmx-cdn.com/tiepthigiadinh.vn/files/hientttaneed/2023/05/17/bien-cua-viet-003946.jpg",
      "https://quangbinhtravel.vn/wp-content/uploads/2025/09/resort-cua-viet.jpg",
    content:`Biển Cửa Việt là một trong những bãi biển đẹp và nổi tiếng tại Quảng Trị, thu hút du khách bởi bãi cát trắng mịn và nước biển trong xanh. Đây là điểm đến lý tưởng cho những chuyến nghỉ dưỡng và du lịch biển.

Du khách có thể tắm biển, dạo chơi trên bãi cát, thưởng thức hải sản tươi ngon và tận hưởng không khí trong lành.

Biển Cửa Việt cũng là nơi thích hợp để tổ chức các hoạt động dã ngoại, team building hoặc nghỉ dưỡng cuối tuần.

---

Để di chuyển thuận tiện, bạn có thể sử dụng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị tùy theo nhu cầu.

Ngoài ra, du lịch Tân Oanh cung cấp nhiều tour kết hợp tham quan biển và các điểm du lịch khác.

👉 Xe dịch vụ Quảng Trị – di chuyển thoải mái  
👉 Xe ghép Quảng Trị – giá rẻ, tiện lợi  
👉 Du lịch Tân Oanh – tour trọn gói

Biển Cửa Việt là điểm dừng chân lý tưởng cho chuyến du lịch miền Trung.`
  },

  "thanh-dia-la-vang": {
    title: "Thánh địa La Vang",
                images: [
      "https://cdn.xanhsm.com/2025/02/0a88ceed-thanh-dia-duc-me-la-vang-1.jpg",
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfwtupocma5EJEnvtCuM8TuZUzjSOxAItyAMcXCXwHTu-yMNzLFXslFLHOwPKglsWHSaTbuxpu8hkh0rPVCoTjuD_fxcWejER1zgBqiQyh-VnC_RxQhg-F4rD2UjfaGmbEV7QQ6?key=TxwSl_Cy_ksJ6rhyBNogjZDD",
      "https://bizweb.dktcdn.net/100/006/093/articles/thanh-dia-duc-me-la-vang.jpg?v=1700974161927",
    content:`Thánh địa La Vang là trung tâm hành hương Công giáo lớn nhất Việt Nam, nằm tại Quảng Trị. Đây là điểm đến tâm linh nổi tiếng thu hút hàng triệu du khách và giáo dân mỗi năm.

Không gian tại La Vang rộng lớn, trang nghiêm với các công trình kiến trúc mang đậm dấu ấn tôn giáo. Đây là nơi lý tưởng để cầu nguyện và tìm sự bình an.

Du khách khi đến đây không chỉ tham quan mà còn cảm nhận được sự yên tĩnh và thiêng liêng.

---

Để đến La Vang thuận tiện, bạn có thể lựa chọn xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh cung cấp các tour hành hương kết hợp tham quan nhiều điểm.

👉 Xe dịch vụ Quảng Trị – đưa đón tận nơi  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – hành trình trọn gói

La Vang là điểm đến tâm linh không thể bỏ qua khi đến Quảng Trị.`
  },

  "dao-con-co": {
    title: "Đảo Cồn Cỏ",
                    images: [
      "https://images.vietnamtourism.gov.vn/vn/images/2021/dao_Con_Co.jpg",
      "https://www.vietnamairlines.com/content/dam/legacy-site-assets/SEO-images/2025%20SEO/Thay%20Anh%20Traffic%20Tieng%20Viet/dao%20con%20co/cot-co-to-quoc-dao-con-co.jpeg",
      "https://thiennhienmoitruong.vn/upload2024/images/a-phuong-1/btv-t.phuong-2/148.jpg",
content:`Đảo Cồn Cỏ là hòn đảo nhỏ nằm ngoài khơi Quảng Trị, nổi bật với cảnh quan thiên nhiên hoang sơ và hệ sinh thái biển phong phú. Đây là điểm đến hấp dẫn cho những ai yêu thích khám phá.

Du khách có thể tham gia các hoạt động như lặn biển, câu cá, khám phá rạn san hô và tận hưởng không khí trong lành.

Đảo Cồn Cỏ mang lại trải nghiệm gần gũi với thiên nhiên và rất phù hợp cho những chuyến đi nghỉ dưỡng.

---

Để di chuyển ra đảo, bạn có thể sử dụng xe dịch vụ Quảng Trị đến cảng hoặc chọn xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh có các tour khám phá đảo rất tiện lợi.

👉 Xe dịch vụ Quảng Trị – linh hoạt  
👉 Xe ghép Quảng Trị – tiết kiệm  
👉 Du lịch Tân Oanh – trọn gói

Đảo Cồn Cỏ là điểm đến lý tưởng cho du lịch biển đảo.`
  },

  "bien-cua-tung": {
    title: "Biển Cửa Tùng",
                        images: [
      "https://images.vietnamtourism.gov.vn/vn/images/2021/dao_Con_Co.jpg",
      "https://www.vietnamairlines.com/content/dam/legacy-site-assets/SEO-images/2025%20SEO/Thay%20Anh%20Traffic%20Tieng%20Viet/dao%20con%20co/cot-co-to-quoc-dao-con-co.jpeg",
      "https://thiennhienmoitruong.vn/upload2024/images/a-phuong-1/btv-t.phuong-2/148.jpg",
  content:`Biển Cửa Tùng từng được mệnh danh là “nữ hoàng của các bãi biển miền Trung” với vẻ đẹp yên bình và thơ mộng. Nơi đây nổi bật với làn nước trong xanh và bãi cát mịn.

Du khách có thể tắm biển, nghỉ dưỡng và thưởng thức hải sản địa phương.

Không gian yên tĩnh của Cửa Tùng rất phù hợp cho những ai muốn tránh xa sự ồn ào.

---

Bạn có thể di chuyển bằng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị để tiết kiệm chi phí.

Ngoài ra, du lịch Tân Oanh có nhiều tour hấp dẫn kết hợp tham quan khu vực này.

👉 Xe dịch vụ Quảng Trị  
👉 Xe ghép Quảng Trị  
👉 Du lịch Tân Oanh

Biển Cửa Tùng là điểm đến lý tưởng cho kỳ nghỉ thư giãn.`
  },

  "rung-ru-linh": {
    title: "Rừng nguyên sinh Rú Lịnh",
                            images: [
      "https://nld.mediacdn.vn/thumb_w/698/291774122806476800/2022/3/1/13-rulinh2-1646140239781810676032.jpg",
      "https://dulich-media.quangtri.gov.vn/resources/portal//Images/QTI/adminportal.qti.it3/doanhnghiep/du_lich/rung_ru_linh/7_381906929.jpg",
      "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/06_2021/rung-nguyen-sinh-ru-linh-canh.jpg",
  content:`Rừng nguyên sinh Rú Lịnh là khu rừng hiếm hoi còn giữ được hệ sinh thái tự nhiên tại Quảng Trị. Với không gian xanh mát và đa dạng sinh học, nơi đây là điểm đến lý tưởng cho những ai yêu thiên nhiên.

Du khách có thể đi bộ khám phá rừng, tận hưởng không khí trong lành và tìm hiểu về hệ sinh thái đặc trưng.

---

Việc di chuyển đến Rú Lịnh sẽ thuận tiện hơn khi sử dụng xe dịch vụ Quảng Trị. Nếu đi nhóm nhỏ, xe ghép Quảng Trị là lựa chọn tiết kiệm.

Ngoài ra, bạn có thể tham khảo tour du lịch Tân Oanh để kết hợp nhiều điểm tham quan.

👉 Xe dịch vụ Quảng Trị – chủ động lịch trình  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – khám phá trọn gói

Rú Lịnh là điểm đến lý tưởng cho những ai yêu thiên nhiên hoang sơ.`
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
