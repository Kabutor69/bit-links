"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["800"],
  subsets: ["latin"],
});

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const finalURL = `${process.env.NEXT_PUBLIC_HOST}/${shorturl}`;
        setGenerated(finalURL);
        setUrl("");
        setShorturl("");
        setCopied(false);
        alert(result.message);
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong!");
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-gradient-to-r from-purple-100 to-pink-100 min-h-screen py-16 px-4">
      <div className="mx-auto max-w-xl bg-white shadow-2xl p-10 rounded-xl flex flex-col gap-6">
        {/* Title */}
        <div className="text-center">
          <h1 className={`${poppins.className} font-bold text-3xl text-purple-700 mb-2`}>
            URL Shortener
          </h1>
          <p className="text-gray-600">
            Create shortened URLs that are easy to share
          </p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-4">
          {/* Long URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Long URL</label>
            <input
              type="text"
              value={url}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              placeholder="https://example.com/your-long-url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <p className="text-sm text-gray-500">Enter the URL you want to shorten</p>
          </div>

          {/* Custom URL Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Custom Short URL</label>
            <div className="flex flex-wrap items-center gap-2 break-all">
              <span className="text-gray-500">{process.env.NEXT_PUBLIC_HOST}/</span>
              <input
                type="text"
                value={shorturl}
                maxLength={20}
                className="min-w-0 flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="custom-name"
                onChange={(e) => setShorturl(e.target.value)}
              />
            </div>
            <p className="text-sm text-gray-500">Maximum 20 characters allowed</p>
          </div>

          {/* Generate Button */}
          <button
            onClick={generate}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Generate Short URL
          </button>
        </div>

        {/* Output Section */}
        {generated && (
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <h2 className="font-semibold text-purple-700 mb-2">Your Shortened URL</h2>
            <div className="flex items-center gap-2 flex-wrap bg-white p-3 rounded border border-purple-200 overflow-auto">
              <Link
                href={generated}
                target="_blank"
                className="text-purple-600 hover:text-purple-800 break-all"
              >
                {generated}
              </Link>
              <button
                onClick={handleCopy}
                className="ml-auto px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-md transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">Click the link above to test it</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Shorten;
