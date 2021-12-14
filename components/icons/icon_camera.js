import * as React from "react";
import Svg, {
  G,
  Path,
  Text,
  TSpan,
  Circle,
  Rect,
  Ellipse
} from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={154} height={154} viewBox="0 0 78 78" {...props}>
      <G data-name="\u30B0\u30EB\u30FC\u30D7 43">
        <Path
          data-name="\u30D1\u30B9 10"
          d="M-432.5 651.436s1.99-9.276 4.238-9.183 23.522 0 23.522 0a7.067 7.067 0 011.224 2.234c.126.837 2.189 6.949 2.189 6.949"
          transform="translate(-150 -560) translate(605.772 -64.455)"
          fill="#639cbf"
        />
        <G
          data-name="\u30B0\u30EB\u30FC\u30D7 37"
          transform="translate(-150 -560) translate(-123 1)"
        >
          <Circle
            data-name="\u6955\u5186\u5F62 29"
            cx={39}
            cy={39}
            r={39}
            transform="translate(273 559)"
            fill="#fff"
          />
          <Rect
            data-name="\u9577\u65B9\u5F62 13"
            width={41.394}
            height={32.614}
            rx={3}
            transform="translate(291 584.668)"
            fill="#639cbf"
          />
          <Path
            data-name="\u30D1\u30B9 10"
            d="M-432.5 649.841s1.645-7.665 3.5-7.589 19.437 0 19.437 0a5.84 5.84 0 011.012 1.846c.1.692 1.809 5.742 1.809 5.742"
            transform="translate(731.504 -64.252)"
            fill="#639cbf"
          />
          <Ellipse
            data-name="\u6955\u5186\u5F62 10"
            cx={7.781}
            cy={7.408}
            rx={7.781}
            ry={7.408}
            transform="translate(304 593.685)"
            fill="#f2f2f2"
          />
          <Circle
            data-name="\u6955\u5186\u5F62 11"
            cx={1.882}
            cy={1.882}
            r={1.882}
            transform="translate(322.105 589.431)"
            fill="#f2f2f2"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;