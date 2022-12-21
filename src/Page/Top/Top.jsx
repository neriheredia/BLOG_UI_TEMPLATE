import Center from "./components/Center"
import Left from "./components/Left"
import Rigth from "./components/Rigth"

function Top() {
  return (
    <div className="top">
        <Left/>
        <Center/>
        <Rigth/>
    </div>
  )
}
export default Top