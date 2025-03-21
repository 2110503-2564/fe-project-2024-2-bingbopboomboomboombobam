"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CAR_MODELS, CarModel } from "@/data/carModels";
import ModelViewer from "@/components/ModelViewer";
import Link from "next/link";
import { notFound } from "next/navigation";

/**
 * CarModelPage - Displays detailed information about a specific car model
 * Features:
 * - 3D model visualization with multiple view options
 * - Responsive layout for mobile and desktop
 * - Car specifications and details
 * - YouTube video integration
 * - Booking interface
 */
export default function CarModelPage() {
    // State management
    const params = useParams();
    const [carData, setCarData] = useState<CarModel | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [videoId, setVideoId] = useState<string>("");
    const [viewMode, setViewMode] = useState<
        "3d" | "yellow" | "red" | "blue" | "duck"
    >("3d");

    /**
     * Updates the current visualization mode for the car
     */
    const handleViewModeChange = (
        mode: "3d" | "yellow" | "red" | "blue" | "duck"
    ) => {
        setViewMode(mode);
    };

    /**
     * Load car data based on URL parameter
     * Handles error cases and sets loading state
     */
    useEffect(() => {
        const loadCarData = () => {
            try {
                // Validate params existence
                if (!params) {
                    console.error("No params available");
                    setIsLoading(false);
                    return;
                }

                // Extract the ID parameter
                const id = Array.isArray(params.id) ? params.id[0] : params.id;

                // Validate ID parameter
                if (!id || typeof id !== "string") {
                    console.error("Invalid ID parameter:", id);
                    setIsLoading(false);
                    return;
                }

                // Fetch car data from the predefined models
                const car = CAR_MODELS[id as keyof typeof CAR_MODELS];

                if (car) {
                    setCarData(car);
                    setVideoId(car.videoId || "dQw4w9WgXcQ");
                } else {
                    console.error("Car not found for ID:", id);
                }
            } catch (error) {
                console.error("Error loading car data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadCarData();
    }, [params ? params.id : null]);

    // Display loading state
    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-2xl">Loading...</div>
            </div>
        );
    }

    // Show 404 if car data couldn't be found
    if (!carData) {
        return notFound();
    }

    return (
            <div className="min-h-screen bg-[#1D1E1F] text-white">
                {/* MOBILE HEADER - Only visible on small screens */}
                <div className="container mx-auto px-4 py-6 block lg:hidden">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold text-gray-400 uppercase">
                            {carData.brand}
                        </h2>
                        <h3 className="text-5xl font-bold text-white uppercase">
                            {carData.model}
                        </h3>
                    </div>
                </div>

                {/* CAR DESCRIPTION - Visible on all screen sizes */}
                <div className="container mx-auto px-4 py-3 lg:py-6">
                    <div className="max-w-2xl mx-auto mb-4 lg:mb-8">
                        <p className="mt-20 text-lg text-gray-300 text-center">
                            {carData.description}
                        </p>
                    </div>
                </div>

                {/* MAIN CONTENT GRID - 3 columns on desktop, stacked on mobile */}
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 lg:max-h-[40vh]">
                    {/* Left column: Specifications */}
                    <div className="lg:col-span-2 p-2 lg:p-6 flex flex-col justify-center bg-gray-800/30 rounded-lg lg:bg-transparent">
                        <h3 className="text-lg font-bold mb-2 lg:hidden">
                            Specifications
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-1">
                            <p className="flex items-center">
                                <span className="h-5 w-5 bg-red-500 mr-2 inline-block"></span>
                                <span className="font-semibold text-gray-400">
                                    Top Speed
                                </span>
                            </p>
                            <p className="mb-2 pl-7">
                                {carData.specifications.performance.topSpeed}
                            </p>

                            <p className="flex items-center">
                                <span className="h-5 w-5 bg-red-500 mr-2 inline-block"></span>
                                <span className="font-semibold text-gray-400">
                                    Transmission
                                </span>
                            </p>
                            <p className="mb-2 pl-7">
                                {
                                    carData.specifications.performance
                                        .transmission
                                }
                            </p>

                            <p className="flex items-center">
                                <span className="h-5 w-5 bg-red-500 mr-2 inline-block"></span>
                                <span className="font-semibold text-gray-400">
                                    Fuel Type
                                </span>
                            </p>
                            <p className="mb-2 pl-7">
                                {carData.specifications.performance.fuelType}
                            </p>

                            <p className="flex items-center">
                                <span className="h-5 w-5 bg-red-500 mr-2 inline-block"></span>
                                <span className="font-semibold text-gray-400">
                                    Drivetrain
                                </span>
                            </p>
                            <p className="mb-2 pl-7">
                                {carData.specifications.performance.drivetrain}
                            </p>

                            <p className="flex items-center">
                                <span className="h-5 w-5 bg-red-500 mr-2 inline-block"></span>
                                <span className="font-semibold text-gray-400">
                                    Seats
                                </span>
                            </p>
                            <p className="mb-2 pl-7">
                                {carData.specifications.performance.seats}
                            </p>

                            <p className="flex items-center">
                                <span className="h-5 w-5 bg-red-500 mr-2 inline-block"></span>
                                <span className="font-semibold text-gray-400">
                                    Capacity
                                </span>
                            </p>
                            <p className="mb-2 pl-7">
                                {carData.specifications.performance.capacity}
                            </p>
                        </div>
                    </div>

                    {/* Center column: 3D Model Viewer */}
                    <div className="lg:col-span-8 order-first lg:order-none mb-4 lg:mb-0">
                        <div className="h-[40vh] lg:h-[50vh] w-full lg:w-[50vw] bg-[#1D1E1F] overflow-hidden flex items-center justify-center">
                            {/* Render different views based on viewMode state */}
                            {viewMode === "3d" && (
                                <ModelViewer modelPath={carData.modelPath} />
                            )}
                            {viewMode === "yellow" && (
                                <div className="w-full h-full bg-yellow-400 flex items-center justify-center">
                                    <h2 className="text-4xl text-black font-bold">
                                        {carData.name} - Yellow View
                                    </h2>
                                </div>
                            )}
                            {viewMode === "red" && (
                                <div className="w-full h-full bg-red-500 flex items-center justify-center">
                                    <h2 className="text-4xl text-white font-bold">
                                        {carData.name} - Red View
                                    </h2>
                                </div>
                            )}
                            {viewMode === "blue" && (
                                <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                                    <h2 className="text-4xl text-white font-bold">
                                        {carData.name} - Blue View
                                    </h2>
                                </div>
                            )}
                            {viewMode === "duck" && (
                                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                                    <img
                                        src="/duck.png"
                                        alt="Duck"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right column: View Options */}
                    <div className="lg:col-span-2 p-2 lg:p-6 flex flex-col justify-center bg-gray-800/30 rounded-lg lg:bg-transparent">
                        <h3 className="text-lg font-bold mb-2 lg:hidden">
                            View Options
                        </h3>
                        <div className="flex lg:flex-col gap-3 lg:items-end justify-between lg:justify-start">
                            {/* View mode radio buttons */}
                            <label className="flex flex-col lg:flex-row items-center cursor-pointer hover:bg-gray-700/50 p-1 lg:p-2 rounded transition-colors">
                                <input
                                    type="radio"
                                    name="viewMode"
                                    checked={viewMode === "3d"}
                                    onChange={() => handleViewModeChange("3d")}
                                    className="mb-1 lg:mb-0 lg:ml-3"
                                    style={{
                                        transform: "scale(3)",
                                        order: "1",
                                        marginLeft: "0",
                                    }}
                                />
                            </label>
                            <label className="flex flex-col lg:flex-row items-center cursor-pointer hover:bg-gray-700/50 p-1 lg:p-2 rounded transition-colors">
                                <input
                                    type="radio"
                                    name="viewMode"
                                    checked={viewMode === "red"}
                                    onChange={() => handleViewModeChange("red")}
                                    className="mb-1 lg:mb-0 lg:ml-3"
                                    style={{
                                        accentColor: "rgb(239, 68, 68)",
                                        transform: "scale(3)",
                                        order: "1",
                                        marginLeft: "0",
                                    }}
                                />
                            </label>
                            <label className="flex flex-col lg:flex-row items-center cursor-pointer hover:bg-gray-700/50 p-1 lg:p-2 rounded transition-colors">
                                <input
                                    type="radio"
                                    name="viewMode"
                                    checked={viewMode === "yellow"}
                                    onChange={() =>
                                        handleViewModeChange("yellow")
                                    }
                                    className="mb-1 lg:mb-0 lg:ml-3"
                                    style={{
                                        accentColor: "rgb(250, 204, 21)",
                                        transform: "scale(3)",
                                        order: "1",
                                        marginLeft: "0",
                                    }}
                                />
                            </label>
                            <label className="flex flex-col lg:flex-row items-center cursor-pointer hover:bg-gray-700/50 p-1 lg:p-2 rounded transition-colors">
                                <input
                                    type="radio"
                                    name="viewMode"
                                    checked={viewMode === "blue"}
                                    onChange={() =>
                                        handleViewModeChange("blue")
                                    }
                                    className="mb-1 lg:mb-0 lg:ml-3"
                                    style={{
                                        accentColor: "rgb(59, 130, 246)",
                                        transform: "scale(3)",
                                        order: "1",
                                        marginLeft: "0",
                                    }}
                                />
                            </label>
                            <label className="flex flex-col lg:flex-row items-center cursor-pointer hover:bg-gray-700/50 p-1 lg:p-2 rounded transition-colors">
                                <input
                                    type="radio"
                                    name="viewMode"
                                    checked={viewMode === "duck"}
                                    onChange={() =>
                                        handleViewModeChange("duck")
                                    }
                                    className="mb-1 lg:mb-0 lg:ml-3"
                                    style={{
                                        transform: "scale(3)",
                                        order: "1",
                                        marginLeft: "0",
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* DESKTOP DETAILS SECTION - Hidden on mobile */}
                <div className="container mx-auto px-4 pb-8 hidden max-w-[1200px] lg:block z-50 relative">
                    {/* Car name display */}
                    <div className="text-center lg:text-left mb-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-400 uppercase">
                            {carData.brand}
                        </h2>
                        <h3 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white uppercase">
                            {carData.model}
                        </h3>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                        {/* Video section */}
                        <div className="w-full max-w-md lg:w-auto">
                            {videoId && (
                                <div className="w-[426px] h-[240px] aspect-video overflow-hidden">
                                    <iframe
                                        className="w-full h-full object-cover"
                                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&enablejsapi=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&origin=${encodeURIComponent(
                                            window.location.origin
                                        )}`}
                                        title={`${carData.name} Video`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                        </div>

                        {/* Performance spec cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full lg:w-auto mt-6">
                            {/* Performance spec items */}
                            <div
                                className="p-4 flex flex-col relative"
                                style={{ backgroundColor: "#3A3B40" }}
                            >
                                <span className="text-xl sm:text-2xl uppercase tracking-wider font-bold text-gray-300">
                                    POWER
                                </span>
                                <span className="text-3xl sm:text-4xl font-bold">
                                    780 HP
                                </span>
                                <p className="text-xs mt-auto text-gray-400">
                                    0–100 km/h in just 2.8 seconds, with a top
                                    speed of around 355 km/h. Pure adrenaline
                                </p>
                                <div className="absolute right-0 top-[10%] h-[80%] w-[1px] bg-white hidden lg:block"></div>
                            </div>

                            <div
                                className="p-4 flex flex-col relative"
                                style={{ backgroundColor: "#3A3B40" }}
                            >
                                <span className="text-xl sm:text-2xl uppercase tracking-wider font-bold text-gray-300">
                                    TORQUE
                                </span>
                                <span className="text-3xl sm:text-4xl font-bold">
                                    720 Nm
                                </span>
                                <p className="text-xs mt-auto text-gray-400">
                                    Delivers peak torque at 6,750 rpm, paired
                                    with a lightning-fast 7-speed ISR
                                    transmission
                                </p>
                                <div className="absolute right-0 top-[10%] h-[80%] w-[1px] bg-white hidden lg:block"></div>
                            </div>

                            <div
                                className="p-4 flex flex-col relative"
                                style={{ backgroundColor: "#3A3B40" }}
                            >
                                <span className="text-xl sm:text-2xl uppercase tracking-wider font-bold text-gray-300">
                                    ENGINE
                                </span>
                                <span className="text-3xl sm:text-4xl font-bold">
                                    V12
                                </span>
                                <p className="text-xs mt-auto text-gray-400">
                                    Naturally aspirated. Raw, sharp, aggressive.
                                    The roar on startup is unmistakable
                                </p>
                            </div>

                            <div className="bg-red-500 hover:bg-red-600 transition-colors p-4 flex flex-col items-center justify-center cursor-pointer text-white">
                                <span className="text-xl sm:text-2xl uppercase tracking-wider font-bold mb-1">
                                    BOOK NOW!
                                </span>
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                    {carData.price || "N/A"}
                                </span>
                                <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-black">
                                    per day
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE DETAILS SECTION - Only visible on mobile */}
                <div className="container mx-auto px-4 py-6 block lg:hidden">
                    <div className="grid grid-cols-2 gap-3">
                        {/* Mobile performance stats */}
                        <div className="p-3 flex flex-col relative bg-[#3A3B40] rounded-lg">
                            <span className="text-lg uppercase tracking-wider font-bold text-gray-300">
                                POWER
                            </span>
                            <span className="text-2xl font-bold">780 HP</span>
                        </div>
                        <div className="p-3 flex flex-col relative bg-[#3A3B40] rounded-lg">
                            <span className="text-lg uppercase tracking-wider font-bold text-gray-300">
                                TORQUE
                            </span>
                            <span className="text-2xl font-bold">720 Nm</span>
                        </div>
                        <div className="mt-3 p-3 flex flex-col relative bg-[#3A3B40] rounded-lg">
                            <span className="text-lg uppercase tracking-wider font-bold text-gray-300">
                                ENGINE
                            </span>
                            <span className="text-2xl font-bold">V12</span>
                        </div>
                        <div className="bg-red-500 hover:bg-red-600 transition-colors p-4 flex items-center justify-between cursor-pointer text-white rounded-lg">
                            <div>
                                <span className="text-xl uppercase tracking-wider font-bold block">
                                    BOOK NOW!
                                </span>
                                <span className="text-sm font-semibold text-black">
                                    Starting at
                                </span>
                            </div>
                            <span className="text-3xl font-bold">
                                {carData.price || "N/A"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    );
}
