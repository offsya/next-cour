import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "./components/MainContainer";

const Users = ({users}) => {


    return (
        <MainContainer>
            <Link href="/">
                <h1>Users</h1>
            </Link>
            <ul>
                {users.map(u =>
                    <li key={u.id}>
                        <Link href={`/users/${u.id}`}>
                            <a>{u.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
}
