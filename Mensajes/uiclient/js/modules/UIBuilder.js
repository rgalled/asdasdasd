import { PanelMapper } from "../mapper/PanelMapper.js";
import { ComponentMapper } from "../mapper/ComponentMapper.js";
import { MessageMapper } from "../mapper/MessageMapped.js";

export class UIBuilder {
  static build(data) {
    const opciones = document.getElementById("opciones");
    const contenedor = document.getElementById("main_container");
    const contenedorM= document.getElementById("Message_container");
    let panelA = [];

    for (const key in data) {
      switch (key) {
        case 'panels':
          data.panels.forEach((element) => {
            const div = PanelMapper(element);
            contenedor.appendChild(div);
          });
          break;
        case 'mensaje':
          data.mensaje.forEach((element)=>{
            let incr = 1;
            const div = MessageMapper(element, incr);
            contenedorM.appendChild(div);
            incr++;
          });
        case 'components':
          data.components.forEach((element) => {
            ComponentMapper(element);
          });
          break;
        case 'mensaje':
          
      }
    }

    opciones.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      panelA.push( document.getElementById("panel2"));
      panelA.push( document.getElementById("panel1"));
      if (selectedValue === "opcion1") {
        document.getElementById('panel2').remove();
        contenedor.appendChild(panelA[1]);
      } else if (selectedValue === "opcion2") {
        document.getElementById('panel1').remove();
        contenedor.appendChild(panelA[0]);
      }
    });
  }
}
