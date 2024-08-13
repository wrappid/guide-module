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
        CoreClasses.BORDER.BORDER_TOP,
        CoreClasses.BORDER.BORDER_ROUNDED_BOTTOM_1,
        CoreClasses.BORDER.BORDER_GREY_200
      ]}
    >
      <CoreTypographyBody1  code={true}>{children}</CoreTypographyBody1>
    </CoreBox>
  ) : (
    <CoreSpan code={true} styleClasses={[    CoreClasses.BG.BG_GREY_200,
      CoreClasses.COLOR.TEXT_BLACK,
      CoreClasses.PADDING.PX1,
      CoreClasses.BORDER.BORDER_ROUNDED_1
      ]}>
      {children}
    </CoreSpan>
  );
}

export default CodeBlock;
