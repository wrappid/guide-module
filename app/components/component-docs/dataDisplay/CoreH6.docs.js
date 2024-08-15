import {
  CoreBox, CoreClasses, CoreH6, CoreH4, CoreStack, CoreTypographyBody1 
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH6Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH6</CoreH4>

      <CoreTypographyBody1>
        CoreH6 helps you to create H6 heading in your design.
      </CoreTypographyBody1>

      <CodeImport name="CoreH6" />

      <CodeSample
        title={"CoreH6 Usage"}
        description={"CoreH6 is used by developers."}
        code={"<CoreH6>h6.Heading</CoreH6>"}
        renderElement={<CoreH6>h6.Heading</CoreH6>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH6 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreH6 align="left">h6.Heading</CoreH6>

    <CoreH6 align="center">h6.Heading</CoreH6>

    <CoreH6 align="right">h6.Heading</CoreH6>

    <CoreH6 align="justify">h6.Heading</CoreH6>

    <CoreH6 align="inherit">h6.Heading</CoreH6>
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
                <CoreH6 align="left">h6.Heading</CoreH6>

                <CoreH6 align="center">h6.Heading</CoreH6>

                <CoreH6 align="right">h6.Heading</CoreH6>

                <CoreH6 align="justify">h6.Heading</CoreH6>

                <CoreH6 align="inherit">h6.Heading</CoreH6>
              </CoreStack>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH6 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreH6 gutterBottom={true}>h6.Heading</CoreH6>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreH6 gutterBottom={true}>h6.Heading</CoreH6>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreH6 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.W_25
  ]}>              
  <CoreH6 noWrap={true}>h6.Heading with no wrap true</CoreH6>

  <CoreH6 noWrap={false}>h6.Heading</CoreH6>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_GREY_400,
              CoreClasses.BORDER.BORDER_ROUNDED_1,
              CoreClasses.PADDING.P2,
              CoreClasses.WIDTH.W_25
            ]}>              
              <CoreH6 noWrap={true}>h6.Heading with no wrap true</CoreH6>

              <CoreH6 noWrap={false}>h6.Heading</CoreH6>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH6 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreH6 paragraph={true}>h6.Heading</CoreH6>

  <CoreH6 paragraph={false}>h6.Heading</CoreH6>
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
              <CoreH6 paragraph={true}>h6.Heading</CoreH6>

              <CoreH6 paragraph={false}>h6.Heading</CoreH6>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreH6} />
    </>
  );
}
