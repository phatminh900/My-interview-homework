import { HiClock, HiLocationMarker, HiPhone } from "react-icons/hi";

import Text from "@/components/text/text.component";
import styles from "./footer-contact.module.scss";
import { SOCIAL_CONTACTS } from "./footer-contact.data";
const FooterContact = () => {
  return (
    <div>
      <Text textType="title" className={styles["footer__title"]}>
        Contact Info
      </Text>
      <div className={styles["footer__info-box"]}>
        <div className={styles["footer__info"]}>
          <HiPhone />
          <span>1-567-124-44227</span>
        </div>
        <div className={styles["footer__info"]}>
          <HiLocationMarker />
          <span>184 Main Street East Perl Habour 8007</span>
        </div>
        <div className={styles["footer__info"]}>
          <HiClock />
          <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
        </div>
        <div className={styles["footer__social-info"]}>
          {SOCIAL_CONTACTS.map((contact, index) => (
            <a
              href={contact.href}
              key={index}
              style={{ backgroundColor: contact.bgColor }}
              className={styles["footer__social-media"]}
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FooterContact;
