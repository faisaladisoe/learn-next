// import { server } from '../../config/index.jsx';

export const getStaticPaths = async () => {
    // const devsPath = await fetch(`${server}/api/devs`);
    // const dataPath = await devsPath.json();

    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await fetchData.json();

    // const paths = jsonData.map(data => ({
    //     params: { identifier: data.identifier }
    // }));

    const paths = jsonData.map(data => ({
        params: { id: data.id.toString() }
    }));
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    // const res = await fetch(`${server}/api/devs/${params.identifier}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();

    return {
        props: {
            ninjaDetail: data
        }
    }
}

const NinjaID = ({ ninjaDetail }) => {
    return (
        <div>
            { ninjaDetail ? 
                <div>
                    <h1>{ ninjaDetail.name }</h1>
                    <p>{ ninjaDetail.email }</p>
                    <p>{ ninjaDetail.role }</p>
                </div>
                :
                <p>The detail of this ninjas is not available yet</p>
            }
        </div>
    );
}
 
export default NinjaID;