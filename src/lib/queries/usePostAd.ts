import axios from "../axiosConfig/axiosConfig";
import { useMutation } from "@tanstack/react-query";
import AdTypeEnum from "../enums/AdTypeEnum";

type usePostAdsDataType = {
  title: string;
  content: string;
  adType: AdTypeEnum;
};

const getAds = (data: usePostAdsDataType) => {
  console.log(data);
  return axios.post("/advertisements", data);
};

function usePostAds() {
  return useMutation({
    mutationFn: (data: usePostAdsDataType) => getAds(data),
    mutationKey: ["postAds"],
  });
}

export { usePostAds };
