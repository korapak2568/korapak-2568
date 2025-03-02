import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import AiCompanionsPage from "../../../components/AiCompanions/AiCompanionsPage";
import { Info } from "@/data/info/Info";
import AiSolutionsPage from "@/components/AiSolutions/AiSolutionsPage";
import { Metadata } from "next";
import { ChornMetadata } from "@/data/metadata/ChornMetadata";

export const metadata: Metadata = ChornMetadata.llmAi;

const Page = () => {
  return (
    <>
      <Navbar />
      <PageBanner pageTitle={Info.Service.title} />
      <AiSolutionsPage />
      <AiCompanionsPage />
      <Footer />
    </>
  );
};

export default Page;
