import { Link } from "react-router-dom";

const posts = [
  {
    slug: "kinh-nghiem-di-da-nang-tu-quang-tri",
    title: "Kinh nghiệm đi Đà Nẵng từ Quảng Trị",
  },
  {
    slug: "gia-xe-quang-tri-di-hue",
    title: "Giá xe Quảng Trị đi Huế mới nhất",
  },
  {
    slug: "nen-di-xe-ghep-hay-thue-xe",
    title: "Nên đi xe ghép hay thuê xe riêng?",
  },
];

const Blog = () => {
  return (
    <div className="container max-w-3xl py-16">
      <h1 className="text-3xl font-bold mb-6">Blog du lịch & kinh nghiệm</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="text-primary text-lg font-medium hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
