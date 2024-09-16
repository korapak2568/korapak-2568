"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {IContentImage} from "@/data/model/common/IContentImage";
import {truncateText} from "@/utils/truncateText";

const ServicesCardWeb3Blockchain: React.FC = () => {
    const service = useSelector((state: RootState) => state.service.value);

    return (
        <>
            <div className="services-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-md-center">

                        <div className={'add-web-content'}>
                            <div>
                                Unlock the potential of decentralized applications (dApps) and smart contracts with our
                                comprehensive <strong>Web3 and blockchain development services</strong>. Whether you are
                                looking to build a decentralized finance (DeFi) platform, NFT marketplace, or any other
                                dApp, our team of expert developers can help you bring your blockchain vision to life.
                            </div>
                            <div>
                                We specialize in developing secure, scalable, and efficient <strong>smart
                                contracts</strong> using <strong>Solidity</strong> on Ethereum and Polygon networks. Our
                                expertise extends to building full-stack Web3 applications
                                using <strong>React</strong> and <strong>Next.js</strong>, ensuring your dApp is
                                responsive, user-friendly, and integrated seamlessly with blockchain functionality. From
                                development to deployment, we leverage the latest tools
                                like <strong>Hardhat</strong> and <strong>Ganache</strong> to ensure efficient
                                development, testing, and management of your blockchain projects.
                            </div>
                            <div>
                                <h2>Our Web3 & Blockchain Services</h2>
                                <ul>
                                    <li>
                                        <strong>Smart Contract Development</strong>Write, deploy, and audit
                                        <strong>Solidity-based smart contracts</strong> for secure, self-executing
                                        agreements.
                                    </li>
                                    <li>
                                        <strong>Web3 dApp Development</strong>Build <strong>decentralized
                                        applications</strong> with
                                        <strong>React</strong> and <strong>Next.js</strong>, offering seamless
                                        blockchain integration.
                                    </li>
                                    <li>
                                        <strong>Ethereum & Polygon</strong>Develop on leading blockchain networks like
                                        <strong>Ethereum</strong> and <strong>Polygon</strong>, with a focus on security
                                        and scalability.
                                    </li>
                                    <li>
                                        <strong>Hardhat &
                                            Ganache</strong>Use <strong>Hardhat</strong> and <strong>Ganache</strong> for
                                        local blockchain development and testing, ensuring your dApp is flawless before
                                        deployment.
                                    </li>
                                    <li>
                                        <strong>DeFi & NFT Platforms</strong>Create <strong>DeFi applications, NFT
                                        marketplaces,</strong> and other cutting-edge blockchain solutions that utilize
                                        smart contracts and tokenization.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2>Why Choose Us for Blockchain Development?</h2>
                                <p>
                                    Our team brings extensive experience in <strong>Web3, blockchain
                                    technology,</strong> and
                                    <strong>decentralized finance.</strong> We ensure that your project adheres to the
                                    highest security
                                    standards and leverages the latest blockchain technologies for performance and
                                    scalability. Whether you are building a <strong>Proof of Concept (PoC)</strong> or
                                    a <strong>Minimum Viable
                                    Product (MVP)</strong>, we guide you through the entire development cycle, from
                                    conceptualization to deployment on mainnet.
                                </p>
                            </div>
                            <div>
                                <h2>Build with Confidence</h2>
                                <p>
                                    As blockchain technology evolves, staying ahead with secure, efficient, and scalable
                                    solutions is essential. With our end-to-end development services, you can
                                    confidently navigate the world of <strong>decentralized applications</strong>,
                                    ensuring your dApp
                                    meets the highest standards of performance, security, and usability.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardWeb3Blockchain;
