import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section
      className="flex justify-wrap items-center max-xl:flex-col-reverse 
    gap-10 max-container"
    >
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-white">
          Discover the most premium quality shoes, where elegance meets enduring
          quality in every pair of shoes. At StepLux, we are dedicated to
          providing you with premium quality footwear that blends contemporary
          design with classic comfort.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:text-white">
          We believe in providing a seamless shopping experience with customer
          service that matches the superior standard of our products.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray "
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
