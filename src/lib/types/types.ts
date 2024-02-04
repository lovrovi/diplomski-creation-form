import AdTypeEnum from "../enums/AdTypeEnum";

type AdTypeData = {
  id: AdTypeEnum;
  name: string;
};

type Advertisement = {
  title: string;
  content: string;
  adType: AdTypeEnum;
};

export type { AdTypeData, Advertisement };
