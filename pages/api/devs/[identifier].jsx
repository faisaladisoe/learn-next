import { Devs } from '../../../data/Devs.jsx';

const devsIdentity = ({ query: { identifier }}, res) => {
    const data = Devs.filter(detail => detail.identifier === identifier);

    if (data.length > 0) {
        res.status(200).json(data[0]);
    } else {
        res
            .status(404)
            .json({warning: `Detail about user ${identifier} is not exists`});
    }
}
 
export default devsIdentity;