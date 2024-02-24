import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Control, useController } from "react-hook-form";
import { AdTypeData, Advertisement } from "../../lib/types/types";

type ControlledSelectProps = {
  data: AdTypeData[];
  name: "title" | "content" | "adType";
  label: string;
  control: Control<Advertisement>;
  disabled?: boolean;
};

export const ControlledSelect = ({
  data,
  name,
  control,
  label,
  disabled,
}: ControlledSelectProps) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { invalid },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl sx={{ minWidth: "12rem" }} error={invalid}>
      <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`select-${name}-label`}
        variant="standard"
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        autoWidth
      >
        {data?.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
