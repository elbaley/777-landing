import MenuItem from "./MenuItem";

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="relative max-w-container mx-auto h-10 flex items-center mt-10 justify-center md:justify-between">
      <MenuItem label="Home" icon="home" />
      <MenuItem label="Collective" icon="collective" />
      <img src="/logo.png" />
      <MenuItem label="Analytics" icon="analytics" />
      <MenuItem label="Feed" icon="feed" />
      {/* TODO implement hamburger menu */}
      <button className="md:hidden absolute left-3">=</button>
    </nav>
  );
};

export default Navbar;
