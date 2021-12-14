import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={44} height={44} viewBox="0 0 44 44" {...props}>
      <G
        data-name="\u30B0\u30EB\u30FC\u30D7 39"
        transform="translate(-92 -594)"
      >
        <Circle
          data-name="\u6955\u5186\u5F62 37"
          cx={22}
          cy={22}
          r={22}
          transform="translate(92 594)"
          fill="#fff"
        />
        <G
          data-name="\u30A4\u30E1\u30FC\u30B7\u3099\u753B\u50CF\u306E\u30A2\u30A4\u30B3\u30F3\u7D20\u6750 \u305D\u306E3"
          fill="#639cbf"
        >
          <Path
            data-name="\u30D1\u30B9 33"
            d="M102.346 243.707a6.016 6.016 0 00-3.238-1.046 6.826 6.826 0 00-2.974.748 6.7 6.7 0 01-2.91.735 4.044 4.044 0 01-2.793-1.438 4.222 4.222 0 00-2.9-1.479h-.079v7.327h16.771v-4.163h-.079a3.7 3.7 0 01-1.798-.684z"
            transform="translate(101.68 605.44) translate(-83.102 -231.6)"
          />
          <Path
            data-name="\u30D1\u30B9 34"
            d="M242.95 128.9a2.708 2.708 0 002.657-2.193l.047-.244-.179.172a1.785 1.785 0 01-1.242.5 1.8 1.8 0 01-.739-3.443l.226-.1-.243-.049a2.706 2.706 0 10-.527 5.36z"
            transform="translate(101.68 605.44) translate(-228.292 -119.721)"
          />
          <Path
            data-name="\u30D1\u30B9 35"
            d="M0 47.7v20.728h25.472V47.7zm2.531 18.2V50.233h20.41V65.9z"
            transform="translate(101.68 605.44) translate(0 -47.702)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
