import { useState } from "react";
import FileUpload from "./FileUpload";

function Sidebar() {
    const [showFileUploadModal, setShowFileUploadModal] = useState(false);
    return (
        <div className="h-full w-3/5 bg-[#EDF6F6] border-r border-[#E5EAF2]">
            <div className="w-full border-b border-[#E5EAF2] p-4 py-5 bg-white">
                dsfsdf
            </div>
            <div className="w-full border-b border-[#E5EAF2] p-4 py-5 bg-[#F8FCFC]">
                dsfsdf
            </div>
            <div className="flex flex-col w-full align-middle overflow-x-hidden h-full p-4 ">
               <button type="button" onClick={() => setShowFileUploadModal(true)} className="bg-[#E5EAF2] p-3 w-fit ">Import file</button>
            </div>

            {/* File Upload Modal */}
            {showFileUploadModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Modal Title
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowFileUploadModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                                </span>
                            </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto text-left">
                                <p><b>Important Information:</b></p>
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                Please ensure that the imported file follows the specified format. It should be a CSV file with the following columns:
                                </p>
                                <ul className="ml-10">
                                    <li className="list-disc"><b>Username:</b> The username associated with each review.</li>
                                    <li className="list-disc"><b>Date of Review:</b> nclude a column with the date when the review was submitted.</li>
                                    <li className="list-disc"><b>Review Column:</b> This column should contain the actual review text.</li>
                                </ul>
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                Make sure your CSV file adheres to this structure for successful processing.                                </p>
                                <FileUpload />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowFileUploadModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowFileUploadModal(false)}
                            >
                                Save Changes
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
      ) : null}
        </div>

    );
}

export default Sidebar;