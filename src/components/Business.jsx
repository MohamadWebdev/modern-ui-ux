import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          with the right credit card, you can get the business funds you need to
          succeed. We offer a range of credit card options to help you reach
          your financial goals. Our credit cards are designed to provide you
          with the flexibility and convenience you need to manage your business
          finances.
        </p>

        <Button styles={"mt-10"} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
