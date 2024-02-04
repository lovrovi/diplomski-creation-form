import { useForm } from "react-hook-form";
import { ControlledTextField } from "../ControlledTextField/ControlledTextField";
import { ControlledSelect } from "../ControlledSelect/ControlledSelect";
import { Button, Stack } from "@mui/material";
import { usePostAds } from "../../lib/queries/usePostAd";
import AdTypeEnum from "../../lib/enums/AdTypeEnum";
import { Advertisement } from "../../lib/types/types";
import { adTypes } from "../../lib/constants/constants";

function Form() {
  const defaultValues: Advertisement = {
    title: "",
    content: "",
    adType: AdTypeEnum.Buy,
  };

  const { control, handleSubmit } = useForm<Advertisement>({ defaultValues });
  const { mutate } = usePostAds();

  return (
    <Stack
      spacing={2}
      alignItems="center"
      component="form"
      onSubmit={handleSubmit(mutate as any)}
    >
      <ControlledTextField control={control} name="title" />
      <ControlledTextField control={control} name="content" />
      <ControlledSelect
        control={control}
        name="adType"
        label="Advertisement type:"
        data={adTypes}
      />
      <Button type="submit">Submit</Button>
    </Stack>
  );
}

export default Form;
