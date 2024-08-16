import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreStack,
  CoreTypographyBody1,
  CoreTypographyCaption
} from "@wrappid/core";
  
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
export default function CoreTypographyCaptionDocs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTypographyCaption</CoreH4>

      <CoreTypographyBody1>
        The CoreTypographyCaption component is used to display caption text.

      </CoreTypographyBody1>

      <CodeImport name="CoreTypographyCaption" />

      <CodeSample
        title={"CoreTypographyCaption Usage"}
        description={"Below is a sample of how to use the CoreTypographyCaption component."}
        code={`<CoreTypographyCaption>
  This is a CoreTypographyCaption sample.
</CoreTypographyCaption>`}
        renderElement={
          <>
            <CoreTypographyCaption>
            This is a CoreTypographyCaption sample.
            </CoreTypographyCaption>
          </>
        }
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreTypographyCaption different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreTypographyCaption align="left">CoreTypographyCaption Alignment left</CoreTypographyCaption>

    <CoreTypographyCaption align="center">CoreTypographyCaption Alignment center</CoreTypographyCaption>

    <CoreTypographyCaption align="right">CoreTypographyCaption Alignment right</CoreTypographyCaption>

    <CoreTypographyCaption align="justify">CoreTypographyCaption Alignment justify</CoreTypographyCaption>

    <CoreTypographyCaption align="inherit">CoreTypographyCaption Alignment inherit</CoreTypographyCaption>
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
                <CoreTypographyCaption align="left">CoreTypographyCaption Alignment left</CoreTypographyCaption>

                <CoreTypographyCaption align="center">CoreTypographyCaption Alignment center</CoreTypographyCaption>

                <CoreTypographyCaption align="right">CoreTypographyCaption Alignment right</CoreTypographyCaption>

                <CoreTypographyCaption align="justify">CoreTypographyCaption Alignment justify</CoreTypographyCaption>

                <CoreTypographyCaption align="inherit">CoreTypographyCaption Alignment inherit</CoreTypographyCaption>
              </CoreStack>
            </CoreBox>
          </>
          
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreTypographyCaption will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreTypographyCaption gutterBottom={true}>CoreTypographyCaption with gutter bottom</CoreTypographyCaption>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreTypographyCaption gutterBottom={true}>CoreTypographyCaption with gutter bottom</CoreTypographyCaption>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreTypographyCaption with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreTypographyCaption paragraph={true}>CoreTypographyCaption with paragraph true</CoreTypographyCaption>

  <CoreTypographyCaption paragraph={false}>CoreTypographyCaption with paragraph false</CoreTypographyCaption>
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
              <CoreTypographyCaption paragraph={true}>CoreTypographyCaption with paragraph true</CoreTypographyCaption>

              <CoreTypographyCaption paragraph={false}>CoreTypographyCaption with paragraph false</CoreTypographyCaption>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreTypographyCaption} />
    
    </>
  );
}