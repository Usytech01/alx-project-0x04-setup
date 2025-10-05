import Footer from "../layout/Footer";
import Header from "./Header";
import { LayoutProps } from "@/components/interfaces";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;