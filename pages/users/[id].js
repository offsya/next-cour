import {useRouter} from 'next/router';
import styles from '../styles/User.module.scss'
import A from '../components/A';
import MainContainer from "../components/MainContainer";

export default function User({user})
{
    const {query} = useRouter();
   return(
      <MainContainer>
          <div className={styles.user}>
              <A href={'/users'} text={<h1>User {query.id}</h1>}/>
              <p>This is the {user.name} page</p>
          </div>
      </MainContainer>
   );
}

export async function getServerSideProps({params}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+params.id+'');
    const user = await response.json();
    console.log(user)
    return {
        props: {user}
    }
}