import { UnitSystem } from '@/types/unit-system';

function bmiForumla(kg: number, m: number) {
  return kg / (m * m);
}

function convertImperial(
  height: { ft: number; in: number },
  weight: { lbs: number; st: number },
) {
  const meters = height.ft * 0.3048 + height.in * 0.0254;
  const kilograms = weight.st * 6.35029 + weight.lbs * 0.453592;

  return { meters, kilograms };
}

function convertMetric(cm: number, kg: number) {
  return { meters: cm / 100, kilograms: kg };
}

function setBmiCategory(bmi: number) {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'healthy weight';
  return 'overweight';
}

function kgToStLbs(kg: number): { stones: number; pounds: number } {
  const totalLbs = kg * 2.20462; // konversi ke lbs
  const stones = Math.floor(totalLbs / 14); // ambil jumlah stone
  const pounds = parseFloat((totalLbs % 14).toFixed(2)); // sisa lbs (dibulatkan 2 desimal)

  return { stones, pounds };
}

function setBmiIdealWeight(meters: number, unit: UnitSystem) {
  const minimumKgs = 18.5 * meters * meters;
  const maximumKgs = 24.9 * meters * meters;

  if (unit === UnitSystem.METRIC) {
    return `your ideal weight is between ${minimumKgs.toFixed(2)}kgs - ${maximumKgs.toFixed(2)}kgs `;
  }

  const minimumStLbs = kgToStLbs(minimumKgs);
  const maximumStLbs = kgToStLbs(maximumKgs);

  return `Your ideal weight is between ${minimumStLbs.stones}st ${minimumStLbs.pounds}lbs - ${maximumStLbs.stones}st ${maximumStLbs.pounds}lbs`;
}

export function calculateBodyMassIndex(
  unit: UnitSystem,
  height: { cm?: number; ft?: number; in?: number },
  weight: { kg?: number; st?: number; lbs?: number },
) {
  const { meters, kilograms } =
    unit === UnitSystem.METRIC
      ? convertMetric(height.cm!, weight.kg!)
      : convertImperial(
          { ft: height.ft!, in: height.in! },
          { st: weight.st!, lbs: weight.lbs! },
        );

  if (!meters || !kilograms) {
    return {
      bmi: '0',
      summary: '',
    };
  }

  const bmiValue = bmiForumla(kilograms, meters);

  const bmiCategory = setBmiCategory(bmiValue);

  const bmiIdealWeight = setBmiIdealWeight(meters, unit);

  return {
    bmi: bmiValue.toFixed(1).toString(),
    summary: `Your BMI suggests you're a ${bmiCategory}. ${bmiIdealWeight}`,
  };
}
