export type Data = {
  name: string;
  thumbnail: string;
};

export type BannerData = {
  title?: string;
  url?: string;
  imgUrl: string;
  duration?: string;
  status?:boolean;
  statusText?: string;
  buttonText? :string;
  onClick?: ()=> void;
};
