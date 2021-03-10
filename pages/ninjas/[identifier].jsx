import { server } from '../../config/index.jsx';

export const getStaticPaths = async () => {
    const devsPath = await fetch(`${server}/api/devs`);
    const dataPath = await devsPath.json();

    const paths = dataPath.map(data => ({
        params: { identifier: data.identifier }
    }));
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${server}/api/devs/${params.identifier}`);
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
                    <h1>{ ninjaDetail.nickname }</h1>
                    <p>{ ninjaDetail.fullname }</p>
                    <p>{ ninjaDetail.role }</p>
                </div>
                :
                <p>The detail of this ninjas is not available yet</p>
            }
        </div>
    );
}
 
export default NinjaID;