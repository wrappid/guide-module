import { CoreClasses, CoreH4, UserChip } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function UserChipDocs() {

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      UserChip
      </CoreH4>

      <CodeSample
        title={"Simple UserChip (NOT WORKONH)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<UserChip
  size="large"
  _firstName="Pritam"
  _middleName="Kumar"
  _lastName="Mondal"
  _email="xyz@exwfy.com"
  _photoUrl="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" >

</UserChip>
        `}
        renderElement={<>
          <UserChip
            size="large"
            _firstName="Pritam"
            _middleName="Kumar"
            _lastName="Mondal"
            _email="xyz@exwfy.com"
            _photoUrl="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" >
            
          </UserChip>
        </>}
      />

      <ComponentProps component={UserChip} />

    </>
  );
}
