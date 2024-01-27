import React, { Suspense }from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Administrators from "./components/administrators/Administrators";
import Beneficiaries from "./components/Beneficiaries";
import reportWebVitals from "./reportWebVitals";
import RegisterAdmin from "./components/administrators/RegisterAdmin";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Donation from "./components/Donation";
import AdminPage from "./components/administrators/AdminPage";
import Volunteers from "./components/Volunteers";
import AboutUs from "./components/about-us/AboutUs";
import ContactPage from "./components/ContactPage";
import Hero from "./components/Hero";
import AuthProvider from "./components/administrators/AuthContext";
import PrivateRoute from "./components/administrators/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
/* Multi language */
import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'flag-icon-css/css/flag-icon.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'


i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'ar', 'es'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        // react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    })

/* Multi language */


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/beneficiaries",
        element: <Beneficiaries/>,
    },
    {
        path: "/donation",
        element: <Donation/>,
    },

    {
        path: "/admin",
        element: <Administrators/>,
    },
    {
        path: "/admin/register",
        element: <RegisterAdmin/>,
    },
    {
        path: "/admin/page",
        element: (
            <PrivateRoute>
                <AdminPage/>
            </PrivateRoute>
        ),
    },
    {
        path: "/volunteers",
        element: <Volunteers/>,
    },
    {
        path: "/aboutus",
        element: <AboutUs/>,
    },
    {
        path: "/contact",
        element: <ContactPage/>,
    },

    //here goes the other routes
]);

const loadingMarkup = (
    <div className="py-4 text-center">
        <h2>Loading...</h2>
    </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <AuthProvider>
                <RouterProvider router={router}/>
            </AuthProvider>
        </React.StrictMode>
    </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
