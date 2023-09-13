import Link from "next/link";

const AmbassadorTable = ({ ambassadors }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User Name
                    </th>
                    {/* Add more columns as needed */}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {ambassadors.map((ambassador) => (

                        <tr key={ambassador._id}>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link href={`/profile/${ambassador._id}?name=${ambassador.username}`} key={ambassador._id}>
                                {ambassador.name}
                                </Link>
                            </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link href={`/profile/${ambassador._id}?name=${ambassador.username}`} key={ambassador._id}>
                                    {ambassador.email}
                                    </Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link href={`/profile/${ambassador._id}?name=${ambassador.username}`} key={ambassador._id}>
                                    {ambassador.username}
                                    </Link>
                                </td>

                            {/* Add more table data cells for additional details */}
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AmbassadorTable;