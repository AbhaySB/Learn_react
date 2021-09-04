import Card from "./Card"
import Details from "./Details"
import {useState} from "react"

export default function CardsContainer() {

    const [dis,setDis] = useState("none")
    const [tit,settit] = useState("")
    const [desc,setdesc] = useState("")

    const test = (tit,desc) =>{
        setDis("flex")
        settit(tit)
        setdesc(desc)
    }

    return (
        <div className="row d-flex justify-content-center">
        
        <Card show={test} name = "Ducati panigale v4s" speed = {299} power = {1100} to = "124 Nm @ 9,500 rpm" noc = {4} weight = {195} imglink = "https://images.carandbike.com/bike-images/colors/ducati/panigale-v4/ducati-panigale-v4-ducati-red.webp?v=16" logo = "https://assets.ducati.com/dist/0.3.16/assets/img/ducati_id.png"/>
        <Card show={test} name = "Kawasaki Ninja H2R" speed = {299} power = {1100} to = "124 Nm @ 9,500 rpm" noc = {4} weight = {200} imglink = "https://images.financialexpress.com/2017/11/kawasaki-ninja-h2r-design.jpg?w=420&h=280&imflag=true" logo = "https://kawasaki-india.com/wp-content/themes/kawasaki/image/logo.png"/>
        <Card show={test} name = "zx10r" speed = {280} power = {1000} to = "100 Nm @ 8,500 rpm" noc = {4} weight = {180} imglink = "https://imgd.aeplcdn.com/393x221/bw/models/kawasaki-ninja-zx10r-standard20210316212716.jpg?q=85" logo = "https://kawasaki-india.com/wp-content/themes/kawasaki/image/logo.png"/>
        <Card show={test} name = "Z1000" speed = {250} power = {1000} to = "100 Nm @ 8,500 rpm" noc = {4} weight = {170} imglink = "https://images.carandbike.com/bike-images/colors/kawasaki/z1000/kawasaki-z1000-green.webp?v=6" logo = "https://kawasaki-india.com/wp-content/themes/kawasaki/image/logo.png"/>

        <Details title = {tit} desc = {desc} dis = {dis}/>

      </div>
    )
}
