import { Route,Redirect } from 'react-router-dom';

const PrivateRoute = ({ path, component: Component}) => {
    const document = localStorage.getItem("document");
    return (
        <Route path={path} render={(props) => {
            if(document) {
                return <Component {...props}/>;
            }
            else {
                return <Redirect to="/login"/>
            }
        }} />
    );
};
export default PrivateRoute;
