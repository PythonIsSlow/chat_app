import Link from "next/link"

function Contact( props: {person: string, lastMsg: string, profilePicURL: string | undefined, chatId:string}) {
  return <Link href={`/${props.chatId}`}><div className="flex flex-row hover:bg-white/10 py-3 px-3 rounded-xl cursor-pointer">
  <div className="basis-1/4">
    <img src={props.profilePicURL!} alt={`profile picture of ${props.person}`} className=" aspect-square h-full rounded-full" width={50} height={2}></img>
  </div>
  <div className=" basis-3/4">
    <p className="font-semibold">{props.person}</p>
    <p className=" line-clamp-1">{props.lastMsg}</p>
  </div>
</div></Link>
}

export function ContactList() {
  // TODO: connect it to mongoDB, generate chatId's, profile pictures, username and their messages.
  // TODO: when you connect, set lastMsg to the last message sent.
  const profiles: Array<{person: string, lastMsg: string, profilePicURL: string | undefined, chatId:string}> = [{person: "PythonIsSlow", lastMsg:"wanna play minecraft with me?", profilePicURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s", chatId:"ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&sANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&sANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s"}]
      return  <div className="w-96 h-full basis-1/5 bg-neutral-800 p-3">
        <p className=" p-2 font-bold text-3xl">Contacts</p>
        {profiles.map((e) => <Contact person={e.person} lastMsg={e.lastMsg} profilePicURL={e.profilePicURL} chatId={e.chatId}/>)}
      </div>
}

function ChatWindow() {
  return <div className="w-full h-full basis-3/5 bg-neutral-800">
    <div className=" w-full h-full grid place-content-center"><p>No chat selected!</p></div>
  </div>
}

function ChatInfo() {
  return <div className="w-full h-full basis-1/5 bg-neutral-800"></div>
}
export default function Home() {
  return (
    <>
    <ChatWindow/>
    <ChatInfo/>
    </>
  );
}
