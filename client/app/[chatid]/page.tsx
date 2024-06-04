import { clsx } from "clsx";
interface message {
  content: string;
  sentDate: string;
  // if it is sent by you it is true
  byMe: boolean;
}

function Message(props: message) {
  return (
    <div className={clsx(" h-20 ")}>
      <p
        className={clsx(" bg-white/20 p-3 rounded-full w-max max-w-[40ch]", {
          "rounded-bl-none": !props.byMe,
          "rounded-br-none absolute right-0": props.byMe,
          " bg-accent": props.byMe,
        })}
      >
        {props.content}
      </p>
      <div
        className={clsx({
          " absolute right-0": props.byMe,
        })}
      >
        <p
          className={clsx(" text-sm text-gray-500", {
            "rounded-bl-none": !props.byMe,
            "rounded-br-none relative top-12": props.byMe,
          })}
        >
          {props.sentDate}
        </p>
      </div>
    </div>
  );
}

export function TextField() {
  return (
    <form className=" absolute bottom-12 w-[calc(100vw_-_24rem)] flex flex-row gap-3 items-center px-[20%]">
      <input
        type="text"
        name=""
        id=""
        className=" w-full h-16 bg-gray-800 rounded-xl outline-none p-3 focus:bg-gray-700 shadow-md"
      />
      <button
        type="submit"
        className=" h-16 aspect-square bg-slate-900 hover:bg-slate-800 rounded-full"
      >
        send
      </button>
    </form>
  );
}

export default function Page({ params }: { params: { chatid: string } }) {
  //TODO: get messages from mongoDB
  const messages: Array<message> = [
    {
      content: "wanna play minecraft with me?",
      sentDate: "yesterday",
      byMe: false,
    },
    {
      content: "wanna play minecraft with me?",
      sentDate: "yesterday",
      byMe: true,
    },
    {
      content: "wanna play minecraft with me?",
      sentDate: "yesterday",
      byMe: false,
    },
  ];
  return (
    <div className=" p-5 w-full">
      <TextField />
      {messages.map((e: message) => (
        <Message content={e.content} byMe={e.byMe} sentDate={e.sentDate} />
      ))}
    </div>
  );
}
