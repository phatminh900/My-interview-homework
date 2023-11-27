import styles from "./ribbon-price.module.scss";
interface IRibbonPriceProps {
  salesPrice: number;
  originalPrice: number;
  className?: string;
}
const RibbonPrice = ({
  originalPrice,
  salesPrice,
  className,
}: IRibbonPriceProps) => {
  const formatCurrency = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });
  return (
    <p className={`${styles["ribbon"]} ${className}`}>
      $
      {originalPrice === salesPrice ? (
        formatCurrency.format(originalPrice)
      ) : (
        <>
          <span className={styles["ribbon__sale-price"]}>
            {formatCurrency.format(originalPrice)}
          </span>
          <span>${formatCurrency.format(salesPrice)}</span>
        </>
      )}
    </p>
  );
};
export default RibbonPrice;
