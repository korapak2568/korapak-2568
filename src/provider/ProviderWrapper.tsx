// src/components/ProviderWrapper.tsx
"use client";

import {Provider} from "react-redux";
import {ReactNode} from "react";
import {createStoreWithLang} from "@/provider/redux/store";

const ProviderWrapper = (
    {children, language}:
    { children: ReactNode, language: string }
) => {

    const store = createStoreWithLang(language);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ProviderWrapper;