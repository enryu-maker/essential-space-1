import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
export default function ResetPass() {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const token = new URLSearchParams(location.search).get("token");

    // Basic password rules
    const hasMinLength = password.length >= 6;
    const hasNumber = /\d/.test(password);


    const handleSubmit = async () => {
        if (!password || !confirm) {
            toast.error("Please fill in both password fields.");
            return;
        }
        if (password !== confirm) {
            toast.error("Passwords do not match.");
            return;
        }
        if (!hasMinLength || !hasNumber) {
            toast.error("Password does not meet the required criteria.");
            return;
        }

        try {
            setLoading(true);

            await axios.post("https://essentialspace.in/api/auth/reset-password/", {
                token: token,
                new_password: password,
            });

            toast.success("Password reset successfully!");
        } catch (error) {
            toast.error("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-[#F5F5F5] px-6 py-10 md:flex md:items-center md:justify-center">

            <div className="w-full md:max-w-md">

                {/* Title */}
                <h1 className="text-3xl font-extrabold text-center text-[#111827] mb-8">
                    Reset Password
                </h1>

                {/* NEW PASSWORD */}
                <div className="bg-white rounded-xl p-6 mb-5 shadow-sm">
                    <p className="text-lg font-semibold text-[#111827]">New Password</p>

                    <div className="flex items-center justify-between mt-2">
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Create new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full text-gray-600 outline-none"
                        />

                        <button
                            onClick={() => setShowPass(!showPass)}
                            className="text-black font-semibold ml-3"
                        >
                            {showPass ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="bg-white rounded-xl p-6 mb-5 shadow-sm">
                    <p className="text-lg font-semibold text-[#111827]">Confirm Password</p>

                    <div className="flex items-center justify-between mt-2">
                        <input
                            type={showConfirm ? "text" : "password"}
                            placeholder="Re-enter password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            className="w-full text-gray-600 outline-none"
                        />

                        <button
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="text-black font-semibold ml-3"
                        >
                            {showConfirm ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                {/* PASSWORD RULES: MINIMAL, MATCHING UI */}
                <div className="px-2 mb-6 text-sm text-gray-600">
                    <p className="font-medium mb-1">Password must include:</p>

                    <p className={`${hasMinLength ? "text-green-600" : "text-gray-500"}`}>
                        • At least 6 characters
                    </p>

                    <p className={`${hasNumber ? "text-green-600" : "text-gray-500"}`}>
                        • At least one number
                    </p>
                </div>

                {/* BUTTON */}
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-black text-white py-4 mt-3 rounded-xl text-lg font-semibold shadow active:scale-[0.98] transition"
                >
                    {loading ? "Please wait..." : "Reset Password"}
                </button>
            </div>
        </div>
    );
}
