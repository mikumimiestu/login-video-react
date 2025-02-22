const Login = () => {
    return (
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md mt-20">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" placeholder="Password" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;