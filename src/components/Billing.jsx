import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <img className="w-full h-full relative z-[5]" src={bill} alt="bill" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white-gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink-gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br />
          billing & invoicing
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          temporibus error, ullam omnis a excepturi molestiae est amet dolor
          accusamus dolorum fuga fugiat vero eius cum deleniti autem ipsa
          aperiam?
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple" className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`} />
          <img src={google} alt="google" className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`} />
        </div>
      </div>
    </section>
  );
};

export default Billing;
