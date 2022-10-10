import Image from "next/image";
import Navbar from "./components/navbar";
import account from "../styles/assets/account.png"
import edit from "../styles/assets/edit.png"
import btc from "../styles/assets/btc.png"
import eth from "../styles/assets/eth.png"
import bnb from "../styles/assets/bnb.png"

export default function Dashboard() {
    return(
        <>
        <Navbar title="dashboard" />
        <div className="py-20">
            <div className="h-48 px-20 bg-black rounded-2xl flex items-center justify-between">
                <div className="flex items-center">
                    <Image 
                        src={account}
                        width={90}
                        height={90}
                    />
                    <div className="flex flex-col pl-6 text-white">
                        <p className="font-bold text-4xl">Christoffer Ivano</p>
                        <div className="flex pt-2">
                            <p className="text-gray-text font-semibold text-2xl">User ID</p>
                            <p className="pl-2 font-semibold text-2xl">01234567</p>
                        </div>
                    </div>
                </div>
                <Image 
                    src={edit}
                    width={70}
                    height={70}
                />
            </div>
        </div>

        <div className="text-white font-bold px-20">
            <div className="flex">
                <h1 className="text-4xl">Estimated Loss</h1>
                <h1 className="text-4xl text-red-loss pl-5">-2.79%</h1>
            </div>
            <div className="flex">
                <h1 className="text-2xl">Potential Loss</h1>
                <h1 className="text-2xl text-red-loss pl-5">-$5.79</h1>
            </div>
            <div className="flex">
                <h1 className="text-2xl">Estimated Balance</h1>
                <h1 className="text-2xl pl-5">$148.24</h1>
            </div>
        </div>

        <div className="py-20">
            <h1 className="text-white text-5xl font-bold px-20">Spot Holdings</h1>
            <div className="grid grid-cols-2 px-20">
                <div className="col-span-1 py-10">
                    <div className="flex">
                        <Image 
                            src={btc}
                            width={40}
                            height={40}
                        />
                        <h1 className="text-2xl text-white font-bold pl-5">Bitcoin</h1>
                        <h1 className="text-2xl text-gray-text font-semibold pl-5">BTC</h1>
                    </div>
                    <p className="text-gray-text text-xl font-semibold pt-6">Total</p>
                    <p className="text-gray-text text-xl font-semibold pt-3">24H Change</p>
                </div>
                <div className="col-span-1 py-10 text-right">
                    <h1 className="text-white text-2xl font-bold pt-3">$19,500</h1>
                    <p className="text-gray-text text-xl font-semibold pt-6">0.624</p>
                    <p className="text-red-loss text-xl font-semibold pt-3">-0.39%</p>
                </div>
            </div>
            <div className="h-0.5 bg-gray-text"></div>
            <div className="grid grid-cols-2 px-20">
                <div className="col-span-1 py-10">
                    <div className="flex">
                        <Image 
                            src={btc}
                            width={40}
                            height={40}
                        />
                        <h1 className="text-2xl text-white font-bold pl-5">Ethereum</h1>
                        <h1 className="text-2xl text-gray-text font-semibold pl-5">ETH</h1>
                    </div>
                    <p className="text-gray-text text-xl font-semibold pt-6">Total</p>
                    <p className="text-gray-text text-xl font-semibold pt-3">24H Change</p>
                </div>
                <div className="col-span-1 py-10 text-right">
                    <h1 className="text-white text-2xl font-bold pt-3">$1,331</h1>
                    <p className="text-gray-text text-xl font-semibold pt-6">0.133</p>
                    <p className="text-red-loss text-xl font-semibold pt-3">-0.10%</p>
                </div>
            </div>
            <div className="h-0.5 bg-gray-text"></div>
            <div className="grid grid-cols-2 px-20">
                <div className="col-span-1 py-10">
                    <div className="flex">
                        <Image 
                            src={eth}
                            width={40}
                            height={40}
                        />
                        <h1 className="text-2xl text-white font-bold pl-5">BNB</h1>
                        <h1 className="text-2xl text-gray-text font-semibold pl-5">BNB</h1>
                    </div>
                    <p className="text-gray-text text-xl font-semibold pt-6">Total</p>
                    <p className="text-gray-text text-xl font-semibold pt-3">24H Change</p>
                </div>
                <div className="col-span-1 py-10 text-right">
                    <h1 className="text-white text-2xl font-bold pt-3">$281.1</h1>
                    <p className="text-gray-text text-xl font-semibold pt-6">0.241</p>
                    <p className="text-red-loss text-xl font-semibold pt-3">-0.35%</p>
                </div>
            </div>
            <div className="h-0.5 bg-gray-text"></div>
        </div>
        </>
    )
}