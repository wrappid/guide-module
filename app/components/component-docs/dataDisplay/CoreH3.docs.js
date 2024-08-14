import {
  CoreBox, CoreClasses, CoreH3, CoreH4, CoreStack, CoreTypographyBody1 
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH3Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH3</CoreH4>

      <CoreTypographyBody1>
        CoreH3 helps you to create H3 heading in your design.
      </CoreTypographyBody1>

      <CodeImport name="CoreH3" />

      <CodeSample
        title={"CoreH3 Usage"}
        description={"CoreH3 is used by developers."}
        code={"<CoreH3>h3.Heading</CoreH3>"}
        renderElement={<CoreH3>h3.Heading</CoreH3>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH3 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreH3 align="left">h3.Heading</CoreH3>

    <CoreH3 align="center">h3.Heading</CoreH3>

    <CoreH3 align="right">h3.Heading</CoreH3>

    <CoreH3 align="justify">h3.Heading</CoreH3>

    <CoreH3 align="inherit">h3.Heading</CoreH3>
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
                <CoreH3 align="left">h3.Heading</CoreH3>

                <CoreH3 align="center">h3.Heading</CoreH3>

                <CoreH3 align="right">h3.Heading</CoreH3>

                <CoreH3 align="justify">h3.Heading</CoreH3>

                <CoreH3 align="inherit">h3.Heading</CoreH3>
              </CoreStack>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH3 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreH3 gutterBottom={true}>h3.Heading</CoreH3>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreH3 gutterBottom={true}>h3.Heading</CoreH3>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreH3 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreH3 noWrap={true}>h3.Heading with no wrap true</CoreH3>

  <CoreH3 noWrap={false}>h3.Heading</CoreH3>
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
              <CoreH3 noWrap={true}>h3.Heading with no wrap true</CoreH3>

              <CoreH3 noWrap={false}>h3.Heading</CoreH3>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH3 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreH3 paragraph={true}>h3.Heading</CoreH3>

  <CoreH3 paragraph={false}>h3.Heading</CoreH3>
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
              <CoreH3 paragraph={true}>h3.Heading</CoreH3>

              <CoreH3 paragraph={false}>h3.Heading</CoreH3>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreH3} />
    </>
  );
}
