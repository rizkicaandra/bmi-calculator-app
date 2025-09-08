import Image from 'next/image';
import HeroTitle from '@/components/HeroTitle';
import BMICard from '@/components/BMICard';

export default function Header() {
  return (
    <section className='relative mb-10 grid grid-cols-1 place-items-center gap-8 px-6 pt-8 md:mb-26.75 md:gap-10 md:px-10.5 lg:mx-36 lg:mb-21 lg:max-w-[1440px] lg:grid-cols-2 lg:place-items-start lg:gap-6 lg:px-0 lg:pt-22'>
      {/* background */}
      <div className='bg-gradient rounded-b-8.75 absolute inset-0 top-0 z-[-1] h-162.5 lg:inset-auto lg:-left-36 lg:h-184.25 lg:w-full lg:max-w-5xl'></div>

      {/* Logo */}

      <Image
        width={40}
        height={40}
        src={'/images/logo.svg'}
        alt='logo'
        className='h-10 w-10 lg:col-span-2 lg:h-16 lg:w-16'
        priority={false}
      />

      {/* Title */}
      <HeroTitle />

      <BMICard />
    </section>
  );
}
