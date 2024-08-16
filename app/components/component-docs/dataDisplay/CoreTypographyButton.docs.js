import {
  CoreH4,
  CoreTypographyBody1,
  CoreTypographyButton,
  CoreClasses,
  CoreBox,
  CoreStack
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
export default function CoreTypographyButtonDocs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTypographyButton</CoreH4>
  
      <CoreTypographyBody1>
        The CoreTypographyButton applies the theme typography styles of button
      </CoreTypographyBody1>
  
      <CodeImport name="CoreTypographyButton" />

      <CodeSample
        title={"CoreTypographyButton Usage"}
        description={"Below is a sample usage."}
        code={`<CoreTypographyButton>
  This is a CoreTypography Button sample.
</CoreTypographyButton>
          `}
        renderElement={<>
          <CoreTypographyButton>
          This is a CoreTypographyButton Component Sample.
          </CoreTypographyButton>
        </>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreTypographyButton with different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreTypographyButton align="left">CoreTypographyButton Alignment left</CoreTypographyButton>

    <CoreTypographyButton align="center">CoreTypographyButton Alignment center</CoreTypographyButton>

    <CoreTypographyButton align="right">CoreTypographyButton Alignment right</CoreTypographyButton>

    <CoreTypographyButton align="justify">CoreTypographyButton Alignment justify</CoreTypographyButton>

    <CoreTypographyButton align="inherit">CoreTypographyButton Alignment inherit</CoreTypographyButton>
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
                <CoreTypographyButton align="left">CoreTypographyButton Alignment left</CoreTypographyButton>

                <CoreTypographyButton align="center">CoreTypographyButton Alignment center</CoreTypographyButton>

                <CoreTypographyButton align="right">CoreTypographyButton Alignment right</CoreTypographyButton>

                <CoreTypographyButton align="justify">CoreTypographyButton Alignment justify</CoreTypographyButton>

                <CoreTypographyButton align="inherit">CoreTypographyButton Alignment inherit</CoreTypographyButton>
              </CoreStack>
            </CoreBox>
          </>
          
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreTypographyButton will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreTypographyButton gutterBottom={true}>CoreTypographyButton with gutter bottom</CoreTypographyButton>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreTypographyButton gutterBottom={true}>CoreTypographyButton with gutter bottom</CoreTypographyButton>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreTypographyButton with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreTypographyButton noWrap={true}>CoreTypographyButton with no wrap true. Make window small to see the sample.</CoreTypographyButton>

  <CoreTypographyButton noWrap={false}>CoreTypographyButton with no wrap false</CoreTypographyButton>
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
              <CoreTypographyButton noWrap={true}>CoreTypographyButton with no wrap true. Make window small to see the sample.</CoreTypographyButton>

              <CoreTypographyButton noWrap={false}>CoreTypographyButton</CoreTypographyButton>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreTypographyButton with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreTypographyButton paragraph={true}>CoreTypographyButton with paragraph true</CoreTypographyButton>

  <CoreTypographyButton paragraph={false}>CoreTypographyButton with paragraph false</CoreTypographyButton>
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
              <CoreTypographyButton paragraph={true}>CoreTypographyButton with paragraph true</CoreTypographyButton>

              <CoreTypographyButton paragraph={false}>CoreTypographyButton with paragraph false</CoreTypographyButton>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreTypographyButton} />
      
    </>
  );
}