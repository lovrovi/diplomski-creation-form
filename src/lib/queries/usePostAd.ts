import { useMutation } from "@tanstack/react-query";
import axios from "../axiosConfig/axiosConfig";
import { AdTypeEnum } from "../enums/enums";

type usePostAdsDataType = {
  title: string;
  content: string;
  adType: AdTypeEnum;
};

const getAds = (data: usePostAdsDataType) => {
  return axios.post("/advertisements", data);
};

function usePostAds() {
  return useMutation({
    mutationFn: (data: usePostAdsDataType) => getAds(data),
    mutationKey: ["postAds"],
  });
}

export { usePostAds };
