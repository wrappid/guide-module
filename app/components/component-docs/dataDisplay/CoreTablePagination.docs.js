import { useState } from "react";

import {
  CorePaper,
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableContainer,
  CoreTableFooter,
  CoreTablePagination,
  CoreTableRow
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTablePagination;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

export default function CoreTablePaginationDocs() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const data = [...Array(20)];

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} is used to display pagination controls for a table.`}
      basicSample={false}
      samples={
        <>
          <CodeSample
            title={`Basic ${CORE_COMPONENT_NAME}`}
            description={`A basic sample of ${CORE_COMPONENT_NAME}.`}
            code={`<CoreTablePagination
  count={data.length}
  page={page}
  rowsPerPage={rowsPerPage}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>`}
            expandedCode={`import { useState } from "react";

import {
  CorePaper,
  CoreTable,
  CoreTableBody,
  CoreTableCell,
  CoreTableContainer,
  CoreTableFooter,
  CoreTablePagination,
  CoreTableRow
} from "@wrappid/core";

const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);

const handleChangePage = (_event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

const data = [...Array(20)];

export default function SampleCoreTablePagination() {
  return (
    <CoreTableContainer component={CorePaper}>
      <CoreTable>
        <CoreTableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((___, index) => (
              <CoreTableRow key={index}>
                <CoreTableCell>{\`Item \${page * rowsPerPage + index + 1}\`}</CoreTableCell>
              </CoreTableRow>
            ))}
        </CoreTableBody>
          
        <CoreTableFooter>
          <CoreTableRow>
            <CoreTablePagination
              count={data.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CoreTableRow>
        </CoreTableFooter>
      </CoreTable>
    </CoreTableContainer>
  );
}`}
            renderElement={<CoreTableContainer component={CorePaper}>
              <CoreTable>
                <CoreTableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((___, index) => (
                      <CoreTableRow key={index}>
                        <CoreTableCell>{`Item ${page * rowsPerPage + index + 1}`}</CoreTableCell>
                      </CoreTableRow>
                    ))}
                </CoreTableBody>
          
                <CoreTableFooter>
                  <CoreTableRow>
                    <CoreTablePagination
                      count={data.length}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </CoreTableRow>
                </CoreTableFooter>
              </CoreTable>
            </CoreTableContainer>}
          />
      
        </>
      }/>
  );
}