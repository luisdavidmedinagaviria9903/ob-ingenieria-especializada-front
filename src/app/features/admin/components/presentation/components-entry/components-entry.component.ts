import { Component } from '@angular/core';

@Component({
  selector: 'app-components-entry',
  templateUrl: './components-entry.component.html',
  styleUrls: ['./components-entry.component.scss']
})
export class ComponentsEntryComponent {
  clients: Client[] = [{value: 0, name: 'Bavaria'}, {value: 0, name: 'Camaguey'}];
  componentType: ComponentType[] = [
    {value: 0, name: 'Motor A/C'}, {value: 0, name: 'Motor DC'},
    {value: 0, name: 'Bomba sumergible'}, {value: 0, name: 'Generador'},
    {value: 0, name: 'Motor 1PH'}, {value: 0, name: 'Bomba centrifuga'}
  ]
  inventory: ComponentInventory[] = [
    {value: 0, name: 'Estator'}, {value: 0, name: 'Rotor'}, {value: 0, name: 'Caperuza'}
  ]

}

interface Client {
  value: number;
  name: string;
}
interface ComponentType {
  value: number;
  name: string;
}

interface ComponentInventory {
  value: number;
  name: string;
}
