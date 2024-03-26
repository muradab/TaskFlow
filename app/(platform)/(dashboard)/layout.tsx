import { Footer } from "@/app/(marketing)/_components/footer"
import { Navbar } from "./_components/navbar"

const DashBoardLayout = ({children}:{
    children:React.ReactNode
})=>{
    return <div>
        <div className="h-full">
        <Navbar/>
            {children}
        </div>
        <Footer/>
    </div>
}

export default DashBoardLayout