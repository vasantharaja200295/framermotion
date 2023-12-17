import Dot from "./Dot"

function App() {


  return (
    <div
     className=" flex w-full h-screen items-center justify-center bg-white">
      <div className=" grid grid-cols-8 gap-24">
        {
          Array.from({length:64}, (_, i) =>(
            <Dot
                key={i}
                color="#e5c07b"
                time={Math.ceil(Math.random()*2000)}/>
        ))}
      </div>
     </div>
  )
}

export default App
