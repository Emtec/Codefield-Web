import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

import logoUnity from "@/images/logos/unity.svg";
import logoUnreal from "@/images/logos/unreal.svg";
import logoBlender from "@/images/logos/blender_logo.svg";
import logoK8s from "@/images/logos/Kubernetes.svg";

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We work with the best technologies
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
          <li>
            <FadeIn>
              <Image src={logoUnreal} alt="Unreal logo" unoptimized className='!fill-white max-w-[150px] max-h-[60px]' />
            </FadeIn>
          </li>
          <li>
            <FadeIn>
              <Image src={logoUnity} alt="Unity logo" unoptimized className='!fill-white max-w-[150px] max-h-[60px]' />
            </FadeIn>
          </li>
          <li>
            <FadeIn>
              <Image src={logoBlender} alt="Blender logo" unoptimized className='!fill-white max-w-[150px] max-h-[60px]' />
            </FadeIn>
          </li>
          <li>
            <FadeIn>
              <Image src={logoK8s} alt="kubernetes logo" unoptimized className='!fill-white max-w-[180px] max-h-[100px]' />
            </FadeIn>
          </li>
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="About us"
        title="We do what we do best."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our goal is to create games as well as platforms for gamers. We develop our expertise every day to deliver the best quality possible.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Game Framework">
              Over the years, we have refined our game development tools to streamline and speed up our work. One of our solutions is BAI Studio.
            </ListItem>
            <ListItem title="Scalability">
              Often the initial designs are not optimal, our one main consideration is scalability so that our solutions are efficient.
            </ListItem>
            <ListItem title="Community">
              Nothing without you. The basis of any game, is its community tha&apos;s why we create platforms to be as close as possible to players and understand their needs.
            </ListItem>
            <ListItem title="Monitoring">
              One of our crowning solutions is the game monitoring system. This allows us to keep an eye on performance, problems that occur, and solve them as soon as possible.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
    robots: {
      index: false
    }
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Created with passion studio in Poland.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Our passion is programming and games, these two factors contributed to the establishment of the studio &quot;CodeField&quot;. We proudly develop our passions every day.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <ContactSection />
    </>
  )
}
