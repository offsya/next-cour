import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"hello" + keywords}></meta>
                <title>Hello</title>
            </Head>
            <div className="navbar">
                <A href={"/"} text="Main"/>
                <A href={"/users"} text="Users"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #eee;
                        padding: 20px;
                    }
                    a {
                        color: #333;
                        text-decoration: none;
                        margin-right: 20px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;