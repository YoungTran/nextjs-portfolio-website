import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Young Tran"
        description="Software Engineer based in Bay Area"
        canonical="https://www.youngtran.tech/"
        openGraph={{
          url: "https://www.youngtran.tech/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.youngtran.tech/favicon.ico",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
          ],
        }}
      />
    </div>
  );
}
