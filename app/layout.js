// Import all components
import Providers from "@/clientComponents/Providers";
import Header from "@/components/Header";
// Import all scss file
import "../styles/Global.scss";
import "../styles/Header.scss";
import "../styles/Top.scss";
import "../styles/Home.scss";
import "../styles/LoadingSpinner.scss";
import Footer from "@/components/Footer";
import Top from "@/components/Top";
export const metadata = {
  title: "Next js Ecommerce",
  description: "Ready Ecommerce with Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Top />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
