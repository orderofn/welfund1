import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header  from '../../views/Layout/header';
import Footer  from '../../views/Layout/footer';
import routes from '../../routes';


class Layout extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
          window.scrollTo(0, 0)
          document.querySelector('body').scrollTo(0,0)
        }
    }
    render() {
      return (
          <div className="container-fluid">
            <div className="App">
                <Header />
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                            <route.component {...props} />
                        )} />)
                        : (null);
                    },
                    )}
                </Switch>

                <Footer />
            </div>
        </div>
      );
    }   
}
export default Layout;