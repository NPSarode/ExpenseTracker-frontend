import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import AddIcon from "@mui/icons-material/Add";
import PieChart from "../../components/charts/PieChart";
import ExpenseModal from "./ExpenseModal";
import { useQuery } from "@tanstack/react-query";
import { getBalances } from "./API/expenseAPI";

const DashboardHeader = () => {
  
  const [modal, setModal] = useState({pivot: 0, status: false})

  
  const { 
    data: balance, 
    error: balanceError 
  } = useQuery({
    queryKey: ['balances'],
    queryFn: getBalances
  })

  const cardData = [
    {
      title: "Wallet Balance",
      value: balance?.incoming_balance,
      onButtonClick: () => setModal({pivot: 1, status: true}),
      spanClass: 'text-success',
      buttonText: 'Add Income',
      buttonClass: 'bg-success border-success'
    },
    {
      title: "Expenses",
      value: balance?.outgoing_balance,
      onButtonClick: () => setModal({pivot: 0, status: true}),
      spanClass: 'text-danger',
      buttonText: 'Add Expense',
      buttonClass: 'bg-danger border-danger'
    },
  ];
  return <>
    <Card className="px-3 pb-3">
      <Typography variant="h4" color={"white"} mb={1}>
        Expense Tracker
      </Typography>
      <CardBody style={{ background: "#626262" }} className="rounded">
        <Row className="d-flex justify-content-evenly align-items-center">
          {cardData.map((data, i) => {
            return (
              <Col lg={3} key={i}>
                <Card className="shadow shadow-lg">
                  <CardBody
                    className="rounded"
                    style={{ background: "#9b9b9b" }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center flex-column gap-4"
                      style={{ minHeight: "15vh" }}
                    >
                      <Typography variant="h5"> 
                        {data.title} : {" "}
                        <span className={data.spanClass}>{data.value}</span>
                      </Typography>
                      <Button
                        startIcon={<AddIcon></AddIcon>}
                        className={`bg bg-opacity-25 text-muted border ${data.buttonClass}`}
                        onClick={data.onButtonClick}
                      >
                        {data.buttonText}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}

          <Col lg={4}>
            <Card className="bg bg-transparent border-none">
              <CardBody>
                <PieChart chartId="pie_chart" minHeight="20vh" />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>

    <ExpenseModal
    modal={modal}
    setModal={setModal}
    title={modal.pivot ? 'Add Income' : 'Add Expense'}/>
  </>;
};

export default DashboardHeader;
