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
        
        <Card show={test} name = "Ducati panigale v4s" speed = {299} power = {1100} to = "124 Nm @ 9,500 rpm" noc = {4} weight = {195} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <Card show={test} name = "Kawasaki Ninja H2R" speed = {299} power = {1100} to = "124 Nm @ 9,500 rpm" noc = {4} weight = {200} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <Card show={test} name = "zx10r" speed = {280} power = {1000} to = "100 Nm @ 8,500 rpm" noc = {4} weight = {180} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        <Card show={test} name = "Z1000" speed = {250} power = {1000} to = "100 Nm @ 8,500 rpm" noc = {4} weight = {170} imglink = "https://images.unsplash.com/photo-1568772585432-0bcd9add44f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjYXRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>

        <Details title = {tit} desc = {desc} dis = {dis}/>

      </div>
    )
}
