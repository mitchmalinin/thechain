"use client";

import { useState } from "react";
import { ImSpinner8 } from "react-icons/im";
import useSWR, { mutate } from "swr";

export default function Profile() {
    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data: profile, error, isLoading } = useSWR("/api/profile", fetcher);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState({});
    const [isSaving, setIsSaving] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
        setEditedProfile(profile);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = async () => {
        setIsSaving(true);
        const response = await fetch("/api/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProfile),
        });

        if (response.ok) {
            mutate("/api/profile");
            setIsEditing(false);
        }
        setIsSaving(false);
    };

    const renderInput = (label, value, onChange) => (
        <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
                {label}
            </label>
            <input
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                value={value}
                onChange={onChange}
            />
        </div>
    );

    if (isLoading || isSaving)
        return (
            <div className="flex min-h-screen items-center justify-center">
                <ImSpinner8 size={64} className="animate-spin text-[#ff62c7]" />
            </div>
        );

    if (!profile)
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div>Must be Chain Member to Access</div>
            </div>
        );

    if (error)
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p>Error loading profile</p>
            </div>
        );

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="min-w-[350px] rounded-md border p-5 shadow-md">
                {isEditing ? (
                    <>
                        {renderInput("Name", editedProfile.name, (e) =>
                            setEditedProfile({
                                ...editedProfile,
                                name: e.target.value,
                            }),
                        )}
                        {renderInput("Email", editedProfile.email, (e) =>
                            setEditedProfile({
                                ...editedProfile,
                                email: e.target.value,
                            }),
                        )}
                        {renderInput("Twitter", editedProfile.twitter, (e) =>
                            setEditedProfile({
                                ...editedProfile,
                                twitter: e.target.value,
                            }),
                        )}
                        {renderInput("LinkedIn", editedProfile.linkedin, (e) =>
                            setEditedProfile({
                                ...editedProfile,
                                linkedin: e.target.value,
                            }),
                        )}
                        {renderInput(
                            "Occupation",
                            editedProfile.occupation,
                            (e) =>
                                setEditedProfile({
                                    ...editedProfile,
                                    occupation: e.target.value,
                                }),
                        )}
                        {renderInput("Reasons", editedProfile.reasons, (e) =>
                            setEditedProfile({
                                ...editedProfile,
                                reasons: e.target.value,
                            }),
                        )}
                        {renderInput(
                            "Contribution",
                            editedProfile.contribution,
                            (e) =>
                                setEditedProfile({
                                    ...editedProfile,
                                    contribution: e.target.value,
                                }),
                        )}
                        <div className="flex justify-between">
                            <button
                                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                onClick={handleSave}
                                disabled={isSaving}
                            >
                                Save
                            </button>
                            <button
                                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                                onClick={handleCancel}
                                disabled={isSaving}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-xl font-bold">{profile.name}</h1>
                        <p>Email: {profile.email}</p>
                        <p>Twitter: {profile.twitter}</p>
                        <p>LinkedIn: {profile.linkedin}</p>
                        <p>Occupation: {profile.occupation}</p>
                        <p>Reasons: {profile.reasons}</p>
                        <p>Contribution: {profile.contribution}</p>
                        <p>Wallet: {profile.wallet_address}</p>
                        <button
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
