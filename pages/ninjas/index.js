import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await fetchData.json();
    return {
        props: {
            data: jsonData
        }
    }
};

const Ninjas = ({ data }) => {
    return (
        <div>
            <Head>
                <title>Ninja List | faisaladisoe</title>
                <meta name="description" content="This is the list of ninjas in faisaladisoe"/>
                <meta name="keywords" content="Faisaladisoe\'s ninja list"/>
            </Head>
            <h1>This is Ninja List</h1>
            { data ? 
                data.map((datum, index) => (
                    <Link href={ `/ninjas/${datum.id}` } key={ index }>
                        <a className={ styles.single }>
                            <h3>{ datum.name }</h3>
                        </a>
                    </Link>
                ))
                :
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis libero, iste dolorem magni maxime.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis libero, iste dolorem magni maxime.</p>
                </div>
            }
        </div>
    );
}
 
export default Ninjas;