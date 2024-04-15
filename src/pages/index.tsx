import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {

  const {data: session, status} = useSession();

  return (<div className="max-w-screen-lg m-auto">
    <div className="bg-gray-300 p-5 rounded-xl mt-3">
      <div className="text-2xl font-bold">Blog</div>
    </div>
    <div className="mb-5 py-5">
      {session && (
        <>
          <div className="text-xl font-bold mb-4">Home Page</div>
          <div className="py-5">
            <div className="flex min-w-full">
              <div>
                {session.user != undefined && (
                  <>
                    <span className="text-base font-bold">Name: {session.user.name}</span>
                    <div>Email: {session.user.email}</div>
                  </>
                )}
              </div>
              <div className="text-right mr-0 ml-auto">
                <button onClick={()=> signOut()} className="bg-purple-900 text-white rounded-xl px-5 py-3 hover:bg-purple-200 hover:text-purple-950">Signout</button>
              </div>
            </div>
          </div>
          <div className="text-base text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </>
      )}
      {!session &&(
        <>
          <div className="text-xl font-bold">Login to view content</div>
          <div className="py-5">
            <button onClick={()=> signIn('github')} className="bg-purple-900 text-white rounded-xl px-5 py-3 hover:bg-purple-200 hover:text-purple-950">Signin</button>
          </div>
        </>
      )}
    </div>
  </div>);
}
