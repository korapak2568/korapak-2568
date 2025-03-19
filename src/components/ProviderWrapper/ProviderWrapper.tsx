// src/components/ProviderWrapper.tsx
"use client";

import {Provider} from "react-redux";
import {ReactNode} from "react";
import store from "@/redux/store";
import {LocaleContext} from "./LocaleContext";

const ProviderWrapper = (
    {children, locale}: { children: ReactNode, locale: string }) => {

    return (
        <Provider store={store}>
            <LocaleContext.Provider value={locale}>
                {children}
            </LocaleContext.Provider>
        </Provider>
    )
};

export default ProviderWrapper;