const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-lg border w-full p-8 rounded-3xl shadow-md">
        <h2 className="text-2xl mb-4 text-center text-gray-100 font-semibold">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-200" htmlFor="name">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-xl" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-xl" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-xl" placeholder="Password" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-xl">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
