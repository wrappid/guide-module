import { CoreGrid, CoreBox, CoreTypographyBody1, CoreButton, CoreH1 } from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import { resetTest, testFailure, testSuccess } from "../actions/test.action";

function TestComponentMobile() {
  const dispatch = useDispatch();
  const test = useSelector(state => state.test);

  return (
    <CoreGrid>
      <CoreBox gridProps={{
        gridSize: {
          sm: 8,
          xs: 12
        }
      }}>
        <CoreH1>Test Component Mobile</CoreH1>

        <CoreTypographyBody1>{JSON.stringify(test, null, 2)}</CoreTypographyBody1>
      </CoreBox>

      <CoreBox gridProps={{
        gridSize: {
          sm: 4,
          xs: 12
        }
      }}>
        <CoreButton label="Success" onCLick={dispatch(testSuccess)} />

        <CoreButton label="Failure" onCLick={dispatch(testFailure)} />

        <CoreButton label="Reset" onCLick={dispatch(resetTest)} />
      </CoreBox>
    </CoreGrid>
  );
}

export default TestComponentMobile;