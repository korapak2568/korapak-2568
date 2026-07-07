
// IFooter.ts
export interface IFooter {
    title: string;
    link: string;
    www: string;
    description: string;

    social: {
        title: string;
        items: IFooterDetail[];
    }

    important: {
        title: string;
        items: IFooterDetail[];
    }

    projects?: {
        title: string,
        items: IFooterDetail[]
    }

    platform?: {
        title: string,
        items: IFooterDetail[]
    }

    project?: {
        title: string,
        items: IFooterDetail[]
    }

    smartCity?: {
        title: string,
        items: IFooterDetail[]
    }


    connect: {
        title: string,
        items: IFooterDetail[]
    }
}

export interface IFooterDetail {
    label: string;
    linkText?: string,
    link: string;
    icon?: string;
    iconClass?: string;
    ariaLabel?: string;
}