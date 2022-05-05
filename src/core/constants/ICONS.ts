export interface SVGAttributes {
  path: string;
  viewbox: string;
}

interface IconLib {
  [key: string]: SVGAttributes;
}

const ICONS: IconLib = {
  PLUS: {
    path: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    viewbox: "2 2 18 18",
  },
};

export default ICONS;
