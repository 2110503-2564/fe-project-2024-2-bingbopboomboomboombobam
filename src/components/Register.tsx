export default function RegisterForm() {
    return <div className="flex flex-row items-center justify-center h-96">
        <div className="relative flex flex-row justify-between items-center z-11 px-[15%] mt-10">
            <div className="w-2/5  text-white">
                <div className="text-5xl  font-semibold">
                    Fast and Easy Way To Drive Supercars
                </div>
                <div className="text-base font-light">
                    Premium sports & supercar rentals. Fast booking, easy process, unforgettable drive
                </div>
            </div>

            <div className=" w-96 bg-[#1D1E1F]/50 rounded-2xl px-7 py-5 shadow-md  backdrop-blur-xl">

                <form>
                    <div className="flex flex-row space-x-2 mb-2 ">
                        <input type="text" placeholder="Name" className="w-1/2 p-2 border-1 rounded-md bg-[#3F3F46]/80  border-[#565660] font-extralight  text-white/100" />
                        <input type="text" placeholder="Surname" className="w-1/2 p-2 border rounded-md bg-[#3F3F46]/80 border-[#565660] font-extralight  text-white/100" />
                    </div>
                    <div className="flex flex-row space-x-2 mb-2">
                        <input type="email" placeholder="E-mail" className="w-1/2 p-2 border rounded-md bg-[#3F3F46]/80 border-[#565660] font-extralight  text-white/100" />
                        <input type="text" placeholder="Telephone" className="w-1/2 p-2 border rounded-md bg-[#3F3F46]/80 border-[#565660] font-extralight  text-white/100" />
                    </div>
                    <div className="mb-2">
                        <input type="password" placeholder="Password" className="w-full p-2 border rounded-md bg-[#3F3F46]/80 border-[#565660] font-extralight  text-white/100" />
                    </div>
                    <div className="flex flex-row justify-between items-center mb-2">
                        <a href="#" className="text-sm text-white  underline">Already have an account?</a>
                    </div>
                    <button type="submit" className="w-full bg-s-red hover:bg-[#D00000]  font-medium text-white p-2 rounded-md cursor-pointer">
                        Register
                    </button>

                </form>

            </div>
        </div>
    </div>
}