export interface IOption {
  value: string;
  title: string;
}
export const MONTHS: IOption[] = [
  { value: "", title: "Any month" },
  {
    value: "january",
    title: "January",
  },
  {
    value: "february",
    title: "February",
  },
  {
    value: "march",
    title: "March",
  },
  {
    value: "april",
    title: "April",
  },
  {
    value: "may",
    title: "May",
  },
  {
    value: "june",
    title: "June",
  },
  {
    value: "july",
    title: "July",
  },
  {
    value: "august",
    title: "August",
  },
  {
    value: "september",
    title: "September",
  },
  {
    value: "october",
    title: "October",
  },
  {
    value: "november",
    title: "November",
  },
  {
    value: "december",
    title: "December",
  },
];
export const SORTBY: IOption[] = [
  { title: "Sort By Date", value: "date" },
  { title: "Price Low to High", value: "price_low" },
  { title: "Price High to Low", value: "price_high" },
  {
    title: "Sort by Name",
    value: "name",
  },
  {
    title: "Sory by Popularity",
    value: "popular",
  },
  {
    title: "Sort By Review Score",
    value: "review",
  },
];
export const CATEGORIES: IOption[] = [
  {
    title: "All categories",
    value: "all",
  },
  {
    title: "mountain",
    value: "Mountain",
  },
  {
    title: "Rural",
    value: "rural",
  },
  {
    title: "Snow & ice",
    value: "snow-ice",
  },
  {
    title: "Whildlife",
    value: "wildife",
  },
];
export const DESTINATIONS: IOption[] = [
  { title: "Any Destinations", value: "0" },
  { title: "Tokyo", value: "277" },
  { title: "Seoul", value: "321" },
  { title: "Paris", value: "312" },
  { title: "London", value: "32121" },
  { title: "Venice", value: "5442" },
  { title: "Miami", value: "123" },
  { title: "Rome", value: "532" },
  { title: "Prague", value: "4213" },
  { title: "California", value: "321" },
];
