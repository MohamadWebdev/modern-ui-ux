import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>

      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        fuga facilis quis cupiditate a dignissimos dolorum. Est fuga nihil
        necessitatibus explicabo similique cupiditate. Neque, placeat fugiat
        voluptate dicta iure perferendis?
      </p>
      <Button styles={"mt-10"} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className={`w-full h-fulls`}/>
    </div>
  </section>
);

export default CardDeal;
