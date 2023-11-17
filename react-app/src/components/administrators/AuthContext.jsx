import React, {createContext, useContext, useState} from 'react';
const AuthContext = createContext(null);

function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    const login = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsAuthenticated(false);
    };

    return(
        <AuthContext.Provider value = {{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
