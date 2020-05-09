import * as React from 'react';
import { Form, Divider } from 'antd';

import { AdsorptionInputParams } from '../../../../store/experiment.store';

export const ViewAdsorptionData: React.FunctionComponent<AdsorptionInputParams> = data => {
    const { kinetics, freundlich } = data;

    const { filmDiffusion, poreDiffusion, surfaceDiffusion, spdfr, tortuosity } = kinetics;
    const { k, nth } = freundlich;

    return (
        <>
            <Form.Item label="Film Diffusion">
                <span>
                    {`${
                        filmDiffusion.correlation
                            ? `cm/s (Gnielinski)`
                            : `${filmDiffusion.value}cm²/s (User Input)`
                    }`}
                </span>
            </Form.Item>
            <Form.Item label="Surface Diffusion">
                <span>
                    {`${
                        surfaceDiffusion.correlation
                            ? `cm²/s (Sontheimer)`
                            : `${surfaceDiffusion.value}cm²/s (User Input)`
                    }`}
                </span>
            </Form.Item>
            <Form.Item label="Pore Diffusion">
                <span>
                    {`${
                        poreDiffusion.correlation
                            ? `cm²/s (Hayduk & Laudie)`
                            : `${poreDiffusion.value}cm²/s (User Input)`
                    }`}
                </span>
            </Form.Item>
            <Form.Item label="SPDFR">
                <span>{spdfr}</span>
            </Form.Item>
            <Form.Item label="Tortuosity">
                <span>{tortuosity}</span>
            </Form.Item>
            <Divider orientation="left">Freudlich</Divider>
            <Form.Item label="k">
                <span>{k} (mg/g)*(L/mg)^(1/n)</span>
            </Form.Item>
            <Form.Item label="1/n">
                <span>{nth}</span>
            </Form.Item>
        </>
    );
};
