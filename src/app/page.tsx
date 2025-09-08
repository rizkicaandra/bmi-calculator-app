import BMILimitations from '@/components/BMILimitations';
import BMIResultExplanation from '@/components/BMIResultExplanation';
import Header from '@/components/Header';
import HealthyLifestyleTips from '@/components/HealthyLifestyleTips';

export default function Home() {
  return (
    <div className='grid w-full grid-cols-1 place-items-center'>
      {/* TOP SECTION */}
      <Header />
      <BMIResultExplanation />
      <HealthyLifestyleTips />
      <BMILimitations />
    </div>
  );
}
