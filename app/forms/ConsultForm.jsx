import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { MdCelebration } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignMessage } from "wagmi";
import { TextField } from "../components/TextField";

const services = [
    "Community Strategy (ideation, launch, planning)",
    "Community Growth (community led marketing and sales)",
    "Community Management (Launching a Discord, managing a community)",
    "Community-led growth marketing and sales tactics",
    "Planning a Dinner Party",
    "Event Planning (less than 50 people)",
    "Event Planning (more than 50 people)",
    "Throwing a hackathon",
    "Sponsored shoutouts & social media campaigns",
    "Sponsored partnership campaigns with The Chain",
    "New: Launching a micro-niche community",
    "Help me figure out what I need",
];

const budgets = [
    "$3000<",
    "$3000 - $10k",
    "$10k - $20k",
    "$20k - $50k",
    "$50k+",
    "Not Sure",
];

const ConsultForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [organization, setOrganization] = useState("");
    const [contactPreference, setContactPreference] = useState("Email");
    const [projectType, setProjectType] = useState("New");
    const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [error, setError] = useState("");
    const [service, setService] = useState(
        "Community Strategy (ideation, launch, planning)",
    );
    const [budget, setBudget] = useState("$3000<");
    const [issues, setIssues] = useState("");
    const [extras, setExtras] = useState("");
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false);

    const { signMessage, isLoading: signatureLoading } = useSignMessage({
        message: "I hereby submit my application to the chain.",
        async onSuccess() {
            submitHandler();
        },
        onError(error) {
            if (error.message === "User denied message signature.") {
                toast.error(
                    "You must sign the message to submit your application.",
                );
                setIsLoading(false);
                return;
            }
            if (error.message === "Connector not found") {
                toast.error(
                    "You must connect your wallet to submit your application.",
                );
                setError("Please connect your wallet to submit application.");
                setIsLoading(false);
                return;
            }
            setIsLoading(false);
            toast.error("Something went wrong! + " + error.message);
        },
    });

    const resetForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setOrganization("");
        setContactPreference("Email");
        setProjectType("New");
        setProjectName("");
        setProjectDesc("");
        setService("Community Strategy (ideation, launch, planning)");
        setBudget("$3000<");
        setIssues("");
        setExtras("");
        setIsSubmissionSuccess(false);
    };

    const validateSubmission = async () => {
        signMessage();
    };

    const submitHandler = async () => {
        setIsLoading(true);

        let supabaseInput = {
            contact_name: name,
            contact_email: email,
            contact_phone: phone,
            company_name: organization,
            preferred_communication_method: contactPreference,
            project_type: projectType,
            project_name: projectName,
            project_description: projectDesc,
            service_required: service,
            estimated_budget: budget,
            specific_challenges: issues,
            additional_information: extras,
        };

        try {
            await axios.post("/api/consultation", supabaseInput);
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
                    className="w-auto border-2 border-[#42b5ff] text-[#42b5ff] text-sm lg:text-base hover:opacity-80 py-2 px-4"
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
                                    label="Email Address"
                                    value={email}
                                    handleChange={setEmail}
                                    required
                                />
                            </div>

                            <div className="mb-10 lg:mb-0 flex flex-col lg:flex-row lg:space-x-5">
                                <TextField
                                    label="Phone Number"
                                    value={phone}
                                    handleChange={setPhone}
                                    required
                                />
                                <TextField
                                    label="Company/Organization Name
                                    (if applicable)"
                                    value={organization}
                                    handleChange={setOrganization}
                                />
                            </div>

                            <div className="mb-10 lg:mb-0 flex flex-col lg:flex-row lg:space-x-5">
                                <RadioGroup
                                    value={contactPreference}
                                    onChange={setContactPreference}
                                >
                                    <RadioGroup.Label>
                                        Preferred Method of Communication
                                    </RadioGroup.Label>
                                    <div className="flex flex-row gap-2 mt-2">
                                        {["Email", "Phone Number"].map(
                                            (method, index) => (
                                                <RadioGroup.Option
                                                    className={({ checked }) =>
                                                        clsx(
                                                            "cursor-pointer transition-colors hover:opacity-80 bg-white text-black p-2 mb-2 text-sm lg:text-base border border-black rounded-sm",
                                                            checked &&
                                                                "!bg-black text-white",
                                                        )
                                                    }
                                                    key={index}
                                                    value={method}
                                                >
                                                    {method}
                                                </RadioGroup.Option>
                                            ),
                                        )}
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="mb-10 lg:mb-0 flex flex-row lg:space-x-5 justify-between">
                                <RadioGroup
                                    className="w-full"
                                    value={projectType}
                                    onChange={setProjectType}
                                >
                                    <RadioGroup.Label>
                                        Project Type
                                    </RadioGroup.Label>
                                    <div className="flex flex-row gap-2 mt-2">
                                        {["New", "Existing"].map(
                                            (type, index) => (
                                                <RadioGroup.Option
                                                    className={({ checked }) =>
                                                        clsx(
                                                            "cursor-pointer transition-colors hover:opacity-80 bg-white text-black p-2 mb-2 text-sm lg:text-base border border-black rounded-sm",
                                                            checked &&
                                                                "!bg-black text-white",
                                                        )
                                                    }
                                                    key={index}
                                                    value={type}
                                                >
                                                    {type}
                                                </RadioGroup.Option>
                                            ),
                                        )}
                                    </div>
                                </RadioGroup>
                                <TextField
                                    className="w-full"
                                    label="Project Name"
                                    value={projectName}
                                    handleChange={setProjectName}
                                    required
                                />
                            </div>

                            <div className="text-black">
                                <textarea
                                    className="rounded-md w-full px-2 bg-white h-24 text-sm lg:text-base placeholder:p-2"
                                    placeholder="Briefly describe the nature of the consulting project or services you’re interested in."
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setProjectDesc(e.target.value);
                                    }}
                                    value={projectDesc}
                                />
                                <p className="uppercase text-gray-600 text-sm">
                                    {200 - projectDesc.length} chars left
                                </p>
                            </div>

                            <div className="text-black flex flex-row gap-6">
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="block text-sm lg:text-base">
                                        Required Service
                                        <span className="text-red-500">
                                            &nbsp;*
                                        </span>
                                    </label>
                                    <select
                                        className="w-full py-2 px-4 bg-white text-black text-sm lg:text-base rounded-md"
                                        onChange={(e) =>
                                            setService(
                                                e.target[e.target.selectedIndex]
                                                    .text,
                                            )
                                        }
                                        value={service}
                                        required
                                    >
                                        {services.map((service, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={service}
                                                    style={{
                                                        background: "white",
                                                        color: "black",
                                                    }}
                                                >
                                                    {service}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label className="block text-sm lg:text-base">
                                        Estimated Budget
                                        <span className="text-red-500">
                                            &nbsp;*
                                        </span>
                                    </label>
                                    <select
                                        className="w-full py-2 p-4 bg-white text-black text-sm lg:text-base rounded-md"
                                        value={budget}
                                        onChange={(e) =>
                                            setBudget(
                                                e.target[e.target.selectedIndex]
                                                    .text,
                                            )
                                        }
                                    >
                                        {budgets.map((budget, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={budget}
                                                    style={{
                                                        background: "white",
                                                        color: "black",
                                                    }}
                                                >
                                                    {budget}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="text-black">
                                <textarea
                                    className="rounded-md w-full px-2 bg-white h-24 text-sm lg:text-base placeholder:p-2"
                                    placeholder="What specific challenges or issues are you looking to address through The Chain’s consulting?"
                                    value={issues}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setIssues(e.target.value);
                                    }}
                                />
                                <p className="uppercase text-gray-600 text-sm">
                                    {200 - issues.length} chars left
                                </p>
                            </div>

                            <div className="text-black">
                                <textarea
                                    className="w-full px-2 bg-white h-24 text-sm lg:text-base rounded-md placeholder:p-2"
                                    placeholder="Additional Information / questions."
                                    value={extras}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setExtras(e.target.value);
                                    }}
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
                                        !name ||
                                        !email ||
                                        !phone ||
                                        !projectName ||
                                        isLoading ||
                                        signatureLoading
                                    }
                                    onClick={validateSubmission}
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
                            <span className="text-[#42b5ff]">
                                Your application to consult the chain has been
                                submitted. You will be contacted accordingly.
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConsultForm;
