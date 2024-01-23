
import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreFadeDocs() {

  return (
    <>
      <CoreH4>CoreFade</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"CoreFade (NOT_WORKING)"}
        description={"Fade in from transparent to opaque."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
    </>
  );
}