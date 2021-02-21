import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ component }) => {
    return (
        <div className="content">
            <Navbar />
            { component }
            <Footer />
        </div>
    );
}
 
export default Layout;