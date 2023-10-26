import { CoreBox, CoreClasses, CoreSpan, CoreTypographyBody1 } from "@wrappid/core";

function CodeBlock(props) {
  const { children, block = false } = props;

  return (
    block ? (
      <CoreBox styleClasses={[
        CoreClasses.PADDING.PX1,
        CoreClasses.OVERFLOW.OVERFLOW_X_AUTO,
        CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL,
        CoreClasses.BG.BG_BLACK,
        CoreClasses.COLOR.TEXT_WHITE
      ]}>
        <CoreTypographyBody1 code={true}>
          {children}
        </CoreTypographyBody1>
      </CoreBox>
    ) : (
      <CoreSpan
        code={true}
        styleClasses={[CoreClasses.PADDING.PX1, CoreClasses.BG.BG_SECONDARY_LIGHT]}>
        {children}
      </CoreSpan>
    )
  );
}

export default CodeBlock;