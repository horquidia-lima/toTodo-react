import TrashIcon from "./assets/icons/trash.svg?react"
import Badge from "./components/badge"
import Icon from "./components/icon"

export default function App() {

  return (
    <div className="felx gap-1">
      <Icon svg={TrashIcon} className="fill-pink-base"/>

      <Badge variant="secondary">5</Badge>
      <Badge variant="primary">2 de 5</Badge>
    </div>
  )
}

