import { Hero } from "@/components/sections/Hero";
import { ProductInfo } from "@/components/sections/ProductInfo";
import { ImageBanner } from "@/components/ui/ImageBanner";

const Index = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col overflow-hidden items-stretch pb-24">
      <Hero />
      <ImageBanner
        src="https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/ca46f78fe2fe274114087230f09a00a4058089a1931aa8710092f5c5c0e1dcd4?placeholderIfAbsent=true"
        alt="Decorative banner"
      />
      <ProductInfo />
    </main>
  );
};

export default Index;