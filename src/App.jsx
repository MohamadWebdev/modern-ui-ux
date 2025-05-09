import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> {/*done*/}
          <Business />{/*done*/}
          <Billing />{/*done*/}
          <CardDeal />{/*done*/}
          <Testimonials />{/*done*/}
          <Clients />{/*done*/}
          <CTA />{/*done*/}
          <Footer />{/*done*/}
        </div>
      </div>
    </div>
  );
};

export default App;
