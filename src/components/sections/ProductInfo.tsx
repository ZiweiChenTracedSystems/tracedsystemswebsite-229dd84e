export const ProductInfo = () => {
  return (
    <section className="w-full py-20">
      <div className="self-center flex items-center gap-[40px_80px] flex-wrap ml-[27px] max-w-7xl mx-auto">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/52009ad766857e633c113aee9e3e0127fc777af83238a87e4c7ba367fb9a06f8?placeholderIfAbsent=true"
          alt="Product features"
          className="aspect-[0.98] object-contain w-[535px] self-stretch min-w-60 my-auto rounded-[0px_0px_0px_0px] max-md:max-w-full"
        />
        <div className="self-stretch min-w-60 w-[617px] my-auto max-md:max-w-full">
          <div className="w-full text-[#173A44] font-bold">
            <div className="min-h-[79px]">
              <h2 className="text-[23px]">Traced Systems developed</h2>
              <h3 className="text-[40px]">Digital Product Passport</h3>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/7f55c3503d484ddc8abda1588289bcfc/432fb3ea7e558cf47f5cd6819396ae4309f2b95ee67a26d78de0370fe73afac9?placeholderIfAbsent=true"
              alt="Decorative element"
              className="aspect-[20.41] object-contain w-[82px] mt-[49px] max-md:mt-10"
            />
          </div>
          <div className="w-[576px] max-w-full text-base mt-[53px] max-md:mt-10">
            <section className="mb-6">
              <h4 className="text-[#143A44] font-bold mb-2">Our Solution</h4>
              <p className="text-[rgba(20,58,68,1)]">
                Our solution shines a light on the often opaque world of supply chains. 
                By leveraging supply chain transparency, we support businesses in their 
                journey of transition towards a circular economy.
              </p>
            </section>
            <section className="mb-6">
              <h4 className="text-[#143A44] font-bold mb-2">Our Service</h4>
              <p className="text-[#143A44]">
                Our service plays an instrumental role in enabling businesses to align 
                their operations with sustainable business models.
              </p>
            </section>
            <section>
              <h4 className="text-[#143A44] font-bold mb-2">[A Subtitle]</h4>
              <p className="text-[#143A44]">
                A complete digital record that tracks a product's entire lifecycle, 
                enhancing transparency, sustainability, and compliance across key 
                sectors like batteries and textile.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};