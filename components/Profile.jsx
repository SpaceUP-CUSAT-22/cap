import Link from 'next/link'

const Profile = ({user}) => {

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <div className="my-32">
            <div className="flex flex-col justify-center">
                <h1 className="text-center text-white text-3xl font-bold">{user.name}'s Profile</h1>
                <input name="email" value={user.email} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Name" type="email" id="" />
                <input name="phone" value={user.phone} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Phone number" type="text" id="" />
                <input name="uni" value={user.uni} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="College/University Name" type="text" id="" />
                <input name="branch" value={user.branch} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Branch" type="text" id="" />
                <input name="yog" value={user.yog} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Year of graduation" type="number" id="" />
                <Link href="/" className="bg-violet-500 text-center hover:bg-violet-800 w-[30%] m-auto text-white rounded-[15px] my-10 px-5 py-3">Continue</Link>
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
