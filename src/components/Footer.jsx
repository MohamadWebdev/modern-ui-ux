import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`w-full`}>
          <div className="flex-1 flex flex-col xs:justify-start justify-center xs:items-start items-center">
            <img
              src={logo}
              alt="logo"
              className="w-[266px] h-[72px] object-contain"
            />

            <p className={`${styles.paragraph} mt-4 max-w-[310px] xs:text-left text-center`}>
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>

          <div
            className={`flex-[1.5] flex w-full flex-row justify-between flex-wrap mt-10`}
          >
            {footerLinks.map((footerLink) => (
              <div
                className="flex flex-col ss:my-0 my-4 min-w-[150px] xs:w-auto w-full xs:items-start items-center xs:justify-start justify-center"
                key={footerLink.key}
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerLink.title}
                </h4>

                <ul className="flex flex-col xs:justify-start justify-center xs:items-start items-center">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px text-dimWhite hover:text-secondary`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
