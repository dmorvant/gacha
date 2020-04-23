import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Table from './common/Table/Table';
import WelcomePage from './welcome/WelcomePage';
import ConfigPage from './configuration/ConfigPage';

const styles = require('./Application.scss');
const headPic = require('../assets/images/pfas.png');

const Application = () => (
    <Router basename="/">
        <div className={styles.app}>
            <Switch>
                <Route path="/demo">
                    <Table
                        columns={[
                            { key: 'n', text: 'Zone' },
                            { key: 'component', text: 'Components' },
                            { key: 'bvf', text: 'Bed Volume Fed' }
                        ]}
                        data={[
                            { n: 1, component: 'trichhloroethylene', bvf: 0.00152 },
                            { n: 2, component: 'chloroform', bvf: 0.00532 }
                        ]}
                        />
                </Route>
                <Route path="/config">
                    <ConfigPage />
                </Route>
                <Route path="/">
                    <WelcomePage src={headPic} goto="/config" />
                </Route>
            </Switch>
        </div>
    </Router>
);

export default hot(Application);
