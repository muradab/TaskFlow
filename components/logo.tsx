import Link from 'next/link'
import { cn } from "@/lib/utils";
import localFont from "next/font/local"

const headingFont = localFont({
    src: "../public/fonts/font.woff2"
});


export const Logo = ()=>{
    return (
        <div>

                <Link href='/sign-up'>
                    <div className={cn("hover:opacity-75 transition items-center gap-x-2 hidden md:flex", headingFont.className)}>
                   <p className="text-lg text-neutral-700 pb-1">
                    Task tracker
                   </p>
                    </div>
                </Link>
        </div>
         
    );
}