import Image from 'next/image';

export default function BMIResultExplanation() {
  return (
    <section className='mb-16 flex flex-col gap-12 md:mb-24 md:-ml-16 md:flex-row md:pr-10.5 lg:mt-12.75 lg:ml-0 lg:max-w-6xl'>
      <Image
        src={'/images/man-eating.svg'}
        width={361}
        height={411}
        alt={'image'}
        priority
        className='mx-auto md:mx-0 md:h-[411px] md:w-[391px] lg:h-[533px] lg:w-[564px]'
      />

      <div className='px-6 md:px-4 md:pt-6 lg:pt-44'>
        <h1 className='text-preset-3 lg:text-preset-2 mb-8'>
          What your BMI result means
        </h1>

        <p className='text-preset-6 font-normal'>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
}
