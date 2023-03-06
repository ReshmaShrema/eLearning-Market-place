import {useState,useEffect} from 'react'
import {Menu} from 'antd';
// in react we use  import {Link} from 'next/link';
import Link from 'next/link';
//from https://ant.design/components/icon component v
import {AppstoreAddOutlined,LoginOutlined,UserAddOutlined} from '@ant-design/icons';


// destructure item from menu    Item.Menu
const {Item } = Menu;
const TopNav = ()=>{
    const [current,setCurrent]=useState('');
    useEffect(() => {
        //window.location.pathname give the url
        //ensure it in browser
        typeof window !== 'undefined' && setCurrent(window.location.pathname);
    }, [typeof window !== 'undefined' && window.location.pathname]);
    return (
        // mode horizontal will allow the item horizontal in navbar
        <Menu mode="horizontal" selectedKeys={[current]}>
            <Item
                key="/"
                onClick={(e) => setCurrent(e.key)}
            icon={<AppstoreAddOutlined />}
            >
                {/* in react <Link to="/"></Link> */}
                <Link href="/" legacyBehavior>
                    <a>App</a>
                </Link>
            </Item>
            <Item
                key="/login"
                onClick={(e) => setCurrent(e.key)}
                icon={<LoginOutlined />}
            >
                <Link href="/login" legacyBehavior>
                    <a>Login</a>
                </Link>
            </Item>
            <Item
                key="/register"
                onClick={(e) => setCurrent(e.key)}
                icon={<UserAddOutlined />}
            >
                <Link href="/register" legacyBehavior>
                    <a>Register</a>
                </Link>
            </Item>
        </Menu>
    );
}
export default TopNav;