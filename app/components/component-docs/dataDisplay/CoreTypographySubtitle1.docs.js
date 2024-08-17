import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody1,
  CoreTypographySubtitle1
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographySubtitle1Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTypographySubtitle1</CoreH4>

      <CoreTypographyBody1>
        The CoreTypographySubtitle1 component is used to display subtitle.

      </CoreTypographyBody1>

      <CodeImport component="CoreTypographySubtitle1" />

      <CodeSample
        title={"CoreTypographySubtitle1 Usage"}
        description={"Below is a sample of how to use the CoreTypographySubtitle1 component."}
        code={`<CoreTypographySubtitle1>
  This is a CoreTypographySubtitle1 sample.
</CoreTypographySubtitle1>`}
        renderElement={
          <>
            <CoreTypographySubtitle1>
            This is a CoreTypographySubtitle1 sample.
            </CoreTypographySubtitle1>
          </>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreTypographySubtitle1 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreTypographySubtitle1 align="left">CoreTypographySubtitle1 Alignment left</CoreTypographySubtitle1>

    <CoreTypographySubtitle1 align="center">CoreTypographySubtitle1 Alignment center</CoreTypographySubtitle1>

    <CoreTypographySubtitle1 align="right">CoreTypographySubtitle1 Alignment right</CoreTypographySubtitle1>

    <CoreTypographySubtitle1 align="justify">CoreTypographySubtitle1 Alignment justify</CoreTypographySubtitle1>

    <CoreTypographySubtitle1 align="inherit">CoreTypographySubtitle1 Alignment inherit</CoreTypographySubtitle1>
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
                <CoreTypographySubtitle1 align="left">CoreTypographySubtitle1 Alignment left</CoreTypographySubtitle1>

                <CoreTypographySubtitle1 align="center">CoreTypographySubtitle1 Alignment center</CoreTypographySubtitle1>

                <CoreTypographySubtitle1 align="right">CoreTypographySubtitle1 Alignment right</CoreTypographySubtitle1>

                <CoreTypographySubtitle1 align="justify">CoreTypographySubtitle1 Alignment justify</CoreTypographySubtitle1>

                <CoreTypographySubtitle1 align="inherit">CoreTypographySubtitle1 Alignment inherit</CoreTypographySubtitle1>
              </CoreStack>
            </CoreBox>
          </>
          
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreTypographySubtitle1 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreTypographySubtitle1 gutterBottom={true}>CoreTypographySubtitle1 with gutter bottom</CoreTypographySubtitle1>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreTypographySubtitle1 gutterBottom={true}>CoreTypographySubtitle1 with gutter bottom</CoreTypographySubtitle1>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreTypographySubtitle1 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreTypographySubtitle1 noWrap={true}>CoreTypographySubtitle1 with no wrap true. Make window small to see the sample.</CoreTypographySubtitle1>

  <CoreTypographySubtitle1 noWrap={false}>CoreTypographySubtitle1 with no wrap false.</CoreTypographySubtitle1>
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
              <CoreTypographySubtitle1 noWrap={true}>CoreTypographySubtitle1 with no wrap true. Make window small to see the sample.</CoreTypographySubtitle1>

              <CoreTypographySubtitle1 noWrap={false}>CoreTypographySubtitle1 with no wrap false.</CoreTypographySubtitle1>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreTypographySubtitle1 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreTypographySubtitle1 paragraph={true}>CoreTypographySubtitle1 with paragraph true</CoreTypographySubtitle1>

  <CoreTypographySubtitle1 paragraph={false}>CoreTypographySubtitle1 with paragraph false</CoreTypographySubtitle1>
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
              <CoreTypographySubtitle1 paragraph={true}>CoreTypographySubtitle1 with paragraph true</CoreTypographySubtitle1>

              <CoreTypographySubtitle1 paragraph={false}>CoreTypographySubtitle1 with paragraph false</CoreTypographySubtitle1>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreTypographySubtitle1} />
    
    </>
  );
}