import React from "react";

import {
  defaultValidProps, defaultInvalidProps, CoreBox, CoreClasses, CoreH5, CoreDivider, CoreSelect, CoreTable, CoreTableHead, CoreTableHeadCell, CoreTableRow
} from "@wrappid/core";

import ComponentPropTypes from "./ComponentPropTypes";

const VIEWPROPSDATA = ["Table", "List"];

/**
 * Renders a component's props with valid and invalid props.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.component - The component object.
 * @returns {JSX.Element} The rendered component props.
 */
export default function ComponentProps(props) {
  const [viewPropsData, setViewPropsData] = React.useState(VIEWPROPSDATA[0]);
  const { component } = props;

  const validProps = [...(component?.validProps || []), ...defaultValidProps];
  const invalidProps = [...(component?.invalidProps || []), ...defaultInvalidProps];

  /**
   * Handles the select change event.
   * @param {*} event
   * @returns {void}
   */
  const handleSelectChange = (event) => {
    setViewPropsData(event.target.value);
  };

  /**
   * Renders the props heading.
   * @param {*} title
   * @returns {JSX.Element} - The rendered props heading.
   */
  const PropsHeading = ({ title }) => {
    return (
      <CoreBox styleClasses={[CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P2, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.MARGIN.MY2]}>
        <CoreH5>{title}</CoreH5>

        {title === "Valid Props" && <CoreSelect
          gridProps={{ gridSize: { md: 12 } }}
          id="viewPropsData"
          value={viewPropsData}
          handleChange={(event) => handleSelectChange(event)}
          options={Object.keys(VIEWPROPSDATA).map((key) => ({
            id   : VIEWPROPSDATA[key],
            label: VIEWPROPSDATA[key],
            value: VIEWPROPSDATA[key],
          }))}
        />}
      </CoreBox>
    );
  };

  return (
    <>
      <PropsHeading title={"Valid Props"} />

      {viewPropsData === "Table" && <CoreTable size="small">
        <CoreTableHead styleClasses={[CoreClasses.BG.BG_PRIMARY, CoreClasses.COLOR.TEXT_BLACK]} size="small">
          <CoreTableRow>
            <CoreTableHeadCell>Prop</CoreTableHeadCell>

            <CoreTableHeadCell>Description</CoreTableHeadCell>

            <CoreTableHeadCell>Type</CoreTableHeadCell>

            <CoreTableHeadCell>Default Value</CoreTableHeadCell>

            <CoreTableHeadCell>Valid Values</CoreTableHeadCell>
          </CoreTableRow>
        </CoreTableHead>

        {validProps && validProps?.map((eachProp, index) => {
          return <ComponentPropTypes key={index} propTypes={eachProp} viewType={viewPropsData} />;
        })}
      </CoreTable>
      }

      {(viewPropsData === "List") &&
        validProps && validProps?.map((eachProp, index) => {
        return <ComponentPropTypes key={index} propTypes={eachProp} viewType={viewPropsData} />;
      })
      }

      <PropsHeading title={"Invalid Props"} />

      {invalidProps && invalidProps?.map((eachProp) => {
        return (
          <CoreBox key={`${eachProp}`}>
            <CoreH5>{eachProp}</CoreH5>

            <CoreDivider />
          </CoreBox>
        );
      })}
    </>
  );
}
