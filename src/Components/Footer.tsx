import Link from "next/link";

const Footer=()=>{
    return(
        <footer className="border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span className="text-gray-300">@2025 Portfolio. All Rights Reserved</span>
                <div className="flex gap-4">
                    <Link href='' className="text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300">Privacy Policy</Link>
                    <Link href='' className="text-gray-400 hover:text-gray-300 transition-all ease-in-out duration-300">Terms of use</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;