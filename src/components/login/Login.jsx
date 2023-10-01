


const Login = () => {

    const handleTwitterAuth = () => {
        console.log('hi I am from login')
    }

    return (
        <div>
            <h2>Please login</h2>
            <button onClick={handleTwitterAuth}>Twitter</button>
        </div>
    );
};

export default Login;