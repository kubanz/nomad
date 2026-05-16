import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      {children}
      <Footer />
    </>
  );
}
