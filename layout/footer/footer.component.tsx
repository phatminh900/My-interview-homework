import Text from "@/components/text/text.component";
import styles from "./footer.module.scss";
import Grid from "@/components/grid/grid.component";
import FooterAwards from "./footer-awards/footer-awards.component";
import FooterContact from "./footer-contact/footer-contact.component";
import FooterRecentTrips from "./footer-recent-trips/footer-recent-trips.component";
import FooterCopyright from "./footer-copyright/footer-copyright.component";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid columns={3} className={styles["footer__box"]}>
        <FooterAwards />
        <FooterContact />
        <FooterRecentTrips />
      </Grid>
      <FooterCopyright />
    </footer>
  );
};
export default Footer;
