import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as web3 from '@solana/web3.js'
import { useState } from 'react'
import AddressFrom from './components/AddressFrom'
const Home: NextPage = () => {
  const [balance, setBalance]=  useState(0)
  const [address , setAddress]= useState('')


  const addressSubmittedHandler = (address:string)=>{
    try{
      setAddress(address)
      const key = new web3.PublicKey(address);
      const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
      connection.getBalance(key).then (balance=>{
        setBalance(balance/ web3.LAMPORTS_PER_SOL)
      })
    }
    catch(error)
    {
      setAddress('')
      setBalance(0)
      alert(error)
    }
  }
  return (
    <>
    <div>
<header>
  <p>
    start solana trip
  </p>
</header>
<AddressFrom handler = {addressSubmittedHandler}/>
<p> {`address:${address}`}</p>
<p> {`balance:${balance} sol`}</p>
    </div>
    
    </>
  )
}

export default Home;

