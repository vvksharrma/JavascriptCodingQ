function withAuth(WrappedComponent) {
    const isAuthenticated = true; // Some logic to determine authentication status
    // Return a new component with the additionalprop
    return function WithAuth(props) {
    return <WrappedComponent
    isAuthenticated={isAuthenticated} {...props}
    />;
    };
}
//inside componenet
    const UserWithAuth = withAuth(UserComponent);
// Usage in the render method
<UserWithAuth name="John" age={25} />; 
