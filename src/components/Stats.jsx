import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap mb-6 sm:mb-20 flex-row`}>
    {stats.map((stat) => (
      <div className={`flex-1 flex sm:justify-start justify-center items-center flex-row m-3`} key={stat.id}>
        <h4 className="font-poppins font-semibold md:text-[40px] xs:text-[30px] text-[25px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
