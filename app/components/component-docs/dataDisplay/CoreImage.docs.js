import { CoreClasses, CoreH4, CoreImage } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreImageDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        CoreImage
      </CoreH4>

      <CodeSample
        title={"Simple CoreImage "}
        description={"The <img> HTML element embeds an image into the document."}
        code={`
        <CoreImage width={200} height={200}
        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg">
        </CoreImage>
        `}
        renderElement={<>
          <CoreImage
            width={200}
            height={200}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg">
          </CoreImage>
        </>}
      />

      <ComponentProps component={CoreImage} />

    </>
  );
}
