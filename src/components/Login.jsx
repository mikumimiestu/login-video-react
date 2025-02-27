const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-lg w-full border p-8 rounded-3xl shadow-md">
        <h2 className="text-2xl mb-4 text-center text-slate-100 font-semibold">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-200" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-xl" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-xl" placeholder="Password" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-xl">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
