'use client'

import userRegister from "@/app/libs/auth/userRegister";
import { useState } from "react";

export default function RegisterForm() {
    const [registerForm, setRegisterForm] = useState({
        name: "",
        surname: "",
        email: "",
        telephone: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // สถานะสำหรับล็อกปุ่ม

    const handle = async () => {
        setIsSubmitting(true); // ล็อกปุ่ม
        try {
            await userRegister(
                `${registerForm.name} ${registerForm.surname}`,
                registerForm.email,
                registerForm.password,
                registerForm.telephone,
            );
            alert("Registration successful!");
        } catch (error) {
            console.error(error);
            alert("Registration failed. Please try again.");
        } finally {
            setIsSubmitting(false); // ปลดล็อกปุ่ม
        }
    };

    return (
        <div className="max-w-[2000px] h-[500px] relative flex flex-row justify-center items-center gap-40 z-2 p-10 pt-20">
            <div className="w-[450px] flex flex-col text-white gap-2">
                <div className="text-6xl font-semibold">
                    Fast and Easy Way To Drive Supercars
                </div>
                <div className="text-xl font-light">
                    Premium sports & supercar rentals. Fast booking, easy process, unforgettable drive
                </div>
            </div>

            <div className="w-[450px] bg-s-grey-1100/50 rounded-2xl px-7 py-5 shadow-md backdrop-blur-xl">
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // ป้องกันการรีเฟรชหน้า
                        handle();
                    }}
                >
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <input
                                required
                                onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                                type="text"
                                placeholder="Name"
                                className="w-1/2 p-2 border-1 rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight text-white/100"
                            />
                            <input
                                required
                                onChange={(e) => setRegisterForm({ ...registerForm, surname: e.target.value })}
                                type="text"
                                placeholder="Surname"
                                className="w-1/2 p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight text-white/100"
                            />
                        </div>
                        <div className="flex flex-row gap-2">
                            <input
                                required
                                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                                type="email"
                                placeholder="E-mail"
                                className="w-1/2 p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight text-white/100"
                            />
                            <input
                                required
                                onChange={(e) => setRegisterForm({ ...registerForm, telephone: e.target.value })}
                                type="text"
                                placeholder="Telephone"
                                className="w-1/2 p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight text-white/100"
                            />
                        </div>
                        <div>
                            <input
                                required
                                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                                type="password"
                                placeholder="Password"
                                className="w-full p-2 border rounded-md bg-s-grey-600/80 border-s-grey-400 font-extralight text-white/100"
                            />
                        </div>
                        <a href="#" className="text-sm text-white underline">
                            Already have an account?
                        </a>
                        <button
                            type="submit"
                            disabled={isSubmitting} // ล็อกปุ่มเมื่อกำลังทำงาน
                            className={`w-full font-medium p-2 rounded-md cursor-pointer ${
                                isSubmitting
                                    ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                                    : "bg-red-600 hover:bg-red-700 text-white"
                            }`}
                        >
                            {isSubmitting ? "Processing..." : "Register"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}