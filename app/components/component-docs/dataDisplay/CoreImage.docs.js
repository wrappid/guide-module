import { CoreClasses, CoreH4, CoreImage } from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreImageDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreImage
      </CoreH4>

      <CodeImport name="CoreImage" />

      <CodeSample
        title={"Sample CoreImage "}
        description={"Below is a sample of how to use the CoreImage component."}
        code={`<CoreImage
  width={200}
  height={200}
  alt="Phoenicopterus ruber"
  src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" 
/>`}
        renderElement={<>
          <CoreImage
            width={200}
            height={200}
            alt="Phoenicopterus ruber"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
          />
        </>}
      />

      <CodeSample
        title={"Alt text"}
        description={"With alt text set, the image will have alternative text. For demonstration purposes, the image source(src) has been removed."}
        code={`<CoreImage
  width={200}
  height={200}
  alt="Phoenicopterus ruber"
/>`}
        renderElement={<>
          <CoreImage
            width={200}
            height={200}
            alt="Phoenicopterus ruber"
          />
        </>}
      />

      <ComponentProps component={CoreImage} />

    </>
  );
}
