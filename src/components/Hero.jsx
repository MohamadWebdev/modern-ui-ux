import styles from "../style";
import discount from "../assets/discount.svg";
import { GetStarted } from "../components";
import robot from "../assets/robot.png";

const Hero = () => {
  console.log();

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span>
            &nbsp; Discount For &nbsp;
            <span className="text-white">1 Month</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
          >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a data-driven approach to create the perfect plan for your business. We take the time to understand your unique needs and goals, and then we use our expertise to develop a plan that will help you achieve success.
        </p>
      </div>

      <div className={`relative ${styles.flexStart} flex-1 flex md:my-0 my-10`}>
        <img src={robot} alt="billing" className="w-[100%] h-full z-10" />

        <div className="z-0 w-[40%] absolute h-[35%] top-0 pink__gradient"></div>
        <div className="z-1 w-[80%] absolute h-[85%] bottom-40 white__gradient rounded-full"></div>
        <div className="z-2 w-[50%] absolute h-[55%] right-20 bottom-20 blue__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
