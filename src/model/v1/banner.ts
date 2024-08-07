export interface BannerV1 {
  timestamp: string;
  banners: Banner[];
}

interface Banner {
  id: string;
  title: string;
  color: string;
  picto: "circle_info" | "circle_warning";
  description: string;
  linkType: number;
  link: string;
  buttonText: string;
  position: number;
}
