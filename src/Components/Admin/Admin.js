import React from 'react';
import { Nav } from 'react-bootstrap';

const Admin = () => {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/addcontent">AddContent</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="allorders">All Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/bookeditems">Manage Orders</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Admin;