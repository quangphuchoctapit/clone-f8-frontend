import React, { useState } from 'react';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import Nav from '../Nav'
import Footer from '../Footer'

function WriteBlog() {
    const [value, setValue] = useState("");
    const [selectedTab, setSelectedTab] = useState("write");

    return (
        <>
            <Nav />
            <div className="flex mt-40 max-w-screen-md mx-auto p-3 rounded-xl">
                <div className="w-full">
                    <ReactMde
                        value={value}
                        onChange={setValue}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
                        }
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default WriteBlog;
