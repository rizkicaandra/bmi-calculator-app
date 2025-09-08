import { BMILimitation } from '@/types/bmi-limitation';
import BoxCard from './BoxCard';

export default function BMILimitations() {
  const limitations: BMILimitation[] = [
    {
      imageSrc: '/images/icon-gender.svg',
      imageAlt: 'Gender',
      title: 'Gender',
      description: `The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.`,
    },
    {
      imageSrc: '/images/icon-age.svg',
      imageAlt: 'Age',
      title: 'Age',
      description: `In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.`,
    },
    {
      imageSrc: '/images/icon-muscle.svg',
      imageAlt: 'Muscle',
      title: 'Muscle',
      description: `BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.`,
    },
    {
      imageSrc: '/images/icon-pregnancy.svg',
      imageAlt: 'Pregnancy',
      title: 'Pregnancy',
      description: `Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.`,
    },
    {
      imageSrc: '/images/icon-race.svg',
      imageAlt: 'Race',
      title: 'Race',
      description: `Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.`,
    },
  ];

  return (
    <section className='mb-16 flex flex-col items-center justify-center gap-14 pr-7.5 pl-5 md:mb-24 md:pr-11 md:pl-10 lg:relative lg:max-w-[1440px] lg:px-0 lg:py-26.75'>
      <div className='flex flex-col items-center justify-center gap-8 lg:absolute lg:top-35 lg:left-45 lg:items-start lg:justify-start'>
        <h1 className='text-preset-3 lg:text-preset-2'>Limitations of BMI</h1>
        <p className='text-preset-6 text-center font-normal lg:max-w-[564px] lg:text-start'>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3'>
        {limitations.map((limitation, index) => (
          <BoxCard
            key={limitation.title + index}
            index={++index}
            {...limitation}
          />
        ))}
      </div>
    </section>
  );
}
