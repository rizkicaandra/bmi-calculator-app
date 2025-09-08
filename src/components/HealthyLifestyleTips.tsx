import { HealthyLifestyleTip } from '@/types';
import Tip from './Tip';

export default function HealthyLifestyleTips() {
  const tips: HealthyLifestyleTip[] = [
    {
      imageSrc: '/images/icon-eating.svg',
      imageAlt: 'eating',
      title: 'Healthy eating',
      description:
        'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
    },
    {
      imageSrc: '/images/icon-exercise.svg',
      imageAlt: 'exercise',
      title: 'Regular exercise',
      description:
        'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
    },
    {
      imageSrc: '/images/icon-sleep.svg',
      imageAlt: 'sleep',
      title: 'Adequate sleep',
      description:
        'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
    },
  ];

  return (
    <section className='bg-gradient-25 mb-20 flex flex-col items-center justify-center gap-10 py-14 md:mb-24 md:px-10 md:py-15 lg:mb-0 lg:max-w-348 lg:flex-row lg:gap-8 lg:rounded-4xl lg:px-24 lg:py-22'>
      {tips.map(({ imageSrc, imageAlt, title, description }) => (
        <Tip
          key={imageAlt}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          title={title}
          description={description}
        />
      ))}
    </section>
  );
}
