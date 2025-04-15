// src/components/ProviderWrapper.tsx
"use client";

import {Provider} from "react-redux";
import {ReactNode} from "react";
import store from "@/provider/redux/store";
import {LanguageContext} from "./context/DefineContext";

const ProviderWrapper = (
    {children, locale}: { children: ReactNode, locale: string }) => {

    return (
        <Provider store={store}>
            <LanguageContext.Provider value={locale}>
                {children}
            </LanguageContext.Provider>
        </Provider>
    )
};

export default ProviderWrapper;