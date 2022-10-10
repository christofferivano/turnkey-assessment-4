import Image from "next/image";
import Navbar from "../components/navbar";
import btcLogo from "../../styles/assets/btc-logo.png"
import Link from "next/link";

export default function Signup() {
    return(
        <>
        <Navbar />
        <div className="py-20 grid grid-cols-2">
            <div className="col-span 1 px-20 text-white">
                <h1 className="text-5xl font-bold">Turnkey Login</h1>
                <div className="pb-10">
                    <p className="text-lg font-bold pt-4">Email / Phone Number</p>
                    <input className="bg-transparent border-gray-text border-2 w-96 h-10 rounded-md"></input>
                    <p className="text-lg font-bold pt-4">Password</p>
                    <input className="bg-transparent border-gray-text border-2 w-96 h-10 rounded-md"></input>
                </div>
                <button className="w-96 h-10 bg-button text-xl font-semibold text-black rounded-md hover:opacity-90">Create Account</button>
                <div className="flex font-bold text-xl pt-3">
                    <Link href={'/auth/register/'}>
                        <a className="text-button pl-3 hover:underline">Create a New Account</a>
                    </Link>
                </div>
            </div>
            <div className="col-span-1 flex flex-col items-center">
                <Image 
                    src={btcLogo}
                    width={400}
                    height={400}
                />
            </div>
        </div>
        </>
    )
}