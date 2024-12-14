import React from "react";
import Analytics from "../../components/analytics/Analytics";
import Cards from "../../components/cards/Cards";
import EmailContact from "../../components/emailContact/EmailContact";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <EmailContact />
      <Cards />
      <Footer />
    </>
  );
}
