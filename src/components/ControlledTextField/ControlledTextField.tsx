import { TextField } from "@mui/material";
import { Control, useController } from "react-hook-form";
import { Advertisement } from "../../lib/types/types";

type ControlledTextFieldProps = {
  name: "title" | "content" | "adType";
  control: Control<Advertisement>;
  multiline?: boolean;
};

export const ControlledTextField = ({
  name,
  control,
  multiline,
  ...props
}: ControlledTextFieldProps) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      label={`${name}:`}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      error={invalid}
      helperText={error?.message}
      InputLabelProps={{ sx: { textTransform: "capitalize" } }}
      multiline={multiline}
      sx={{ mt: 2 }}
      {...props}
    />
  );
};
