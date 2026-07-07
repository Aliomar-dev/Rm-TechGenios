import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
  FiCode,
  FiDatabase,
  FiHeadphones,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMonitor,
  FiPhone,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "./assets/logo.jpeg";
import aboutImg from "./assets/about-company.jpg";

const companyEmail = "RehanShahzad2023@gmail.com";
const companyPhone = "+92-324 444 9592";
const companyPhoneLink = "+923244449592";
const companyAddress =
  "Office No. 1609, 16th floor, All Hafeez Executive Firdous Market Gulberg III, Lahore, Pakistan.";
const companyMapLink =
  "https://www.google.com/maps/search/?api=1&query=Office%20No.%201609%2C%2016th%20floor%2C%20All%20Hafeez%20Executive%20Firdous%20Market%20Gulberg%20III%2C%20Lahore%2C%20Pakistan";

const web3FormsAccessKey = "900229c5-5515-4c0e-8cda-043754ecddfe";

const navItems = [
  { label: "Home", target: "#home" },
  { label: "Services", target: "#services" },
  { label: "Work Areas", target: "#work" },
  { label: "About", target: "#about" },
  { label: "Contact", target: "/contact-us" },
];

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DFQmKpVMi/?mibextid=wwXIfr",
    icon: <FaFacebookF />,
    iconColor: "text-[#1877F2]",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rehan-shahzad-6540a8335?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: <FaLinkedinIn />,
    iconColor: "text-[#0A66C2]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rm_techgenios19?igsh=MTdvNmYxMGNic3hoYQ==",
    icon: <FaInstagram />,
    iconColor: "text-[#E4405F]",
  },
  {
    name: "WhatsApp",
    url: `https://wa.me/${companyPhoneLink.replace("+", "")}`,
    icon: <FaWhatsapp />,
    iconColor: "text-[#25D366]",
  },
];

const services = [
  {
    icon: <FiHeadphones />,
    title: "BPO Services",
    desc: "Reliable business process support for customer handling, back-office tasks, data management, follow-ups and daily operational workflows.",
  },
  {
    icon: <FiCode />,
    title: "IT Services",
    desc: "Professional IT support for websites, digital tools, technical assistance, system maintenance and business technology needs.",
  },
  {
    icon: <FiUsers />,
    title: "Virtual Assisting",
    desc: "Remote administrative support for scheduling, email handling, research, CRM updates, reporting and day-to-day business coordination.",
  },
  {
    icon: <FiPhone />,
    title: "Telemarketing",
    desc: "Structured outbound calling support for lead awareness, product or service communication, customer follow-ups and campaign outreach.",
  },
  {
    icon: <FiCalendar />,
    title: "Appointment Setting",
    desc: "Professional lead qualification and appointment booking support to help sales teams connect with the right prospects at the right time.",
  },
];

const workAreas = [
  {
    icon: <FiHeadphones />,
    title: "BPO Support Desk",
    tag: "BPO",
    desc: "Daily customer communication, follow-ups, service coordination and back-office workflow support.",
    points: ["Customer handling", "Follow-ups", "Back-office"],
  },
  {
    icon: <FiCalendar />,
    title: "Appointment Setting",
    tag: "Booking",
    desc: "Qualified appointment booking, availability confirmation, reminders and organized scheduling flow.",
    points: ["Calendar booking", "Reminder calls", "Prospect confirmation"],
  },
  {
    icon: <FiPhone />,
    title: "Telemarketing Operations",
    tag: "Calling",
    desc: "Outbound calling campaigns with professional scripts, response tracking and lead communication.",
    points: ["Outbound calls", "Script handling", "Response tracking"],
  },
  {
    icon: <FiUsers />,
    title: "Virtual Assistant Tasks",
    tag: "Remote Admin",
    desc: "Email support, research, scheduling, reports, task coordination and routine admin operations.",
    points: ["Email support", "Research tasks", "Daily reporting"],
  },
  {
    icon: <FiCode />,
    title: "IT Support Workflow",
    tag: "Tech",
    desc: "Website support, digital tool assistance, technical help, issue tracking and system coordination.",
    points: ["Website support", "Tool assistance", "Issue tracking"],
  },
  {
    icon: <FiDatabase />,
    title: "CRM & Data Updates",
    tag: "Data",
    desc: "CRM notes, customer records, lead status and operational data updated clearly and accurately.",
    points: ["CRM updates", "Lead status", "Data organization"],
  },
  {
    icon: <FiTrendingUp />,
    title: "Lead Follow-Up Process",
    tag: "Sales",
    desc: "Lead follow-ups, response recording, prospect qualification and sales team support.",
    points: ["Lead screening", "Follow-up status", "Sales support"],
  },
  {
    icon: <FiMonitor />,
    title: "Reporting & Tracking",
    tag: "Reports",
    desc: "Clear task summaries, progress tracking and workflow visibility for better decisions.",
    points: ["Status reports", "Progress updates", "Workflow clarity"],
  },
];

const stats = [
  { end: 100, suffix: "+", label: "Happy Clients" },
  { end: 92, suffix: "%", label: "Close Rate" },
  { prefix: "$", end: 500, suffix: "K+", label: "Revenue Enabled" },
];

const clientReviews = [
  {
    name: "Mithferson Joseph",
    role: "Owner",
    company: "Allstate Insurance Agency",
    text: "There are a lot of vendors that promise to work with you side by side but truthfully a lot of them are just interested in sending you whatever they have even if it does not benefit you. RM TechGenios works differently as your account manager does check ins. Because of them, I was able to identify a representative who was purposely not quoting my leads. This vendor is the only time I ever felt like someone is actually working with me and I m not working for them. I highly recommend RM TechGenios if you are looking to have a vendor dedicated to your success.",
  },
  {
    name: "Sheena Calloway",
    role: "CEO",
    company: "Allstate Insurance Agency Georgia",
    text: "We've had an excellent experience working with this company. They consistently deliver high-quality, well-qualified leads that align perfectly with our business needs. Their team is reliable, professional, and always accessible whenever we need support or have questions.",
  },
  {
    name: "Emily Chen",
    role: "Director of Operations",
    company: "Chen Home Services",
    text: "Professional, reliable, and results-driven. RM TechGenios delivers exactly what they promise. We have grown our team by 50% thanks to the steady flow of quality leads.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Senior Partner",
    company: "Apex Consulting Group",
    text: "The biggest difference with RM TechGenios is the lead qualification process. We used to spend so much time filtering out bad leads, but now we get prospects who are genuinely ready to buy.",
  },
  {
    name: "Sarah Lasko",
    role: "Founder",
    company: "Lasko Financial Solutions",
    text: "I was hesitant to switch lead providers again, but RM TechGenios's transparent reporting and hands-on account management won me over. The results speak for themselves—we hit our quarterly revenue target a month early.",
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    company: "DK Mechanical Contractors",
    text: "Finding reliable commercial leads is tough in our industry. RM TechGenios came through with their B2B outreach program. They understand the mechanics of high-value client acquisition better than anyone else we've worked with.",
  },
];

const clientImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
];

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -42, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 42, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const getPageFromPath = () => {
  const path = window.location.pathname;

  if (path === "/contact-us") return { page: "contact", legal: null };
  if (path === "/privacy-policy") return { page: "legal", legal: "privacy" };
  if (path === "/terms-and-conditions") return { page: "legal", legal: "terms" };

  return { page: "home", legal: null };
};

function CountNumber({ end, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.65 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime;
    const duration = 1300;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function SignatureName() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.65 });
  const fullName = "Rehan Shahzad";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    if (!isInView) {
      setTypedName("");
      return;
    }

    let index = 0;
    setTypedName("");

    const interval = setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));
      if (index >= fullName.length) clearInterval(interval);
    }, 92);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="signature-font signature-name inline-flex min-h-[54px] items-end text-[35px] leading-none text-[#008f82] sm:text-[43px] lg:text-[50px]"
    >
      {typedName}
      <span className="signature-cursor ml-1 inline-block h-[30px] w-[2px] bg-[#008f82] sm:h-[38px]" />
    </div>
  );
}

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 42 : direction === "down" ? -42 : 0,
      x: direction === "left" ? 42 : direction === "right" ? -42 : 0,
      scale: 0.96,
      filter: "blur(7px)",
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.16 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AgencyBg({ dark = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={
          dark
            ? "absolute inset-0 opacity-[0.16] dot-grid"
            : "absolute inset-0 opacity-[0.62] dot-grid-light"
        }
      />

      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={
          dark
            ? "absolute right-[8%] top-[15%] h-20 w-20 border-[15px] border-cyan-300/14 sm:h-24 sm:w-24"
            : "absolute right-[7%] top-[12%] h-20 w-20 border-[15px] border-blue-500/10 bg-white/30 shadow-2xl shadow-blue-900/5 sm:h-24 sm:w-24"
        }
      />

      <motion.div
        animate={{ y: [0, 22, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className={
          dark
            ? "absolute bottom-[10%] left-[8%] h-24 w-24 bg-white/5 backdrop-blur"
            : "absolute bottom-[9%] left-[6%] h-24 w-24 bg-blue-500/5 shadow-xl shadow-cyan-900/10 backdrop-blur"
        }
      />

      <div
        className={
          dark
            ? "absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
            : "absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl"
        }
      />

      <div
        className={
          dark
            ? "absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
            : "absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl"
        }
      />
    </div>
  );
}

function SocialIcon({ item, dark = false }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      aria-label={item.name}
      className={`inline-flex text-2xl transition hover:-translate-y-1 hover:scale-110 ${
        dark ? "drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      <span className={item.iconColor}>{item.icon}</span>
    </a>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
  navDark,
  closeMenu,
  openContactPage,
  goHome,
}) {
  const handleNavClick = (item) => {
    if (item.label === "Contact") {
      openContactPage();
      return;
    }

    closeMenu();
    goHome(item.target);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.div
        animate={{
          backgroundColor: navDark
            ? "rgba(2, 6, 23, 0.94)"
            : "rgba(255, 255, 255, 0.12)",
          borderColor: navDark
            ? "rgba(255,255,255,0.13)"
            : "rgba(255,255,255,0.28)",
          boxShadow: navDark
            ? "0 24px 80px rgba(2,6,23,0.32)"
            : "0 20px 70px rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.25 }}
        className="mx-auto flex h-[66px] max-w-7xl items-center justify-between rounded-2xl border px-3 backdrop-blur-2xl sm:h-[72px] sm:px-5"
      >
        <button
          type="button"
          onClick={() => goHome("#home")}
          className="flex min-w-0 items-center gap-3 text-white"
        >
          <img
            src={logo}
            alt="RM TechGenios Logo"
            className="h-10 w-10 shrink-0 rounded-xl object-contain"
          />

          <span className="min-w-0 text-left leading-none">
            <strong className="block truncate font-heading text-sm font-black tracking-tight sm:text-lg">
              RM TechGenios
            </strong>
            <small className="mt-1 hidden text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300 sm:block">
              BPO & IT Support
            </small>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className="group relative px-4 py-2.5 text-sm font-bold text-white/75 transition hover:text-white"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-cyan-300 transition group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={openContactPage}
          className="hidden items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 lg:inline-flex"
        >
          Get Support <FiArrowRight />
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-11 w-11 place-items-center rounded-xl bg-white text-2xl text-slate-950 lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              className="absolute left-3 right-3 top-20 grid overflow-hidden rounded-3xl border border-white/10 bg-slate-950/96 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-black text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
              ))}

              <button
                type="button"
                onClick={openContactPage}
                className="mt-2 rounded-2xl bg-white px-4 py-3 text-center text-sm font-black text-slate-950"
              >
                Get Support
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

function BackHomeButton({ goHome }) {
  return (
    <div className="mb-6 flex justify-start sm:justify-end">
      <button
        type="button"
        onClick={() => goHome("#home")}
        className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-cyan-300"
      >
        <FiArrowLeft /> Back To Home
      </button>
    </div>
  );
}

function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % clientReviews.length);
      setExpanded(false);
    }, 5200);

    return () => clearInterval(interval);
  }, [paused]);

  const nextReview = () => {
    setActive((prev) => (prev + 1) % clientReviews.length);
    setExpanded(false);
  };

  const prevReview = () => {
    setActive((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
    setExpanded(false);
  };

  const review = clientReviews[active];
  const isLong = review.text.length > 250;
  const visibleText =
    isLong && !expanded ? `${review.text.slice(0, 250)}...` : review.text;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 32, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -32, scale: 0.97 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(15,40,90,0.08)] sm:p-7"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-100/70" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-cyan-500">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="fill-current" />
              ))}
            </div>

            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-blue-600">
              <FiZap className="text-xs" />
              Verified
            </span>
          </div>

          <p className="relative mt-6 min-h-[142px] text-base font-medium leading-8 text-slate-600 sm:text-lg sm:leading-9">
            “{visibleText}”
          </p>

          {isLong && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="relative mt-3 text-xs font-black uppercase tracking-[0.18em] text-blue-600 transition hover:text-slate-950"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          )}

          <div className="relative mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-heading text-xl font-black text-white shadow-xl shadow-blue-500/20">
                {review.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-heading text-base font-black text-slate-950 sm:text-lg">
                  {review.name}
                </h3>
                <p className="text-sm font-bold text-blue-600">
                  {review.role}
                </p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  {review.company}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevReview}
                className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-950 transition hover:bg-blue-600 hover:text-white"
                aria-label="Previous review"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                onClick={nextReview}
                className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-white transition hover:bg-slate-950"
                aria-label="Next review"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="relative mt-7 flex gap-2">
            {clientReviews.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setActive(index);
                  setExpanded(false);
                }}
                className={`h-2 rounded-full transition ${
                  active === index
                    ? "w-9 bg-blue-600"
                    : "w-2 bg-slate-300 hover:bg-cyan-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function LegalPage({ type, openLegalPage, goHome }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const updatedDate = "Last updated: January 2026";

  const sections = isPrivacy
    ? [
        {
          heading: "Information We Collect",
          text: "RM TechGenios may collect basic contact information such as name, phone number, email address, business details and service requirements when a user contacts us, submits a form or communicates through WhatsApp, email or phone.",
        },
        {
          heading: "How We Use Your Information",
          text: "We use collected information to respond to inquiries, understand business support needs, provide service guidance, manage communication and improve our BPO, IT support, virtual assistance, telemarketing and appointment setting services.",
        },
        {
          heading: "Data Protection",
          text: "We aim to handle user information responsibly and keep business communication confidential. Access to contact or service-related data is limited to the team members who need it for communication and service delivery.",
        },
        {
          heading: "Third-Party Tools",
          text: "Our website may include external links, communication tools, analytics tools or embedded services. These third-party platforms may have their own privacy practices, and users should review their policies separately.",
        },
        {
          heading: "Contact & Updates",
          text: "Users can contact RM TechGenios to request corrections, updates or removal of their submitted information. We may update this Privacy Policy when needed to reflect service or legal changes.",
        },
      ]
    : [
        {
          heading: "Use of Website",
          text: "By using the RM TechGenios website, users agree to use the website for lawful business inquiry, communication and service information purposes only. Any misuse, harmful activity or unauthorized access attempt is not allowed.",
        },
        {
          heading: "Service Information",
          text: "The content on this website explains our BPO services, IT support, virtual assistance, telemarketing and appointment setting solutions. Final service scope, pricing, timelines and deliverables are confirmed through direct communication.",
        },
        {
          heading: "Client Responsibilities",
          text: "Clients are responsible for providing accurate business information, clear requirements, lawful data and timely communication so RM TechGenios can provide proper support and guidance.",
        },
        {
          heading: "Limitation of Liability",
          text: "RM TechGenios aims to provide professional and reliable support; however, results can vary depending on business process, target audience, data quality, market conditions and client-side execution.",
        },
        {
          heading: "Changes to Terms",
          text: "RM TechGenios may update these Terms & Conditions from time to time. Continued use of the website means the user accepts the latest version of the terms.",
        },
      ];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pb-14 pt-28 text-white sm:px-5 sm:pt-32 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.22),transparent_32%)]" />
      <AgencyBg dark />

      <div className="relative mx-auto max-w-6xl">
        <BackHomeButton goHome={goHome} />

        <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:rounded-[34px] sm:p-10">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-bold text-white/60">
            <button
              type="button"
              onClick={() => goHome("#home")}
              className="transition hover:text-cyan-300"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-cyan-300">{title}</span>
          </div>

          <div className="border-b border-white/10 pb-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
              Legal Information
            </p>

            <h1 className="mt-4 font-heading text-3xl font-black tracking-tight sm:text-6xl">
              {title}
            </h1>

            <p className="mt-4 text-white/60">{updatedDate}</p>
          </div>

          <div className="mt-8 grid gap-4">
            {sections.map((section, index) => (
              <div
                key={section.heading}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cyan-400 font-heading text-sm font-black text-slate-950">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="font-heading text-lg font-black sm:text-xl">
                      {section.heading}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                      {section.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 sm:p-6">
            <h3 className="font-heading text-xl font-black">
              Contact RM TechGenios
            </h3>

            <div className="mt-4 grid gap-3 text-sm text-white/75 sm:text-base">
              <a href={`mailto:${companyEmail}`} className="break-all transition hover:text-cyan-300">
                {companyEmail}
              </a>

              <a href={`tel:${companyPhoneLink}`} className="transition hover:text-cyan-300">
                {companyPhone}
              </a>

              <a
                href={companyMapLink}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-300"
              >
                {companyAddress}
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openLegalPage("privacy")}
              className={`rounded-2xl px-5 py-3 text-sm font-black transition ${
                isPrivacy
                  ? "bg-cyan-300 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white hover:text-slate-950"
              }`}
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => openLegalPage("terms")}
              className={`rounded-2xl px-5 py-3 text-sm font-black transition ${
                !isPrivacy
                  ? "bg-cyan-300 text-slate-950"
                  : "bg-white/10 text-white hover:bg-white hover:text-slate-950"
              }`}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage({
  goHome,
  formData,
  formStatus,
  formLoading,
  handleFormChange,
  handleFormSubmit,
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pb-14 pt-28 text-white sm:px-5 sm:pt-32 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.22),transparent_32%)]" />
      <AgencyBg dark />

      <div className="relative mx-auto max-w-7xl">
        <BackHomeButton goHome={goHome} />

        <div className="rounded-[28px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:rounded-[34px] sm:p-10">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-sm font-bold text-white/60">
            <button
              type="button"
              onClick={() => goHome("#home")}
              className="transition hover:text-cyan-300"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-cyan-300">Contact</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
                Contact RM TechGenios
              </p>

              <h1 className="mt-4 font-heading text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let’s Discuss Your Business Support Needs
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                Need help with BPO, IT services, virtual assistance,
                telemarketing or appointment setting? Share your requirement and
                our team will contact you soon.
              </p>

              <div className="mt-8 grid gap-4">
                <ContactInfoCard
                  href={`tel:${companyPhoneLink}`}
                  icon={<FiPhone />}
                  title="Call / WhatsApp"
                  text={companyPhone}
                />

                <ContactInfoCard
                  href={`mailto:${companyEmail}`}
                  icon={<FiMail />}
                  title="Email Address"
                  text={companyEmail}
                />

                <ContactInfoCard
                  href={companyMapLink}
                  icon={<FiMapPin />}
                  title="Office Location"
                  text={companyAddress}
                  external
                />
              </div>
            </div>

            <motion.form
              onSubmit={handleFormSubmit}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:p-7 lg:p-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 border-[24px] border-cyan-300/10" />

              <div className="relative mb-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">
                  Start A Conversation
                </p>
                <h3 className="mt-2 font-heading text-2xl font-black">
                  Request A Business Support Plan
                </h3>
              </div>

              <div className="relative grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="input dark-input"
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="input dark-input"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="input dark-input"
                  type="text"
                  placeholder="Phone Number"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  className="input dark-input"
                >
                  <option>BPO Services</option>
                  <option>IT Services</option>
                  <option>Virtual Assisting</option>
                  <option>Telemarketing</option>
                  <option>Appointment Setting</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                className="input dark-input mt-4 min-h-36 resize-none"
                placeholder="Tell us what type of support your business needs"
              />

              {formStatus && (
                <p
                  className={`mt-4 rounded-2xl border px-4 py-3 text-center text-sm font-bold ${
                    formStatus.includes("successfully") ||
                    formStatus.includes("Sending")
                      ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-300"
                      : "border-red-300/20 bg-red-300/10 text-red-300"
                  }`}
                >
                  {formStatus}
                </p>
              )}

              <button
                type="submit"
                disabled={formLoading}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formLoading ? "Sending..." : "Send Support Request"}
                {!formLoading && <FiArrowRight />}
              </button>

              <p className="mt-4 text-center text-sm font-medium text-white/45">
                We usually respond within 24 hours.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({ href, icon, title, text, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
          {icon}
        </span>

        <div>
          <h4 className="font-heading font-black">{title}</h4>
          <p className="mt-1 break-words text-sm leading-6 text-white/60 group-hover:text-white sm:text-base">
            {text}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function App() {
  const initialPage = getPageFromPath();

  const [menuOpen, setMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(initialPage.page !== "home");
  const [showTop, setShowTop] = useState(false);
  const [activePage, setActivePage] = useState(initialPage.page);
  const [legalPage, setLegalPage] = useState(initialPage.legal);
  const [showAllWork, setShowAllWork] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "BPO Services",
    message: "",
  });

  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setNavDark(latest > 540 || activePage !== "home");
    setShowTop(latest > 520);
  });

  useEffect(() => {
    const handlePopState = () => {
      const pageData = getPageFromPath();
      setActivePage(pageData.page);
      setLegalPage(pageData.legal);
      setMenuOpen(false);
      setNavDark(pageData.page !== "home");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (activePage !== "home") {
      setNavDark(true);
    }
  }, [activePage]);

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -70]);

  const mobileWorkAreas = useMemo(
    () => (showAllWork ? workAreas : workAreas.slice(0, 4)),
    [showAllWork]
  );

  const closeMenu = () => setMenuOpen(false);

  const updatePage = (page, url, legal = null) => {
    setActivePage(page);
    setLegalPage(legal);
    setMenuOpen(false);
    setNavDark(true);
    window.history.pushState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = (target = "#home") => {
    setActivePage("home");
    setLegalPage(null);
    setMenuOpen(false);
    window.history.pushState({}, "", "/");

    setTimeout(() => {
      const sectionId = (target || "#home").replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 90);
  };

  const openContactPage = () => {
    updatePage("contact", "/contact-us");
  };

  const openLegalPage = (page) => {
    if (page === "privacy") {
      updatePage("legal", "/privacy-policy", "privacy");
      return;
    }

    updatePage("legal", "/terms-and-conditions", "terms");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormStatus("");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanPhone = formData.phone.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanMessage) {
      setFormStatus("Please fill all required fields before sending.");
      return;
    }

    if (
      !web3FormsAccessKey ||
      web3FormsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
    ) {
      setFormStatus("Please add your Web3Forms access key in App.jsx first.");
      return;
    }

    setFormLoading(true);
    setFormStatus("Sending your request...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `New Business Support Request - ${formData.service}`,
          from_name: "RM TechGenios Website",
          name: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          service: formData.service,
          message: cleanMessage,
          company_email: companyEmail,
          page: "RM TechGenios Contact Page",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus(
          "Your request has been sent successfully. We will contact you soon."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "BPO Services",
          message: "",
        });
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Network error. Please check your connection and try again.");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navDark={navDark}
        closeMenu={closeMenu}
        openContactPage={openContactPage}
        goHome={goHome}
      />

      {activePage === "legal" && (
        <LegalPage
          type={legalPage}
          openLegalPage={openLegalPage}
          goHome={goHome}
        />
      )}

      {activePage === "contact" && (
        <ContactPage
          goHome={goHome}
          formData={formData}
          formStatus={formStatus}
          formLoading={formLoading}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      {activePage === "home" && (
        <>
          <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pb-14 pt-28 text-white sm:px-5 sm:pt-32 lg:px-20 lg:pt-36"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1800&q=80')",
              }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(2,6,23,0.78)_48%,rgba(2,6,23,0.9)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.26),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(99,102,241,0.26),transparent_30%)]" />
            <AgencyBg dark />

            <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
              {socialLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.08, duration: 0.45 }}
                  whileHover={{ x: 8, scale: 1.05 }}
                  className="group relative flex h-8 w-8 items-center justify-center"
                >
                  <SocialIcon item={item} dark />

                  <span className="pointer-events-none absolute left-[42px] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-slate-950/90 px-3 py-2 text-xs font-black uppercase tracking-wider text-white opacity-0 shadow-xl backdrop-blur transition group-hover:opacity-100">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="relative mx-auto grid min-h-[calc(100vh-130px)] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="max-w-4xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-cyan-200 backdrop-blur sm:text-sm"
                >
                  <FiZap />
                  Digital Agency • BPO & IT Support
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="font-heading text-[38px] font-black uppercase leading-[0.98] tracking-[-2px] sm:text-6xl lg:text-[78px]"
                >
                  Business Process Outsourcing & IT Support Solutions
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-2xl text-sm font-medium leading-7 text-white/72 sm:text-lg sm:leading-8"
                >
                  RM TechGenios helps businesses manage customer communication,
                  virtual assistance, telemarketing, appointment setting and IT
                  support through structured, reliable and process-driven service
                  delivery.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <button
                    type="button"
                    onClick={openContactPage}
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-1"
                  >
                    Get Business Quote
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => goHome("#services")}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-slate-950"
                  >
                    Explore Services
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-7 flex flex-wrap gap-5 lg:hidden"
                >
                  {socialLinks.map((item) => (
                    <SocialIcon key={item.name} item={item} dark />
                  ))}
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-9 grid max-w-xl grid-cols-3 gap-3"
                >
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur sm:p-4"
                    >
                      <h3 className="font-heading text-xl font-black text-cyan-300 sm:text-3xl">
                        <CountNumber
                          end={stat.end}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </h3>

                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-white/55 sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                style={{ y: heroY }}
                initial={{ opacity: 0, x: 38 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative mx-auto w-full max-w-lg"
              >
                <div className="absolute -inset-8 rounded-full bg-cyan-400/20 blur-3xl" />

                <TiltCard className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-3 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                    alt="RM TechGenios business support team"
                    className="h-[340px] w-full rounded-[24px] object-cover sm:h-[430px]"
                  />

                  <div className="absolute inset-3 rounded-[24px] bg-gradient-to-t from-slate-950/78 via-transparent to-transparent sm:inset-4" />

                  <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-white/[0.92] p-4 text-slate-950 shadow-xl backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-xl font-black sm:text-2xl">
                          Business Support Desk
                        </h3>
                        <p className="mt-1 text-xs font-bold text-slate-500 sm:text-sm">
                          BPO • Virtual Assistance • IT Support
                        </p>
                      </div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white sm:h-12 sm:w-12">
                        <FiTrendingUp />
                      </span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute -left-1 top-16 rounded-r-2xl bg-white px-3 py-2 text-xs font-black text-slate-950 shadow-xl sm:top-20 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Appointment Setting
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -right-1 top-34 rounded-l-2xl bg-cyan-300 px-3 py-2 text-xs font-black text-slate-950 shadow-xl sm:top-40 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Telemarketing
                  </motion.div>
                </TiltCard>
              </motion.div>
            </div>
          </section>

          <section
            id="about"
            className="relative overflow-hidden bg-white px-4 py-14 sm:px-5 lg:px-20 lg:py-20"
          >
            <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[32%] lg:block">
              <div className="absolute left-8 top-[48%] h-28 w-28 dot-grid-dark opacity-80" />
              <div className="absolute left-[78px] top-[55%] h-[92px] w-[92px] rounded-md border-[3px] border-sky-400/80" />
              <div className="absolute -left-10 bottom-[-75px] h-[285px] w-[285px] rounded-full border-[52px] border-cyan-100/70" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -35, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.22 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative mx-auto max-w-[640px] rounded-[30px] bg-white p-[8px] shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:p-[10px]">
                  <img
                    src={aboutImg}
                    alt="RM TechGenios Team"
                    className="h-[280px] w-full rounded-[24px] object-cover sm:h-[390px] lg:h-[430px]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.22 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="inline-flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-gradient-to-r from-blue-600 to-cyan-400" />
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-600 sm:text-sm">
                    Know About Us
                  </p>
                </div>

                <h2 className="mt-6 font-heading text-[31px] font-black uppercase leading-tight tracking-[-0.5px] text-slate-950 sm:text-[42px] lg:text-[46px]">
                  About{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                    RM TechGenios
                  </span>
                </h2>

                <div className="mt-6 space-y-4 text-sm font-medium leading-7 text-slate-700 sm:text-[17px] sm:leading-[1.85]">
                  <p>
                    RM TechGenios is a business support and technology solutions
                    company focused on helping organizations manage customer
                    communication, operational workflows and service support with
                    a clear and professional process.
                  </p>

                  <p>
                    We provide structured support in BPO services, IT services,
                    virtual assisting, telemarketing and appointment setting.
                    Our services are built for businesses that need reliable
                    remote support without the cost and complexity of building a
                    full in-house team.
                  </p>

                  <p>
                    Our approach is simple: understand the requirement, set the
                    right support flow, and help businesses manage follow-ups,
                    admin tasks, customer handling and technical needs in an
                    organized way.
                  </p>
                </div>

                <div className="mt-7 rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                  <SignatureName />

                  <p className="mt-2 text-sm font-bold tracking-[0.5px] text-slate-700 sm:text-[16px]">
                    Founder of RM TechGenios
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <section
            id="services"
            className="relative overflow-hidden bg-white px-4 py-14 sm:px-5 lg:px-20 lg:py-20"
          >
            <AgencyBg />

            <Reveal className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.22 }}
              >
                <p className="text-lg font-semibold text-slate-600 sm:text-xl">
                  What We Provide
                </p>

                <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />

                <h2 className="mt-5 font-heading text-3xl font-black uppercase leading-tight tracking-tight text-slate-950 sm:text-5xl">
                  Business Support Services
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  We provide practical support services for businesses that need
                  help with customer communication, lead follow-ups, appointment
                  booking, virtual admin work and IT-related operations.
                </p>

                <button
                  type="button"
                  onClick={openContactPage}
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 font-black text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1"
                >
                  Discuss Your Requirement <FiArrowRight />
                </button>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 36, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.18 }}
                    transition={{ duration: 0.62, delay: index * 0.04 }}
                    className={`group rounded-[28px] border bg-white p-5 shadow-[0_20px_70px_rgba(15,40,90,0.07)] transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 sm:min-h-[245px] sm:p-7 ${
                      index % 2 === 0
                        ? "border-cyan-300"
                        : "border-indigo-300 sm:translate-y-8"
                    }`}
                  >
                    <div className="mb-5 text-3xl text-cyan-500 transition group-hover:scale-110 sm:mb-7 sm:text-4xl">
                      {service.icon}
                    </div>

                    <h3 className="font-heading text-xl font-black uppercase sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </section>

          <section
            id="work"
            className="relative overflow-hidden bg-slate-950 px-4 py-14 text-white sm:px-5 lg:px-20 lg:py-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.22),transparent_26%),radial-gradient(circle_at_88%_22%,rgba(59,130,246,0.22),transparent_30%)]" />
            <AgencyBg dark />

            <div className="relative mx-auto max-w-7xl">
              <SectionHead
                dark
                eyebrow="Work Areas"
                title="Professional Support Areas We Handle"
                text="A clean operational support system for BPO workflows, appointment setting, virtual assistance, telemarketing, IT help and reporting."
              />

              <div className="mt-8 grid gap-4 sm:hidden">
                {mobileWorkAreas.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 28, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.18 }}
                    transition={{ duration: 0.55, delay: index * 0.04 }}
                    className="rounded-[26px] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl text-white">
                        {item.icon}
                      </span>

                      <div className="min-w-0">
                        <div className="mb-2 inline-flex rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-200">
                          {item.tag}
                        </div>

                        <h3 className="font-heading text-lg font-black uppercase leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-white/64">
                          {item.desc}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.points.slice(0, 2).map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[11px] font-bold text-white/75"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <button
                  type="button"
                  onClick={() => setShowAllWork((prev) => !prev)}
                  className="mt-2 rounded-2xl border border-white/10 bg-white px-5 py-4 text-sm font-black text-slate-950 shadow-xl shadow-black/20"
                >
                  {showAllWork ? "Show Less Work Areas" : "Show More Work Areas"}
                </button>
              </div>

              <Reveal className="relative mt-9 hidden gap-5 sm:grid md:grid-cols-2 xl:grid-cols-4">
                {workAreas.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 38, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.18 }}
                    transition={{ duration: 0.62, delay: index * 0.035 }}
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/15 backdrop-blur-xl transition hover:border-cyan-300/45"
                  >
                    <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-300/10 transition group-hover:scale-125" />
                    <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-blue-300/10 transition group-hover:scale-125" />

                    <div className="relative">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl text-white shadow-lg shadow-blue-500/20">
                          {item.icon}
                        </span>

                        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-200">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-black uppercase leading-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/62">
                        {item.desc}
                      </p>

                      <div className="mt-5 grid gap-2 border-t border-white/10 pt-5">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-center gap-2 text-sm font-bold text-white/75"
                          >
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            {point}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-xs font-black uppercase tracking-[0.18em] text-white/40">
                          Workflow
                        </span>

                        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                          <FiZap />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Reveal>
            </div>
          </section>

          <section className="relative overflow-hidden bg-slate-50 px-4 py-14 sm:px-5 lg:px-20 lg:py-16">
            <AgencyBg />

            <SectionHead
              eyebrow="Client Reviews"
              title="What Businesses Say About Our Support"
              text="Verified client feedback with automatic sliding and manual controls."
            />

            <Reveal className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.22 }}
                className="grid grid-cols-3 gap-2 sm:gap-4"
              >
                {clientImages.map((img, index) => (
                  <motion.div
                    key={img}
                    initial={{ opacity: 0, y: 28, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.035 }}
                    className={`overflow-hidden rounded-2xl border border-white bg-white shadow-lg shadow-slate-900/5 sm:rounded-[24px] ${
                      index % 2 === 0 ? "translate-y-4 sm:translate-y-6" : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt="Business operations"
                      className="h-24 w-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0 sm:h-40"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.22 }}
                className="relative"
              >
                <div className="absolute -left-3 -top-8 font-heading text-[90px] font-black leading-none text-blue-500/10 sm:text-[130px]">
                  “
                </div>

                <ReviewCarousel />
              </motion.div>
            </Reveal>
          </section>

          <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-5 lg:px-20 lg:py-16">
            <AgencyBg />

            <Reveal className="relative mx-auto max-w-5xl rounded-[34px] border border-slate-200 bg-slate-50 p-6 text-center shadow-[0_22px_80px_rgba(15,40,90,0.08)] sm:p-10">
              <p className="text-base font-semibold text-slate-600 sm:text-lg">
                Need Reliable Remote Support?
              </p>

              <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

              <h2 className="mx-auto mt-7 max-w-4xl font-heading text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Let RM TechGenios Help You Manage Business Operations More
                Efficiently
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                From BPO and telemarketing to virtual assistance, appointment
                setting and IT support — we help businesses organize daily work
                with a clear and professional process.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={openContactPage}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 font-black uppercase tracking-wide text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-1 sm:w-auto"
                >
                  Request Support Plan
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </button>

                <a
                  href={`https://wa.me/${companyPhoneLink.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-blue-500 bg-white px-8 py-4 font-black uppercase tracking-wide text-blue-600 transition hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:w-auto"
                >
                  WhatsApp Us
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </section>
        </>
      )}

      <Footer
        openLegalPage={openLegalPage}
        openContactPage={openContactPage}
        goHome={goHome}
      />

      <motion.button
        type="button"
        onClick={scrollToTop}
        initial={false}
        animate={{
          opacity: showTop ? 1 : 0,
          y: showTop ? 0 : 24,
          scale: showTop ? 1 : 0.85,
          pointerEvents: showTop ? "auto" : "none",
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed bottom-5 right-5 z-[9998] grid h-13 w-13 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 text-2xl text-white shadow-2xl shadow-blue-600/30 transition hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        aria-label="Go to top"
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.55),transparent_30%)]" />
        <FiChevronUp className="relative z-10" />
      </motion.button>
    </main>
  );
}

function Footer({ openLegalPage, openContactPage, goHome }) {
  return (
    <footer className="wave-footer relative overflow-hidden text-white">
      <div className="pointer-events-none absolute left-[7%] top-[-52px] z-10 hidden h-28 w-28 rotate-12 border-[18px] border-cyan-300/35 bg-white/5 shadow-[0_30px_80px_rgba(34,211,238,0.28)] backdrop-blur-md lg:block footer-3d-cube" />

      <div className="pointer-events-none absolute right-[10%] top-[-58px] z-10 hidden h-32 w-32 rounded-full border-[22px] border-blue-300/30 shadow-[0_30px_90px_rgba(59,130,246,0.28)] lg:block footer-3d-ring" />

      <div className="absolute inset-0 footer-grid opacity-[0.12]" />
      <div className="absolute left-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-[-160px] bottom-[-140px] h-[460px] w-[460px] rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute left-[45%] top-[10%] h-[260px] w-[260px] rounded-full border-[45px] border-white/5" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(900px_140px_at_50%_0%,rgba(255,255,255,0.22),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-5 sm:py-16 lg:px-20">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1.15fr_0.75fr_1.25fr] lg:gap-12">
          <Reveal>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="RM TechGenios Logo"
                className="h-14 w-14 rounded-2xl object-contain"
              />

              <div>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight">
                  RM TechGenios
                </h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                  BPO & IT Support Agency
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              RM TechGenios provides BPO services, IT support, virtual
              assistance, telemarketing and appointment setting for businesses
              that need organized remote operations.
            </p>

            <div className="mt-7 flex gap-5">
              {socialLinks.map((item) => (
                <SocialIcon key={item.name} item={item} dark />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h4 className="font-heading text-xl font-black">Useful Links</h4>

            <div className="mt-6 grid gap-3">
              {navItems
                .filter((item) => item.label !== "Contact")
                .map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => goHome(item.target)}
                    className="group flex items-center gap-3 text-left font-semibold text-white/75 transition hover:text-white"
                  >
                    <span className="h-[2px] w-5 rounded-full bg-white/35 transition group-hover:w-8 group-hover:bg-white" />
                    {item.label}
                  </button>
                ))}

              <button
                type="button"
                onClick={openContactPage}
                className="group flex items-center gap-3 text-left font-semibold text-white/75 transition hover:text-white"
              >
                <span className="h-[2px] w-5 rounded-full bg-white/35 transition group-hover:w-8 group-hover:bg-white" />
                Contact
              </button>
            </div>
          </Reveal>

          <Reveal>
            <h4 className="font-heading text-xl font-black">Locations</h4>

            <div className="mt-6 grid gap-5">
              <a
                href={companyMapLink}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-blue-600">
                  <FiMapPin />
                </span>

                <p className="text-sm leading-7 text-white/75 transition group-hover:text-white sm:text-base">
                  {companyAddress}
                </p>
              </a>

              <a href={`tel:${companyPhoneLink}`} className="group flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-blue-600">
                  <FiPhone />
                </span>

                <p className="leading-7 text-white/75 transition group-hover:text-white">
                  {companyPhone}
                </p>
              </a>

              <a href={`mailto:${companyEmail}`} className="group flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-blue-600">
                  <FiMail />
                </span>

                <p className="break-all leading-7 text-white/75 transition group-hover:text-white">
                  {companyEmail}
                </p>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-sm font-bold text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 RM TechGenios. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <button
              type="button"
              onClick={() => openLegalPage("privacy")}
              className="transition hover:text-white"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => openLegalPage("terms")}
              className="transition hover:text-white"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionHead({ eyebrow, title, text, dark = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.22 }}
      className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10"
    >
      <p
        className={`text-xs font-black uppercase tracking-[0.25em] sm:text-sm ${
          dark ? "text-cyan-300" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 font-heading text-3xl font-black leading-tight tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${
          dark ? "text-white/62" : "text-slate-600"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}