const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slite-500 mb-8">Welcome! Please input your detail..</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
