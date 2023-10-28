import { CoreClasses, CoreH4, CoreImage } from "@wrappid/core";

import CodeSample from "../../../CodeSample";

export default function CoreImageDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      CoreImage
      </CoreH4>

      <CodeSample
        title={"Simple CoreImage "}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreImage
  src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" 
  styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.HEIGHT.H_50]}>
    
</CoreImage>
        `}
        renderElement={<>
          <CoreImage
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" 
            styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.HEIGHT.H_50]}>
              
          </CoreImage>
        </>}
      />
    </>
  );
}
