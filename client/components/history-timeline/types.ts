export type TimelineIconName = "airport" | "building" | "award" | "target" | "plane";

export type TimelineItem = {
  year: string;
  title: string;
  active: boolean;
  icon: TimelineIconName;
};

export type TimelineDetail = {
  year: string;
  title: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
};

