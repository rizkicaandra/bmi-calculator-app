import { BMILimitation } from '@/types/bmi-limitation';
import Image from 'next/image';

export default function BoxCard({
  imageSrc,
  imageAlt,
  title,
  description,
  index,
}: Readonly<BMILimitation>) {
  return (
    <div
      className={`custome-shadow flex flex-col gap-4 rounded-2xl bg-white p-6 md:last:col-span-2 md:last:w-1/2 md:last:justify-self-center lg:w-[365px] lg:p-8 ${index === 1 ? 'lg:col-span-2 lg:col-start-2 lg:ml-44 lg:justify-self-center' : ''} ${index === 2 ? 'lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:justify-self-end' : ''} ${index === 3 ? 'lg:col-start-3 lg:row-start-2' : ''} ${index === 4 ? 'lg:col-span-2 lg:col-start-1 lg:justify-self-center' : ''} lg:last:col-span-1 lg:last:mr-[665px] lg:last:w-[365px]`}
    >
      <div className='flex gap-4'>
        <Image src={imageSrc} width={32} height={32} alt={imageAlt} />
        <h3 className='text-preset-5'>{title}</h3>
      </div>
      <p className='text-preset-6'>{description}</p>
    </div>
  );
}
