import Image from "next/image";
import Link from "next/link";
import { featuredPost } from "@/lib/blog-content";

const New = () => {
  return (
    <section className="bg-[#F9F7F4] px-4 py-16 sm:px-6 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ED2089] sm:text-base">
              Latest story
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#15223E] sm:text-4xl lg:text-5xl">
              Catch up on what just happened at Hult Prize LASU.
            </h2>
          </div>

          <Link
            href="/blogs"
            className="inline-flex w-fit items-center rounded-full border border-[#15223E] px-6 py-3 text-sm font-semibold text-[#15223E] transition-colors duration-300 hover:bg-[#15223E] hover:text-white"
          >
            Visit the blog
          </Link>
        </div>

        <article className="grid overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(21,34,62,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px]">
            <Image
              src={featuredPost.heroImage}
              alt={featuredPost.heroAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#15223E] via-[#15223E]/20 to-transparent" />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#ED2089]">
              <span>{featuredPost.category}</span>
              <span className="text-[#15223E]/35">•</span>
              <span className="text-[#15223E]/65 normal-case tracking-normal">
                {featuredPost.publishedAt}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#15223E] sm:text-3xl">
              {featuredPost.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[#15223E]/74 sm:text-lg">
              {featuredPost.excerpt}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {featuredPost.highlights.map((item) => (
                <div key={item} className="rounded-[20px] bg-[#F9F7F4] p-4 text-sm leading-6 text-[#15223E]/80">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/blogs/${featuredPost.slug}`}
                className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Read featured article
              </Link>
              <Link
                href="/blogs"
                className="inline-flex w-fit items-center rounded-full px-6 py-3 text-sm font-semibold text-[#15223E]"
              >
                Browse blog archive →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default New;