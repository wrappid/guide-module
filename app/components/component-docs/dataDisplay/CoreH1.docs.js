import {
  CoreBox, CoreClasses, CoreH1, CoreH4, CoreStack, CoreTypographyBody1 
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH1Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH1</CoreH4>

      <CoreTypographyBody1>
        CoreH1 helps you to create H1 heading in your design.
      </CoreTypographyBody1>

      <CodeImport name="CoreH1" />

      <CodeSample
        title={"CoreH1 Usage"}
        description={"CoreH1 is used by developers."}
        code={"<CoreH1>h1.Heading</CoreH1>"}
        renderElement={<CoreH1>h1.Heading</CoreH1>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH1 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreH1 align="left">h1.Heading</CoreH1>

    <CoreH1 align="center">h1.Heading</CoreH1>

    <CoreH1 align="right">h1.Heading</CoreH1>

    <CoreH1 align="justify">h1.Heading</CoreH1>

    <CoreH1 align="inherit">h1.Heading</CoreH1>
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
                <CoreH1 align="left">h1.Heading</CoreH1>

                <CoreH1 align="center">h1.Heading</CoreH1>

                <CoreH1 align="right">h1.Heading</CoreH1>

                <CoreH1 align="justify">h1.Heading</CoreH1>

                <CoreH1 align="inherit">h1.Heading</CoreH1>
              </CoreStack>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH1 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreH1 gutterBottom={true}>h1.Heading</CoreH1>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreH1 gutterBottom={true}>h1.Heading</CoreH1>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreH1 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>              
  <CoreH1 noWrap={true}>h1.Heading with no wrap true</CoreH1>

  <CoreH1 noWrap={false}>h1.Heading</CoreH1>
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
              <CoreH1 noWrap={true}>h1.Heading with no wrap true</CoreH1>

              <CoreH1 noWrap={false}>h1.Heading</CoreH1>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH1 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreH1 paragraph={true}>h1.Heading</CoreH1>

  <CoreH1 paragraph={false}>h1.Heading</CoreH1>
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
              <CoreH1 paragraph={true}>h1.Heading</CoreH1>

              <CoreH1 paragraph={false}>h1.Heading</CoreH1>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreH1} />
    </>
  );
}
