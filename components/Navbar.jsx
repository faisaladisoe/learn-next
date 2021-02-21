import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <a>
                        <Image src="/ciremai.JPG" alt="faisal photo" width={120} height={90} />
                    </a>
                </Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About Me</a></Link>
            <Link href="/ninjas"><a>Ninja Family</a></Link>
        </nav>
    );
}
 
export default Navbar;