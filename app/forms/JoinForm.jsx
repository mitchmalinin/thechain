import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { MdCelebration } from "react-icons/md";
import { toast } from "react-toastify";

import axios from "axios";
import clsx from "clsx";
import { TextField } from "../components/TextField";

const occupations = [
    "Founder",
    "Investor",
    "Developer",
    "Marketer",
    "Community Manager",
    "Business Developer",
    "Designer",
    "IT Support",
    "Student",
    "Other",
];

const referralSources = [
    "Twitter",
    "Dinner Club",
    "Instagram",
    "Texting Community",
];

const JoinForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [occupation, setOccupation] = useState("Founder");
    const [reasons, setReasons] = useState("");
    const [contribution, setContribution] = useState("");
    const [referralSource, setReferralSource] = useState("Twitter");
    const [extras, setExtras] = useState("");
    const [error, setError] = useState("");
    const [wallet, setWallet] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false);

    const resetForm = () => {
        setName("");
        setEmail("");
        setTwitter("");
        setLinkedin("");
        setOccupation("Founder");
        setReasons("");
        setContribution("");
        setReferralSource("Twitter");
        setExtras("");
        setWallet("");
        setIsSubmissionSuccess(false);
    };

    const submitHandler = async () => {
        setIsLoading(true);

        const supabaseInput = {
            name: name,
            email: email,
            twitter: twitter,
            linkedin: linkedin,
            occupation: occupation,
            reasons: reasons,
            contribution: contribution,
            referral_source: referralSource,
            wallet_address: wallet,
            extras: extras,
        };

        try {
            await axios.post("/api/community", supabaseInput);
            toast.success("Application Submitted!");
            setIsSubmissionSuccess(true);
        } catch (err) {
            setError(err.response.data);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="w-full py-4 max-w-[100rem]">
                <button
                    className="w-auto border-2 border-[#FF61C7] text-white bg-[#FF61C7] text-sm lg:text-base hover:opacity-80 py-2 px-4"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                    {isFormOpen ? "Close Application" : "Open Application"}
                </button>

                {isFormOpen && (
                    <div className="flex flex-col items-center p-8 lg:px-4 lg:py-10">
                        <div className="flex flex-col w-full gap-10">
                            <div className="mb-10 lg:mb-0 flex flex-col lg:flex-row lg:space-x-5">
                                <TextField
                                    label="Hi, what's your name?"
                                    value={name}
                                    handleChange={setName}
                                    required
                                />
                                <TextField
                                    label="Enter Wallet Address (Non-ENS)"
                                    value={wallet}
                                    handleChange={setWallet}
                                    required
                                    placeholder="0x00..."
                                />

                                <TextField
                                    label="Email Address?"
                                    value={email}
                                    handleChange={setEmail}
                                    required
                                />
                            </div>

                            <div className="mb-10 lg:mb-0 flex flex-col lg:flex-row lg:space-x-5">
                                <TextField
                                    label="Twitter?"
                                    value={twitter}
                                    handleChange={setTwitter}
                                />
                                <TextField
                                    label="LinkedIn?"
                                    value={linkedin}
                                    handleChange={setLinkedin}
                                />
                            </div>

                            <div className="text-black flex flex-col gap-2">
                                <label className="block text-sm lg:text-base">
                                    Profession?
                                    <span className="text-red-500">
                                        &nbsp;*
                                    </span>
                                </label>
                                <select
                                    className="w-full py-2 p-4 bg-white text-black text-sm lg:text-base rounded-md"
                                    onChange={(e) =>
                                        setOccupation(e.target.value)
                                    }
                                    value={occupation}
                                    required
                                >
                                    {occupations.map((occupation, index) => {
                                        return (
                                            <option
                                                key={index}
                                                className="bg-white text-black"
                                                value={occupation}
                                            >
                                                {occupation}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="text-black">
                                <textarea
                                    className="rounded-md w-full px-2 bg-white h-24 text-sm lg:text-base placeholder:p-2"
                                    placeholder="Please say a few words about you and why you would like to become a member of The Chain. What are your interests? Who are you looking to meet? Any hobbies / interests outside of work?"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setReasons(e.target.value);
                                    }}
                                    value={reasons}
                                />
                                <p className="uppercase text-gray-600 text-sm">
                                    {200 - reasons.length} chars left
                                </p>
                            </div>

                            <div className="text-black">
                                <textarea
                                    className="w-full px-2 bg-white h-24 text-sm lg:text-base rounded-md placeholder:p-2"
                                    placeholder="What do you want to contribute to the community? What areas of expertise or resources can you offer the community?"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setContribution(e.target.value);
                                    }}
                                    value={contribution}
                                />
                                <p className="uppercase text-gray-600 text-sm">
                                    {200 - contribution.length} chars left
                                </p>
                            </div>

                            <RadioGroup
                                value={referralSource}
                                onChange={setReferralSource}
                            >
                                <RadioGroup.Label>
                                    How did you hear about us?
                                </RadioGroup.Label>
                                {referralSources.map((source, index) => (
                                    <RadioGroup.Option
                                        className={({ checked }) =>
                                            clsx(
                                                "cursor-pointer transition-colors hover:opacity-80 bg-white text-black p-2 mb-2 text-sm lg:text-base border border-black rounded-sm",
                                                checked &&
                                                    "!bg-black text-white",
                                            )
                                        }
                                        key={index}
                                        value={source}
                                    >
                                        {source}
                                    </RadioGroup.Option>
                                ))}
                            </RadioGroup>

                            <div className="text-black">
                                <textarea
                                    className="w-full px-2 bg-white text-black h-24 text-sm lg:text-base rounded-md placeholder:p-2"
                                    placeholder="Anything else? Is there something you’d like to share, ask or offer? This is your time to ask!"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200) {
                                            setExtras(e.target.value);
                                        }
                                    }}
                                    value={extras}
                                />
                                <p className="uppercase text-gray-600 text-sm">
                                    {200 - extras.length} chars left
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col">
                                <button
                                    className="flex flex-row items-center gap-2 cursor-pointer mx-auto mt-8 bg-black border-2 font-semibold border-black text-white py-2 px-4 hover:opacity-80 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={
                                        !wallet || !name || !email || isLoading
                                    }
                                    onClick={() => {
                                        const regex =
                                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                                        if (regex.test(email)) {
                                            submitHandler();
                                        } else {
                                            toast.error(
                                                "Please enter a valid email address.",
                                            );
                                        }
                                    }}
                                >
                                    {isLoading && (
                                        <ImSpinner2
                                            className="animate-spin"
                                            size={18}
                                        />
                                    )}
                                    Submit Application
                                </button>
                                {error && (
                                    <span className="text-center text-red-500 p-2 font-semibold">
                                        {error}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {isSubmissionSuccess && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 absolute inset-0" />
                    <div className="relative bg-white p-8">
                        <IoMdClose
                            className="cursor-pointer top-2 right-2 absolute"
                            size={24}
                            onClick={() => {
                                resetForm();
                                setIsSubmissionSuccess(false);
                            }}
                        />
                        <div className="flex flex-col items-center">
                            <MdCelebration className="text-4xl mb-4" />
                            <span className="text-pink-400">
                                Your application to join the chain has been
                                submitted.
                            </span>
                            <span className="text-pink-400">
                                If chosen, you will be contacted.
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default JoinForm;
