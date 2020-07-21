import * as React from 'react';
import { Modal } from 'antd';

export const BRIEF_COPYRIGHT = (
    <>
        <p>Copyright © 2020, HAO ZUO</p>
        <p>
            This program is free software: you can redistribute it and/or modify it under the terms
            of the GNU General Public License as published by the Free Software Foundation, either
            version 3 of the License, or (at your option) any later version.
        </p>
        <p>
            This program is distributed in the hope that it will be useful, but WITHOUT ANY
            WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
            PARTICULAR PURPOSE. See the GNU General Public License for more details.
        </p>
        <p>
            You should have received a copy of the GNU General Public License along with this
            program. If not, see https://www.gnu.org/licenses.
        </p>
    </>
);

export const showLicense = () =>
    Modal.info({
        title: 'GNU General Public License',
        content: BRIEF_COPYRIGHT
    });
