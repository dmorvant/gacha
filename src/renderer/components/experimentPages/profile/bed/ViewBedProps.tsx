import * as React from 'react';
import { Col, Divider, Form, Row } from 'antd';

import { BedMaths } from '../../../../../mods/calculation/independent/bed.maths';
import { Calculation } from '../../../../../mods/calculation/basic';
import { BedInputParams } from '../../../../store/experiment.store';

export const ViewBedProps: React.FunctionComponent<BedInputParams> = data => {
    const { length, diameter, mass, flowrate, ebct } = data;
    const areaVal = `${Calculation.format(
        BedMaths.crossSectionalArea(`${diameter}cm`).toNumber('cm^2')
    )} cm²`;
    const volumeVal = `${Calculation.format(
        BedMaths.volume(`${length}cm`, `${diameter}cm`).toNumber('cm^3')
    )}cm³`;
    const densityVal = `${Calculation.format(
        BedMaths.density(`${mass}g`, `${length}cm`, `${diameter}cm`).toNumber('g/mL')
    )}g/mL`;

    return (
        <>
            <Row>
                <Col span={11} offset={2}>
                    <Form.Item label="Bed Length">
                        <span>{`${length} cm`}</span>
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label="Bed Diameter">
                        <span>{`${diameter} cm`}</span>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11} offset={2}>
                    <Form.Item label="Mass">
                        <span>{`${mass} g`}</span>
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label="Flowrate">
                        <span>{`${flowrate} mL/min`}</span>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11} offset={2}>
                    <Form.Item label="EBCT">
                        <span>{`${ebct} min`}</span>
                    </Form.Item>
                </Col>
            </Row>
            <Divider orientation="left">Calculation</Divider>
            <Row>
                <Col span={11} offset={2}>
                    <Form.Item label="Bed Density">
                        <span>{densityVal}</span>
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label="Bed Porosity">
                        <span>{`${0}`}</span>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11} offset={2}>
                    <Form.Item label="Cross-Sectional Area">
                        <span>{areaVal}</span>
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label="Bed Volume">
                        <span>{volumeVal}</span>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={11} offset={2}>
                    <Form.Item label="Superficial Velocity">
                        <span>{`${ebct} m/h`}</span>
                    </Form.Item>
                </Col>
                <Col span={11}>
                    <Form.Item label="Interstitial Velocity">
                        <span>{`${ebct} m/h`}</span>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
};
