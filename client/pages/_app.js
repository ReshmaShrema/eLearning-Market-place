import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import '../public/css/style.css'

function MyApp({
    Component,pageProps
}){
    return <Component{...pageProps} />;
}
export default MyApp;