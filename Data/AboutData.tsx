export const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="grid grid-cols-2 gap-2">
                <li className="text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-indigo-600 cursor-pointer">
                    HTML
                </li>
                <li className=" text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-teal-500 cursor-pointer">
                    CSS
                </li>
                <li className=" text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-blue-500 cursor-pointer">
                    Tailwind CSS
                </li>
                <li className=" text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-yellow-500 cursor-pointer">
                    JavaScript
                </li>
                <li className=" text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-blue-700 cursor-pointer">
                    TypeScript
                </li>
                <li className=" text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-cyan-600 cursor-pointer">
                    React JS
                </li>
                <li className=" text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-green-600 cursor-pointer">
                    Redux
                </li>
                <li className=" text-base font-semibold text-gray-400 transform transition-transform duration-300 hover:scale-90 hover:text-green-600 cursor-pointer">
                    Next JS
                </li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <dl className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 py-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                    <dt className="font-semibold text-xl text-white">ICS-Phy</dt>
                    <dd className="text-gray-400 mt-2">Punjab Group Of College, Gujranwala</dd>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                    <dt className="font-semibold text-xl text-white">Bachelor of Science in Computer Science</dt>
                    <dd className="text-gray-400 mt-2">Virtual University Of Pakistan</dd>
                </div>
            </dl>

        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <dl className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                    <dt className="font-semibold text-2xl text-white">Frontend Development Completion</dt>
                    <dd className="mt-2 text-gray-300 text-base">
                        Completed an intensive Front-End Development course from Tecno Sphere, gaining in-depth knowledge and hands-on experience in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js.
                    </dd>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                    <dt className="font-semibold text-2xl text-white">Frontend Internship Certification</dt>
                    <dd className="mt-2 text-gray-300 text-base">
                        Successfully completed a Front-End Internship at Bracket Private Limited, contributing to real-world projects while refining skills in front-end development and teamwork in a professional environment.
                    </dd>
                </div>
            </dl>


        )
    }
]