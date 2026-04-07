import { Link, useParams } from "react-router-dom";

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
    ],
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
    ],
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
    ],
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
     ],
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
     ],
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
     ],
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
                                images: [
      "https://nld.mediacdn.vn/thumb_w/640/291774122806476800/2024/11/18/dong-phong-nha-ke-bang-dep-den-choang-ngop-17319168370561406931222.jpg",
      "https://ecotour.com.vn/wp-content/uploads/2025/05/du-lich-dong-phong-nha-ke-bang-quang-binh.jpeg",
      "https://xdcs.cdnchinhphu.vn/446259493575335936/2025/7/13/dong-phong-nha-175241040064959440978.jpg",
     ],
    content:`Phong Nha – Kẻ Bàng là di sản thiên nhiên thế giới được UNESCO công nhận, nổi tiếng với hệ thống hang động kỳ vĩ và đa dạng sinh học bậc nhất châu Á. Đây là điểm đến không thể bỏ qua khi du lịch miền Trung.

Khu vực này sở hữu hàng trăm hang động lớn nhỏ, trong đó nổi bật nhất là động Phong Nha, động Thiên Đường và hang Sơn Đoòng – hang động lớn nhất thế giới. Du khách đến đây sẽ được trải nghiệm chèo thuyền trên sông Son, khám phá hang động và tận hưởng không khí trong lành của rừng nguyên sinh.

Ngoài ra, Phong Nha còn phù hợp với các hoạt động du lịch sinh thái như trekking, khám phá rừng và cắm trại.

Thời điểm lý tưởng để tham quan là từ tháng 3 đến tháng 8, khi thời tiết khô ráo và thuận lợi cho việc khám phá hang động.

---

Để di chuyển thuận tiện đến Phong Nha – Kẻ Bàng, bạn có thể lựa chọn xe dịch vụ Quảng Trị để chủ động lịch trình. Với khách đi lẻ, xe ghép Quảng Trị là lựa chọn tiết kiệm chi phí mà vẫn đảm bảo tiện lợi.

Ngoài ra, du lịch Tân Oanh cung cấp nhiều tour khám phá hang động chuyên nghiệp.

👉 Xe dịch vụ Quảng Trị – đưa đón tận nơi  
👉 Xe ghép Quảng Trị – giá rẻ, linh hoạt  
👉 Du lịch Tân Oanh – hành trình trọn gói

Phong Nha – Kẻ Bàng là điểm đến thiên nhiên kỳ vĩ hàng đầu Việt Nam.`
  },

  "hang-son-doong": {
    title: "Hang Sơn Đoòng",
                                    images: [
      "https://thoibaotaichinhvietnam.vn/stores/news_dataimages/2023/122023/23/14/photo-1-16498243241022068969928-1649836162311-16498361624051000345387-1649839152084-1649839152141111541271520231223145719.5433580.jpg",
      "https://vcdn1-dulich.vnecdn.net/2022/01/12/hang-1641962825-5455-1641962984.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=OTGvhIoUKJUj7fY3L6Z71A",
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2026/3/30/1676949/Hang-En-Campsite-At-.jpeg",
     ],
    content:`Hang Sơn Đoòng là hang động lớn nhất thế giới, nằm trong Vườn quốc gia Phong Nha – Kẻ Bàng. Với kích thước khổng lồ và hệ sinh thái riêng biệt bên trong, nơi đây được xem là kỳ quan thiên nhiên độc đáo.

Bên trong hang có rừng nguyên sinh, sông ngầm và hệ thống thạch nhũ khổng lồ tạo nên cảnh quan vô cùng ấn tượng. Đây là điểm đến mơ ước của những người yêu thích khám phá và mạo hiểm.

Tuy nhiên, để khám phá Sơn Đoòng, du khách cần đăng ký tour chuyên biệt và có sự chuẩn bị kỹ lưỡng.

---

Để đến khu vực Phong Nha thuận tiện, bạn có thể sử dụng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh cung cấp các tour hỗ trợ khám phá khu vực này.

👉 Xe dịch vụ Quảng Trị – tiện lợi  
👉 Xe ghép Quảng Trị – tiết kiệm  
👉 Du lịch Tân Oanh – hỗ trợ hành trình

Hang Sơn Đoòng là điểm đến dành cho những ai yêu thích khám phá thiên nhiên.`
  },

  "dong-thien-duong": {
    title: "Động Thiên Đường",
          images: [
      "https://api.sovaba.travel/uploads/Tham_quan_Dong_Thien_Duong_04abe82bb0.png",
      "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos206698452xl-1734917218918.jpg",
      "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos271368316xl-1734917494041.jpg",
     ],
    content:`Động Thiên Đường được mệnh danh là “hoàng cung trong lòng đất” với hệ thống thạch nhũ tuyệt đẹp. Đây là một trong những hang động nổi bật nhất tại Quảng Bình.

Du khách có thể đi bộ trên cầu gỗ dài hàng km để chiêm ngưỡng vẻ đẹp kỳ ảo bên trong hang. Không gian rộng lớn, mát mẻ và vô cùng ấn tượng.

---

Bạn có thể di chuyển bằng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị để đến đây.

Ngoài ra, du lịch Tân Oanh có tour khám phá hang động rất tiện lợi.

👉 Xe dịch vụ Quảng Trị  
👉 Xe ghép Quảng Trị  
👉 Du lịch Tân Oanh

Động Thiên Đường là điểm đến không thể bỏ qua khi đến Quảng Bình.`
  },

  "suoi-mooc": {
    title: "Suối Moọc",
              images: [
      "https://phongnhasmiletravel.com/assets/media/z2434590977855-1eff4ba9f0b02ebcbd2e4ac2dfc3b3c0.jpg",
      "https://celinaresort.com/wp-content/uploads/2021/03/phong-nha-suoi-mooc-01.jpg",
      "https://quangbinhtravel.vn/wp-content/uploads/2024/09/suoi-nuoc-mooc-1024x576-1.jpg",
     ],
    content:`Suối Moọc là điểm du lịch sinh thái nổi tiếng với làn nước xanh ngọc và không gian thiên nhiên mát mẻ. Đây là nơi lý tưởng để nghỉ dưỡng và vui chơi.

Du khách có thể tắm suối, chèo kayak và tham gia các hoạt động ngoài trời.

---

Di chuyển thuận tiện bằng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh có tour kết hợp tham quan khu vực này.

👉 Xe dịch vụ Quảng Trị  
👉 Xe ghép Quảng Trị  
👉 Du lịch Tân Oanh

Suối Moọc là điểm đến lý tưởng cho du lịch sinh thái.`
  },

  "bien-nhat-le": {
    title: "Biển Nhật Lệ",
              images: [
      "https://dulichnewtour.vn/ckfinder/images/bien-nhat-le%20(14).jpg",
      "https://qbtravel.vn/wp-content/uploads/2025/07/Bien-nhat-le-quang-binh-top-10-cac-bai-bien-dep-nhat-tai-viet-nam.jpg",
      "https://cms.junglebosstours.com/assets/2ed2d476-f135-4f49-895c-811ac93e1b0c?width=1920&height=1080",
     ],
   content:`Biển Nhật Lệ là một trong những bãi biển đẹp nhất tại Quảng Bình, nổi bật với bãi cát trắng mịn và làn nước trong xanh. Đây là điểm đến hấp dẫn cho du khách yêu thích du lịch biển.

Du khách có thể tắm biển, dạo chơi và thưởng thức hải sản đặc sản địa phương.

---

Để đến Biển Nhật Lệ thuận tiện, bạn có thể sử dụng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh cung cấp nhiều tour kết hợp Quảng Trị – Quảng Bình.

👉 Xe dịch vụ Quảng Trị – tiện lợi, nhanh chóng  
👉 Xe ghép Quảng Trị – tiết kiệm chi phí  
👉 Du lịch Tân Oanh – hành trình trọn gói

Biển Nhật Lệ là lựa chọn hoàn hảo cho kỳ nghỉ thư giãn.`
  },

  "con-cat-quang-phu": {
    title: "Cồn cát Quang Phú",
              images: [
      "https://raovat73.com/qlw/prodimg/con-cat-quang-phu-dong-hoi-quang-binh.jpg",
      "https://phongnhaviet.com/uploads/service/2025_02/doi_cat_quang_phu/anh-trai-nghiem-xe-leo-doi-cat.jpg",
      "https://netintravel.com/wp-content/uploads/2023/06/doi-cat-quang-binh.jpg",
     ],
    content:`Cồn cát Quang Phú là địa điểm du lịch nổi tiếng tại Quảng Bình với những đồi cát rộng lớn và cảnh quan độc đáo. Đây là nơi lý tưởng để chụp ảnh và trải nghiệm trượt cát.

Du khách có thể tham gia nhiều hoạt động thú vị như trượt cát, check-in và khám phá thiên nhiên.

---

Để di chuyển thuận tiện, bạn có thể sử dụng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh có nhiều tour kết hợp tham quan khu vực này.

👉 Xe dịch vụ Quảng Trị – tiện lợi  
👉 Xe ghép Quảng Trị – giá rẻ  
👉 Du lịch Tân Oanh – trọn gói

Cồn cát Quang Phú là điểm check-in không thể bỏ lỡ.`,
  },

  "hang-en": {
    title: "Hang Én",
              images: [
      "https://statics.vinpearl.com/hang-en-002_1630662227.jpg",
      "https://www.kkday.com/vi/blog/wp-content/uploads/Hang-En-3.jpg",
      "https://image.vietgoing.com/editor/image_pkr1639446571.jpg",
     ],
    content:`Hang Én là hang động lớn thứ ba thế giới nằm trong Vườn quốc gia Phong Nha – Kẻ Bàng. Đây là điểm đến hấp dẫn dành cho những ai yêu thích khám phá và mạo hiểm.

Du khách sẽ được trải nghiệm trekking, cắm trại và khám phá thiên nhiên kỳ vĩ.

---

Để di chuyển đến Hang Én, bạn có thể lựa chọn xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

Ngoài ra, du lịch Tân Oanh cung cấp tour chuyên nghiệp khám phá hang động.

👉 Xe dịch vụ Quảng Trị – linh hoạt  
👉 Xe ghép Quảng Trị – tiết kiệm  
👉 Du lịch Tân Oanh – chuyên nghiệp

Hang Én là điểm đến lý tưởng cho dân phượt.`,
  },

  "bien-bao-ninh": {
    title: "Biển Bảo Ninh",
              images: [
      "https://statics.vinpearl.com/bien-bao-ninh--22_1629534360.jpg",
      "https://dolcepenisola.com.vn/wp-content/uploads/2023/05/image2-1683512325-764-width2048height1152.jpg",
      "https://chacungcharao.com/wp-content/uploads/2025/05/bien-bao-ninh-o-dau.jpg",
     ],
 content:`Biển Bảo Ninh là một trong những bãi biển còn giữ được vẻ đẹp hoang sơ và yên bình tại Quảng Bình, nằm ngay đối diện trung tâm thành phố Đồng Hới. Với bãi cát trắng mịn, làn nước trong xanh và không gian thoáng đãng, nơi đây ngày càng trở thành điểm đến yêu thích của nhiều du khách khi khám phá miền Trung.

Khác với những bãi biển đông đúc, Biển Bảo Ninh mang đến cảm giác thư giãn, nhẹ nhàng và gần gũi với thiên nhiên. Du khách có thể thoải mái dạo biển vào sáng sớm, ngắm bình minh hoặc tận hưởng không khí mát mẻ vào buổi chiều. Đây là địa điểm lý tưởng cho những ai muốn tìm một không gian yên tĩnh để nghỉ dưỡng.

Ngoài hoạt động tắm biển, du khách còn có thể thưởng thức nhiều món hải sản tươi ngon được đánh bắt trong ngày như tôm, cua, mực và các loại cá biển. Khu vực này cũng đang phát triển nhiều dịch vụ du lịch, resort và quán ăn phục vụ du khách.

Một điểm đặc biệt của Biển Bảo Ninh là vị trí rất thuận tiện để kết hợp tham quan các địa điểm nổi tiếng khác tại Quảng Bình như Phong Nha – Kẻ Bàng, Động Thiên Đường hay Suối Moọc. Nhờ đó, du khách có thể dễ dàng xây dựng một lịch trình du lịch đa dạng và hấp dẫn.

Thời điểm đẹp nhất để tham quan Biển Bảo Ninh là từ tháng 4 đến tháng 8, khi thời tiết nắng đẹp, ít mưa và phù hợp cho các hoạt động ngoài trời. Du khách nên chuẩn bị trang phục nhẹ, kem chống nắng và lên kế hoạch di chuyển hợp lý để có trải nghiệm tốt nhất.

---

Nếu bạn đang có kế hoạch đến Biển Bảo Ninh, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và tiết kiệm hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ sự linh hoạt, đưa đón tận nơi và phù hợp với nhiều nhóm khách khác nhau.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tối ưu giúp tiết kiệm chi phí mà vẫn đảm bảo sự thoải mái trong suốt hành trình. Đây là hình thức di chuyển ngày càng phổ biến và rất phù hợp với nhu cầu du lịch hiện nay.

Ngoài ra, nếu bạn muốn kết hợp tham quan nhiều địa điểm nổi tiếng trong cùng một chuyến đi, các tour du lịch Tân Oanh sẽ giúp bạn tối ưu lịch trình, chi phí và có trải nghiệm trọn vẹn hơn.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động thời gian  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá miền Trung

Biển Bảo Ninh không chỉ là điểm đến nghỉ dưỡng lý tưởng mà còn là nơi mang lại cảm giác bình yên, thư thái cho mỗi du khách khi đặt chân đến Quảng Bình. Đây chắc chắn là điểm dừng chân đáng trải nghiệm trong hành trình khám phá miền Trung Việt Nam.`,
  },

  /* HUẾ */

  "dai-noi-hue": {
    title: "Đại Nội Huế",
              images: [
      "https://queenbus.com.vn/wp-content/uploads/2025/07/Dai-Noi-Hue-khi-hoang-hon-buong-xuong-1.jpg",
      "https://media.vietravel.com/images/Content/du-lich-dai-noi-hue-01.jpg",
      "https://huedailytour.net/wp-content/uploads/2023/02/DAI-NOI.jpeg",
     ],
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
              images: [
      "https://khamphahue.com.vn/Portals/0/Medias/Nam2022/T10/Khamphahue_LangTamHue_LangVuaTuDuc-daidien.jpg",
      "https://bazaarvietnam.vn/wp-content/uploads/2019/07/2019227-lang-Tu-Duc-05.jpg",
      "https://husta.vn/wp-content/uploads/2022/07/3ffb1e64562d9473cd3c1.jpg",
     ],
    content:`Lăng Tự Đức nổi bật với cảnh quan thơ mộng và kiến trúc hài hòa với thiên nhiên. Đây là một trong những lăng đẹp nhất tại Huế.

Du khách có thể tham quan và tìm hiểu về cuộc đời vua Tự Đức.

---

Di chuyển bằng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

👉 Xe dịch vụ Quảng Trị  
👉 Xe ghép Quảng Trị  
👉 Du lịch Tân Oanh

Lăng Tự Đức là điểm đến yên bình và đẹp mắt.`,
  },

  "chua-thien-mu": {
    title: "Chùa Thiên Mụ",
              images: [
      "https://www.chuaviettoancau.com/userfiles/85_01.jpg",
      "https://bizweb.dktcdn.net/100/006/093/files/chua-thien-mu-2.jpg?v=1730911821713",
      "https://hue.gov.vn/Portals/0/Medias/Nam2022/T8/M_20220712_CHUATHIENMU1.jpg",
     ],
   content:`Chùa Thiên Mụ là ngôi chùa cổ nổi tiếng nằm bên sông Hương, mang vẻ đẹp linh thiêng và cổ kính.

Du khách có thể tham quan, cầu nguyện và ngắm cảnh sông Hương.

---

Di chuyển bằng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

👉 Xe dịch vụ Quảng Trị  
👉 Xe ghép Quảng Trị  
👉 Du lịch Tân Oanh

Chùa Thiên Mụ là biểu tượng của Huế.`,
  },

  "song-huong-hue": {
    title: "Sông Hương",
              images: [
      "https://cahuetrensonghuong.com/wp-content/uploads/2024/07/z5391414460273_1b4a1aac3895fc8887f414d254626883.jpg.webp",
      "https://media.vietravel.com/images/Content/du-lich-song-huong-hue-1.jpg",
      "https://huetv.com.vn/uploads/static/tin-tuc/TADH02.jpg",
     ],
    content:`Sông Hương là biểu tượng thơ mộng và nổi tiếng nhất của thành phố Huế, gắn liền với vẻ đẹp dịu dàng, trầm mặc của vùng đất cố đô. Dòng sông uốn lượn qua lòng thành phố không chỉ mang giá trị cảnh quan mà còn chứa đựng chiều sâu văn hóa và lịch sử đặc biệt.

Sông Hương bắt nguồn từ dãy Trường Sơn và chảy qua nhiều khu vực trước khi đi qua trung tâm Huế. Nước sông trong xanh, êm đềm, hai bên là những hàng cây xanh mát và các công trình kiến trúc cổ kính tạo nên một khung cảnh rất đặc trưng. Đây là nơi mà bất kỳ du khách nào đến Huế cũng muốn ghé thăm ít nhất một lần.

Một trong những trải nghiệm thú vị khi đến Sông Hương là đi thuyền rồng vào buổi tối. Du khách có thể vừa ngắm cảnh thành phố lên đèn, vừa nghe ca Huế – một loại hình nghệ thuật truyền thống đặc sắc. Không gian yên bình, tiếng nhạc nhẹ nhàng cùng ánh đèn lung linh tạo nên một trải nghiệm rất đáng nhớ.

Ngoài ra, du khách có thể đi dạo dọc bờ sông, đạp xe hoặc check-in tại các địa điểm nổi tiếng như cầu Tràng Tiền, chùa Thiên Mụ hay Đại Nội Huế. Những địa điểm này đều nằm gần Sông Hương và có thể kết hợp tham quan rất thuận tiện.

Thời điểm đẹp nhất để tham quan Sông Hương là vào sáng sớm hoặc chiều tối, khi thời tiết mát mẻ và ánh sáng tạo nên khung cảnh rất thơ mộng. Đặc biệt vào mùa thu, Sông Hương mang vẻ đẹp rất riêng với không khí dịu nhẹ và lãng mạn.

---

Nếu bạn đang có kế hoạch khám phá Sông Hương Huế, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn rất phổ biến cho các chuyến đi Huế – Đà Nẵng – Quảng Trị.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Huế và miền Trung, bạn có thể lựa chọn các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá cố đô Huế

Sông Hương không chỉ là dòng sông đẹp mà còn là linh hồn của Huế, nơi lưu giữ những giá trị văn hóa và ký ức lịch sử của vùng đất cố đô. Đây chắc chắn là điểm đến mà bạn không nên bỏ lỡ trong hành trình khám phá miền Trung Việt Nam.`,
  },

  "cho-dong-ba": {
    title: "Chợ Đông Ba",
              images: [
      "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos196442922xl-1732498164999.jpg",
      "https://aeonmall-review-rikkei.cdn.vccloud.vn/website/21/articles/September2025/1cbdf8b4-97d4-48e4-93c7-12f32916f220.jpg",
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/11/1/1261922/Dong-Ba-6.jpg",
     ],
    content:`Chợ Đông Ba là khu chợ truyền thống lớn nhất và lâu đời nhất tại Huế, nằm bên bờ sông Hương và gần cầu Tràng Tiền. Đây không chỉ là nơi buôn bán sầm uất mà còn là điểm đến mang đậm nét văn hóa đặc trưng của vùng đất cố đô.

Được xây dựng từ thời nhà Nguyễn, Chợ Đông Ba đã trải qua nhiều giai đoạn lịch sử và trở thành trung tâm giao thương quan trọng của Huế. Khi đến đây, du khách có thể cảm nhận rõ nhịp sống địa phương, sự thân thiện của người dân và không khí mua bán rất đặc trưng của miền Trung.

Một trong những điểm hấp dẫn nhất tại Chợ Đông Ba chính là ẩm thực. Du khách có thể thưởng thức hàng loạt món ăn nổi tiếng của Huế như bún bò Huế, bánh bèo, bánh nậm, bánh lọc hay các loại chè truyền thống. Đây là nơi lý tưởng để khám phá ẩm thực địa phương với mức giá rất hợp lý.

Ngoài ra, chợ còn là nơi bán nhiều đặc sản và quà lưu niệm như mè xửng, tôm chua, nón lá, áo dài Huế và các sản phẩm thủ công mỹ nghệ. Du khách có thể dễ dàng tìm thấy những món quà ý nghĩa để mang về.

Chợ Đông Ba cũng có vị trí rất thuận tiện để kết hợp tham quan các địa điểm nổi tiếng khác như Đại Nội Huế, chùa Thiên Mụ hay dạo chơi dọc sông Hương. Vì vậy, đây thường là điểm dừng chân không thể thiếu trong hành trình khám phá Huế.

Thời điểm thích hợp để tham quan Chợ Đông Ba là vào buổi sáng hoặc chiều mát, khi hoạt động mua bán diễn ra nhộn nhịp nhất. Du khách nên chuẩn bị tiền mặt và có thể trả giá nhẹ khi mua hàng để có trải nghiệm tốt hơn.

---

Nếu bạn đang có kế hoạch tham quan Chợ Đông Ba và khám phá Huế, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và tiết kiệm hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tối ưu giúp tiết kiệm chi phí mà vẫn đảm bảo sự thoải mái trong suốt hành trình. Đây là hình thức di chuyển rất phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Huế và miền Trung, bạn có thể tham khảo các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá cố đô Huế

Chợ Đông Ba không chỉ là nơi mua sắm mà còn là điểm đến giúp bạn hiểu rõ hơn về văn hóa, ẩm thực và con người Huế. Đây chắc chắn là trải nghiệm đáng nhớ trong hành trình khám phá miền Trung Việt Nam.`,
  },

  "lang-khai-dinh": {
    title: "Lăng Khải Định",
              images: [
      "https://vcdn1-dulich.vnecdn.net/2016/08/26/8-1472207296.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=XVSrHi6a3ZH73RZmQJNIGg",
      "https://hnm.1cdn.vn/2023/07/06/lang_khaidinh.jpg",
      "https://dulichdaibang.com/theme/root/Lang%20Khai%20Dinh.jpg",
     ],
    content:`Lăng Khải Định là một trong những công trình lăng tẩm nổi bật và độc đáo nhất tại Huế, nằm trên triền núi Châu Chữ. Đây là nơi an nghỉ của vua Khải Định – vị vua thứ 12 của triều Nguyễn, đồng thời cũng là công trình mang phong cách kiến trúc đặc biệt, kết hợp giữa truyền thống Á Đông và ảnh hưởng phương Tây.

Khác với các lăng tẩm khác của triều Nguyễn thường mang vẻ đẹp hài hòa với thiên nhiên, Lăng Khải Định gây ấn tượng mạnh với du khách bởi kiến trúc đồ sộ, cầu kỳ và được xây dựng chủ yếu bằng bê tông, đá và các vật liệu hiện đại thời bấy giờ. Công trình được xây dựng trong suốt nhiều năm với sự đầu tư lớn về công sức và nghệ thuật.

Khi tham quan Lăng Khải Định, du khách sẽ phải đi qua hệ thống bậc thang dẫn lên đỉnh đồi, nơi tọa lạc khu lăng chính. Điểm nổi bật nhất chính là cung Thiên Định – khu vực trung tâm của lăng, nơi đặt tượng vua Khải Định và được trang trí bằng nghệ thuật khảm sành sứ vô cùng tinh xảo. Các chi tiết trang trí bên trong lăng thể hiện trình độ thủ công mỹ nghệ đỉnh cao của nghệ nhân thời Nguyễn.

Không gian bên trong lăng mang màu sắc trầm mặc nhưng vô cùng ấn tượng với những họa tiết cầu kỳ, kết hợp giữa văn hóa phương Đông và phương Tây. Đây chính là điểm khác biệt khiến Lăng Khải Định trở thành một trong những điểm tham quan thu hút du khách nhất tại Huế.

Ngoài ra, du khách có thể kết hợp tham quan Lăng Khải Định với các địa điểm nổi tiếng khác như Đại Nội Huế, chùa Thiên Mụ, Lăng Tự Đức hay dạo chơi dọc sông Hương. Nhờ vị trí thuận tiện, việc di chuyển giữa các điểm tham quan khá dễ dàng.

Thời điểm lý tưởng để tham quan Lăng Khải Định là vào buổi sáng hoặc chiều mát, khi thời tiết không quá nắng nóng. Du khách nên chuẩn bị trang phục thoải mái và giày thể thao để dễ dàng di chuyển lên các bậc thang.

---

Nếu bạn đang có kế hoạch tham quan Lăng Khải Định và khám phá Huế, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và tiết kiệm hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tối ưu giúp tiết kiệm chi phí mà vẫn đảm bảo sự thoải mái trong suốt hành trình. Đây là lựa chọn phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Huế và miền Trung, bạn có thể lựa chọn các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá cố đô Huế

Lăng Khải Định không chỉ là một công trình kiến trúc độc đáo mà còn là nơi lưu giữ nhiều giá trị lịch sử và văn hóa đặc sắc của triều Nguyễn. Đây chắc chắn là điểm đến không thể bỏ qua khi bạn đến Huế.`,
  },

  "bien-lang-co": {
    title: "Biển Lăng Cô",
              images: [
      "https://dulichconvoi.com/wp-content/uploads/2023/09/Langco3-1446-1689668265.jpg",
      "https://khamphahue.com.vn/Portals/0/Medias/Nam2022/T9/Khamphahue_Vinh-dep-lang-co-hue.jpg",
      "https://phongnhatourist.com/wp-content/uploads/2021/08/langcothodiadulich-1024x577.jpg",
     ],
    content:`Biển Lăng Cô là một trong những vịnh biển đẹp nhất thế giới, nằm dưới chân đèo Hải Vân, thuộc huyện Phú Lộc, tỉnh Thừa Thiên Huế. Với vẻ đẹp hoang sơ, làn nước trong xanh và bãi cát trắng mịn trải dài, Lăng Cô luôn nằm trong danh sách những điểm đến hấp dẫn nhất tại miền Trung Việt Nam.

Vịnh Lăng Cô gây ấn tượng mạnh với du khách bởi khung cảnh thiên nhiên hài hòa giữa biển, núi và đầm phá. Một bên là dãy núi Bạch Mã hùng vĩ, một bên là đầm Lập An thơ mộng, tạo nên một bức tranh thiên nhiên tuyệt đẹp hiếm nơi nào có được. Đây là điểm đến lý tưởng cho những ai yêu thích nghỉ dưỡng, chụp ảnh và tận hưởng không gian yên bình.

Khi đến Biển Lăng Cô, du khách có thể tham gia nhiều hoạt động thú vị như tắm biển, chèo thuyền, thưởng thức hải sản tươi sống hoặc đơn giản là thư giãn bên bờ biển. Khu vực này cũng có nhiều resort và khách sạn cao cấp phục vụ nhu cầu nghỉ dưỡng.

Một trải nghiệm không thể bỏ qua khi đến Lăng Cô là thưởng thức hải sản tại đầm Lập An. Các món như hàu, tôm, cua và cá biển đều rất tươi ngon và mang đậm hương vị địa phương.

Ngoài ra, Biển Lăng Cô có vị trí rất thuận tiện để kết hợp tham quan các địa điểm nổi tiếng khác như đèo Hải Vân, Bà Nà Hills, Đại Nội Huế hoặc phố cổ Hội An. Nhờ đó, du khách có thể dễ dàng xây dựng một lịch trình du lịch đa dạng và hấp dẫn.

Thời điểm lý tưởng để du lịch Lăng Cô là từ tháng 4 đến tháng 8, khi thời tiết nắng đẹp, biển êm và thích hợp cho các hoạt động ngoài trời. Du khách nên chuẩn bị trang phục nhẹ, kem chống nắng và lên kế hoạch di chuyển hợp lý để có trải nghiệm tốt nhất.

---

Nếu bạn đang có kế hoạch đến Biển Lăng Cô, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và tiết kiệm hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tối ưu giúp tiết kiệm chi phí mà vẫn đảm bảo sự thoải mái trong suốt hành trình. Đây là lựa chọn phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại miền Trung, bạn có thể tham khảo các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá miền Trung

Biển Lăng Cô không chỉ là điểm đến nghỉ dưỡng lý tưởng mà còn là nơi mang đến những trải nghiệm thiên nhiên tuyệt vời. Đây chắc chắn là điểm dừng chân mà bạn không nên bỏ lỡ khi đến Huế và khu vực miền Trung Việt Nam.`,
  },

  "doi-vong-canh": {
    title: "Đồi Vọng Cảnh",
              images: [
      "https://huesmiletravel.com.vn/images/doi-vong-canh-hue.jpg",
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/5/19/1341807/Vong-Canh-1.jpg",
      "https://booking.muongthanh.com/upload_images/images/H%60/doi-vong-canh(1).jpg",
     ],
    content:`Đồi Vọng Cảnh là một trong những điểm ngắm cảnh đẹp và thơ mộng nhất tại Huế, nằm cách trung tâm thành phố không xa. Nơi đây nổi tiếng với tầm nhìn bao quát sông Hương, núi non và những khu lăng tẩm cổ kính của triều Nguyễn, tạo nên một khung cảnh vừa hùng vĩ vừa yên bình.

Đúng như tên gọi, Đồi Vọng Cảnh là nơi lý tưởng để du khách chiêm ngưỡng toàn cảnh thiên nhiên Huế từ trên cao. Từ đỉnh đồi, bạn có thể nhìn thấy dòng sông Hương uốn lượn mềm mại giữa những rặng thông xanh mướt, xa xa là các công trình lịch sử như lăng Tự Đức, lăng Khải Định. Đây là một trong những điểm check-in được yêu thích nhất khi đến Huế.

Không gian tại Đồi Vọng Cảnh rất yên tĩnh, trong lành, thích hợp cho việc thư giãn, dạo chơi và tận hưởng vẻ đẹp thiên nhiên. Đặc biệt, vào buổi chiều, khi mặt trời dần lặn, nơi đây trở thành điểm ngắm hoàng hôn tuyệt đẹp với ánh nắng vàng phủ lên toàn cảnh Huế.

Du khách có thể đến Đồi Vọng Cảnh bằng xe máy, ô tô hoặc xe du lịch. Đường lên đồi khá dễ đi, không quá dốc nên phù hợp với nhiều đối tượng. Ngoài ra, khu vực này cũng rất thuận tiện để kết hợp tham quan các địa điểm nổi tiếng khác như lăng Tự Đức, lăng Khải Định hay chùa Thiên Mụ.

Thời điểm lý tưởng để tham quan Đồi Vọng Cảnh là vào sáng sớm hoặc chiều muộn, khi thời tiết mát mẻ và ánh sáng đẹp để chụp ảnh. Du khách nên chuẩn bị máy ảnh hoặc điện thoại đầy pin để lưu lại những khoảnh khắc ấn tượng.

---

Nếu bạn đang có kế hoạch khám phá Đồi Vọng Cảnh và các địa điểm tại Huế, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn rất phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Huế và miền Trung, bạn có thể tham khảo các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá cố đô Huế

Đồi Vọng Cảnh không chỉ là điểm ngắm cảnh tuyệt đẹp mà còn là nơi giúp bạn cảm nhận rõ nét vẻ yên bình, thơ mộng của Huế. Đây chắc chắn là điểm dừng chân lý tưởng trong hành trình khám phá miền Trung Việt Nam.`,
  },

  /* ĐÀ NẴNG */

  "ba-na-hills": {
    title: "Bà Nà Hills",
              images: [
      "https://cdn3.ivivu.com/2024/04/sun-world-ba-na-hills-ivivu37-1.jpg",
      "https://vcdn1-dulich.vnecdn.net/2025/04/10/BNtop-1744279080-7298-1744280762.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=fa5s51Vg2pTOCMq-gWBuTA",
      "https://www.tuannguyentravel.com/data/tour/500/38015114522177299650985815282896971644208038n-1695203141.jpg",
     ],
    content:`Bà Nà Hills là khu du lịch nổi tiếng với Cầu Vàng và khí hậu mát mẻ quanh năm. Đây là điểm đến hàng đầu tại Đà Nẵng.

Du khách có thể đi cáp treo, tham quan và vui chơi tại khu giải trí.

---

Di chuyển bằng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

👉 Xe dịch vụ Quảng Trị  
👉 Xe ghép Quảng Trị  
👉 Du lịch Tân Oanh

Bà Nà Hills là điểm đến không thể bỏ lỡ.`,
  },

  "bien-my-khe": {
    title: "Biển Mỹ Khê",
              images: [
      "https://havi-web.s3.ap-southeast-1.amazonaws.com/bien_my_khe_da_nang_2_11zon_1_a3a8e98ee1.webp",
      "https://mia.vn/media/uploads/blog-du-lich/bai-bien-my-khe-da-nang-lang-nguoi-ngam-nhin-1-trong-6-bai-bien-dep-nhat-hanh-tinh-05-1636298582.jpeg",
      "https://queenbus.com.vn/wp-content/uploads/2025/08/Bai-tam-1-2-3-luon-dong-khach-nhat-Anh_-Suu-tam.png",
     ],
    content:`Biển Mỹ Khê là một trong những bãi biển đẹp nhất hành tinh với bãi cát trắng và nước biển trong xanh.

Du khách có thể tắm biển và nghỉ dưỡng.

---

Di chuyển bằng xe dịch vụ Quảng Trị hoặc xe ghép Quảng Trị.

👉 Xe dịch vụ Quảng Trị  
👉 Xe ghép Quảng Trị  
👉 Du lịch Tân Oanh

Mỹ Khê là điểm đến lý tưởng tại Đà Nẵng.`,
  },

  "cau-rong-da-nang": {
    title: "Cầu Rồng Đà Nẵng",
              images: [
      "https://images2.thanhnien.vn/528068263637045248/2025/6/18/the-legend-danang-1-17502421275011965589401.jpg",
      "https://queenbus.com.vn/wp-content/uploads/2025/08/Cau-Rong-bieu-tuong-du-lich-Da-Nang-Anh-Suu-tam-1024x683.png",
      "https://tophomestay.vn/upload/img/9fba44d71932a89fa06a21703c0bfbed/2021/10/19/cau_rong_da_nang_tophomestay_10_1634645101.jpg",
     ],
   content:`Cầu Rồng là một trong những biểu tượng nổi bật nhất của thành phố Đà Nẵng, nằm bắc qua sông Hàn và kết nối trung tâm thành phố với khu vực biển Mỹ Khê. Với thiết kế độc đáo hình con rồng vươn ra biển lớn, cây cầu không chỉ có giá trị giao thông mà còn mang ý nghĩa phong thủy và biểu tượng phát triển của thành phố.

Được khánh thành vào năm 2013, Cầu Rồng nhanh chóng trở thành điểm check-in nổi tiếng thu hút đông đảo du khách trong và ngoài nước. Điểm đặc biệt nhất của cây cầu này là khả năng phun lửa và phun nước vào mỗi cuối tuần, tạo nên một màn trình diễn ấn tượng và độc đáo giữa lòng thành phố.

Vào buổi tối, Cầu Rồng trở nên rực rỡ với hệ thống đèn LED đổi màu liên tục, phản chiếu xuống dòng sông Hàn tạo nên khung cảnh lung linh, hiện đại. Đây là thời điểm lý tưởng để du khách dạo chơi, chụp ảnh và tận hưởng không khí sôi động của Đà Nẵng về đêm.

Ngoài ra, khu vực xung quanh Cầu Rồng cũng rất nhộn nhịp với nhiều quán cà phê, nhà hàng và các điểm vui chơi giải trí. Du khách có thể kết hợp tham quan các địa điểm nổi tiếng khác như cầu Tình Yêu, cầu sông Hàn, biển Mỹ Khê hoặc bán đảo Sơn Trà.

Thời điểm đẹp nhất để tham quan Cầu Rồng là vào buổi tối, đặc biệt vào cuối tuần khi diễn ra màn phun lửa và phun nước (thường vào khoảng 21h). Du khách nên đến sớm để chọn vị trí đẹp và thuận tiện cho việc di chuyển.

---

Nếu bạn đang có kế hoạch tham quan Cầu Rồng và khám phá Đà Nẵng, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn rất phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Đà Nẵng và miền Trung, bạn có thể lựa chọn các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá Đà Nẵng

Cầu Rồng không chỉ là một công trình kiến trúc độc đáo mà còn là biểu tượng hiện đại, năng động của Đà Nẵng. Đây chắc chắn là điểm đến mà bạn không nên bỏ lỡ khi ghé thăm thành phố đáng sống này.`,
  },

  "ngu-hanh-son": {
    title: "Ngũ Hành Sơn",
              images: [
      "https://danangfantasticity.com/wp-content/uploads/2025/08/danh-thang-ngu-hanh-son-da-nang-chua-quan-the-am.jpg",
      "https://danangfantasticity.com/wp-content/uploads/2025/08/danh-thang-ngu-hanh-son-da-nang-002.jpg",
      "https://danangfantasticity.com/wp-content/uploads/2015/09/danh-thang-ngu-hanh-son-da-nang.jpg",
     ],
    content:`Ngũ Hành Sơn là quần thể núi đá vôi nổi tiếng nằm tại thành phố Đà Nẵng, gồm 5 ngọn núi mang tên Kim, Mộc, Thủy, Hỏa và Thổ. Đây là một trong những điểm du lịch tâm linh và thiên nhiên hấp dẫn nhất miền Trung, thu hút đông đảo du khách trong và ngoài nước.

Mỗi ngọn núi trong Ngũ Hành Sơn đều mang một vẻ đẹp riêng, nhưng nổi bật nhất là núi Thủy Sơn – nơi tập trung nhiều hang động, chùa chiền và điểm tham quan nổi tiếng. Khi đến đây, du khách có thể khám phá các hang động kỳ bí như động Huyền Không, động Âm Phủ, cùng với các ngôi chùa linh thiêng như chùa Linh Ứng, chùa Tam Thai.

Không chỉ mang giá trị tâm linh, Ngũ Hành Sơn còn sở hữu cảnh quan thiên nhiên tuyệt đẹp với tầm nhìn hướng ra biển Mỹ Khê và toàn cảnh thành phố Đà Nẵng. Từ trên cao, du khách có thể chiêm ngưỡng khung cảnh biển trời bao la kết hợp với núi non hùng vĩ, tạo nên một trải nghiệm rất ấn tượng.

Ngoài ra, khu vực xung quanh Ngũ Hành Sơn còn nổi tiếng với làng đá mỹ nghệ Non Nước – nơi sản xuất các sản phẩm điêu khắc đá tinh xảo. Du khách có thể tham quan, mua sắm quà lưu niệm và tìm hiểu về nghề truyền thống lâu đời của địa phương.

Ngũ Hành Sơn có vị trí rất thuận tiện, nằm giữa Đà Nẵng và Hội An, nên bạn có thể dễ dàng kết hợp tham quan nhiều địa điểm nổi tiếng khác như biển Mỹ Khê, cầu Rồng, phố cổ Hội An hay bán đảo Sơn Trà.

Thời điểm lý tưởng để tham quan Ngũ Hành Sơn là vào buổi sáng hoặc chiều mát, khi thời tiết dễ chịu và thuận tiện cho việc leo núi. Du khách nên mang giày thể thao để di chuyển dễ dàng và chuẩn bị nước uống đầy đủ.

---

Nếu bạn đang có kế hoạch khám phá Ngũ Hành Sơn và du lịch Đà Nẵng, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Đà Nẵng và miền Trung, bạn có thể tham khảo các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá Đà Nẵng

Ngũ Hành Sơn không chỉ là điểm đến tâm linh mà còn là nơi hội tụ vẻ đẹp thiên nhiên và văn hóa đặc sắc. Đây chắc chắn là điểm dừng chân mà bạn không nên bỏ lỡ khi đến Đà Nẵng.`,
  },

  "pho-co-hoi-an": {
    title: "Phố cổ Hội An",
              images: [
      "https://hoiancreativecity.com/uploads/images/hoi-an-quang-nam-vntrip-1.jpg",
      "https://dulichminhanh.com.vn/wp-content/uploads/2021/05/du-lich-hoi-an.jpg",
      "https://images.baodantoc.vn/uploads/2023/Th%C3%A1ng%204/Ng%C3%A0y_11/Ngs/kien-truc-pho-co-hoi-an-2_1665128843.jpg",
     ],
    content:`Phố cổ Hội An là một trong những điểm du lịch nổi tiếng nhất Việt Nam, được UNESCO công nhận là di sản văn hóa thế giới. Nằm bên bờ sông Hoài thơ mộng, Hội An thu hút du khách bởi vẻ đẹp cổ kính, yên bình cùng những giá trị văn hóa được gìn giữ qua hàng trăm năm.

Điểm đặc biệt của phố cổ Hội An chính là kiến trúc độc đáo với những ngôi nhà cổ mái ngói rêu phong, những con phố nhỏ lung linh ánh đèn lồng và không gian mang đậm dấu ấn giao thoa văn hóa giữa Việt Nam, Trung Hoa và Nhật Bản. Khi dạo bước trong phố cổ, du khách sẽ có cảm giác như quay ngược thời gian về một thương cảng sầm uất của thế kỷ trước.

Một trong những trải nghiệm không thể bỏ qua khi đến Hội An là dạo phố vào buổi tối. Khi hàng nghìn chiếc đèn lồng được thắp sáng, cả khu phố trở nên rực rỡ và lãng mạn. Du khách có thể thả hoa đăng trên sông Hoài, thưởng thức các món ăn đặc sản như cao lầu, mì Quảng, bánh mì Hội An và tận hưởng không khí yên bình nơi đây.

Ngoài ra, Hội An còn có nhiều điểm tham quan nổi bật như chùa Cầu, hội quán Phúc Kiến, nhà cổ Tấn Ký hay các làng nghề truyền thống. Du khách cũng có thể kết hợp tham quan các địa điểm gần đó như biển An Bàng, rừng dừa Bảy Mẫu hoặc di chuyển đến Đà Nẵng chỉ trong khoảng 30 phút.

Thời điểm lý tưởng để tham quan phố cổ Hội An là từ tháng 2 đến tháng 8, khi thời tiết khô ráo và thuận tiện cho việc dạo phố. Buổi tối là thời gian đẹp nhất để khám phá Hội An với không gian lung linh và nhộn nhịp.

---

Nếu bạn đang có kế hoạch khám phá phố cổ Hội An, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng – Hội An.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại miền Trung, bạn có thể tham khảo các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá Hội An

Phố cổ Hội An không chỉ là điểm đến du lịch mà còn là nơi lưu giữ những giá trị văn hóa, lịch sử quý báu. Đây chắc chắn là điểm dừng chân mà bạn không nên bỏ lỡ khi đến miền Trung Việt Nam.`,
  },

  "ban-dao-son-tra": {
    title: "Bán đảo Sơn Trà",
              images: [
      "https://danangfantasticity.com/wp-content/uploads/2025/08/ban-dao-son-tra-thanh-pho-da-nang.jpg",
      "https://furamavietnam.com/wp-content/uploads/2025/01/Furama-Resort-Danang-Linh-Ung-Pagoda-Chua-Noi-Tieng-O-Da-Nang-01.jpg",
      "https://static.vinwonders.com/2022/06/dinh-Ban-Co-1-1.jpg",
     ],
    content:`Bán đảo Sơn Trà là một trong những điểm du lịch nổi bật và hấp dẫn nhất tại Đà Nẵng, được ví như “lá phổi xanh” của thành phố. Nằm cách trung tâm không xa, nơi đây sở hữu cảnh quan thiên nhiên hoang sơ với rừng, biển và núi hòa quyện, tạo nên một không gian vô cùng trong lành và yên bình.

Sơn Trà nổi tiếng với hệ sinh thái đa dạng, đặc biệt là loài voọc chà vá chân nâu quý hiếm – được mệnh danh là “nữ hoàng linh trưởng”. Khi đến đây, du khách có thể trải nghiệm cảm giác hòa mình vào thiên nhiên, khám phá rừng nguyên sinh và tận hưởng không khí mát mẻ quanh năm.

Một trong những điểm tham quan nổi bật nhất tại bán đảo Sơn Trà là chùa Linh Ứng với tượng Phật Bà Quan Âm cao nhất Việt Nam. Từ vị trí này, du khách có thể phóng tầm mắt ngắm toàn cảnh biển Mỹ Khê và thành phố Đà Nẵng từ trên cao.

Ngoài ra, bán đảo Sơn Trà còn có nhiều địa điểm check-in nổi tiếng như đỉnh Bàn Cờ, cây đa ngàn năm, bãi Bụt, bãi Rạng hay các cung đường ven biển tuyệt đẹp. Đây là nơi lý tưởng cho các hoạt động như săn ảnh, trekking nhẹ, chạy xe ngắm cảnh hoặc đơn giản là thư giãn giữa thiên nhiên.

Sơn Trà cũng có vị trí rất thuận tiện để kết hợp tham quan các địa điểm nổi tiếng khác như cầu Rồng, Ngũ Hành Sơn, biển Mỹ Khê hay phố cổ Hội An. Nhờ đó, du khách có thể dễ dàng xây dựng một lịch trình du lịch đa dạng và hấp dẫn.

Thời điểm lý tưởng để tham quan bán đảo Sơn Trà là vào buổi sáng sớm hoặc chiều mát, khi thời tiết dễ chịu và ánh sáng đẹp. Du khách nên chuẩn bị phương tiện phù hợp, kiểm tra xe trước khi di chuyển và mang theo nước uống để đảm bảo an toàn.

---

Nếu bạn đang có kế hoạch khám phá bán đảo Sơn Trà, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Đà Nẵng và miền Trung, bạn có thể lựa chọn các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá Đà Nẵng

Bán đảo Sơn Trà không chỉ là điểm đến du lịch mà còn là nơi hội tụ vẻ đẹp thiên nhiên và sự bình yên hiếm có. Đây chắc chắn là điểm dừng chân mà bạn không nên bỏ lỡ khi đến Đà Nẵng.`,
  },

  "cau-tinh-yeu-da-nang": {
    title: "Cầu Tình Yêu",
              images: [
      "https://vietluxtour.com/Upload/images/2024/khamphatrongnuoc/C%E1%BA%A7u%20t%C3%ACnh%20y%C3%AAu%20%C4%90%C3%A0%20N%E1%BA%B5ng/cau-tinh-yeu-da-nang%20(7)-min.jpg",
      "https://statics.vinpearl.com/cau-tinh-yeu-da-nang-1_1629472108.jpg",
      "https://tourcaptreobana.com/wp-content/uploads/2023/12/anh-54.jpeg",
     ],
    content:`Cầu Tình Yêu là một trong những điểm check-in nổi tiếng và lãng mạn nhất tại Đà Nẵng, nằm bên bờ sông Hàn, gần khu vực cầu Rồng. Đây là địa điểm được nhiều cặp đôi và du khách yêu thích khi đến thành phố biển xinh đẹp này.

Lấy cảm hứng từ những cây cầu tình yêu nổi tiếng trên thế giới, Cầu Tình Yêu Đà Nẵng được thiết kế với không gian mở, hướng ra sông Hàn thơ mộng. Dọc theo lan can cầu là những chiếc đèn lồng đỏ hình trái tim, tạo nên khung cảnh vô cùng lãng mạn, đặc biệt vào buổi tối.

Một trong những hoạt động đặc trưng tại đây là treo ổ khóa tình yêu – biểu tượng cho sự gắn kết và bền lâu của các cặp đôi. Du khách có thể mua khóa tại khu vực gần cầu và ghi tên mình lên đó như một kỷ niệm đáng nhớ khi đến Đà Nẵng.

Từ Cầu Tình Yêu, du khách có thể dễ dàng ngắm nhìn toàn cảnh sông Hàn và cầu Rồng, đặc biệt vào buổi tối khi thành phố lên đèn. Đây cũng là vị trí lý tưởng để xem cầu Rồng phun lửa và nước vào cuối tuần.

Ngoài ra, khu vực xung quanh cầu rất nhộn nhịp với nhiều quán cà phê, nhà hàng và các điểm vui chơi. Du khách có thể kết hợp tham quan các địa điểm nổi tiếng khác như cầu Rồng, biển Mỹ Khê, bán đảo Sơn Trà hoặc Ngũ Hành Sơn.

Thời điểm đẹp nhất để tham quan Cầu Tình Yêu là vào buổi tối, khi không gian trở nên lung linh và lãng mạn. Đây cũng là lúc thích hợp để chụp ảnh và tận hưởng không khí sôi động của Đà Nẵng về đêm.

---

Nếu bạn đang có kế hoạch tham quan Cầu Tình Yêu và khám phá Đà Nẵng, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Đà Nẵng và miền Trung, bạn có thể lựa chọn các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá Đà Nẵng

Cầu Tình Yêu không chỉ là điểm check-in đẹp mà còn là nơi lưu giữ những khoảnh khắc lãng mạn và đáng nhớ khi bạn đến với thành phố Đà Nẵng.`,
  },

  "asia-park-da-nang": {
    title: "Asia Park",
              images: [
      "https://duan-sungroup.com/wp-content/uploads/2022/11/cong-vien-chau-a-asia-park-duoc-cai-tao-vao-nam-2020.jpg",
      "https://duan-sungroup.com/wp-content/uploads/2022/11/Asia-park-cong-vien-chau-a-da-nang-to-hop-vui-choi-giai-tri.jpg",
      "https://hoangphuan.com/wp-content/uploads/2024/05/check-in-asia-park-1.jpg",
     ],
    content:`Công viên Châu Á (Asia Park) là một trong những khu vui chơi giải trí lớn và hiện đại nhất tại Đà Nẵng, nằm bên bờ sông Hàn. Đây là điểm đến lý tưởng dành cho gia đình, nhóm bạn và du khách muốn trải nghiệm các hoạt động vui chơi, giải trí sôi động tại thành phố đáng sống.

Asia Park được thiết kế theo phong cách kết hợp giữa văn hóa các quốc gia châu Á và các trò chơi giải trí hiện đại. Nơi đây nổi bật với nhiều khu vực khác nhau như khu vui chơi cảm giác mạnh, khu văn hóa và khu ẩm thực, mang đến cho du khách trải nghiệm đa dạng và phong phú.

Điểm nhấn đặc biệt của công viên là vòng quay Sun Wheel – một trong những vòng quay lớn nhất Việt Nam. Khi lên đến đỉnh, du khách có thể ngắm toàn cảnh thành phố Đà Nẵng lung linh về đêm, đặc biệt là dòng sông Hàn và các cây cầu nổi tiếng.

Ngoài ra, Asia Park còn có nhiều trò chơi hấp dẫn dành cho mọi lứa tuổi, từ nhẹ nhàng đến cảm giác mạnh. Đây là nơi lý tưởng để vui chơi, giải trí và tạo nên những kỷ niệm đáng nhớ cùng bạn bè và gia đình.

Vào buổi tối, công viên trở nên rực rỡ với hệ thống ánh sáng hiện đại và không khí sôi động. Du khách có thể vừa tham gia trò chơi, vừa thưởng thức ẩm thực và tận hưởng không gian vui nhộn.

Asia Park có vị trí rất thuận tiện, gần trung tâm thành phố nên dễ dàng kết hợp tham quan các địa điểm nổi tiếng khác như cầu Rồng, cầu Tình Yêu, biển Mỹ Khê hoặc bán đảo Sơn Trà.

Thời điểm lý tưởng để tham quan Công viên Châu Á là vào buổi chiều và tối, khi thời tiết mát mẻ và các hoạt động giải trí diễn ra sôi động nhất.

---

Nếu bạn đang có kế hoạch vui chơi tại Công viên Châu Á và khám phá Đà Nẵng, việc lựa chọn phương tiện di chuyển phù hợp sẽ giúp chuyến đi thuận tiện và thoải mái hơn. Hiện nay, các dịch vụ xe dịch vụ Quảng Trị được nhiều du khách lựa chọn nhờ khả năng đưa đón tận nơi và linh hoạt về thời gian.

Đối với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị là giải pháp tiết kiệm chi phí mà vẫn đảm bảo sự tiện lợi trong suốt hành trình. Đây là lựa chọn phổ biến cho các tuyến Quảng Trị – Huế – Đà Nẵng.

Ngoài ra, nếu bạn muốn có một lịch trình trọn gói, kết hợp tham quan nhiều địa điểm nổi tiếng tại Đà Nẵng và miền Trung, bạn có thể lựa chọn các tour du lịch Tân Oanh để được hỗ trợ tốt nhất.

👉 Đặt xe dịch vụ Quảng Trị nhanh chóng – đưa đón tận nơi, chủ động lịch trình  
👉 Xe ghép Quảng Trị giá rẻ – phù hợp khách lẻ, nhóm nhỏ  
👉 Du lịch Tân Oanh – hành trình trọn gói, khám phá Đà Nẵng

Công viên Châu Á không chỉ là nơi vui chơi giải trí mà còn là điểm đến mang lại những trải nghiệm sôi động và đáng nhớ cho mọi du khách khi đến với Đà Nẵng.`,
  },
};

const relatedMap: Record<string, string[]> = {
  "thanh-co-quang-tri": ["dia-dao-vinh-moc", "cau-hien-luong-ben-hai", "bien-cua-viet"],
  "dia-dao-vinh-moc": ["thanh-co-quang-tri", "cau-hien-luong-ben-hai", "bien-cua-tung"],
  "cau-hien-luong-ben-hai": ["thanh-co-quang-tri", "dia-dao-vinh-moc", "bien-cua-viet"],
  "bien-cua-viet": ["thanh-co-quang-tri", "bien-cua-tung", "dao-con-co"],
  "thanh-dia-la-vang": ["thanh-co-quang-tri", "cau-hien-luong-ben-hai"],
  "dao-con-co": ["bien-cua-viet", "bien-cua-tung"],
  "bien-cua-tung": ["bien-cua-viet", "dao-con-co", "dia-dao-vinh-moc"],
  "rung-ru-linh": ["thanh-co-quang-tri", "bien-cua-tung"],

  "phong-nha-ke-bang": ["dong-thien-duong", "hang-son-doong", "suoi-mooc"],
  "hang-son-doong": ["phong-nha-ke-bang", "hang-en", "dong-thien-duong"],
  "dong-thien-duong": ["phong-nha-ke-bang", "suoi-mooc", "hang-son-doong"],
  "suoi-mooc": ["phong-nha-ke-bang", "dong-thien-duong", "bien-bao-ninh"],
  "bien-nhat-le": ["bien-bao-ninh", "con-cat-quang-phu", "phong-nha-ke-bang"],
  "con-cat-quang-phu": ["bien-nhat-le", "bien-bao-ninh"],
  "hang-en": ["hang-son-doong", "phong-nha-ke-bang"],
  "bien-bao-ninh": ["bien-nhat-le", "con-cat-quang-phu", "suoi-mooc"],

  "dai-noi-hue": ["chua-thien-mu", "song-huong-hue", "cho-dong-ba"],
  "lang-tu-duc": ["lang-khai-dinh", "doi-vong-canh", "song-huong-hue"],
  "chua-thien-mu": ["song-huong-hue", "dai-noi-hue", "cho-dong-ba"],
  "song-huong-hue": ["dai-noi-hue", "cho-dong-ba", "chua-thien-mu"],
  "cho-dong-ba": ["song-huong-hue", "dai-noi-hue", "lang-khai-dinh"],
  "lang-khai-dinh": ["lang-tu-duc", "doi-vong-canh", "dai-noi-hue"],
  "bien-lang-co": ["doi-vong-canh", "dai-noi-hue", "ba-na-hills"],
  "doi-vong-canh": ["lang-tu-duc", "lang-khai-dinh", "song-huong-hue"],

  "ba-na-hills": ["cau-rong-da-nang", "ngu-hanh-son", "pho-co-hoi-an"],
  "bien-my-khe": ["cau-rong-da-nang", "ban-dao-son-tra", "cau-tinh-yeu-da-nang"],
  "cau-rong-da-nang": ["bien-my-khe", "cau-tinh-yeu-da-nang", "ban-dao-son-tra"],
  "ngu-hanh-son": ["pho-co-hoi-an", "ban-dao-son-tra", "cau-rong-da-nang"],
  "pho-co-hoi-an": ["ngu-hanh-son", "cau-rong-da-nang", "bien-my-khe"],
  "ban-dao-son-tra": ["bien-my-khe", "cau-rong-da-nang", "cau-tinh-yeu-da-nang"],
  "cau-tinh-yeu-da-nang": ["cau-rong-da-nang", "bien-my-khe", "ban-dao-son-tra"],
  "asia-park-da-nang": ["cau-rong-da-nang", "bien-my-khe", "ngu-hanh-son"],
};

const serviceLinks = [
  {
    to: "/lien-he",
    label: "xe dịch vụ Quảng Trị",
  },
  {
    to: "/lien-he",
    label: "xe ghép Quảng Trị",
  },
];

const DiaDiemDetail = () => {
  const { slug } = useParams();
  const place = data[slug as string];

  if (!place) {
    return <div className="container py-20">Không tìm thấy địa điểm</div>;
  }

  const related = relatedMap[slug as string] || [];

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
              loading="lazy"
            />
          ))}
        </div>
      )}

      <p className="leading-8 text-lg text-muted-foreground whitespace-pre-line">
        {place.content}
      </p>

      {related.length > 0 && (
        <div className="mt-10 bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Địa điểm liên quan</h2>
          <ul className="space-y-2">
            {related.map((key) => (
              <li key={key}>
                <Link
                  to={`/${key}`}
                  className="text-primary hover:underline font-medium"
                >
                  {data[key].title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 bg-card border border-border rounded-xl p-6 space-y-3">
        <h2 className="text-lg font-bold">Dịch vụ xe du lịch Tân Oanh</h2>

        <p className="text-muted-foreground leading-7">
          Nếu bạn cần di chuyển thuận tiện đến các điểm du lịch miền Trung,
          hãy lựa chọn{" "}
          <Link
            to={serviceLinks[0].to}
            className="text-primary hover:underline font-medium"
          >
            {serviceLinks[0].label}
          </Link>{" "}
          hoặc{" "}
          <Link
            to={serviceLinks[1].to}
            className="text-primary hover:underline font-medium"
          >
            {serviceLinks[1].label}
          </Link>{" "}
          để được hỗ trợ đưa đón tận nơi, linh hoạt thời gian và tối ưu chi phí.
        </p>

        <div className="flex flex-col gap-2 text-sm">
          <a href="tel:0866600822" className="text-primary font-semibold">
            📞 Gọi ngay: 08.666.008.22
          </a>
          <a
            href="https://zalo.me/0866600822"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold"
          >
            💬 Chat Zalo đặt xe
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiaDiemDetail;
