import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Calendar, ChevronDown } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementCard, AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
import {
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";

export default function Page() {
  const experienceItems = [
    {
      icon: "shield",
      company: "Helixo",
      role: "Software Engineer (~4 months)",
      period: "February 2026 – Present",
      bullets: [
        "Built and shipped HUE Free Gift Upsell, a production-grade Shopify app — engineered the full-stack architecture using Remix and React on the frontend with a MongoDB-backed Node.js backend.",
        "Implemented campaign logic for free gift, BOGO, and Buy X Get Y flows with flexible rule-based triggers across product pages, cart, and pop-up placements.",
      ],
      logoUrl: "/helixo.jpeg",
      companyUrl: "https://helixo.co",
    },
  ]

  return (
    <main className="min-h-dvh bg-grid pb-20 sm:pb-24 md:pb-32 pt-4 sm:pt-5 md:pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-3 sm:mb-4 flex w-full max-w-xl items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50 text-sm sm:text-base"
          >
            savad.
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              experience
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              projects
            </a>
            <a
              href="#achievements"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              achievements
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-3 sm:px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-xl sm:rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-3 sm:p-4 md:p-6 lg:p-6">
            {/* Header */}

            <SlideUp>
              <header id="about" className="space-y-2 p-2 sm:p-3 md:p-4">
                <FadeInText delay={0.1}>
                  <div className="flex items-center justify-between gap-2">
                    <TextShimmer
                      as="p"
                      className="text-xs"
                      duration={2.2}
                      spread={1.2}
                    >
                      Hola ! I'm
                    </TextShimmer>
                    <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
                  </div>
                </FadeInText>
                <SlideInLeft delay={0.2}>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="/facedemo.jpeg"
                        alt="Muhammed Savad"
                        className="h-full w-full object-cover scale-115 -translate-x-0.5"
                      />
                    </div>
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Muhammed Savad
                    </h1>
                  </div>
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span>24</span>
                    <span className="hidden sm:inline">{"|"}</span>
                    <span className="max-w-[38ch]">
                      <Typewriter
                        text={[
                          "Software Engineer",
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                      {" from India."}
                    </span>
                  </div>
                </FadeInText>
                <SlideInRight delay={0.4}>
                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <a
                      href="https://drive.google.com/file/d/1dz6IuFV1VRO4b7LX8qM_UslJXUnmpYdV/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Resume"
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 whitespace-nowrap"
                    >
                      Resume
                    </a>
                    <a
                      href="mailto:1745savad@gmail.com"
                      aria-label="Send email"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                    <a
                      href="https://x.com/sava__d"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Twitter"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Twitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                    <a
                      href="https://github.com/S4vad"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open GitHub"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/savadk"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open LinkedIn"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </SlideInRight>
              </header>
            </SlideUp>

            {/* Bio */}
            <FadeInText delay={0.7}>
              <section className="mt-3 sm:mt-4 mx-1 sm:mx-2 md:m-2 justify-center items-center text-xs sm:text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                <p>
                  TL;DR: i break things, learn fast, and make shit happen. limits exist to be tested; polymath thinking and psychology books shaped me. <br />Mastery is non-negotiable.{" "}
                </p>
              </section>
            </FadeInText>

            {/* Work Experience */}
            <SlideUp delay={0.1}>
              <section id="experience" className="mt-3 sm:mt-4 px-1.5 sm:px-2 md:px-4 py-3 sm:py-4 md:py-5 section-divider">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Experience
                  </h3>
                </FadeInText>

                <div className="experience-list mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                  {experienceItems.map(item => (
                    <div key={item.company} className="experience-item">
                      <div className="experience-row">
                        <div className="experience-left">
                          <div className="experience-logo">
                            <img
                              src={item.logoUrl}
                              alt={`${item.company} logo`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="experience-text">
                            <p className="experience-company">
                              {item.companyUrl ? (
                                <a
                                  href={item.companyUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="hover:underline"
                                >
                                  {item.company}
                                </a>
                              ) : (
                                item.company
                              )}
                            </p>
                            <p className="experience-role">{item.role}</p>
                          </div>
                        </div>
                        <div className="experience-right">
                          <span className="experience-period">{item.period}</span>
                          <span className="exp-chevron-wrap" aria-hidden="true">
                            <ChevronDown className="exp-chevron" />
                          </span>
                        </div>
                      </div>

                      <div className="experience-details">
                        <ul className="experience-bullets">
                          {item.bullets.map((bullet, index) => (
                            <li key={`${item.company}-${index}`}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </SlideUp>

            {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-4 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3 ml-0.5 sm:ml-1">
                    Proof of Work
                  </h3>
                </FadeInText>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="HUE Free Gift — Shopify App"
                      links={[
                        {
                          label: "live app ↗",
                          href: "https://apps.shopify.com/free-gift-upsell",
                        },
                      ]}
                      bullets={[
                        "A production Shopify app for free gift campaigns, BOGO, and Buy X Get Y upsell offers. Merchants set rule-based triggers by cart value, products, or collections to run targeted campaigns across product pages, cart, and pop-ups.",
                      ]}
                      tags={["Remix", "React", "MongoDB", "Node.js", "Shopify"]}
                    />
                  </SlideInLeft>

                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="ElevateCV"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://resume-builder-five-ashy.vercel.app/",
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/S4vad/Resume-builder-Next-js-full-stack-",
                        },
                      ]}
                      bullets={[
                        "A resume-building platform with real-time preview and customizable templates. Users create professional resumes, see changes instantly, and download the final version as a PDF.",
                      ]}
                      tags={["Next.js", "TypeScript", "React", "TailwindCSS"]}
                    />
                  </SlideInLeft>

                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="MindmapAI"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://mindmap-ai-chi.vercel.app/",
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/S4vad/Mindmap-Ai",
                        },
                      ]}
                      bullets={[
                        "A SaaS platform to generate mind maps from text or ideas. Users can create, customize, and download their mind maps.",
                      ]}
                      tags={["React", "TypeScript", "TailwindCSS"]}
                    />
                  </SlideInLeft>

                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="Bizfluence"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://biz-flunece.vercel.app/",
                        },
                      ]}
                      bullets={[
                        "A platform connecting businesses with influencers for marketing campaigns. Businesses find influencers to grow their brand; influencers discover paid opportunities.",
                      ]}
                      tags={["React", "Node.js", "MongoDB", "TailwindCSS"]}
                    />
                  </SlideInLeft>

                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="EdVerse — LMS Platform"
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://edverse-kappa.vercel.app/",
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/S4vad/LMS-using-Mern",
                        },
                      ]}
                      bullets={[
                        "An LMS platform with AI-powered search and voice responses using the Gemini model. Educators create and sell courses; students purchase and learn.",
                      ]}
                      tags={["MongoDB", "Express.js", "React", "Node.js", "Gemini AI"]}
                    />
                  </SlideInLeft>

                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="COZA Store"
                      links={[
                        {
                          label: "github ↗",
                          href: "https://github.com/S4vad/Ecommerce_clothing_store_integrated_with_machine_learning-",
                        },
                      ]}
                      bullets={[
                        "A full-stack e-commerce platform for clothing with ML features: password strength checker, sentiment analysis on reviews, and AI-powered product recommendations.",
                      ]}
                      tags={["MongoDB", "Express.js", "React", "Node.js", "Python", "ML"]}
                    />
                  </SlideInLeft>
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-2 sm:mt-3 flex justify-center">
                    <a
                      href="https://github.com/S4vad?tab=repositories" target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all projects →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            {/* Skills */}
            <SlideUp delay={0.3}>
              <section className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-4 section-divider pt-4 sm:pt-5">
                <SkillsDraggable />
              </section>
            </SlideUp>

            <SlideUp delay={0.3}>
              <section id="achievements" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-3 sm:pt-4 md:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-100 ml-0.5 sm:ml-1 md:ml-1">
                    Achievements
                  </h3>
                </FadeInText>

                <div className="grid gap-2 sm:gap-2.5 md:gap-3">
                  <SlideInLeft delay={0.1}>
                    <AchievementCard
                      title="Career Pivot — Fabrication Worker to Software Engineer"
                      date="2022"
                      description="Started as an industrial iron fabrication worker and transitioned into software engineering through self-driven learning — proving that where you start doesn't define where you end up."
                    />
                  </SlideInLeft>
                </div>
              </section>
            </SlideUp>

            {/* Blogs — will add later */}
            {/*
            <SlideUp delay={0.2}>
              <section id="blogs" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3 ml-0.5 sm:ml-1 md:ml-1">
                    Blogs
                  </h3>
                </FadeInText>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="Blog title"
                      headerLayout="vertical"
                      links={[
                        { label: "Read ↗", href: "#" },
                      ]}
                      bullets={[]}
                      tags={[]}
                    />
                  </SlideInLeft>
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-2 sm:mt-3 flex justify-center">
                    <a
                      href="#"
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all Blogs →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>
            */}

            {/* Education */}
            <SlideUp delay={0.3}>
              <section className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3">
                    Education
                  </h3>
                </FadeInText>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Indira Gandhi National Open University"
                        date="2023 – Present"
                        description="Masters of Computer Application (MCA)"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInLeft delay={0.15}>
                    <li>
                      <AchievementItem
                        title="Regional College"
                        date="2019 – 2022"
                        description="BSc Computer Science — 78%"
                      />
                    </li>
                  </SlideInLeft>
                </ul>
              </section>
            </SlideUp>

            {/* Book a Meet */}
            <SlideUp delay={0.3}>
              <section
                id="book-a-meet"
                className="mt-4 rounded-xl  border-neutral-200 bg-neutral-50/70 p-5 text-left dark:border-neutral-800 dark:bg-neutral-900/30"
              >
                <FadeInText delay={0.1}>
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Still reading? That means something clicked. <br />Let's talk.
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  </p>
                </FadeInText>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href="https://calendly.com/8594savad8594/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-200"
                    aria-label="Book a 30-minute meeting on Calendly"
                  >
                    <Calendar className="h-4 w-4" />
                    book a meet
                  </a>
                  <a
                    href="https://x.com/sava__d"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                    aria-label="DM on X"
                  >
                    dm on x
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    you can mail also
                  </p>
                  <ContactForm />
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Messages are directed to{" "}
                    <span className="font-medium">1745savad@gmail.com</span>.
                  </p>
                </div>
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-6 sm:mt-8 flex justify-center rounded-lg sm:rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 text-xs sm:text-xs text-neutral-500 dark:text-neutral-400 p-2 sm:p-2 md:p-3 mx-0">
          <span className="italic text-center leading-5 sm:leading-6">The people who are crazy enough to think they can change the world are <br /> the ones who do</span> <span aria-hidden> </span>
        </div>{" "}
        <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center text-xs text-neutral-500 dark:text-neutral-400 px-2">
          designed and developed by&nbsp;<a href="https://x.com/sava__d" className="text-blue-400 hover:text-blue-500"> ~Savad</a>
        </div>
      </div>

      {/* Floating Dock */}
      <Dock />
    </main>
  );
}
