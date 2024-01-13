import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center bg-gray-800 text-white p-8 rounded shadow-lg">
                <p className="text-4xl font-bold mb-4">Github Followers: {data.followers}</p>
                <img
                    src={data.avatar_url}
                    alt="Git picture"
                    className="rounded-full mx-auto mb-4"
                    style={{ width: '200px', height: '200px' }}
                />
                <p className="text-lg">Username: {data.login}</p>
                <p className="text-lg">Name: {data.name}</p>
                <p className="text-lg">Bio: {data.bio}</p>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/ShashankPatil35')

    return response.json() 
}