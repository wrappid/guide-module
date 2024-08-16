import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody1,
  CoreTypographyOverline
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyOverlineDocs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTypographyOverline</CoreH4>

      <CoreTypographyBody1>
        The CoreTypographyOverline component is used to display overline text.

      </CoreTypographyBody1>

      <CodeSample
        title={"CoreTypographyOverline Usage"}
        description={"Below is a sample of how to use the CoreTypographyOverline component."}
        code={`<CoreTypographyOverline>
  This is a CoreTypographyOverline sample.
</CoreTypographyOverline>`}
        renderElement={
          <>
            <CoreTypographyOverline>
            This is a CoreTypographyOverline sample.
            </CoreTypographyOverline>
          </>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreTypographyOverline different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreTypographyOverline align="left">CoreTypographyOverline Alignment left</CoreTypographyOverline>

    <CoreTypographyOverline align="center">CoreTypographyOverline Alignment center</CoreTypographyOverline>

    <CoreTypographyOverline align="right">CoreTypographyOverline Alignment right</CoreTypographyOverline>

    <CoreTypographyOverline align="justify">CoreTypographyOverline Alignment justify</CoreTypographyOverline>

    <CoreTypographyOverline align="inherit">CoreTypographyOverline Alignment inherit</CoreTypographyOverline>
  </CoreStack>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[
              CoreClasses.WIDTH.VW_100,
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_GREY_400,
              CoreClasses.BORDER.BORDER_ROUNDED_1,
              CoreClasses.PADDING.P2
            ]}>
              <CoreStack direction="column">
                <CoreTypographyOverline align="left">CoreTypographyOverline Alignment left</CoreTypographyOverline>

                <CoreTypographyOverline align="center">CoreTypographyOverline Alignment center</CoreTypographyOverline>

                <CoreTypographyOverline align="right">CoreTypographyOverline Alignment right</CoreTypographyOverline>

                <CoreTypographyOverline align="justify">CoreTypographyOverline Alignment justify</CoreTypographyOverline>

                <CoreTypographyOverline align="inherit">CoreTypographyOverline Alignment inherit</CoreTypographyOverline>
              </CoreStack>
            </CoreBox>
          </>
          
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreTypographyOverline will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreTypographyOverline gutterBottom={true}>CoreTypographyOverline with gutter bottom</CoreTypographyOverline>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreTypographyOverline gutterBottom={true}>CoreTypographyOverline with gutter bottom</CoreTypographyOverline>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreTypographyOverline with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreTypographyOverline noWrap={true}>CoreTypographyOverline with no wrap true. Make window small to see the sample.</CoreTypographyOverline>

  <CoreTypographyOverline noWrap={false}>CoreTypographyOverline with no wrap false.</CoreTypographyOverline>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_GREY_400,
              CoreClasses.BORDER.BORDER_ROUNDED_1,
              CoreClasses.PADDING.P2,
              CoreClasses.WIDTH.VW_25
            ]}>              
              <CoreTypographyOverline noWrap={true}>CoreTypographyOverline with no wrap true. Make window small to see the sample.</CoreTypographyOverline>

              <CoreTypographyOverline noWrap={false}>CoreTypographyOverline</CoreTypographyOverline>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreTypographyOverline with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreTypographyOverline paragraph={true}>CoreTypographyOverline with paragraph true</CoreTypographyOverline>

  <CoreTypographyOverline paragraph={false}>CoreTypographyOverline with paragraph false</CoreTypographyOverline>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_GREY_400,
              CoreClasses.BORDER.BORDER_ROUNDED_1,
              CoreClasses.PADDING.P2,
              CoreClasses.WIDTH.VW_25
            ]}>
              <CoreTypographyOverline paragraph={true}>CoreTypographyOverline with paragraph true</CoreTypographyOverline>

              <CoreTypographyOverline paragraph={false}>CoreTypographyOverline with paragraph false</CoreTypographyOverline>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreTypographyOverline} />
    
    </>
  );
}