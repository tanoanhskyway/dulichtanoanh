import { useParams, Link } from "react-router-dom";

const data: any = {
  "kinh-nghiem-di-da-nang-tu-quang-tri": {
    title: "Kinh nghiệm đi Đà Nẵng từ Quảng Trị",
    content: `
Đà Nẵng là điểm đến du lịch nổi tiếng miền Trung với nhiều địa điểm hấp dẫn như Bà Nà Hills, Cầu Rồng, Biển Mỹ Khê.

Từ Quảng Trị, bạn có thể di chuyển bằng xe ghép hoặc xe dịch vụ.

Xe ghép Quảng Trị là lựa chọn tiết kiệm, phù hợp khách lẻ.
Xe dịch vụ Quảng Trị phù hợp gia đình, nhóm đông.

Thời gian di chuyển khoảng 3–4 tiếng.
    `,
  },

  "gia-xe-quang-tri-di-hue": {
    title: "Giá xe Quảng Trị đi Huế mới nhất",
    content: `
Tuyến Quảng Trị – Huế rất phổ biến.

Xe ghép có giá rẻ, linh hoạt.
Xe dịch vụ riêng phù hợp nhóm đông.

Giá sẽ thay đổi tùy thời điểm và loại xe.
    `,
  },

  "nen-di-xe-ghep-hay-thue-xe": {
    title: "Nên đi xe ghép hay thuê xe riêng?",
    content: `
Xe ghép giúp tiết kiệm chi phí.
Xe riêng giúp chủ động thời gian.

Tùy nhu cầu mà bạn chọn phương án phù hợp.
    `,
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = data[slug as string];

  if (!post) {
    return <div className="container py-20">Không tìm thấy bài viết</div>;
  }

  return (
    <div className="container max-w-3xl py-16">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <p className="leading-8 text-lg whitespace-pre-line">
        {post.content}
      </p>

      {/* 🔥 INTERNAL LINK */}
      <div className="mt-10">
        <h3 className="font-bold mb-2">Xem thêm</h3>
        <Link to="/dia-diem/thanh-co-quang-tri" className="text-primary block">
          Thành cổ Quảng Trị
        </Link>
      </div>

      {/* 🔥 CTA */}
      <div className="mt-8 border p-4 rounded-lg">
        <p>
          👉 Đặt{" "}
          <Link to="/lien-he" className="text-primary font-semibold">
            xe ghép Quảng Trị
          </Link>{" "}
          hoặc{" "}
          <Link to="/lien-he" className="text-primary font-semibold">
            xe dịch vụ Quảng Trị
          </Link>
        </p>

        <a href="tel:0866600822" className="block mt-2 text-primary">
          📞 08.666.008.22
        </a>
      </div>
    </div>
  );
};

export default BlogDetail;
