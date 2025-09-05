import TrashIcon from "./assets/icons/trash.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import Badge from "./components/badge"
import Icon from "./components/icon"
import Button from "./components/button"
import ButtonIcon from "./components/button-icon"
import InputText from "./components/input-text"
import InputCheckbox from "./components/input-checkbox"
import Card from "./components/card"
import Container from "./components/container"

export default function App() {

  return (
    <Container>
      <div>
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

        <div>
          <InputText/>
        </div>

        <div>
          <InputCheckbox/>
        </div>

        <div>
          <Card size="md">hola mundo</Card>
        </div>
      </div>
    </Container>
  )
}

