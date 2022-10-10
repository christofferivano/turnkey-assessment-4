import Image from "next/image";
import logo from "../../styles/assets/turnkey-logo.png"
import toggle from "../../styles/assets/toggle.png"
import account from "../../styles/assets/account.png"
import Link from "next/link";

export default function Navbar(props) {
    return(
        <nav className="z-10 mx-16 py-4 flex items-center justify-between">
            <div>
                <Link href={'/'}>
                    <a>
                        <Image 
                            src={logo}
                            width={300}
                            height={75}
                            alt='logo'
                        />
                    </a>
                </Link>
            </div>
            {props.title === 'dashboard' ?
            <div className="flex">
                <div className="flex mr-20">
                    <Image 
                        src={account}
                        width={30}
                        height={30}
                    />
                    <p className="text-white text-xl font-semibold ml-5">
                        christofferivano
                    </p>
                </div>
                <Image 
                    src={toggle}
                    width={30}
                    height={30}
                    alt='toggle'
                />
            </div>
            : props.title === 'landing' ?
            <div className="flex">
                <div className="mr-20">
                    <button className="w-60 h-8 bg-button text-lg font-semibold rounded-md hover:opacity-90">
                        <Link href={'/auth/register/'}>
                            Register / Log In
                        </Link>
                    </button>
                </div>
                <Image 
                    src={toggle}
                    width={30}
                    height={30}
                    alt='toggle'
                />
            </div>
            :
            <div>
                <Image 
                    src={toggle}
                    width={30}
                    height={30}
                    alt='toggle'
                />
            </div>
            }
        </nav>
    )
} 