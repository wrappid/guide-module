import {
    CoreH4,
    CoreTypographyBody1,
    CoreDivider,
    CoreStack,
    // CoreProgress
  } from "@wrappid/core";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreLinearProgressDocs(){
    return (
        <>
        <CoreH4>Linear Progress</CoreH4>

        <CodeSample
        title={"Circular"}
        />
        <CodeSample
        title={"Circular Color"}
        /> 
        <CodeSample
        title={"Circular determinate"}
        /> 
        <CodeSample
        title={"Interactive integration"}
        /> 
        <CodeSample
        title={"Circular with label"}
        /> 
      {/* <ComponentProps component={CoreProgress} /> */}
        </>
    )
  }