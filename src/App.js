import logo from './logo.svg';
import './App.css';
import { Route, withRouter } from 'react-router';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Signin from './Components/Signin/Signin';
import { Component } from 'react';
import { initializeApp } from './Redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Components/Common/Preloader/Preloader';
import store from './Redux/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb} from 'antd';
import { UserOutlined, MessageOutlined, SmileOutlined } from '@ant-design/icons';
import { withReactSuspense } from './HOC/withReactSuspense';

const MessagesContainer = React.lazy(() => import('./Components/Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));


const { Header, Content, Sider } = Layout;


class App extends Component {
  componentDidMount() {

    this.props.initializeApp();

  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />
    }
    return (
      <Layout>
    <HeaderContainer />
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          selectedKeys={[this.props.location.pathname]}
          defaultOpenKeys={['/profile']}
          defaultSelectedKeys={['/profile']}
          style={{ height: '100%', borderRight: 0 }}
        >
          
            <Menu.Item key="/profile" icon={<UserOutlined />}><Link to = '/profile'>Profile</Link></Menu.Item>
            <Menu.Item key="/messages" icon={<MessageOutlined />}> <Link to = '/messages'>Messages</Link></Menu.Item>
            <Menu.Item key="/users" icon={<SmileOutlined />}> <Link to = '/users'>Users</Link></Menu.Item>
            
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/messages' render={withReactSuspense(MessagesContainer)} />
          <Route path='/users' render={withReactSuspense(UsersContainer)} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/signin' render={() => <Signin />} />
        </Content>
      </Layout>
    </Layout>
  </Layout>
 
    //  <div className='container'>
    //    <HeaderContainer />
    //    <Navbar />
    //    <div className='container-content'>
    //      <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
    //      <Route path='/messages' render={() => <MessagesContainer />} />
    //      <Route path='/users' render={() => <UsersContainer />} />
    //      <Route path='/news' render={() => <News />} />
     //     <Route path='/music' render={() => <Music />} />
     //     <Route path='/settings' render={() => <Settings />} />
     //     <Route path='/signin' render={() => <Signin />} />

     //   </div>
    //  </div>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized

  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const MainApp = (props) => {
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default MainApp;
