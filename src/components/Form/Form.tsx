import { useForm } from "react-hook-form";
import { ControlledTextField } from "../ControlledTextField/ControlledTextField";
import { ControlledSelect } from "../ControlledSelect/ControlledSelect";
import { Button, Stack } from "@mui/material";
import { usePostAds } from "../../lib/queries/usePostAd";
import { Advertisement } from "../../lib/types/types";
import { adTypes } from "../../lib/constants/constants";

function Form() {
  const defaultValues: Advertisement = {
    title: "",
    content: "",
    adType: "",
  };

  const { control, handleSubmit } = useForm<Advertisement>({ defaultValues });
  const { mutate } = usePostAds();

  return (
    <Stack spacing={4} alignItems="center">
      <ControlledTextField control={control} name="title" />
      <ControlledTextField control={control} name="content" multiline />
      <ControlledSelect
        control={control}
        name="adType"
        label="Advertisement type:"
        data={adTypes}
      />
      <Button onClick={handleSubmit(mutate as any)} type="submit">
        Submit
      </Button>
    </Stack>
  );
}

export default Form;
