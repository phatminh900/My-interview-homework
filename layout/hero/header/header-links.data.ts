interface ISubLink {
  title: string;
  href: string;
  subLinks?: { title: string; href: string }[];
}
export interface ILink extends ISubLink {
  subLinks: ISubLink[];
}
export const LINKS: ILink[] = [
  {
    title: "Home",
    href: "#",
    subLinks: [
      { title: "Home 1 - Background Image", href: "#" },
      { title: "Home 2 - Youtube Video", href: "#" },
      { title: "Home 3 - Google Inspired", href: "#" },
      { title: "Home 4 - Travel Site", href: "#" },
    ],
  },
  {
    title: "Tours",
    href: "#",
    subLinks: [
      {
        title: "Tour Classic Fullwidth",
        href: "#",
        subLinks: [
          {
            title: "2 Columns",
            href: "#",
          },
          {
            title: "3 Columns",
            href: "#",
          },
          {
            title: "4 Columns",
            href: "#",
          },
        ],
      },
      {
        title: "Tour Classic Sidebar",
        href: "#",
        subLinks: [
          {
            title: "Right Sidebar",
            href: "#",
          },
          {
            title: "Left Sidebar",
            href: "#",
          },
        ],
      },
      {
        title: "Tour Grid Fullwidth",
        href: "#",
        subLinks: [
          {
            title: "2 Columns",
            href: "#",
          },
          {
            title: "3 Columns",
            href: "#",
          },
          {
            title: "4 Columns",
            href: "#",
          },
        ],
      },
      {
        title: "Tour Grid Sidebar",
        href: "#",
        subLinks: [
          {
            title: "Right Sidebar",
            href: "#",
          },
          {
            title: "Left Sidebar",
            href: "#",
          },
        ],
      },
      {
        title: "Tour List Sidebar",
        href: "#",
        subLinks: [
          {
            title: "Right Sidebar",
            href: "#",
          },
          {
            title: "Left Sidebar",
            href: "#",
          },
        ],
      },
      {
        title: "Tour Header Type",
        href: "#",
        subLinks: [
          {
            title: "Featured Image",
            href: "#",
          },
          {
            title: "Video",
            href: "#",
          },
        ],
      },
      {
        title: "Tour Categories",
        href: "#",
        subLinks: [
          {
            title: "Rural",
            href: "#",
          },
          {
            title: "Snow & Ice",
            href: "#",
          },
          {
            title: "Wildlife",
            href: "#",
          },
          {
            title: "Mountain",
            href: "#",
          },
        ],
      },
    ],
  },

  {
    title: "Booking",
    href: "#",
    subLinks: [
      {
        title: "Online Payment For Booking",
        href: "#",
        subLinks: [
          { title: "Variable Tour Pricing", href: "#" },
          { title: "Simple Tour Pricing", href: "#" },
        ],
      },
      {
        title: "Custom Booking Form",
        href: "#",
        subLinks: [
          { title: "Booking Form + Sub Tour", href: "#" },
          { title: "Booking Form + Custom Tour", href: "#" },
        ],
      },
      {
        title: "Tour Duration",
        href: "#",
        subLinks: [
          { title: "Single Day Tour", href: "#" },
          { title: "Multiple Days Tour", href: "#" },
        ],
      },
      {
        title: "Custom Booking URL for Affiliate Tour",
        href: "#",
      },

      {
        title: "Custom Booking using custom HTML & Shortcode",
        href: "#",
      },
      {
        title: "Header Options",
        href: "#",
        subLinks: [
          { title: "Standard Background Header", href: "#" },
          { title: "Video Background Header", href: "#" },
        ],
      },
      {
        title: "Layout Options",
        href: "#",
        subLinks: [
          { title: "Width Sidebar", href: "#" },
          { title: "Fullwidth", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Destinations",
    href: "#",
    subLinks: [
      {
        title: "Destination Fullwidth",
        href: "#",
      },
      {
        title: "Destionation + Video Header",
        href: "#",
      },
      { title: "Destination Right Sidebar", href: "#" },
      { title: "Destination Left Sidebar", href: "#" },
      { title: "Single Destination", href: "#" },
      { title: "Single Destination + Video", href: "#" },
    ],
  },
  {
    title: "Pages",
    href: "#",
    subLinks: [
      { title: "About us", href: "#" },
      { title: "Contact us", href: "#" },
      { title: "FAQs us", href: "#" },
      { title: "Gallery us", href: "#" },
      { title: "Page Fullwidth", href: "#" },
      { title: "Page + Video Background Header", href: "#" },
      { title: "Page Right Sidebar", href: "#" },
      { title: "Page Left Sidebar", href: "#" },
    ],
  },
  {
    title: "Blog",
    href: "#",
    subLinks: [
      { title: "Blog Right Sidebar", href: "#" },
      { title: "Blog Left Sidebar", href: "#" },
      { title: "Blog Fullwidth", href: "#" },
      { title: "Blog Grid Right Sidebar", href: "#" },
      { title: "Blog Grid Left Sidebar", href: "#" },
      { title: "Blog Grid Fullwidth", href: "#" },
      { title: "Blog Full + Grid Right Sidebar", href: "#" },
      { title: "Blog Full + Grid Left Sidebar", href: "#" },
      { title: "Blog Full + Grid Fullwidth", href: "#" },
    ],
  },
  {
    title: "Shortcodes",
    href: "#",
    subLinks: [
      { title: "Accordion & Toggles", href: "#" },
      { title: "Alert Boxes", href: "#" },
      { title: "Animated Content", href: "#" },
      { title: "Button & Social Icons", href: "#" },
      { title: "Columns", href: "#" },
      { title: "oogle Maps", href: "#" },
      { title: "Image Frame & Animation", href: "#" },
      { title: "Image Frame Teasers", href: "#" },
      { title: "Pricing Tables", href: "#" },
      { title: "Tabs", href: "#" },
    ],
  },
  {
    title: "Shop",
    href: "#",
    subLinks: [
      { title: "Shop Fullwidth", href: "#" },
      { title: "Shop Sidebar", href: "#" },
      { title: "Single Product Fullwidth", href: "#" },
      { title: "Single Product With Sidebar", href: "#" },
    ],
  },
];
