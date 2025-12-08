import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mvgeqwow");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-24 px-4 sm:px-6 max-w-6xl mx-auto font-[Akshar]">

        {/* Page Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-[AksharSemiBold] tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-500 font-[AksharRegular] text-base sm:text-lg mt-3">
            We’re happy to assist — anytime.
          </p>
        </div>

        {/* Main Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 rounded-3xl p-6 sm:p-10 bg-white border border-gray-200 shadow-lg">

          {/* LEFT CONTACT CARD */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-md">

            <span className="text-xs sm:text-sm font-[AksharRegular] uppercase tracking-wide px-4 py-1 bg-black text-white rounded-full">
              Contact Details
            </span>

            <h2 className="text-2xl sm:text-3xl font-[AksharSemiBold] text-gray-900 mt-6">
              Let's talk.
            </h2>
            <p className="text-gray-500 font-[AksharRegular] leading-relaxed mt-2 mb-8 text-sm sm:text-base">
              Prefer speaking directly? Our team is always here to connect with you.
            </p>

            <div className="space-y-5">

              {/* Email */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-black transition">
                <div className="p-2 sm:p-3 bg-black text-white rounded-xl group-hover:scale-110 transition">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 " />
                </div>
                <div className="w-full break-all">
                  <p className="text-xs sm:text-sm font-[AksharRegular] text-gray-400">Email</p>
                  <h3 className="text-sm sm:text-base font-[AksharSemiBold] text-gray-800 break-all">
                    <a href="mailto:support@essentialspace.in" className="animated-underline break-all">
                      support@essentialspace.in
                    </a>
                  </h3>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-black transition">
                <div className="p-2 sm:p-3 bg-black text-white rounded-xl group-hover:scale-110 transition">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 " />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-[AksharRegular] text-gray-400">Phone</p>
                  <h3 className="text-sm sm:text-base font-[AksharSemiBold] text-gray-800">
                    <a href="tel:02534508891" className="animated-underline">02534508891</a>
                  </h3>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-black transition">
                <div className="p-2 sm:p-3 bg-black text-white rounded-xl group-hover:scale-110 transition">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 " />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-[AksharRegular] text-gray-400">Location</p>
                  <h3 className="text-sm sm:text-base font-[AksharSemiBold] text-gray-800">
                    India
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div>
            {state.succeeded ? (
              <div className="text-center py-12 sm:py-16 bg-gray-50 border border-gray-200 rounded-3xl">
                <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
                <h2 className="text-3xl font-[AksharSemiBold] text-gray-900">Message Sent </h2>
                <p className="text-gray-500 mt-2 font-[AksharRegular] text-sm sm:text-base">
                  Thank you for reaching out — we’ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name */}
                <div>
                  <label className="text-sm font-[AksharMedium] text-gray-600 mb-1 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full font-[AksharRegular] px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-black focus:ring-0 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-[AksharMedium] text-gray-600 mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className="w-full font-[AksharRegular] px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-black focus:ring-0 transition break-words"
                  />
                  {state?.errors?.email && (
                    <p className="text-red-500 text-xs mt-2 bg-red-50 border border-red-200 p-2 rounded-xl font-[AksharRegular]">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-[AksharMedium] text-gray-600 mb-1 block">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Write your message..."
                    required
                    className="w-full font-[AksharRegular] px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-black focus:ring-0 transition resize-none"
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 bg-black text-white rounded-xl text-lg font-[AksharSemiBold] hover:bg-gray-800 transition flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>




  )
}

export default ContactPage