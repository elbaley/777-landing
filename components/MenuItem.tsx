import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
interface MenuItemProps {
  forModal?: boolean;
  withTag?: boolean;
  label: string;
  icon?: "none" | "home" | "collective" | "analytics" | "feed";
  status?: "active" | "inactive";
  path: string;
}
const menuItemVariants = cva(
  [
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
    "hover:opacity-80",
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
      intent: {
        navbar: ["hidden"],
        menu: ["block"],
      },
      tag: {
        none: [""],
        soon: [
          "after:content-['SOON']",
          "after:text-[8px]",
          "after:absolute",
          "after:top-[-2px]",
          "after:text-success",
        ],
      },
    },
    defaultVariants: {
      icon: "none",
      status: "inactive",
      tag: "soon",
    },
  },
);

const MenuItem = ({
  forModal,
  withTag,
  label,
  icon,
  path,
  status = "inactive",
}: MenuItemProps) => {
  return (
    <Link href={path}>
      <div
        className={menuItemVariants({
          icon: icon as any,
          status: status,
          intent: forModal ? "menu" : "navbar",
          tag: withTag ? "soon" : "none",
        })}
      >
        {label}
      </div>
    </Link>
  );
};

export default MenuItem;
