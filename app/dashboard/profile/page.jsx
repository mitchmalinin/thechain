"use client";

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import useSWR, { mutate } from "swr";

export default function Profile() {
    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data: profile, error, isLoading } = useSWR("/api/profile", fetcher);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState({});

    const handleEdit = () => {
        setIsEditing(true);
        setEditedProfile(profile);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = async () => {
        const response = await fetch("/api/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProfile),
        });

        if (response.ok) {
            mutate("/api/profile");
            setIsEditing(false);
        }
    };

    const renderInput = (label, value, onChange) => (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input value={value} onChange={onChange} />
        </FormControl>
    );

    if (isLoading)
        return (
            <Flex minH="100vh" alignItems="center" justifyContent="center">
                <Spinner />
            </Flex>
        );

    if (error)
        return (
            <Flex minH="100vh" alignItems="center" justifyContent="center">
                <Text>Error loading profile</Text>
            </Flex>
        );

    if (!profile)
        return (
            <Flex minH="100vh" alignItems="center" justifyContent="center">
                <Text>No profile found</Text>
            </Flex>
        );

    return (
        <Flex minH="100vh" alignItems="center" justifyContent="center">
            <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                width={"max-content"}
            >
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
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={handleCancel}>Cancel</Button>
                    </>
                ) : (
                    <>
                        <Heading fontSize="xl">{profile.name}</Heading>
                        <Text>Email: {profile.email}</Text>
                        <Text>Twitter: {profile.twitter}</Text>
                        <Text>LinkedIn: {profile.linkedin}</Text>
                        <Text>Occupation: {profile.occupation}</Text>
                        <Text>Reasons: {profile.reasons}</Text>
                        <Text>Contribution: {profile.contribution}</Text>
                        <Button onClick={handleEdit}>Edit</Button>
                    </>
                )}
            </Box>
        </Flex>
    );
}
