import { cva, VariantProps } from "class-variance-authority";
interface MenuItemProps {
  label: string;
  icon?: "none" | "home" | "collective" | "analytics" | "feed";
}
const menuItemVariants = cva(
  [
    "hidden",
    "md:block",
    "text-sm",
    "font-medium",
    "px-4",
    "align-middle",
    "before:h-6",
    "before:w-6",
    "before:overflow-hidden",
    "before:align-middle",
    "before:mr-1",
    "before:bg-contain",
    "before:bg-no-repeat",
  ],
  {
    variants: {
      icon: {
        none: [],
        home: ["before:bg-home", "before:inline-block"],
        collective: ["before:bg-collective", "before:inline-block"],
        analytics: ["before:bg-analytics", "before:inline-block"],
        feed: ["before:bg-feed", "before:inline-block"],
      },
      status: {
        active: ["border-b-2 border-borderGreen mb-[-2px]"],
        inactive: ["border-none"],
      },
    },
    defaultVariants: {
      icon: "none",
      status: "inactive",
    },
  },
);

const MenuItem = ({ label, icon }: MenuItemProps) => {
  return <div className={menuItemVariants({ icon: icon as any })}>{label}</div>;
};

export default MenuItem;
