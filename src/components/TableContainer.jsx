import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { Card, CardBody } from "reactstrap";


export default function TableContainer({
  style = { width: "100%" },
  tableHeader,
  data=[],
  columns=[],
  tableClass= '',
  checkboxSelection=false
}) {
  return (
    <Card>
      <CardBody>
        <div style={style}>
          {tableHeader && (
            <Typography variant="h4" color={"white"} mb={1}>
              {tableHeader}
            </Typography>
          )}
          <DataGrid
            rows={data}
            className={`bg bg-white px-2 ${tableClass}`}
            columns={columns}
            // initialState={{
            //   pagination: {
            //     paginationModel: { page: 0, pageSize: 5 },
            //   },
            // }}
            // pageSizeOptions={[5, 10]}
            checkboxSelection={checkboxSelection}
          />
        </div>
      </CardBody>
    </Card>
  );
}
