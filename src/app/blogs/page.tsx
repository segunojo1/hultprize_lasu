import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { featuredPost } from "@/lib/blog-content";

export const metadata: Metadata = {
	title: "Blog | Hult Prize LASU",
	description: "News and stories from Hult Prize LASU.",
};

export default function BlogsPage() {
	const postHref = `/blogs/${featuredPost.slug}`;

	return (
		<div className="min-h-screen bg-[#F9F7F4] text-[#15223E]">
			<Navbar />

			<main className="px-4 pb-20 pt-32 sm:px-6 lg:px-12 lg:pt-40">
				<section className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[36px] bg-[#15223E] px-6 py-10 text-white shadow-[0_24px_80px_rgba(21,34,62,0.18)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-14">
					<div className="max-w-3xl">
						<span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#85FFD1]">
							Hult Prize LASU Blog
						</span>
						<h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
							Stories, milestones, and the next wave of campus disruptors.
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
							Follow the journeys, competition highlights, and founder stories shaping innovation at Lagos State University.
						</p>
					</div>

					<div className="grid min-w-[280px] gap-4 rounded-[28px] border border-white/12 bg-white/8 p-5 backdrop-blur-sm sm:min-w-[340px]">
						<div>
							<p className="text-sm uppercase tracking-[0.18em] text-white/60">
								Featured story
							</p>
							<h2 className="mt-2 text-2xl font-bold leading-tight">
								WhisperAI emerges victorious.
							</h2>
						</div>
						<div className="grid grid-cols-3 gap-3 text-sm text-white/80">
							<div>
								<p className="text-white/55">Published</p>
								<p className="mt-1 font-semibold">{featuredPost.publishedAt}</p>
							</div>
							<div>
								<p className="text-white/55">Read time</p>
								<p className="mt-1 font-semibold">{featuredPost.readTime}</p>
							</div>
							<div>
								<p className="text-white/55">Coverage</p>
								<p className="mt-1 font-semibold">12-photo story</p>
							</div>
						</div>
						<Link
							href={postHref}
							className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
						>
							Read full article
						</Link>
					</div>
				</section>

				<section className="mx-auto mt-12 max-w-7xl">
					<div className="mb-6 flex items-end justify-between gap-4">
						<div>
							<p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ED2089]">
								Latest post
							</p>
							<h2 className="mt-2 text-2xl font-bold sm:text-3xl">
								Featured article
							</h2>
						</div>
						<p className="hidden max-w-md text-right text-sm leading-6 text-[#15223E]/70 lg:block">
							A magazine-style article page inspired by editorial news layouts, adapted to fit the Hult Prize LASU brand.
						</p>
					</div>

					<article className="grid overflow-hidden rounded-4xl bg-white shadow-[0_20px_70px_rgba(21,34,62,0.1)] lg:grid-cols-[1.1fr_0.9fr]">
						<div className="relative min-h-80 lg:min-h-full">
							<Image
								src={featuredPost.heroImage}
								alt={featuredPost.heroAlt}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-[#15223E] via-[#15223E]/40 to-transparent" />
							<div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
								<span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
									{featuredPost.category}
								</span>
								<p className="mt-4 max-w-lg text-sm leading-6 text-white/85">
									{featuredPost.excerpt}
								</p>
							</div>
						</div>

						<div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ED2089]">
									{featuredPost.eventDate}
								</p>
								<h3 className="mt-3 text-2xl font-extrabold leading-tight text-[#15223E] sm:text-3xl">
									{featuredPost.title}
								</h3>
								<p className="mt-4 text-base leading-7 text-[#15223E]/74">
									{featuredPost.excerpt}
								</p>

								<div className="mt-8 grid gap-4 rounded-3xl bg-[#F9F7F4] p-5 sm:grid-cols-3">
									{featuredPost.highlights.map((item) => (
										<div key={item} className="rounded-[20px] bg-white p-4 shadow-sm">
											<p className="text-sm leading-6 text-[#15223E]/80">{item}</p>
										</div>
									))}
								</div>
							</div>

							<div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
								<div className="text-sm text-[#15223E]/70">
									By {featuredPost.author} · {featuredPost.readTime}
								</div>
								<Link
									href={postHref}
									className="inline-flex w-fit items-center rounded-full border border-[#15223E] px-6 py-3 text-sm font-semibold text-[#15223E] transition-colors duration-300 hover:bg-[#15223E] hover:text-white"
								>
									Open article
								</Link>
							</div>
						</div>
					</article>
				</section>
			</main>

			<Footer />
		</div>
	);
}
