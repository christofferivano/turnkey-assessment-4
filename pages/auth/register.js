import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import btcLogo from "../../styles/assets/btc-logo.png"
import google from "../../styles/assets/google.png"

export default function Register() {
    return(
        <>
        <Navbar />
        <div className="py-10 flex flex-col items-center">
            <Image 
                src={btcLogo}
                width={200}
                height={200}
                alt='btcLogo'
            />
            <h1 className="text-white font-bold text-4xl py-4">Welcome to Turnkey!</h1>
            <button className="w-96 h-14 bg-button text-xl font-semibold rounded-md hover:opacity-90">
                <Link href={'/auth/signup/'}>
                    Sign Up with Phone or Email
                </Link>
            </button>
            <div className="flex items-center justify-between w-96 py-4">
                <div className="h-1 w-20 bg-white"></div>
                <p className="text-white font-bold text-xl">or continue with</p>
                <div className="h-1 w-20 bg-white"></div>
            </div>
            <button className="w-96 h-14 bg-gray-text text-2xl text-white font-semibold rounded-md hover:opacity-90">
                <Image 
                    src={google}
                    width={20}
                    height={20}
                    alt='google'
                />
                Google
            </button>
            <div className="flex font-bold text-xl pt-3">
                <p className="text-white">Already registered?</p>
                <Link href={'/auth/login/'}>
                    <a className="text-button pl-3 hover:underline">Log In</a>
                </Link>
            </div>
        </div>
        </>
    )
}