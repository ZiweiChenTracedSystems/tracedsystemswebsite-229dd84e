import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="aspect-[19.61] w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/8fffb79bafeb4a21bdba04753b4d29509a946148b38bb463dcb9a1744337ec88?placeholderIfAbsent=true"
          alt="Hero banner"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-[rgba(252,252,252,1)] w-full px-[70px] py-8 max-md:px-5">
        <div className="flex items-center gap-[40px_120px] flex-wrap max-w-7xl mx-auto">
          <div className="self-stretch min-w-60 w-[389px] my-auto">
            <div className="max-w-full w-[379px]">
              <h1 className="text-[rgba(23,58,68,1)] text-5xl font-bold max-md:text-[40px]">
                Traced Systems
              </h1>
              <h2 className="text-[#173A44] text-[23px] font-medium mt-[7px]">
                Digital Product Passport
              </h2>
              <p className="text-[#173A44] text-base font-medium mt-[51px] max-md:mt-10">
                One Scan, Countless Impacts.
              </p>
            </div>
            <div className="flex items-center gap-[37px] mt-[30px]">
              <Button
                variant="outline"
                className="w-[171px] h-[60px] rounded-[30px] border-[#E1B382] border-2 text-[#173A44] font-bold"
              >
                Get in touch
              </Button>
              <Button
                className="w-[171px] h-[60px] rounded-[30px] bg-[rgba(228,172,112,1)] border-[rgba(225,179,130,1)] text-[rgba(255,250,240,1)] font-bold text-lg"
              >
                Book Demo
              </Button>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/dbc33907709bb9b713e01b3765bdeb124ff28b6be64d08fbfdb6f0bede0045f8?placeholderIfAbsent=true"
            alt="Product visualization"
            className="aspect-[1.12] object-contain w-[649px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};