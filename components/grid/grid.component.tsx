import styles from "./grid.module.scss";
interface IGridProps {
  columns: number;
  rows?: number;
  className?: string;
  children: React.ReactNode;
}
const Grid = ({ className, children, columns, rows }: IGridProps) => {
  return (
    <section
      className={`${className} ${styles.grid} ${styles[`grid--${columns}`]} `}
      style={{
        gridTemplateRows: `repeat(${rows},fr)`,
      }}
    >
      {children}
    </section>
  );
};
export default Grid;
