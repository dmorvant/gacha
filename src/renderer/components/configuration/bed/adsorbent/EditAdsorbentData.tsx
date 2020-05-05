import * as React from 'react';
import { AutoComplete, Col, Divider, Form, Input, Row } from 'antd';

import { EditProps } from '../../../container/TableWithEditSection';
import { Rule } from '../../../../../mods/validators/common';

const styles = require('./EditAdsorbentData.module.less');

export const EditAdsorbentData: React.FunctionComponent<EditProps> = ({
    form,
    initValues,
    onValuesChange
}) => {
    const NORMAL_RULES = [{ required: true }];

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <Row>
                    <Col span={24}>
                        <Form
                            size="small"
                            layout="horizontal"
                            validateMessages={Rule.FORM_WARNING_PROMPT}
                            ref={form}
                            hideRequiredMark={true}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 8 }}
                            onValuesChange={(s, all: any) => onValuesChange(all)}
                            initialValues={initValues}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[...NORMAL_RULES, { max: 20, type: 'string' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[{ max: 80, type: 'string' }]}>
                                <Input.TextArea rows={4} />
                            </Form.Item>
                            <Form.Item
                                name="manufacturer"
                                label="Manufacturer"
                                rules={[{ max: 20, type: 'string' }]}>
                                <Input />
                            </Form.Item>
                            <Divider orientation="left" />
                            <Form.Item
                                name="density"
                                label="Apparent Density"
                                rules={NORMAL_RULES}
                                normalize={v => (v ? +v : '')}>
                                <Input type="number" addonAfter="g/cm³" />
                            </Form.Item>
                            <Form.Item
                                name="particleRadius"
                                label="Particle Radius"
                                rules={NORMAL_RULES}
                                normalize={v => (v ? +v : '')}>
                                <Input type="number" addonAfter="cm" />
                            </Form.Item>
                            <Form.Item
                                name="particlePorosity"
                                label="Particle Porosity"
                                rules={NORMAL_RULES}
                                normalize={v => (v ? +v : '')}>
                                <Input type="number" />
                            </Form.Item>
                            <Form.Item
                                name="adsorbentType"
                                label="Adsorbent Type"
                                rules={NORMAL_RULES}
                                normalize={v => (v ? +v : '')}>
                                <Input type="string" />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
