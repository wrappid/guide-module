import { CoreBox, CoreClasses, CoreSpan, CoreTypographyBody1 } from "@wrappid/core";

function CodeBlock(props) {
  const { children, block = false } = props;

  return block ? (
    <CoreBox
      styleClasses={[
        CoreClasses.BG.BG_GREY_100,
        CoreClasses.COLOR.TEXT_BLACK,
        CoreClasses.HEIGHT.MAX_VH_50,
        CoreClasses.OVERFLOW.OVERFLOW_AUTO,
        CoreClasses.PADDING.P1,
        CoreClasses.PADDING.PL3,
        CoreClasses.BORDER.BORDER_ROUNDED_2
      ]}
    >
      <CoreTypographyBody1 code={true}>{children}</CoreTypographyBody1>
    </CoreBox>
  ) : (
    <CoreSpan code={true} styleClasses={[]}>
      {children}
    </CoreSpan>
  );
}

export default CodeBlock;
