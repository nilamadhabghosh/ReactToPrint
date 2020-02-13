/* eslint-disable quotes */
import React from "react";
import Table from "terra-table";
import "../../assets/stylesheets/ComponentToPrint.css";

// eslint-disable-next-line react/prefer-stateless-function
export default class ComponentToPrint extends React.Component {
  render() {
    return (
      <Table
        summaryId="standard-table"
        summary="This table has standard padding."
        numberOfColumns={3}
        cellPaddingStyle="standard"
        dividerStyle="horizontal"
        headerData={{
          cells: [
            {
              id: "header-date-of-vaccination",
              key: "date-of-vaccination",
              children: "Date of Vaccination"
            },
            { id: "header-age", key: "age", children: "Age" },
            {
              id: "header-organization",
              key: "organization",
              children: "Organization"
            }
          ],
        }}
        bodyData={[
          {
            rows: [
              {
                key: "row-0",
                cells: [
                  { key: "cell-0", children: "John Smith" },
                  { key: "cell-1", children: "123 Adams Drive" },
                  { key: "cell-2", children: "111-222-3333" }
                ]
              },
              {
                key: "row-1",
                cells: [
                  { key: "cell-0", children: "Jane Smith" },
                  { key: "cell-1", children: "321 Drive Street" },
                  { key: "cell-2", children: "111-222-3333" }
                ]
              },
              {
                key: "row-2",
                cells: [
                  { key: "cell-0", children: "Dave Smith" },
                  { key: "cell-1", children: "213 Raymond Road" },
                  { key: "cell-2", children: "111-222-3333" }
                ]
              }
            ]
          }
        ]}
      />
    );
  }
}
