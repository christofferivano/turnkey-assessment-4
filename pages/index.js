import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/navbar"
import background from "../styles/assets/background.png"
import btc from "../styles/assets/btc.png"
import eth from "../styles/assets/eth.png"
import bnb from "../styles/assets/bnb.png"
import usdt from "../styles/assets/usdt.png"
import xrp from "../styles/assets/xrp.png"
import secureAsset from "../styles/assets/secure-asset.png"
import dataEncryption from "../styles/assets/data-encryption.png"
import chatSupport from "../styles/assets/chat-support.png"

export default function Home() {
  return (
    <>
      <Navbar title='landing' />
      <div className="relative pt-10 flex flex-col items-center">
        <h1 className="z-10 absolute text-white text-7xl font-bold mt-24 tracking-wider">
          Buy, sell, and hold 100+<br />cryptocurrencies on Turnkey
        </h1>
        <Image
          src={background}
          alt='background'
        />
        <div className="absolute mt-96 z-10">
          <button className="w-80 h-14 bg-button text-2xl font-semibold rounded-md hover:opacity-90">
            <Link href={'/auth/register/'}>
              Get Started
            </Link>
          </button>
        </div>
      </div>

      <div className="px-10 py-20 font-bold">
        <h1 className="text-white text-5xl">
          Popular Cryptocurrencies
        </h1>
        <div className="pt-8 grid grid-cols-4">
          <div className="col-span-2">
            <h1 className="text-gray-text text-xl">Name</h1>
            <div className="flex items-center pt-4">
              <Image
                src={btc} 
                width={40}
                height={40}
                alt='btc'
              />
              <h1 className="text-white text-2xl pl-6 pr-1">Bitcoin</h1>
              <h1 className="text-gray-text text-2xl">BTC</h1>
            </div>
            <div className="flex items-center pt-4">
              <Image
                src={eth} 
                width={40}
                height={40}
                alt='eth'
              />
              <h1 className="text-white text-2xl pl-6 pr-1">Etherium</h1>
              <h1 className="text-gray-text text-2xl">ETH</h1>
            </div>
            <div className="flex items-center pt-4">
              <Image
                src={bnb} 
                width={40}
                height={40}
                alt='bnb'
              />
              <h1 className="text-white text-2xl pl-6 pr-1">BNB</h1>
              <h1 className="text-gray-text text-2xl">BNB</h1>
            </div>
            <div className="flex items-center pt-4">
              <Image
                src={usdt} 
                width={40}
                height={40}
                alt='usdt'
              />
              <h1 className="text-white text-2xl pl-6 pr-1">TetherUS</h1>
              <h1 className="text-gray-text text-2xl">USDT</h1>
            </div>
            <div className="flex items-center pt-4">
              <Image
                src={xrp} 
                width={40}
                height={40}
                alt='xrp'
              />
              <h1 className="text-white text-2xl pl-6 pr-1">Ripple</h1>
              <h1 className="text-gray-text text-2xl">XRP</h1>
            </div>
          </div>
          <div className="col-span-1 text-right">
            <h1 className="text-gray-text text-xl">Last Price</h1>
            <h1 className="text-white text-2xl pl-6 pr-1 pt-6">$19,500</h1>
            <h1 className="text-white text-2xl pl-6 pr-1 pt-6">$1,330</h1>
            <h1 className="text-white text-2xl pl-6 pr-1 pt-6">$281.1</h1>
            <h1 className="text-white text-2xl pl-6 pr-1 pt-6">$1.01</h1>
            <h1 className="text-white text-2xl pl-6 pr-1 pt-6">$0.5208</h1>
          </div>
          <div className="col-span-1 text-right">
            <h1 className="text-gray-text text-xl">24h Change</h1>
            <h1 className="text-red-loss text-2xl pl-6 pr-1 pt-6">-0.39%</h1>
            <h1 className="text-red-loss text-2xl pl-6 pr-1 pt-6">-0.10%</h1>
            <h1 className="text-red-loss text-2xl pl-6 pr-1 pt-6">-0.35%</h1>
            <h1 className="text-green-gain text-2xl pl-6 pr-1 pt-6">+0.12%</h1>
            <h1 className="text-green-gain text-2xl pl-6 pr-1 pt-6">+5.62%</h1>
          </div>
        </div>
      </div>

      <div className="bg-black h-100 py-14 rounded-3xl flex flex-col items-center">
        <h1 className="text-white text-5xl tracking-wide font-bold">
          Start Trade and Build<br />Your Own Portofolio
        </h1>
        <p className="text-gray-text text-xl text-center font-semibold py-16">
          Add funds to your Turnkey account to<br />
          start trading crypto. You can add funds with<br /> 
          a variety of payment methods. Complete the identity<br />
          verification first to secure your account and transactions.
        </p>
        <button className="w-80 h-14 bg-button text-2xl font-semibold rounded-md hover:opacity-90">
          <Link href={'/auth/register/'}>
            Get Started
          </Link>
        </button>
      </div>

      <div className="py-20 px-10">
        <h1 className="text-white text-5xl font-bold">
          Your Trusted Crypto Trading Platform
        </h1>
        <div className="pt-4">
          <div className="flex items-center">
            <Image 
              src={secureAsset}
              width={50}
              height={50}
              alt='secureAsset'
            />
            <h2 className="pl-2 text-white text-3xl font-bold">
              Secure Asset Fund for Users
            </h2>
          </div>
          <p className="text-gray-text text-xl font-semibold">
            Turnkey store 10% of all trading fees in a secure<br />
            asset fund to protect the user funds.
          </p>
        </div>
        <div className="pt-4">
          <div className="flex items-center">
            <Image 
              src={dataEncryption}
              width={50}
              height={50}
              alt='dataEncryption'
            />
            <h2 className="pl-2 text-white text-3xl font-bold">
              Advanced Data Encryption
            </h2>
          </div>
          <p className="text-gray-text text-xl font-semibold">
            Your Transactions data is secure via end-to-end<br />
            encryption, ensuring that only you have access to your<br />
            personal information.
          </p>
        </div>
        <div className="pt-4">
          <div className="flex items-center">
            <Image 
              src={chatSupport}
              width={50}
              height={50}
              alt='chatSupport'
            />
            <h2 className="pl-2 text-white text-3xl font-bold">
              24/7 Chat Support
            </h2>
          </div>
          <p className="text-gray-text text-xl font-semibold">
            Get Chat Support with our friendly customer service.
          </p>
        </div>
      </div>
    </>
  )
}
