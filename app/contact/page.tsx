"use client";

import { useState, useRef, useEffect } from "react";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  User, 
  Calendar, 
  ChevronDown, 
  Check,
  Sparkles
} from "lucide-react";

type FormType = "contact" | "visit";

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<FormType>("contact");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    visitDate: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Read query parameters for initial active form type
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const type = params.get("type");
      if (type === "contact" || type === "visit") {
        setActiveForm(type);
      }
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submit
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        visitDate: ""
      });
    }, 3000);
  };

  const formOptions = [
    { id: "contact" as FormType, label: "General Inquiry (Contact Us)" },
    { id: "visit" as FormType, label: "Schedule a Visit (Plan a Visit)" }
  ];

  const currentOption = formOptions.find(opt => opt.id === activeForm) || formOptions[0];

  return (
    <>
      <FloatingNavbar />
      
      <main className="min-h-screen bg-slate-50 pt-28 pb-16 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tight mb-4">
              Contact & Plan a Visit
            </h1>
            <p className="text-amber-500 text-base md:text-lg font-black max-w-3xl mx-auto leading-relaxed mb-3">
              "The Best Gift we can give our little Children is the Joy of Learning"
            </p>
            <p className="text-slate-600 text-sm md:text-base font-semibold max-w-2xl mx-auto">
              Come experience a school where childhood is respected, curiosity is celebrated, and every child is encouraged to become the best version of themselves.
            </p>
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {/* Location Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md shrink-0"
                style={{ backgroundColor: '#1e40af' }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">Locations</h3>
                <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                  85, AC Block 3rd St, Block AC, AC Block, Anna Nagar, Chennai, Tamil Nadu 600040
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md shrink-0"
                style={{ backgroundColor: '#e11d48' }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">Email Id</h3>
                <p className="text-sm font-semibold text-slate-600 leading-relaxed break-all">
                  adhyshivtrust@gmail.com
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md shrink-0"
                style={{ backgroundColor: '#f59e0b' }}
              >
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">Phone</h3>
                <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                  +91 78711 11111
                </p>
              </div>
            </div>

            {/* Visiting Timings Card */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex items-start gap-4">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md shrink-0"
                style={{ backgroundColor: '#6b21a8' }}
              >
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-1">Visiting Timings</h3>
                <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                  Weekdays: 2:00 PM - 4:00 PM <br />
                  Saturdays: 11:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Form & Map container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
            
            {/* Form Column */}
            <div className="flex flex-col gap-6">
              
              {/* Form Selector Dropdown */}
              <div className="relative w-full" ref={dropdownRef}>
                <label className="block text-slate-700 text-xs font-black uppercase tracking-wider mb-2.5">
                  Select Action Type
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between bg-white border border-stone-300 text-slate-800 hover:border-blue-400 hover:shadow-md transition-all duration-300 z-10"
                  style={{
                    padding: '16px 24px',
                    borderRadius: '16px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>{currentOption.label}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-full mt-2 bg-white border border-stone-200/80 rounded-2xl shadow-xl overflow-hidden z-50 p-1.5"
                    >
                      {formOptions.map((opt) => {
                        const isSelected = opt.id === activeForm;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              setActiveForm(opt.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 transition-colors duration-200 ${
                              isSelected 
                                ? "bg-blue-50 text-blue-900" 
                                : "text-slate-600 hover:bg-stone-50 hover:text-slate-900"
                            }`}
                            style={{
                              padding: '16px 24px',
                              borderRadius: '12px',
                              fontSize: '15px',
                              fontWeight: 'bold'
                            }}
                          >
                            <span>{opt.label}</span>
                            {isSelected && (
                              <Check className="w-4 h-4 text-blue-600 ml-auto" />
                            )}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Form Box - Styled with homepage background image */}
              <div 
                className="rounded-[2.5rem] p-8 md:p-10 shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden bg-cover bg-center border border-stone-200/80"
                style={{ 
                  backgroundImage: "url('/images/home/bg2.jpg')" 
                }}
              >
                {/* Background overlay for styling and contrast */}
                <div className="absolute inset-0 bg-[#fff9f5]/90 pointer-events-none" />

                <h2 className="text-3xl font-black text-blue-900 mb-8 tracking-tight font-display relative z-10">
                  {activeForm === "contact" ? "Contact Us ••••••" : "Schedule a Visit ••••••"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white border border-stone-200 rounded-2xl p-8 text-center"
                    >
                      <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4 animate-bounce" />
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Thank you!</h3>
                      <p className="text-sm text-slate-600">
                        {activeForm === "contact" 
                          ? "Your inquiry has been sent successfully. We will get back to you soon."
                          : "Your campus visit request has been received. We will contact you to confirm the timing."}
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      {/* Name & Phone side by side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200 text-slate-800 placeholder-slate-400 font-bold focus:ring-2 focus:ring-amber-500 shadow-sm"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200 text-slate-800 placeholder-slate-400 font-bold focus:ring-2 focus:ring-amber-500 shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200 text-slate-800 placeholder-slate-400 font-bold focus:ring-2 focus:ring-amber-500 shadow-sm"
                        />
                      </div>

                      {/* CONDITIONAL FIELD: Subject (For General Inquiry) or Visit Date (For Schedule Visit) */}
                      <AnimatePresence mode="wait">
                        {activeForm === "contact" ? (
                          <motion.div
                            key="subject"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <input
                              type="text"
                              name="subject"
                              placeholder="Your Subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200 text-slate-800 placeholder-slate-400 font-bold focus:ring-2 focus:ring-amber-500 shadow-sm"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="visitDate"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-2 text-left"
                          >
                            <div className="flex items-center gap-2 text-slate-600 font-bold text-sm pl-1">
                              <Calendar className="w-4 h-4 text-slate-500" />
                              <span>Date of Visit</span>
                            </div>
                            <input
                              type="date"
                              name="visitDate"
                              required
                              value={formData.visitDate}
                              onChange={handleInputChange}
                              className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200 text-slate-800 font-bold focus:ring-2 focus:ring-amber-500 shadow-sm"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Message Box */}
                      <div>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          placeholder="Hi I am..."
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-5 py-3.5 rounded-2xl bg-white border border-stone-200 text-slate-800 placeholder-slate-400 font-bold focus:ring-2 focus:ring-amber-500 shadow-sm resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-black uppercase tracking-wider transition-all duration-200 shadow-lg"
                        >
                          <Send className="w-4 h-4 fill-white stroke-none" />
                          <span>{activeForm === "contact" ? "Send Message" : "Schedule Visit"}</span>
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>

            </div>

            {/* Map Column */}
            <div className="flex flex-col gap-6 h-full">
              <label className="block text-slate-700 text-xs font-black uppercase tracking-wider">
                Google Map Location
              </label>
              <div className="relative flex-1 min-h-[350px] lg:min-h-auto rounded-[2.5rem] overflow-hidden bg-white border-4 border-white shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2065874258814!2d80.20786967590807!3d13.086057887239462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52641e7d23d8c1%3A0x6335198ec43f443b!2s85%2C%20AC%20Block%203rd%20St%2C%20AC%20Block%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1716723000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps embed showing Adhyshiv Montessori"
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
