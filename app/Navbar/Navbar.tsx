import Image from "next/image";
import logo from "../../public/Image/space.png"

 const Navbar=() => {
    return <>
    <div className="navbar  py- 3  justify-start container mx- 20 fixed z-[53] ">
    <Image src={logo} alt="Logo" width={150} height={150} className="my-[-15px]  ml-[-10px]  p-1 w-[60px] h-7 lg:w-32 lg:h-14 lg:mt-4 glass-basic bg- main  px-3"/>
</div>

    </>
}

export default Navbar;