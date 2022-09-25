import Bubble from "./Bubble";
const Chat = () => {
  return (
    <>
      <form>
        <input id="clientTxt"></input>
        <button id="submit">Send</button>
      </form>
      <div>
        <Bubble content={'Sleep now'}></Bubble>
      </div>
    </>
  );
}

export default Chat;