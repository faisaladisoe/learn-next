import { server } from '../../config/index.jsx';

export const getStaticPaths = async () => {
    const devsPath = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataPath = await devsPath.json();

    const paths = dataPath.map(data => ({
        params: { identifier: data.id.toString() }
    }));
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
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
                    <h1>{ ninjaDetail.username }</h1>
                    <p>{ ninjaDetail.name }</p>
                    <p>{ ninjaDetail.email }</p>
                </div>
                :
                <p>The detail of this ninjas is not available yet</p>
            }
        </div>
    );
}
 
export default NinjaID;