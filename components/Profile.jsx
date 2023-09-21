

const Profile = ({user}) => {

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mt-8 mb-4">{user.name}'s Profile</h1>
            <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="mb-4">
                    <p className="text-lg">
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p className="text-lg">
                        <strong>Username:</strong> {user.username}
                    </p>
                    {/*<p className="text-lg">*/}
                    {/*    <strong>User Type:</strong> {user.user.type}*/}
                    {/*</p>*/}
                    {/* Add more user details as needed */}
                </div>
            </div>

            {user.type === 'user' && (
                <>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Tasks</h2>
                    {user.tasks && (
                        <div>
                            {user.tasks.completed.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold">Completed Tasks</h3>
                                    <ul className="list-disc pl-4">
                                        {user.tasks.completed.map((task) => (
                                            <li key={task._id}>{task.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {user.tasks.pending.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold">Pending Tasks</h3>
                                    <ul className="list-disc pl-4">
                                        {user.tasks.pending.map((task) => (
                                            <li key={task._id}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Profile;
