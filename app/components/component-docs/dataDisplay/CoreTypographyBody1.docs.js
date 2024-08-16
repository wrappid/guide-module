import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyBody1Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTypographyBody1</CoreH4>

      <CoreTypographyBody1>
        The CoreTypographyBody1 component is used to display body text.

      </CoreTypographyBody1>

      <CodeSample
        title={"CoreTypographyBody1 Usage"}
        description={"Below is a sample of how to use the CoreTypographyBody1 component."}
        code={`<CoreTypographyBody1>
  This is a CoreTypographyBody1 sample.
</CoreTypographyBody1>`}
        renderElement={
          <>
            <CoreTypographyBody1>
            This is a CoreTypographyBody1 sample.
            </CoreTypographyBody1>
          </>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreTypographyBody1 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreTypographyBody1 align="left">CoreTypographyBody1 Alignment left</CoreTypographyBody1>

    <CoreTypographyBody1 align="center">CoreTypographyBody1 Alignment center</CoreTypographyBody1>

    <CoreTypographyBody1 align="right">CoreTypographyBody1 Alignment right</CoreTypographyBody1>

    <CoreTypographyBody1 align="justify">CoreTypographyBody1 Alignment justify</CoreTypographyBody1>

    <CoreTypographyBody1 align="inherit">CoreTypographyBody1 Alignment inherit</CoreTypographyBody1>
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
                <CoreTypographyBody1 align="left">CoreTypographyBody1 Alignment left</CoreTypographyBody1>

                <CoreTypographyBody1 align="center">CoreTypographyBody1 Alignment center</CoreTypographyBody1>

                <CoreTypographyBody1 align="right">CoreTypographyBody1 Alignment right</CoreTypographyBody1>

                <CoreTypographyBody1 align="justify">CoreTypographyBody1 Alignment justify</CoreTypographyBody1>

                <CoreTypographyBody1 align="inherit">CoreTypographyBody1 Alignment inherit</CoreTypographyBody1>
              </CoreStack>
            </CoreBox>
          </>
          
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreTypographyBody1 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreTypographyBody1 gutterBottom={true}>CoreTypographyBody1 with gutter bottom</CoreTypographyBody1>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreTypographyBody1 gutterBottom={true}>CoreTypographyBody1 with gutter bottom</CoreTypographyBody1>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreTypographyBody1 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreTypographyBody1 noWrap={true}>CoreTypographyBody1 with no wrap true. Make window small to see the sample.</CoreTypographyBody1>

  <CoreTypographyBody1 noWrap={false}>CoreTypographyBody1</CoreTypographyBody1>
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
              <CoreTypographyBody1 noWrap={true}>CoreTypographyBody1 with no wrap true. Make window small to see the sample.</CoreTypographyBody1>

              <CoreTypographyBody1 noWrap={false}>CoreTypographyBody1</CoreTypographyBody1>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreTypographyBody1 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreTypographyBody1 paragraph={true}>CoreTypographyBody1 with paragraph true</CoreTypographyBody1>

  <CoreTypographyBody1 paragraph={false}>CoreTypographyBody1 with paragraph false</CoreTypographyBody1>
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
              <CoreTypographyBody1 paragraph={true}>CoreTypographyBody1 with paragraph true</CoreTypographyBody1>

              <CoreTypographyBody1 paragraph={false}>CoreTypographyBody1 with paragraph false</CoreTypographyBody1>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreTypographyBody1} />
    
    </>
  );
}