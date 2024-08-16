import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody1,
  CoreTypographyBody2
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyBody2Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTypographyBody2</CoreH4>

      <CoreTypographyBody1>
        The CoreTypographyBody2 component is used to display body text, with a smaller font size than CoreTypographyBody1.

      </CoreTypographyBody1>

      <CodeSample
        title={"CoreTypographyBody2 Usage"}
        description={"Below is a sample of how to use the CoreTypographyBody2 component."}
        code={`<CoreTypographyBody2>
  This is a CoreTypographyBody2 sample.
</CoreTypographyBody2>`}
        renderElement={
          <>
            <CoreTypographyBody2>
            This is a CoreTypographyBody2 sample.
            </CoreTypographyBody2>
          </>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreTypographyBody2 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreTypographyBody2 align="left">CoreTypographyBody2 Alignment left</CoreTypographyBody2>

    <CoreTypographyBody2 align="center">CoreTypographyBody2 Alignment center</CoreTypographyBody2>

    <CoreTypographyBody2 align="right">CoreTypographyBody2 Alignment right</CoreTypographyBody2>

    <CoreTypographyBody2 align="justify">CoreTypographyBody2 Alignment justify</CoreTypographyBody2>

    <CoreTypographyBody2 align="inherit">CoreTypographyBody2 Alignment inherit</CoreTypographyBody2>
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
                <CoreTypographyBody2 align="left">CoreTypographyBody2 Alignment left</CoreTypographyBody2>

                <CoreTypographyBody2 align="center">CoreTypographyBody2 Alignment center</CoreTypographyBody2>

                <CoreTypographyBody2 align="right">CoreTypographyBody2 Alignment right</CoreTypographyBody2>

                <CoreTypographyBody2 align="justify">CoreTypographyBody2 Alignment justify</CoreTypographyBody2>

                <CoreTypographyBody2 align="inherit">CoreTypographyBody2 Alignment inherit</CoreTypographyBody2>
              </CoreStack>
            </CoreBox>
          </>
          
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreTypographyBody2 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreTypographyBody2 gutterBottom={true}>CoreTypographyBody2 with gutter bottom</CoreTypographyBody2>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreTypographyBody2 gutterBottom={true}>CoreTypographyBody2 with gutter bottom</CoreTypographyBody2>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreTypographyBody2 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreTypographyBody2 noWrap={true}>CoreTypographyBody2 with no wrap true. Make window small to see the sample.</CoreTypographyBody2>

  <CoreTypographyBody2 noWrap={false}>CoreTypographyBody2 with no wrap false</CoreTypographyBody2>
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
              <CoreTypographyBody2 noWrap={true}>CoreTypographyBody2 with no wrap true. Make window small to see the sample.</CoreTypographyBody2>

              <CoreTypographyBody2 noWrap={false}>CoreTypographyBody2</CoreTypographyBody2>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreTypographyBody2 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreTypographyBody2 paragraph={true}>CoreTypographyBody2 with paragraph true</CoreTypographyBody2>

  <CoreTypographyBody2 paragraph={false}>CoreTypographyBody2 with paragraph false</CoreTypographyBody2>
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
              <CoreTypographyBody2 paragraph={true}>CoreTypographyBody2 with paragraph true</CoreTypographyBody2>

              <CoreTypographyBody2 paragraph={false}>CoreTypographyBody2 with paragraph false</CoreTypographyBody2>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreTypographyBody2} />
    
    </>
  );
}