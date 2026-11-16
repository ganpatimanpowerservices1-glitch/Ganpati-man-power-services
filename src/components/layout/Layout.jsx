import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import MobileActionBar from "./MobileActionBar";

export default function Layout({ children }) {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <div className="pb-16 md:pb-0">{children}</div>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </>
  );
}