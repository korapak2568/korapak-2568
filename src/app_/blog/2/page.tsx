import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import BlogThreeColumn from "../../../components/Blog/BlogThreeColumn";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Three Column"  />

      <BlogThreeColumn />

      <Footer />
    </>
  );
}
