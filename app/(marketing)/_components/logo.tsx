import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";


const font = Poppins({
    subsets:["latin"],
    weight: ["400", "600"]
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
            src="/n-white.svg"
            height="40"
            width="40"
            alt="Logo"
            className="dark:hidden"
            />
            <Image
            src="/n-dark.svg"
            height="40"
            width="40"
            alt="Logo"
            className="hidden dark:block"
            />
            <p className={cn("font-semibold",font.className)}>
                Notire 
            </p>
        </div>
    );
}
 
export default Logo;