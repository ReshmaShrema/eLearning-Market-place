import { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    //state context
    const { state, despatch } = useContext(Context);
    console.log(state);

    const handleSubmit = async (e) => {
        // call when submit the event
        // prevent the page reloading when the page is submitted
        e.preventDefault();
        //console.table({name,email,password});
        try {
            setLoading(true);
            // /api setuup in client/server.js,proxy will target to backend 8000 port that setup in server.js file,send data to /login
            const { data } = await axios.post(`/api/login`, {
                email,
                password,
            });
            // console.log('Login response',data);
            // toast.success('Login Successful');
            // setLoading(false);

dispatchEvent({
    type:"LOGIN",
    payload:data,
});

        } catch (err) {
            toast.error(err.response.data);
            setLoading(false);
        }
    };

    return (
        <>
            <h1 className="jumbotron">Login</h1>
            {/* col-md-4 offset-md-4 make it in center */}
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form-control mb-4 p-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        required
                    />
                    <input
                        type="password"
                        className="form-control mb-4 p-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                    />
                    <button
                        className="btn btn-block btn-primary"
                        type="submit"
                        disabled={!email || !password || loading}
                    >
                        {loading ? <SyncOutlined spin /> : 'Login'}
                    </button>
                </form>
                <p className="text-center p-3">
                    Not yet Registered{' '}
                    <Link href="/register" legacyBehavior>
                        <a>Register</a>
                    </Link>
                </p>
            </div>
        </>
    );
};
export default Login;
