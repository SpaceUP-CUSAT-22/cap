import Link from "next/link";

const TaskTable = ({ tasks }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Points
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expiration Date
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {tasks.map((task) => (
                    <tr key={task._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link href={`/task/${task._id}`} key={task._id}>
                                {task.name}
                            </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link href={`/task/${task._id}`} key={task._id}>
                                {task.description}
                            </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link href={`/task/${task._id}`} key={task._id}>
                                {task.points}
                            </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link href={`/task/${task._id}`} key={task._id}>
                                {task.expirationDate || 'N/A'}
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

export default TaskTable;
