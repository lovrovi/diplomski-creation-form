import { AdTypeEnum } from "../enums/enums";
import { AdTypeData } from "../types/types";

const adTypes: AdTypeData[] = [
  {
    id: AdTypeEnum.Sell,
    name: "Sell",
  },
  {
    id: AdTypeEnum.Buy,
    name: "Buy",
  },
  {
    id: AdTypeEnum.Trade,
    name: "Trade",
  },
  {
    id: AdTypeEnum.Job,
    name: "Job",
  },
  {
    id: AdTypeEnum.Service,
    name: "Service",
  },
];

export { adTypes };
