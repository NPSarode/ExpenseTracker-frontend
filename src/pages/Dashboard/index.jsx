import React, { useEffect, useMemo, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DashboardHeader from "./DashboardHeader";
import TableContainer from "../../components/TableContainer";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "./API/expenseAPI";
 
const Dashboard = () => {

  const { 
    data: expenses, 
    error: expenseError 
  } = useQuery({
    queryKey: ['expenses'],
    queryFn: getExpenses
  })


  const columns = useMemo(() => [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "datetime", headerName: "Date Time", width: 200 },
  ], []);

  return (
    <Container fluid className="mt-1">
      <Row>
        <Col lg={12}>
          <DashboardHeader/>
        </Col>
      </Row>
      <Row>
        <Col lg={6} sm={12}>
          <TableContainer
            tableHeader={"Recent Transactions"}
            data={expenses || []}
            columns={columns || []}
          />
        </Col>
        <Col lg={6} sm={12}>
          <Card>
            <CardBody>
            <Typography variant="h4" color={'white'} mb={1}>Top Expenses</Typography>
              <HorizontalBarChart 
              chartId="TopExpenses"
              data={expenses} 
              minHeight="20vh"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
