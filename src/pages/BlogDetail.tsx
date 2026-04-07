import { Link, useParams } from "react-router-dom";

type BlogPost = {
  title: string;
  image: string;
  content: string;
};

const data: Record<string, BlogPost> = {
  "kinh-nghiem-di-da-nang-tu-quang-tri": {
    title: "Kinh nghiệm đi Đà Nẵng từ Quảng Trị tiết kiệm và thuận tiện",
    image:
      "https://images2.thanhnien.vn/528068263637045248/2025/6/18/the-legend-danang-1-17502421275011965589401.jpg",
    content: `Đà Nẵng là một trong những điểm đến được nhiều du khách lựa chọn khi xuất phát từ Quảng Trị nhờ khoảng cách không quá xa, đường đi thuận tiện và có nhiều địa điểm nổi tiếng như Cầu Rồng, Biển Mỹ Khê, Bà Nà Hills hay Ngũ Hành Sơn.

Từ Quảng Trị, bạn có thể lựa chọn nhiều hình thức di chuyển khác nhau. Trong đó, xe ghép Quảng Trị là phương án phù hợp với khách đi lẻ hoặc nhóm nhỏ vì chi phí tiết kiệm hơn mà vẫn đảm bảo thuận tiện. Nếu bạn đi cùng gia đình hoặc cần chủ động lịch trình, xe dịch vụ Quảng Trị là lựa chọn thoải mái hơn.

Thời gian di chuyển từ Quảng Trị đến Đà Nẵng thường vào khoảng 3 đến 4 tiếng tùy điểm đón và tình hình giao thông. Để chuyến đi thuận lợi, bạn nên đặt xe sớm, đặc biệt vào cuối tuần hoặc dịp lễ.

Một số lưu ý hữu ích là nên mang hành lý gọn nhẹ, xác nhận giờ khởi hành trước với nhà xe và lựa chọn đơn vị có hỗ trợ đưa đón tận nơi để tiết kiệm thời gian. Ngoài ra, nếu muốn kết hợp tham quan thêm Huế hoặc Hội An, bạn cũng nên lên lịch trình từ trước để tối ưu chuyến đi.

Nếu bạn đang cần phương án di chuyển phù hợp từ Quảng Trị đi Đà Nẵng, việc lựa chọn xe ghép Quảng Trị hoặc xe dịch vụ Quảng Trị uy tín sẽ giúp chuyến đi thuận tiện hơn nhiều.

👉 Liên hệ ngay để đặt xe ghép Quảng Trị nhanh chóng  
👉 Hỗ trợ xe dịch vụ Quảng Trị đi Đà Nẵng linh hoạt  
👉 Đồng hành cùng du lịch Tân Oanh trong hành trình miền Trung`,
  },

  "gia-xe-quang-tri-di-hue": {
    title: "Giá xe Quảng Trị đi Huế mới nhất",
    image:
      "https://media.vietravel.com/images/Content/du-lich-song-huong-hue-1.jpg",
    content: `Tuyến Quảng Trị đi Huế là một trong những tuyến di chuyển phổ biến, phục vụ nhu cầu tham quan, công tác và đưa đón sân bay. Giá xe trên tuyến này sẽ tùy thuộc vào hình thức di chuyển mà bạn lựa chọn.

Với khách đi lẻ hoặc nhóm nhỏ, xe ghép Quảng Trị thường là phương án tiết kiệm chi phí hơn. Trong khi đó, xe dịch vụ Quảng Trị phù hợp với gia đình hoặc nhóm bạn muốn chủ động thời gian, điểm đón và lịch trình.

Ngoài giá xe, bạn cũng nên quan tâm đến các yếu tố như thời gian đón, loại xe, kinh nghiệm tài xế và sự linh hoạt khi thay đổi lịch trình. Một chuyến đi giá hợp lý nhưng kém tiện lợi chưa chắc đã là lựa chọn tốt nhất.

Để có chuyến đi thoải mái và đúng giờ, bạn nên liên hệ trước để được báo giá phù hợp theo nhu cầu thực tế.

👉 Hỗ trợ báo giá xe ghép Quảng Trị đi Huế  
👉 Tư vấn xe dịch vụ Quảng Trị theo nhóm và gia đình  
👉 Du lịch Tân Oanh hỗ trợ lịch trình linh hoạt`,
  },

  "nen-di-xe-ghep-hay-thue-xe": {
    title: "Nên đi xe ghép hay thuê xe riêng?",
    image:
      "https://queenbus.com.vn/wp-content/uploads/2025/08/Cau-Rong-bieu-tuong-du-lich-Da-Nang-Anh-Suu-tam-1024x683.png",
    content: `Đây là câu hỏi rất nhiều người đặt ra khi chuẩn bị di chuyển trong khu vực miền Trung. Thực tế, việc chọn xe ghép hay thuê xe riêng sẽ phụ thuộc vào số lượng người đi, ngân sách và mức độ linh hoạt bạn mong muốn.

Xe ghép Quảng Trị phù hợp nếu bạn đi một mình hoặc đi nhóm nhỏ, muốn tiết kiệm chi phí và không quá gấp về thời gian. Hình thức này hiện rất phổ biến và khá tiện lợi nếu chọn đúng đơn vị uy tín.

Trong khi đó, xe dịch vụ Quảng Trị sẽ phù hợp hơn nếu bạn đi cùng gia đình, có trẻ nhỏ, người lớn tuổi hoặc cần chủ động hoàn toàn về thời gian và điểm đón trả. Thuê xe riêng thường cho trải nghiệm thoải mái hơn và linh hoạt hơn.

Nếu bạn muốn chuyến đi rẻ và tiện, xe ghép là lựa chọn tốt. Nếu bạn muốn riêng tư và chủ động, xe dịch vụ là lựa chọn phù hợp hơn.

👉 Tư vấn chọn xe ghép Quảng Trị hay xe dịch vụ Quảng Trị  
👉 Hỗ trợ đặt xe theo lịch trình thực tế  
👉 Du lịch Tân Oanh đồng hành cùng mọi chuyến đi`,
  },

  "lich-trinh-du-lich-quang-tri-1-ngay": {
    title: "Lịch trình du lịch Quảng Trị 1 ngày gợi ý chi tiết",
    image:
      "https://cms.junglebosstours.com/assets/9dba0c19-b575-4fc7-b973-439dc1a6114f?format=webp",
    content: `Nếu bạn chỉ có một ngày ở Quảng Trị, vẫn hoàn toàn có thể khám phá được nhiều điểm đến ý nghĩa nếu sắp xếp lịch trình hợp lý. Một gợi ý phổ biến là bắt đầu từ Thành cổ Quảng Trị vào buổi sáng, sau đó di chuyển đến Cầu Hiền Lương – Sông Bến Hải và Địa đạo Vịnh Mốc. Buổi chiều, bạn có thể kết hợp thư giãn tại Biển Cửa Việt hoặc Biển Cửa Tùng.

Với lịch trình như vậy, việc chủ động phương tiện là rất quan trọng. Xe dịch vụ Quảng Trị sẽ giúp bạn tiết kiệm thời gian và đi được nhiều điểm hơn trong ngày. Nếu bạn đi nhóm nhỏ, cũng có thể tham khảo xe ghép Quảng Trị cho phù hợp ngân sách.

Ngoài ra, bạn nên đi sớm, mang theo nước uống, chuẩn bị giày dép thoải mái và sắp xếp thứ tự điểm đến theo khoảng cách địa lý để tránh mất thời gian.

👉 Gợi ý lịch trình 1 ngày tại Quảng Trị  
👉 Hỗ trợ xe dịch vụ Quảng Trị đi nhiều điểm trong ngày  
👉 Du lịch Tân Oanh giúp bạn tối ưu chuyến đi`,
  },

  "cach-dat-xe-ghep-quang-tri": {
    title: "Cách đặt xe ghép Quảng Trị nhanh và tiện lợi",
    image:
      "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/05_2021/du-lich-bien-cua-viet-o-dau.jpg",
    content: `Đặt xe ghép Quảng Trị hiện nay khá đơn giản, nhưng để chuyến đi thuận lợi bạn vẫn nên nắm một vài lưu ý cơ bản. Trước hết, bạn nên xác định rõ tuyến đi, ngày đi, số lượng người và giờ mong muốn để được tư vấn nhanh hơn.

Cách phổ biến nhất là liên hệ trực tiếp qua hotline hoặc Zalo. Khi đặt xe, nên hỏi rõ về điểm đón, giờ khởi hành, thời gian di chuyển và mức giá tham khảo. Nếu đi vào dịp cuối tuần hoặc lễ, bạn nên đặt sớm để tránh hết chỗ.

Ngoài xe ghép, nhiều khách hàng cũng kết hợp hỏi thêm xe dịch vụ Quảng Trị trong trường hợp muốn đổi sang đi riêng nếu nhóm đông hơn hoặc có yêu cầu lịch trình riêng.

👉 Đặt xe ghép Quảng Trị nhanh qua hotline  
👉 Chat Zalo để được tư vấn ngay  
👉 Du lịch Tân Oanh hỗ trợ linh hoạt mọi lịch trình`,
  },

  "top-dia-diem-du-lich-quang-tri": {
    title: "Top địa điểm du lịch Quảng Trị nên đi",
    image:
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2024/10/24/2824-14-31-25.jpg",
    content: `Quảng Trị không chỉ nổi tiếng với những di tích lịch sử đặc biệt mà còn có nhiều điểm đến hấp dẫn dành cho du khách yêu thích thiên nhiên và du lịch biển. Những địa điểm nổi bật thường được nhiều người lựa chọn gồm Thành cổ Quảng Trị, Địa đạo Vịnh Mốc, Cầu Hiền Lương – Sông Bến Hải, Thánh địa La Vang, Biển Cửa Việt và Biển Cửa Tùng.

Nếu muốn khám phá nhiều điểm trong một chuyến đi, bạn nên lên kế hoạch từ trước và lựa chọn phương tiện phù hợp. Xe dịch vụ Quảng Trị sẽ rất thuận tiện cho gia đình hoặc nhóm bạn, trong khi xe ghép Quảng Trị phù hợp hơn với khách đi lẻ.

Ngoài ra, bạn có thể kết hợp thêm các tuyến đi Huế, Đà Nẵng hoặc Quảng Bình để chuyến đi phong phú hơn.

👉 Khám phá các địa điểm nổi bật tại Quảng Trị  
👉 Hỗ trợ xe ghép Quảng Trị và xe dịch vụ Quảng Trị  
👉 Du lịch Tân Oanh đồng hành cùng chuyến đi miền Trung`,
  },
};

const relatedPosts: Record<string, string[]> = {
  "kinh-nghiem-di-da-nang-tu-quang-tri": [
    "nen-di-xe-ghep-hay-thue-xe",
    "gia-xe-quang-tri-di-hue",
  ],
  "gia-xe-quang-tri-di-hue": [
    "nen-di-xe-ghep-hay-thue-xe",
    "kinh-nghiem-di-da-nang-tu-quang-tri",
  ],
  "nen-di-xe-ghep-hay-thue-xe": [
    "kinh-nghiem-di-da-nang-tu-quang-tri",
    "gia-xe-quang-tri-di-hue",
  ],
  "lich-trinh-du-lich-quang-tri-1-ngay": [
    "top-dia-diem-du-lich-quang-tri",
    "cach-dat-xe-ghep-quang-tri",
  ],
  "cach-dat-xe-ghep-quang-tri": [
    "nen-di-xe-ghep-hay-thue-xe",
    "gia-xe-quang-tri-di-hue",
  ],
  "top-dia-diem-du-lich-quang-tri": [
    "lich-trinh-du-lich-quang-tri-1-ngay",
    "cach-dat-xe-ghep-quang-tri",
  ],
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = data[slug as string];

  if (!post) {
    return <div className="container py-20">Không tìm thấy bài viết</div>;
  }

  const related = relatedPosts[slug as string] || [];

  return (
    <>
      <section className="bg-primary py-16">
        <div className="container text-primary-foreground text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            {post.title}
          </h1>
          <p className="text-lg opacity-90">
            Chia sẻ kinh nghiệm du lịch và di chuyển thực tế
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <article className="space-y-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[320px] object-cover rounded-xl"
            />

            <p className="leading-8 text-lg text-muted-foreground whitespace-pre-line">
              {post.content}
            </p>

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4">Xem thêm bài liên quan</h2>
              <ul className="space-y-2">
                {related.map((key) => (
                  <li key={key}>
                    <Link
                      to={`/blog/${key}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {data[key].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <h2 className="text-lg font-bold">Dịch vụ xe du lịch Tân Oanh</h2>
              <p className="text-muted-foreground leading-7">
                Nếu bạn cần đặt{" "}
                <Link to="/xe-ghep" className="text-primary font-medium hover:underline">
                  xe ghép Quảng Trị
                </Link>{" "}
                hoặc{" "}
                <Link
                  to="/xe-du-lich"
                  className="text-primary font-medium hover:underline"
                >
                  xe dịch vụ Quảng Trị
                </Link>
                , hãy liên hệ để được hỗ trợ nhanh chóng, đưa đón tận nơi và
                linh hoạt lịch trình.
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

            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4">Địa điểm nổi bật</h2>
              <div className="flex flex-col gap-2">
                <Link
                  to="/dia-diem/thanh-co-quang-tri"
                  className="text-primary font-medium hover:underline"
                >
                  Thành cổ Quảng Trị
                </Link>
                <Link
                  to="/dia-diem/cau-rong-da-nang"
                  className="text-primary font-medium hover:underline"
                >
                  Cầu Rồng Đà Nẵng
                </Link>
                <Link
                  to="/dia-diem/pho-co-hoi-an"
                  className="text-primary font-medium hover:underline"
                >
                  Phố cổ Hội An
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
