import { AdTypeEnum } from "../enums/enums";

type AdTypeData = {
  id: AdTypeEnum;
  name: string;
};

type Advertisement = {
  title: string;
  content: string;
  adType: AdTypeEnum | string;
};

export type { AdTypeData, Advertisement };
