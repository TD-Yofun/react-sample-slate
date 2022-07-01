import { AlignType } from "../types";

export function useAlignStyleEffect(
  align: AlignType = AlignType.LEFT
): React.CSSProperties {
  switch (align) {
    case AlignType.LEFT:
      return { textAlign: "left" };
    case AlignType.CENTER:
      return { textAlign: "center" };
    case AlignType.RIGHT:
      return { textAlign: "right" };
    default:
      return {};
  }
}
