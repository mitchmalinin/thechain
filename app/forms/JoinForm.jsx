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
            wallet_address: wallet.toLocaleLowerCase(),
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
            <div className="w-full max-w-[100rem] py-4">
                <button
                    className="w-auto border-2 border-[#FF61C7] bg-[#FF61C7] px-4 py-2 text-sm text-white hover:opacity-80 lg:text-base"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                    {isFormOpen ? "Close Application" : "Open Application"}
                </button>

                {isFormOpen && (
                    <div className="flex flex-col items-center p-8 lg:px-4 lg:py-10">
                        <div className="flex w-full flex-col gap-10">
                            <div className="mb-10 flex flex-col lg:mb-0 lg:flex-row lg:space-x-5">
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

                            <div className="mb-10 flex flex-col lg:mb-0 lg:flex-row lg:space-x-5">
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

                            <div className="flex flex-col gap-2 text-black">
                                <label className="block text-sm lg:text-base">
                                    Profession?
                                    <span className="text-red-500">
                                        &nbsp;*
                                    </span>
                                </label>
                                <select
                                    className="w-full rounded-md bg-white p-4 py-2 text-sm text-black lg:text-base"
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
                                    className="h-24 w-full rounded-md bg-white px-2 text-sm placeholder:p-2 lg:text-base"
                                    placeholder="Please say a few words about you and why you would like to become a member of The Chain. What are your interests? Who are you looking to meet? Any hobbies / interests outside of work?"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setReasons(e.target.value);
                                    }}
                                    value={reasons}
                                />
                                <p className="text-sm uppercase text-gray-600">
                                    {200 - reasons.length} chars left
                                </p>
                            </div>

                            <div className="text-black">
                                <textarea
                                    className="h-24 w-full rounded-md bg-white px-2 text-sm placeholder:p-2 lg:text-base"
                                    placeholder="What do you want to contribute to the community? What areas of expertise or resources can you offer the community?"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setContribution(e.target.value);
                                    }}
                                    value={contribution}
                                />
                                <p className="text-sm uppercase text-gray-600">
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
                                                "mb-2 cursor-pointer rounded-sm border border-black bg-white p-2 text-sm text-black transition-colors hover:opacity-80 lg:text-base",
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
                                    className="h-24 w-full rounded-md bg-white px-2 text-sm text-black placeholder:p-2 lg:text-base"
                                    placeholder="Anything else? Is there something you’d like to share, ask or offer? This is your time to ask!"
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200) {
                                            setExtras(e.target.value);
                                        }
                                    }}
                                    value={extras}
                                />
                                <p className="text-sm uppercase text-gray-600">
                                    {200 - extras.length} chars left
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col">
                                <button
                                    className="mx-auto mt-8 flex cursor-pointer flex-row items-center gap-2 rounded-lg border-2 border-black bg-black px-4 py-2 font-semibold text-white hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
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
                                    <span className="p-2 text-center font-semibold text-red-500">
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
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="relative bg-white p-8">
                        <IoMdClose
                            className="absolute right-2 top-2 cursor-pointer"
                            size={24}
                            onClick={() => {
                                resetForm();
                                setIsSubmissionSuccess(false);
                            }}
                        />
                        <div className="flex flex-col items-center">
                            <MdCelebration className="mb-4 text-4xl" />
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
