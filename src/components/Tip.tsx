import { HealthyLifestyleTip } from '@/types';
import Image from 'next/image';

export default function Tip({
  imageSrc,
  imageAlt,
  title,
  description,
}: Readonly<HealthyLifestyleTip>) {
  return (
    <div className='flex flex-col gap-8 px-6 md:flex-row md:gap-10 lg:flex-col lg:gap-12'>
      <Image src={imageSrc} width={64} height={64} alt={imageAlt} />
      <div>
        <h2 className='text-preset-4 mb-6'>{title}</h2>
        <p className='text-preset-6'>{description}</p>
      </div>
    </div>
  );
}
