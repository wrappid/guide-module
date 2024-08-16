import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody1,
  CoreTypographySubtitle2
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographySubtitle2Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTypographySubtitle2</CoreH4>

      <CoreTypographyBody1>
        The CoreTypographySubtitle2 component is used to display subtitle.

      </CoreTypographyBody1>

      <CodeImport component="CoreTypographySubtitle2" />

      <CodeSample
        title={"CoreTypographySubtitle2 Usage"}
        description={"Below is a sample of how to use the CoreTypographySubtitle2 component."}
        code={`<CoreTypographySubtitle2>
  This is a CoreTypographySubtitle2 sample.
</CoreTypographySubtitle2>`}
        renderElement={
          <>
            <CoreTypographySubtitle2>
            This is a CoreTypographySubtitle2 sample.
            </CoreTypographySubtitle2>
          </>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreTypographySubtitle2 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreTypographySubtitle2 align="left">CoreTypographySubtitle2 Alignment left</CoreTypographySubtitle2>

    <CoreTypographySubtitle2 align="center">CoreTypographySubtitle2 Alignment center</CoreTypographySubtitle2>

    <CoreTypographySubtitle2 align="right">CoreTypographySubtitle2 Alignment right</CoreTypographySubtitle2>

    <CoreTypographySubtitle2 align="justify">CoreTypographySubtitle2 Alignment justify</CoreTypographySubtitle2>

    <CoreTypographySubtitle2 align="inherit">CoreTypographySubtitle2 Alignment inherit</CoreTypographySubtitle2>
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
                <CoreTypographySubtitle2 align="left">CoreTypographySubtitle2 Alignment left</CoreTypographySubtitle2>

                <CoreTypographySubtitle2 align="center">CoreTypographySubtitle2 Alignment center</CoreTypographySubtitle2>

                <CoreTypographySubtitle2 align="right">CoreTypographySubtitle2 Alignment right</CoreTypographySubtitle2>

                <CoreTypographySubtitle2 align="justify">CoreTypographySubtitle2 Alignment justify</CoreTypographySubtitle2>

                <CoreTypographySubtitle2 align="inherit">CoreTypographySubtitle2 Alignment inherit</CoreTypographySubtitle2>
              </CoreStack>
            </CoreBox>
          </>
          
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreTypographySubtitle2 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreTypographySubtitle2 gutterBottom={true}>CoreTypographySubtitle2 with gutter bottom</CoreTypographySubtitle2>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreTypographySubtitle2 gutterBottom={true}>CoreTypographySubtitle2 with gutter bottom</CoreTypographySubtitle2>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreTypographySubtitle2 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreTypographySubtitle2 noWrap={true}>CoreTypographySubtitle2 with no wrap true. Make window small to see the sample.</CoreTypographySubtitle2>

  <CoreTypographySubtitle2 noWrap={false}>CoreTypographySubtitle2 with no wrap false.</CoreTypographySubtitle2>
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
              <CoreTypographySubtitle2 noWrap={true}>CoreTypographySubtitle2 with no wrap true. Make window small to see the sample.</CoreTypographySubtitle2>

              <CoreTypographySubtitle2 noWrap={false}>CoreTypographySubtitle2 with no wrap false.</CoreTypographySubtitle2>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreTypographySubtitle2 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreTypographySubtitle2 paragraph={true}>CoreTypographySubtitle2 with paragraph true</CoreTypographySubtitle2>

  <CoreTypographySubtitle2 paragraph={false}>CoreTypographySubtitle2 with paragraph false</CoreTypographySubtitle2>
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
              <CoreTypographySubtitle2 paragraph={true}>CoreTypographySubtitle2 with paragraph true</CoreTypographySubtitle2>

              <CoreTypographySubtitle2 paragraph={false}>CoreTypographySubtitle2 with paragraph false</CoreTypographySubtitle2>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreTypographySubtitle2} />
    
    </>
  );
}