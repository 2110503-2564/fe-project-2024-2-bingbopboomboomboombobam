export default function RegisterForm() {
    return (
        <div className="max-w-[2000px] h-[500px] relative flex flex-row justify-center items-center gap-40 z-2 p-10 pt-20">


            <div className="w-[450px] flex flex-col text-white gap-2">
                <div className="text-6xl  font-semibold">
                    Fast and Easy Way To Drive Supercars
                </div>
                <div className="text-xl font-light">
                    Premium sports & supercar rentals. Fast booking, easy process, unforgettable drive
                </div>
            </div>


            <div className=" w-[450px] bg-s-grey-1100/50 rounded-2xl px-7 py-5 shadow-md  backdrop-blur-xl">

                <form>
                    <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <input type="text" placeholder="Name" className="w-1/2 p-2 border-1 rounded-md bg-s-grey-600/80  border-s-grey-400 font-extralight  text-white/100" />
                        <input type="text" placeholder="Surname" className="w-1/2 p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight  text-white/100" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <input type="email" placeholder="E-mail" className="w-1/2 p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight  text-white/100" />
                        <input type="text" placeholder="Telephone" className="w-1/2 p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight  text-white/100" />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" className="w-full p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight  text-white/100" />
                    </div>
                    <a href="#" className="text-sm text-white  underline">Already have an account?</a>
                    <button type="submit" className="w-full bg-red-600 hover:bg-red-700  font-medium text-white p-2 rounded-md cursor-pointer">
                        Register
                    </button>
                    </div>
                </form> 

            </div>
        </div>
    )
}