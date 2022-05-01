interface HomeFieldProps {   
  label: string,
  value: string | number,
  unit?: string
}

export const HomeField = ({label, value, unit}: HomeFieldProps) => (
  <div className="text-sm">
    <span className="mr-2 font-medium">{label}: </span> {value} {unit}
  </div>
);