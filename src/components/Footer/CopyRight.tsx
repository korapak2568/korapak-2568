import React, {useState} from "react";
import {Info} from "@/data/info/Info";
import Link from "next/link";

export const CopyRight: React.FC = () => {
    const [year] = useState(new Date().getFullYear());

    return (
        <div className="copyright-area">
            <div className="container">
                <div className="copyright-area-content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; {year}. All Rights Reserved by{" "}
                                <a href={Info.Footer.link} target="_blank">
                                    {Info.Footer.title}
                                </a>
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href={Info.Footer.termOfService.link}>
                                        {Info.Footer.termOfService.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={Info.Footer.privacyPolicy.link}>
                                        {Info.Footer.privacyPolicy.label}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={Info.Footer.workplacePolicy.link}>
                                        {Info.Footer.workplacePolicy.label}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}