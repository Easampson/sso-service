/**
 * Created by edd on 2/24/17.
 */
import React from 'react';
import {mount} from 'react-mounter';
import Home from './components/home.jsx';
import MainLayout from './components/main_layout.jsx';
import Sign from './components/sign.jsx';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Home />)
            });
        }
    });

    FlowRouter.route('/sign', {
        name: 'sign',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Sign />)
            });
        }
    });


}