import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center">
            <Spinner animation="border" variant="success" />
        </div>
    }
    return (
        <div>
            <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={
                            {
                                pathname: "/login",
                                state: { from: location }
                            }
                        }
                    >

                    </Redirect>
                )
            }
        >

        </Route>
        </div>
    );
};

export default PrivateRoute;