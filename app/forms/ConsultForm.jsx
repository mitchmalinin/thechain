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
            <div className="w-full max-w-[100rem] py-4">
                <button
                    className="w-auto border-2 border-[#42b5ff] px-4 py-2 text-sm text-[#42b5ff] hover:opacity-80 lg:text-base"
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
                                    label="Email Address"
                                    value={email}
                                    handleChange={setEmail}
                                    required
                                />
                            </div>

                            <div className="mb-10 flex flex-col lg:mb-0 lg:flex-row lg:space-x-5">
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

                            <div className="mb-10 flex flex-col lg:mb-0 lg:flex-row lg:space-x-5">
                                <RadioGroup
                                    value={contactPreference}
                                    onChange={setContactPreference}
                                >
                                    <RadioGroup.Label>
                                        Preferred Method of Communication
                                    </RadioGroup.Label>
                                    <div className="mt-2 flex flex-row gap-2">
                                        {["Email", "Phone Number"].map(
                                            (method, index) => (
                                                <RadioGroup.Option
                                                    className={({ checked }) =>
                                                        clsx(
                                                            "mb-2 cursor-pointer rounded-sm border border-black bg-white p-2 text-sm text-black transition-colors hover:opacity-80 lg:text-base",
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

                            <div className="mb-10 flex flex-row justify-between lg:mb-0 lg:space-x-5">
                                <RadioGroup
                                    className="w-full"
                                    value={projectType}
                                    onChange={setProjectType}
                                >
                                    <RadioGroup.Label>
                                        Project Type
                                    </RadioGroup.Label>
                                    <div className="mt-2 flex flex-row gap-2">
                                        {["New", "Existing"].map(
                                            (type, index) => (
                                                <RadioGroup.Option
                                                    className={({ checked }) =>
                                                        clsx(
                                                            "mb-2 cursor-pointer rounded-sm border border-black bg-white p-2 text-sm text-black transition-colors hover:opacity-80 lg:text-base",
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
                                    className="h-24 w-full rounded-md bg-white px-2 text-sm placeholder:p-2 lg:text-base"
                                    placeholder="Briefly describe the nature of the consulting project or services you’re interested in."
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setProjectDesc(e.target.value);
                                    }}
                                    value={projectDesc}
                                />
                                <p className="text-sm uppercase text-gray-600">
                                    {200 - projectDesc.length} chars left
                                </p>
                            </div>

                            <div className="flex flex-row gap-6 text-black">
                                <div className="flex w-full flex-col gap-2">
                                    <label className="block text-sm lg:text-base">
                                        Required Service
                                        <span className="text-red-500">
                                            &nbsp;*
                                        </span>
                                    </label>
                                    <select
                                        className="w-full rounded-md bg-white px-4 py-2 text-sm text-black lg:text-base"
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
                                <div className="flex w-full flex-col gap-2">
                                    <label className="block text-sm lg:text-base">
                                        Estimated Budget
                                        <span className="text-red-500">
                                            &nbsp;*
                                        </span>
                                    </label>
                                    <select
                                        className="w-full rounded-md bg-white p-4 py-2 text-sm text-black lg:text-base"
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
                                    className="h-24 w-full rounded-md bg-white px-2 text-sm placeholder:p-2 lg:text-base"
                                    placeholder="What specific challenges or issues are you looking to address through The Chain’s consulting?"
                                    value={issues}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setIssues(e.target.value);
                                    }}
                                />
                                <p className="text-sm uppercase text-gray-600">
                                    {200 - issues.length} chars left
                                </p>
                            </div>

                            <div className="text-black">
                                <textarea
                                    className="h-24 w-full rounded-md bg-white px-2 text-sm placeholder:p-2 lg:text-base"
                                    placeholder="Additional Information / questions."
                                    value={extras}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 200)
                                            setExtras(e.target.value);
                                    }}
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
