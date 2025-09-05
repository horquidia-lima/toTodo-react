import TrashIcon from "./assets/icons/trash.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import Badge from "./components/badge"
import Icon from "./components/icon"
import Button from "./components/button"
import ButtonIcon from "./components/button-icon"

export default function App() {

  return (
    <div className="felx gap-1">
      <Icon svg={TrashIcon} className="fill-pink-base"/>

      <Badge variant="secondary">5</Badge>
      <Badge variant="primary">2 de 5</Badge>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div>
        <ButtonIcon icon={TrashIcon}/>
        <ButtonIcon icon={TrashIcon} variant="secondary"/>
        <ButtonIcon icon={TrashIcon} variant="tertiary"/>
      </div>
    </div>
  )
}

