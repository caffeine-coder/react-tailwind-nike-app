import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg dark:text-white">
          We provide you
          <span className="text-coral-red"> Super</span>{" "}
          <span className="text-coral-red">Qulaity</span> Shoes
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
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        ></img>
      </div>
    </section>
  );
};

export default SuperQuality;
