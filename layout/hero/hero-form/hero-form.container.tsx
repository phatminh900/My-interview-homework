"use client";
import { useState } from "react";
import {
  HiCalendar,
  HiChevronDown,
  HiCurrencyDollar,
  HiSearch,
} from "react-icons/hi";
import { LuDollarSign } from "react-icons/lu";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import HeroInputBox from "./hero-input-box.component";
import styles from "./hero-form.module.scss";
import Button from "@/components/button/button.component";
import {
  CATEGORIES,
  DESTINATIONS,
  MONTHS,
  SORTBY,
  IOption,
} from "./hero-form.data";
import Grid from "@/components/grid/grid.component";
const HeroForm = () => {
  const [isOpenAdvancedSearch, setIsOpenAdvancedSearch] = useState(false);
  const handleToggleAdvancedSearch = () =>
    setIsOpenAdvancedSearch((prev) => !prev);
  return (
    <form className={styles.form}>
      <Grid columns={4} className={styles["form__box"]}>
        <HeroInputBox>
          <input placeholder="Destination, city" type="text" />
          <div className={styles["form__icon-box"]}>
            <HiSearch />
          </div>
        </HeroInputBox>
        <HeroInputBox>
          <HeroInputSelect data={MONTHS} />
          <div className={styles["form__icon-box"]}>
            <HiCalendar />
          </div>
        </HeroInputBox>

        <HeroInputBox>
          <HeroInputSelect data={SORTBY} />
          <div className={styles["form__icon-box"]}>
            <CgArrowsExchangeAltV />
          </div>
        </HeroInputBox>
        <Button className={styles["form__btn"]}>Search</Button>

        {/* Advanced search */}

        {isOpenAdvancedSearch && (
          <>
            <HeroInputBox>
              <HeroInputSelect data={CATEGORIES} />
              <div className={styles["form__icon-box"]}>
                <HiChevronDown />
              </div>
            </HeroInputBox>

            <HeroInputBox>
              <HeroInputSelect data={DESTINATIONS} />
              <div className={styles["form__icon-box"]}>
                <HiChevronDown />
              </div>
            </HeroInputBox>

            <HeroInputBox>
              <input placeholder="Max budget ex 500$" type="text" />
              <div className={styles["form__icon-box"]}>
                <LuDollarSign />
              </div>
            </HeroInputBox>
          </>
        )}
        <button
          onClick={handleToggleAdvancedSearch}
          type="button"
          className={`${styles["form__advanced-btn"]} ${
            isOpenAdvancedSearch && styles["form__advanced-btn--active"]
          }`}
        >
          <HiChevronDown />
          <span>Advanced Search</span>
        </button>
      </Grid>
    </form>
  );
};

const HeroInputSelect = ({ data }: { data: IOption[] }) => {
  return (
    <select>
      {data.map(({ title, value }) => (
        <option key={title} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};
export default HeroForm;
