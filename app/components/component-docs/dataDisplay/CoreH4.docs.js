import { CoreClasses, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH4Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH4 Docs</CoreH4>

      <CoreTypographyBody1>
        CoreH4 helps you to create H4 heading in your design.
      </CoreTypographyBody1>

      <CodeImport name="CoreH4" />

      <CodeSample
        title={"CoreH4 Usage"}
        description={"CoreH4 is used by developers."}
        code={`
          <CoreH4>h4.Heading</CoreH4>
        `}
        renderElement={<CoreH4>h4.Heading</CoreH4>}
      />

      <CodeSample
        title={"CoreH4 Usage"}
        description={"CoreH4 is used by developers."}
        code={`
          <CoreH4>h4.Heading</CoreH4>
        `}
        renderElement={<CoreH4>h4.Heading</CoreH4>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH4 different alignment"}
        code={`
          <CoreH4 align="left">h4.Heading</CoreH4>
          <CoreH4 align="center">h4.Heading</CoreH4>
          <CoreH4 align="right">h4.Heading</CoreH4>
          <CoreH4 align="justify">h4.Heading</CoreH4>
          <CoreH4 align="ingerit">h4.Heading</CoreH4>
        `}
        renderElement={
          <>
            <CoreH4 align="left">h4.Heading</CoreH4>

            <CoreH4 align="center">h4.Heading</CoreH4>

            <CoreH4 align="right">h4.Heading</CoreH4>

            <CoreH4 align="justify">h4.Heading</CoreH4>

            <CoreH4 align="ingerit">h4.Heading</CoreH4>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH4 will have a bottom margin"}
        code={`
          <CoreH4 gutterBottom={true}>h4.Heading</CoreH4>
          
        `}
        renderElement={
          <>
            <CoreH4 gutterBottom={true}>h4.Heading</CoreH4>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={"This is CoreH4 with nowrap"}
        code={`
        <CoreH4 noWrap={true}>h4.Heading</CoreH4>
        <CoreH4 noWrap={false}>h4.Heading</CoreH4>
          
        `}
        renderElement={
          <>
            <CoreH4 noWrap={true}>h4.Heading</CoreH4>

            <CoreH4 noWrap={false}>h4.Heading</CoreH4>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH4 with paragraph"}
        code={`
        <CoreH4 paragraph={true}>h4.Heading</CoreH4>
        <CoreH4 paragraph={false}>h4.Heading</CoreH4>
          
        `}
        renderElement={
          <>
            <CoreH4 paragraph={true}>h4.Heading</CoreH4>

            <CoreH4 paragraph={false}>h4.Heading</CoreH4>
          </>
        }
      />

      <ComponentProps component={CoreH4} />
    </>
  );
}
