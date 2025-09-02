import TrashIcon from "./assets/icons/trash.svg?react"
import Icon from "./components/icon"

export default function App() {

  return (
    <div className="felx gap-1">
      <Icon svg={TrashIcon} className="fill-pink-base"/>
    </div>
  )
}

