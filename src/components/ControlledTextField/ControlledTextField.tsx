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
  multiline = false,
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
      rows={multiline ? 4 : 0}
      sx={{ mt: 2 }}
      variant={multiline ? "outlined" : "standard"}
      fullWidth
      {...props}
    />
  );
};
