'use client';
import { useState } from 'react';
import Input from './Input';
import { calculateBodyMassIndex } from '@/lib/utils/calculate-bmi';
import { UnitSystem } from '@/types/unit-system';

export default function BMICard() {
  let [unitSystem, setUnitSystem] = useState(UnitSystem.METRIC);
  let [metric, setMetric] = useState({
    kg: 0,
    cm: 0,
    st: 0,
    lbs: 0,
    ft: 0,
    in: 0,
  });
  let [bmiResult, setBmiResult] = useState({ bmi: '0', summary: '' });

  const radioValue = [
    {
      value: UnitSystem.METRIC,
      label: 'Metric',
    },
    {
      value: UnitSystem.IMPERIAL,
      label: 'Imperial',
    },
  ];

  const handleBMICalculation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setMetric((prev) => {
      const updated = { ...prev, [name]: value };

      // hitung BMI pakai data terbaru
      setBmiResult(
        calculateBodyMassIndex(
          unitSystem,
          { cm: updated.cm, ft: updated.ft, in: updated.in },
          { kg: updated.kg, st: updated.st, lbs: updated.lbs },
        ),
      );

      return updated;
    });
  };

  return (
    <form
      id='bmi-form'
      noValidate
      className='text-preset-6 custome-shadow flex w-full flex-col gap-6 rounded-2xl bg-white p-6 text-blue-900 md:gap-8 md:p-8 lg:ml-2'
    >
      {/* Title */}
      <h3 className='text-preset-4'>Enter your details below</h3>

      {/* Choose metric or imperial */}
      <fieldset className='flex gap-6'>
        {radioValue.map(({ value, label }) => (
          <label
            key={value}
            htmlFor={value}
            className='flex w-full cursor-pointer items-center gap-4 hover:opacity-70'
          >
            <input
              type='radio'
              name='bmi'
              defaultChecked={unitSystem === value}
              value={value}
              id={value}
              onChange={(e) => {
                setUnitSystem(e.target.value as UnitSystem);
                setBmiResult({ bmi: '0', summary: '' });
                setMetric({ kg: 0, cm: 0, st: 0, lbs: 0, ft: 0, in: 0 });
              }}
              className={`border-grey-500 relative h-7.5 w-7.5 cursor-pointer appearance-none rounded-full border checked:border-none checked:bg-blue-100 checked:before:absolute checked:before:inset-2 checked:before:h-3.5 checked:before:w-3.5 checked:before:rounded-full checked:before:bg-blue-500 checked:before:content-['']`}
            />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      {/* Inputs information */}
      <div
        className={`flex flex-col gap-4 ${unitSystem === UnitSystem.METRIC ? 'md:flex-row' : 'md:flex-col'} md:gap-6`}
      >
        {unitSystem === UnitSystem.METRIC ? (
          <>
            <Input
              label='Height'
              fields={[
                {
                  unit: 'cm',
                  value: metric.cm,
                  onChange: handleBMICalculation,
                },
              ]}
            />
            <Input
              label='Weight'
              fields={[
                {
                  unit: 'kg',
                  value: metric.kg,
                  onChange: handleBMICalculation,
                },
              ]}
            />
          </>
        ) : (
          <>
            <Input
              label='Height'
              fields={[
                {
                  unit: 'ft',
                  value: 0,
                  onChange: handleBMICalculation,
                },
                {
                  unit: 'in',
                  value: 0,
                  onChange: handleBMICalculation,
                },
              ]}
            />
            <Input
              label='Weight'
              fields={[
                {
                  unit: 'st',
                  value: 0,
                  onChange: handleBMICalculation,
                },
                {
                  unit: 'lbs',
                  value: 0,
                  onChange: handleBMICalculation,
                },
              ]}
            />
          </>
        )}
      </div>

      {/* BMI result box */}
      <div className='text-preset-4 md:rounded-r-25 flex flex-col gap-6 rounded-2xl bg-blue-500 p-8 text-white md:gap-4'>
        <h2 className='!text-white'>
          {+bmiResult.bmi <= 0 ? 'Welcome!' : `Your BMI is ${bmiResult.bmi}`}
        </h2>
        <p className='text-preset-7 font-normal tracking-wide'>
          {bmiResult.summary ||
            `Enter your height and weight and you’ll see your BMI result here`}
        </p>
      </div>
    </form>
  );
}
