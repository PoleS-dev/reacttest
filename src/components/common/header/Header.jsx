import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/header.css'
import Nav from './Nav'
import Connect from './connect'
import Bandeau from './bandeau'
export default function Header() {


    return (
        <header>
        <Nav/>
        <Bandeau/>
        <Connect/>

        </header>
    )
}