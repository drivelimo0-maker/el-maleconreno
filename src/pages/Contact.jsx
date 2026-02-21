import React from "react";
import {
  Fish,
  UtensilsCrossed,
  Martini,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import CommonHero from "../components/CommonHero/CommonHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";

export default function Contact() {
  return (
    <>
      <CommonHero title="Contact Us" link="/" />

      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              A Coastal Dining Experience
            </h2>
            Dive into our extensive menu featuring dozens of seafood
            specialties! Explore traditional Platillos like{" "}
            <span className="primary"> Mojarra Frita</span> and{" "}
            <span className="primary">Shrimp A La Diabla,</span> or customize
            your experience with our famous Sinaloa Style Sushi, including the
            {""} <span className="primary">Dubai </span> and{" "}
            <span className="primary"> Marbella </span>rolls. Don’t forget our
            incredible variety of cocktails and ceviches. We bring the best of
            the Mexican coast and Japanese technique to the heart of Nevada.
          </div>

          {/* Info Card */}
          <div className="rounded-2xl p-4 shadow-lg  border">
            <h4 className="text-lg font-semibold mb-6">Visit Us</h4>

            <div className="space-y-5 mt-3 text-white">
              <a
                href="https://maps.app.goo.gl/7XXDYN66wKFhYYZN6"
                target="_blank"
                className="flex items-start gap-3"
              >
                <MapPin size={18} style={{ color: "var(--color-primary)" }} />
                <p>135 N Sierra St Ste E, Reno, NV 89501</p>
              </a>

              <a href="tel:+17752843300" className="flex items-start gap-3">
                <Phone size={18} style={{ color: "var(--color-primary)" }} />
                <p>(775) 284-3300</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 */}
            <div className="p-4 rounded-2xl border shadow-md hover:shadow-xl transition">
              <Fish
                size={60}
                className="mb-3 primary border rounded-full p-2"
              />
              <h4 className="text-xl font-semibold mb-3">
                Fresh Coastal Seafood
              </h4>
              <p className="text-white">
                Daily-sourced seafood inspired by the vibrant flavors of
                Mexico’s Pacific coast.
              </p>
            </div>

            {/* 2 */}
            <div className="p-4 rounded-2xl border shadow-md hover:shadow-xl transition">
              <UtensilsCrossed
                size={60}
                className="mb-3 primary border rounded-full p-2"
              />
              <h4 className="text-xl font-semibold mb-3">
                Sinaloa Style Sushi
              </h4>
              <p className="text-white">
                Japanese technique blended with bold Mexican ingredients,
                handcrafted for balance and flavor.
              </p>
            </div>

            {/* 3 */}
            <div className="p-4 rounded-2xl border shadow-md hover:shadow-xl transition">
              <Martini
                size={60}
                className="mb-3 primary border rounded-full p-2"
              />
              <h4 className="text-xl font-semibold mb-3">
                Cocktails & Ceviches
              </h4>
              <p className="text-white">
                Handcrafted cocktails and refreshing ceviches designed to
                elevate every visit.
              </p>
            </div>

            {/* 4 — NEW */}
            <div className="p-4 rounded-2xl border shadow-md hover:shadow-xl transition">
              <Star
                size={60}
                className="mb-3 primary border rounded-full p-2"
              />
              <h4 className="text-xl font-semibold mb-3">
                Premium Ingredients
              </h4>
              <p className="text-white">
                We use high-quality seafood, fresh produce, and house-made
                sauces to deliver consistent, standout flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-40  z-10" />

        <div className="relative h-[520px]">
          <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53535.81261326283!2d-119.8351383!3d39.5255974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809940cad3f4145b%3A0x442ebc7a66a521e8!2sEl%20Malecon%20Mariscos%20Bar%20%26%20Grill!5e1!3m2!1sen!2sin!4v1768715034858!5m2!1sen!2sin" />
        </div>
      </section>
    </>
  );
}
