import { CoreBox, CoreClasses, CoreH4, CoreStack, CoreTypographyBody1 } from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH4Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH4</CoreH4>

      <CoreTypographyBody1>
        CoreH4 helps you to create H4 heading in your design.
      </CoreTypographyBody1>

      <CodeImport name="CoreH4" />

      <CodeSample
        title={"CoreH4 Usage"}
        description={"CoreH4 is used by developers."}
        code={"<CoreH4>h4.Heading</CoreH4>"}
        renderElement={<CoreH4>h4.Heading</CoreH4>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH4 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreH4 align="left">h4.Heading</CoreH4>

    <CoreH4 align="center">h4.Heading</CoreH4>

    <CoreH4 align="right">h4.Heading</CoreH4>

    <CoreH4 align="justify">h4.Heading</CoreH4>

    <CoreH4 align="inherit">h4.Heading</CoreH4>
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
                <CoreH4 align="left">h4.Heading</CoreH4>

                <CoreH4 align="center">h4.Heading</CoreH4>

                <CoreH4 align="right">h4.Heading</CoreH4>

                <CoreH4 align="justify">h4.Heading</CoreH4>

                <CoreH4 align="inherit">h4.Heading</CoreH4>
              </CoreStack>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH4 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreH4 gutterBottom={true}>h4.Heading</CoreH4>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreH4 gutterBottom={true}>h4.Heading</CoreH4>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreH4 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.W_25
  ]}>              
  <CoreH4 noWrap={true}>h4.Heading with no wrap true</CoreH4>

  <CoreH4 noWrap={false}>h4.Heading</CoreH4>
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
              <CoreH4 noWrap={true}>h4.Heading with no wrap true</CoreH4>

              <CoreH4 noWrap={false}>h4.Heading</CoreH4>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH4 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreH4 paragraph={true}>h4.Heading</CoreH4>

  <CoreH4 paragraph={false}>h4.Heading</CoreH4>
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
              <CoreH4 paragraph={true}>h4.Heading</CoreH4>

              <CoreH4 paragraph={false}>h4.Heading</CoreH4>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreH4} />
    </>
  );
}
