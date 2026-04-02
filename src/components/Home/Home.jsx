import React from "react";
import Hero from "./../../Pages/Homepages/Hero";
import Provide from "./../../Pages/Homepages/Provide";
import ContactForm from "../../common/ContactForm/ContactForm";
import ScrollToTopButton from "../../common/ScrollToTopButton";
import Offerings from "../../pages/Homepages/Offerings";
import Work from "../../pages/Homepages/Work";
import Newsletter from "../../common/Newsletter";
import Successful from "../../pages/Homepages/Successful";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* What we provide section  */}
      <Provide />

      {/* Our Offerings */}
      <section className="p-6 bg-slate-900">
        <div>
          <Offerings />
        </div>
      </section>

      {/* How Can We Work */}
      <Work />

      {/* Successful Softwares */}
      <Successful />

      {/* Newsletter */}
      <Newsletter />

      {/* Contact From */}
      <ContactForm />

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default Home;
