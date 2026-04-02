import fs from "fs";

const BASE_URL = "https://dulichtanoanh.com";

const routes = [
  "/",
  "/tour-du-lich",
  "/gioi-thieu",
  "/lien-he",

  "/thanh-co-quang-tri",
  "/dia-dao-vinh-moc",
  "/cau-hien-luong-ben-hai",
  "/bien-cua-viet",
  "/bien-cua-tung",
  "/dao-con-co",

  "/phong-nha-ke-bang",
  "/dong-thien-duong",
  "/hang-son-doong",
  "/suoi-mooc",

  "/bien-nhat-le",
  "/bien-bao-ninh",
  "/con-cat-quang-phu",

  "/dai-noi-hue",
  "/chua-thien-mu",
  "/song-huong-hue",
  "/cho-dong-ba",
  "/lang-khai-dinh",
  "/doi-vong-canh",

  "/ba-na-hills",
  "/cau-rong-da-nang",
  "/ngu-hanh-son",
  "/ban-dao-son-tra",
  "/cau-tinh-yeu-da-nang",
  "/asia-park-da-nang",
  "/bien-my-khe",
  "/pho-co-hoi-an"
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>
`).join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", xml);

console.log("✅ Sitemap created!");
