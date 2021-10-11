import { Redirect } from "react-router";
import { connect } from 'react-redux';

let mapStateToPropsRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth,
    }
  }

export const AuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        
        if (!props.isAuth) return <Redirect to='/signin' />;
        return <Component {...props} />;
        
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (RedirectComponent);
    return ConnectedAuthRedirectComponent;
}