import { Devs } from '../../../data/Devs.jsx';

const devsJson = (req, res) => {
    res.status(200).json(Devs);
}
 
export default devsJson;