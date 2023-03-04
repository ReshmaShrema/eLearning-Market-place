import {Menu} from 'antd';
// in react we use  import {Link} from 'next/link';
import Link from 'next/link';
//from https://ant.design/components/icon component v
import {AppstoreAddOutlined,LoginOutlined,UserAddOutlined} from '@ant-design/icons';


// destructure item from menu    Item.Menu
const {Item } = Menu;
const TopNav = ()=>{
    return (
        // mode horizontal will allow the item horizontal in navbar
        <Menu mode='horizontal'>
            <Item icon={<AppstoreAddOutlined/>}>
                {/* in react <Link to="/"></Link> */}
                <Link href="/" legacyBehavior>
                    <a>App</a>
                </Link>
            </Item>
            <Item icon={<LoginOutlined/>}>
                <Link href="/login" legacyBehavior>
                    <a>Login</a>
                </Link>
            </Item>
            <Item icon={<UserAddOutlined/>}>
                <Link href="/register" legacyBehavior>
                    <a>Register</a>
                </Link>
            </Item>
        </Menu>
    );
}
export default TopNav;