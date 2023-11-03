import { CoreH2, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH2Docs() {
  return (
    <>
      <CoreH4>CoreH2</CoreH4>

      <CoreTypographyBody1>
        CoreH2 helps you to create H2 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH2 Usage"}
        description={"CoreH2 is used by developers."}
        code={`
          <CoreH2>h2.Heading</CoreH2>
        `}
        renderElement={<CoreH2>h2.Heading</CoreH2>}
      />

      <CodeSample
        title={"CoreH2 Usage"}
        description={"CoreH2 is used by developers."}
        code={`
          <CoreH2>h2.Heading</CoreH2>
        `}
        renderElement={<CoreH2>h2.Heading</CoreH2>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH2 different alignment"}
        code={`
          <CoreH2 align="left">h2.Heading</CoreH2>
          <CoreH2 align="center">h2.Heading</CoreH2>
          <CoreH2 align="right">h2.Heading</CoreH2>
          <CoreH2 align="justify">h2.Heading</CoreH2>
          <CoreH2 align="ingerit">h2.Heading</CoreH2>
        `}
        renderElement={
          <>
            <CoreH2 align="left">h2.Heading</CoreH2>

            <CoreH2 align="center">h2.Heading</CoreH2>

            <CoreH2 align="right">h2.Heading</CoreH2>

            <CoreH2 align="justify">h2.Heading</CoreH2>

            <CoreH2 align="ingerit">h2.Heading</CoreH2>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH2 will have a bottom margin"}
        code={`
          <CoreH2 gutterBottom={true}>h2.Heading</CoreH2>
          
        `}
        renderElement={
          <>
            <CoreH2 gutterBottom={true}>h2.Heading</CoreH2>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={"This is CoreH2 with nowrap"}
        code={`
        <CoreH2 noWrap={true}>h2.Heading</CoreH2>
        <CoreH2 noWrap={false}>h2.Heading</CoreH2>
          
        `}
        renderElement={
          <>
            <CoreH2 noWrap={true}>h2.Heading</CoreH2>

            <CoreH2 noWrap={false}>h2.Heading</CoreH2>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH2 with paragraph"}
        code={`
        <CoreH2 paragraph={true}>h2.Heading</CoreH2>
        <CoreH2 paragraph={false}>h2.Heading</CoreH2>
          
        `}
        renderElement={
          <>
            <CoreH2 paragraph={true}>h2.Heading</CoreH2>

            <CoreH2 paragraph={false}>h2.Heading</CoreH2>
          </>
        }
      />

      <ComponentProps component={CoreH2} />
    </>
  );
}
