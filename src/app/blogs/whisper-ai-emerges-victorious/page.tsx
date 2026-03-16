import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { featuredPost } from "@/lib/blog-content";

export const metadata: Metadata = {
  title: `${featuredPost.title} | Hult Prize LASU`,
  description: featuredPost.excerpt,
};

const aspectClassMap = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/11]",
  wide: "aspect-[16/8]",
} as const;

export default function WhisperAiArticlePage() {
  const sectionAnchors = featuredPost.sections.map((section, index) => ({
    id: `section-${index + 1}`,
    heading: section.heading,
  }));

  const galleryChunks = [
    featuredPost.gallery.slice(0, 2),
    featuredPost.gallery.slice(2, 4),
    featuredPost.gallery.slice(4, 7),
    featuredPost.gallery.slice(7, 10),
    featuredPost.gallery.slice(10, 12),
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#15223E]">
      <Navbar />

      <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-12 lg:pt-36">
        <section className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-white shadow-[0_24px_80px_rgba(21,34,62,0.12)]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[380px] sm:min-h-[480px]">
              <Image
                src={featuredPost.heroImage}
                alt={featuredPost.heroAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#15223E] via-[#15223E]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm"
                >
                  ← Back to blog
                </Link>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#85FFD1]">
                  {featuredPost.category}
                </p>
                <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  {featuredPost.title}
                </h1>
              </div>
            </div>

            <aside className="flex flex-col justify-between bg-[#15223E] p-6 text-white sm:p-8 lg:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-white/55">
                  Article details
                </p>
                <div className="mt-6 grid gap-5 text-sm">
                  <div>
                    <p className="text-white/55">Published</p>
                    <p className="mt-1 font-semibold">{featuredPost.publishedAt}</p>
                  </div>
                  <div>
                    <p className="text-white/55">Event date</p>
                    <p className="mt-1 font-semibold">{featuredPost.eventDate}</p>
                  </div>
                  <div>
                    <p className="text-white/55">Author</p>
                    <p className="mt-1 font-semibold">{featuredPost.author}</p>
                  </div>
                  <div>
                    <p className="text-white/55">Format</p>
                    <p className="mt-1 font-semibold">Long-form article · 12-photo gallery</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.18em] text-[#85FFD1]">
                  Key highlights
                </p>
                <div className="mt-4 space-y-3">
                  {featuredPost.highlights.map((item) => (
                    <div key={item} className="rounded-[18px] bg-white/8 px-4 py-3 text-sm leading-6 text-white/86">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto mt-10 grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <article className="rounded-4xl bg-white px-6 py-8 shadow-[0_20px_60px_rgba(21,34,62,0.08)] sm:px-8 lg:px-12 lg:py-12">
            <p className="text-lg leading-8 text-[#15223E]/78">
              {featuredPost.excerpt}
            </p>

            {featuredPost.sections.map((section, index) => (
              <div
                id={sectionAnchors[index].id}
                key={section.heading}
                className="mt-10 scroll-mt-32"
              >
                <h2 className="text-2xl font-bold leading-tight text-[#15223E] sm:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-5 text-base leading-8 text-[#15223E]/80 sm:text-lg">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <div key={paragraph}>
                      <p>{paragraph}</p>

                      {index === 4 && paragraphIndex === 1 && (
                        <figure className="mt-6 overflow-hidden rounded-[28px] bg-[#F4F2EE] shadow-[0_18px_45px_rgba(21,34,62,0.08)]">
                          <div className="relative aspect-16/10 overflow-hidden">
                            <Image
                              src={featuredPost.campusDirectorImage.src}
                              alt={featuredPost.campusDirectorImage.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 70vw"
                            />
                          </div>
                          <figcaption className="px-5 py-4 text-sm leading-6 text-[#15223E]/70">
                            {featuredPost.campusDirectorImage.caption}
                          </figcaption>
                        </figure>
                      )}
                    </div>
                  ))}
                </div>

                {galleryChunks[index] && (
                  <div
                    className={`mt-8 grid gap-4 ${
                      galleryChunks[index].length === 2
                        ? "md:grid-cols-2"
                        : "md:grid-cols-3"
                    }`}
                  >
                    {galleryChunks[index].map((image, imageIndex) => (
                      <figure
                        key={`${image.caption}-${imageIndex}`}
                        className="group overflow-hidden rounded-[28px] bg-[#F4F2EE] shadow-[0_18px_45px_rgba(21,34,62,0.08)]"
                      >
                        <div className={`relative ${aspectClassMap[image.aspect]} overflow-hidden`}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <figcaption className="px-5 py-4 text-sm leading-6 text-[#15223E]/70">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                {index === 2 && (
                  <blockquote className="mt-8 rounded-[28px] border-l-4 border-primary bg-[#FFF4FA] px-6 py-5 text-lg font-medium leading-8 text-[#15223E]">
                    WhisperAI’s win reflects a broader shift at LASU: student founders are building solutions with real market relevance, technical depth, and the confidence to scale beyond campus.
                  </blockquote>
                )}
              </div>
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[28px] bg-[#15223E] p-6 text-white shadow-[0_18px_50px_rgba(21,34,62,0.18)]">
              <p className="text-sm uppercase tracking-[0.18em] text-[#85FFD1]">
                Quick navigation
              </p>
              <div className="mt-4 space-y-3">
                {sectionAnchors.map((section, index) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-[20px] bg-white/8 px-4 py-3 text-sm leading-6 text-white/86 transition-colors duration-200 hover:bg-white/15"
                  >
                    {index + 1}. {section.heading}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(21,34,62,0.08)]">
              <p className="text-sm uppercase tracking-[0.18em] text-[#ED2089]">
                More from Hult Prize LASU
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-[#15223E]">
                Explore the blog hub.
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#15223E]/72">
                Use the main blog page as your archive landing page while more competition stories, recaps, and founder updates are added.
              </p>
              <Link
                href="/blogs"
                className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Visit blog hub
              </Link>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}