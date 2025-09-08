export default function HeroTitle() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 lg:items-start lg:py-20'>
      <h1 className='text-preset-2 text-center md:max-w-sm lg:text-start'>
        Body Mass Index Calculator
      </h1>
      <p className='text-preset-6 font-normal lg:max-w-116.25'>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </div>
  );
}
