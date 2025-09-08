export default function Input({
  label,
  fields,
}: {
  readonly label: string;
  readonly fields: {
    unit: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
}) {
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={fields[0].unit}>{label}</label>
      <div className='text-preset-7 flex gap-2 md:gap-6'>
        {fields.map(({ unit, value, onChange }, index) => (
          <div key={unit} className='relative'>
            <input
              id={unit}
              key={unit + index}
              type='number'
              defaultValue={value}
              onChange={onChange}
              name={unit}
              onFocus={(e) => e.target.select()}
              onContextMenu={(e) => e.preventDefault()}
              className={`border-grey-500 text-preset-4 w-full rounded-xl border py-5.5 pr-16 pl-6 ${value <= 0 ? 'text-grey-500' : 'text-blue-900'} `}
            />
            <span className='text-preset-4 absolute top-1/3 right-7 text-blue-400'>
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
