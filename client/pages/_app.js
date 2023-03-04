import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';

function MyApp({
    Component,pageProps
}){
    return <Component{...pageProps} />;
}
export default MyApp;