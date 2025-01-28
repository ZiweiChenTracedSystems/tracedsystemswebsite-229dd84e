interface ImageBannerProps {
  src: string;
  alt: string;
  aspectRatio?: string;
}

export const ImageBanner = ({ src, alt, aspectRatio = "5.88" }: ImageBannerProps) => {
  return (
    <div className={`w-full aspect-[${aspectRatio}]`}>
      <img
        loading="lazy"
        srcSet={src}
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
};