import * as React from "react";
import Svg, { G, Ellipse, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={106} height={107} viewBox="0 0 106 107" {...props}>
      <G
        data-name="\u30B0\u30EB\u30FC\u30D7 43"
        transform="translate(-43 -376)"
      >
        <Ellipse
          data-name="\u6955\u5186\u5F62 35"
          cx={53}
          cy={53.5}
          rx={53}
          ry={53.5}
          transform="translate(43 376)"
          fill="#fff"
        />
        <G
          data-name="Free Clock icon part 2\u7121\u6599\u306E\u6642\u8A08\u306E\u30A2\u30A4\u30B3\u30F3 2"
          fill="#639cbf"
        >
          <Path
            data-name="\u30D1\u30B9 29"
            d="M25.369 0a25.369 25.369 0 1025.369 25.369A25.4 25.4 0 0025.369 0zm0 44.7A19.329 19.329 0 1144.7 25.369 19.35 19.35 0 0125.369 44.7z"
            transform="translate(70.631 404.262)"
          />
          <Path
            data-name="\u30D1\u30B9 30"
            d="M164.706 115.758a2.3 2.3 0 00-2.3 2.3v10.406l-7.336 7.336a2.3 2.3 0 003.251 3.251l8.679-8.684v-12.31a2.3 2.3 0 00-2.294-2.299z"
            transform="translate(70.631 404.262) translate(-139.096 -104.287)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
