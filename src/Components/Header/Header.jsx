import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { Layout, Row, Col, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header} = Layout;

const AppHeader = (props) => {
    return (
        <Header className="header">
      <Row>
        <Col span={20}>
          <div className="logo" />
        </Col>
          
        <Col span={4}>
        
        {props.isAuth ? 
                
                <div>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> 
                    {props.login}  
                    <Button onClick={props.logout} >Logout</Button>
                </div>
                :<NavLink to='/signin'>Sign in</NavLink>}
        </Col>
      </Row>
    </Header>



     //   <header className = {classes.header}>
      //      <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />

      //      <div className = {classes.loginBlock}>
       //         {props.isAuth ? 
        //        <div>{props.login} - <button onClick={props.logout} >Logout</button></div>
        //        :<NavLink to='/signin'>Sign in</NavLink>}
                    
         //   </div>

            
      //  </header>
    );
}

export default AppHeader;