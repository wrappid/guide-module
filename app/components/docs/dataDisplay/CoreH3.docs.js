import { CoreH3, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH3Docs() {
  return (
    <>
      <CoreH4>CoreH3 Docs</CoreH4>

      <CoreTypographyBody1>
        CoreH3 helps you to create H3 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH3 Usage"}
        description={"CoreH3 is used by developers."}
        code={`
          <CoreH3>h3.Heading</CoreH3>
        `}
        renderElement={<CoreH3>h3.Heading</CoreH3>}
      />

      <CodeSample
        title={"CoreH3 Usage"}
        description={"CoreH3 is used by developers."}
        code={`
          <CoreH3>h3.Heading</CoreH3>
        `}
        renderElement={<CoreH3>h3.Heading</CoreH3>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH3 different alignment"}
        code={`
          <CoreH3 align="left">h3.Heading</CoreH3>
          <CoreH3 align="center">h3.Heading</CoreH3>
          <CoreH3 align="right">h3.Heading</CoreH3>
          <CoreH3 align="justify">h3.Heading</CoreH3>
          <CoreH3 align="ingerit">h3.Heading</CoreH3>
        `}
        renderElement={
          <>
            <CoreH3 align="left">h3.Heading</CoreH3>

            <CoreH3 align="center">h3.Heading</CoreH3>

            <CoreH3 align="right">h3.Heading</CoreH3>

            <CoreH3 align="justify">h3.Heading</CoreH3>

            <CoreH3 align="ingerit">h3.Heading</CoreH3>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH3 will have a bottom margin"}
        code={`
          <CoreH3 gutterBottom={true}>h3.Heading</CoreH3>
          
        `}
        renderElement={
          <>
            <CoreH3 gutterBottom={true}>h3.Heading</CoreH3>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={"This is CoreH3 with nowrap"}
        code={`
        <CoreH3 noWrap={true}>h3.Heading</CoreH3>
        <CoreH3 noWrap={false}>h3.Heading</CoreH3>
          
        `}
        renderElement={
          <>
            <CoreH3 noWrap={true}>h3.Heading</CoreH3>

            <CoreH3 noWrap={false}>h3.Heading</CoreH3>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH3 with paragraph"}
        code={`
        <CoreH3 paragraph={true}>h3.Heading</CoreH3>
        <CoreH3 paragraph={false}>h3.Heading</CoreH3>
          
        `}
        renderElement={
          <>
            <CoreH3 paragraph={true}>h3.Heading</CoreH3>

            <CoreH3 paragraph={false}>h3.Heading</CoreH3>
          </>
        }
      />

      <ComponentProps component={CoreH3} />
    </>
  );
}
