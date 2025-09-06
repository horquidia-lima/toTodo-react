import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";

import TrashIcon from "../assets/icons/trash.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"


export default function PageComponents(){
    return (
    <Container>
      <div>
        <Icon svg={TrashIcon} className="fill-pink-base"/>

        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge loading>5</Badge>

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

        <div className="space-y-2">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="w-96 h-6"/>
        </div>
      </div>
    </Container>
  )
}