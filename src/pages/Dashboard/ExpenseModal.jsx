import { Button, Input, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Col, Form, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const ExpenseModal = ({ title='Add Income', modal, setModal }) => {

    const fields = [
        {
            name: 'name',
            type: 'text',
            helperText: 'Enter Description',
            label: 'Description'
        },
        {
            name: 'amount',
            type: 'number',
            helperText: 'Enter Amount',
            label: 'Amount'
        },
    ]

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            amount: '',
            incoming: modal.pivot ? true : false
        },
        onSubmit: values => {
            console.log(values)
        }
    })
  return (
    <Modal
    isOpen={modal.status}
    centered>
        <ModalHeader tag={'h3'} toggle={() => setModal({pivot: 0, status: false})}>
            {title}
        </ModalHeader>
        <ModalBody>
            <Form
            onSubmit={(e) => {
                e.preventDefault()
                validation.handleSubmit()
                return
            }}>
                <Row>
                    {
                        fields.map((attr, i) => {
                            return <Col key={i} lg={6} className="mb-3">
                            <TextField 
                            id="outlined-basic" 
                            label={attr.label} 
                            variant="outlined" 
                            helperText={attr.helperText}
                            type={attr.type}
                            name={attr.name}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            defaultValue={validation.values[attr.name]}
                            />
                        </Col>
                        })
                    }
                </Row>
                <Row>
                    <Col lg={12}>
                    <div className="d-flex justify-content-end align-items-center">
                        <Button
                        className="bg bg-primary text-muted"
                        type="submit"
                        >
                            Add Amount
                        </Button>
                    </div>
                    </Col>
                </Row>
            </Form>
        </ModalBody>
    </Modal>
  );
};

export default ExpenseModal;
