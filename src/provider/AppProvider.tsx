// src/component/ProviderWrapper.tsx
"use client";

import {Provider as ReduxProvider} from "react-redux";
import {ReactNode} from "react";
import {dynamicStore} from "@/provider/redux/store";

const AppProvider = (
    {children, language}: { children: ReactNode, language: string }
) => {

    const store = dynamicStore(language);

    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default AppProvider;