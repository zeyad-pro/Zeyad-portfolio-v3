export default async function sitemap() {
  return [
    {
      url: "https://zeyad-portfolio-v3.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
