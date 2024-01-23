import { CoreBox, CoreClasses, CoreSpan, CoreTypographyBody1 } from "@wrappid/core";

function CodeBlock(props) {
  const { children, block = false } = props;

  return block ? (
    <CoreBox
      styleClasses={[
        CoreClasses.BG.BG_SECONDARY,
        CoreClasses.COLOR.TEXT_INFO_DARK,
        CoreClasses.HEIGHT.MAX_VH_50,
        CoreClasses.PADDING.P1,
        CoreClasses.PADDING.PL3,
      ]}
    >
      <CoreTypographyBody1 code={true}>{children}</CoreTypographyBody1>
    </CoreBox>
  ) : (
    <CoreSpan code={true} styleClasses={[CoreClasses.BG.BG_SECONDARY]}>
      {children}
    </CoreSpan>
  );
}

export default CodeBlock;
