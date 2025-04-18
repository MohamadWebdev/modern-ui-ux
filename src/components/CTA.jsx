import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px]`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our service now.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        corrupti quam qui assumenda alias fugiat nesciunt facere? Vero harum
        eveniet, natus fuga sed esse. Inventore mollitia porro impedit sapiente
        aut.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles={'sm:mb-0 mb-5'} />
    </div>
  </section>
);

export default CTA;
