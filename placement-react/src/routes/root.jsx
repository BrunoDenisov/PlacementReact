import { formToJSON } from 'axios';
import React, { Component } from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import {Outlet, Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'pForm'}>Input Form</Link>
                        </li>
                        <li>
                            <Link to={'pGetAll'}>Get all placements</Link>
                        </li>
                        <li>
                            <Link to={'pGetById'}>Get placmenet by event id</Link>
                        </li>
                        <li>
                            <Link to={'pDelete'}>Delete a placement row</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default App;