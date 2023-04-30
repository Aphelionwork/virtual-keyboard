const Keyboard = {
  
  elements: {
    mainWrapper: null,
    mainKeyboard: null,
    mainInputForm: null,
    inputForm: null,
    keysContainer: null,
    keys: []
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  properties: {
    value: "",
    capsLock: false,
    shiftFlag: false
  },

  init() {
       
    //Create elements
    this.elements.mainWrapper = document.createElement("div");
    this.elements.mainKeyboard = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");
    this.elements.mainInputForm = document.createElement("div");
    this.elements.inputForm = document.createElement("input");

    //Setup wrapper
    document.body.classList.add("body");
    this.elements.mainWrapper.classList.add("body-wrapper");

    //Setup inputform
    this.elements.mainInputForm.classList.add("input-wrapper");
    this.elements.inputForm.type="text";
    this.elements.inputForm.name="myInput";
    this.elements.inputForm.value="";
    this.elements.inputForm.classList.add("input-view");

    //Setup main element
    this.elements.mainKeyboard.classList.add("keyboard");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());

    //Add to DOM
    document.body.appendChild(this.elements.mainWrapper);
    this.elements.mainWrapper.appendChild(this.elements.mainInputForm);
    this.elements.mainInputForm.appendChild(this.elements.inputForm);
    this.elements.mainWrapper.appendChild(this.elements.mainKeyboard);
    this.elements.mainKeyboard.appendChild(this.elements.keysContainer);
    
  },

    _createKeys() {
      const fragment = document.createDocumentFragment();
      const keyLayout = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
        "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "del",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
        "shift-left", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "arrow-up", "shift-right",
        "ctrl-left", "win","alt-left","space", "alt-right", "ctrl-right", "arrow-left", "arrow-down", "arrow-right", "done"
      ];
      

      // Creates HTML for an icon
      const createIconHTML = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`;
      };

      keyLayout.forEach(key => {
        const keyElement = document.createElement("button");
        
        // Add attributes/classes
        keyElement.setAttribute("type", "button");
        keyElement.classList.add("keyboard__key");

        switch (key) {
            case "backspace":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("keyboard_backspace");
                keyElement.addEventListener("click", () => {
                    this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    this._triggerEvent("oninput");
                });

            break;

            case "tab":
                keyElement.innerHTML = createIconHTML("keyboard_tab");
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\t";//знак табуляции
                    this._triggerEvent("oninput");
                });

            break;

            case "del":
                keyElement.innerHTML = createIconHTML("delete");
                keyElement.addEventListener("click", () => {
                    this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);//здесь придумать для делет
                    this._triggerEvent("oninput");
                });

            break;

            case "caps":
                keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                keyElement.innerHTML = createIconHTML("keyboard_capslock");
                keyElement.addEventListener("click", () => {
                    this._toggleCapsLock();
                    keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                });

            break;

            case "enter":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("keyboard_return");
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//знак переноса
                    this._triggerEvent("oninput");
                });

            break;

            case "shift-left":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.textContent = "shift";
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
    
            break;

            case "arrow-up":
                keyElement.innerHTML = createIconHTML("keyboard_arrow_up");
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
    
            break;

            case "shift-right":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.textContent = "shift";
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
    
            break;

            case "ctrl-left":
                keyElement.textContent = "ctrl";
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
        
            break;

            case "win":
                keyElement.textContent = "win";
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
        
            break;

            case "alt-left":
                keyElement.textContent = "alt";
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
        
            break;

            case "space":
                keyElement.classList.add("keyboard__key--extra-wide");
                keyElement.innerHTML = createIconHTML("space_bar");
                keyElement.addEventListener("click", () => {
                    this.properties.value += " ";//знак простого пробела
                    this._triggerEvent("oninput");
                });

            break;

            case "alt-right":
                keyElement.textContent = "alt";
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
        
            break;

            case "ctrl-right":
                keyElement.textContent = "ctrl";
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
        
            break;  
            
            case "arrow-left":
                keyElement.innerHTML = createIconHTML("keyboard_arrow_left");
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
    
            break;

            case "arrow-down":
                keyElement.innerHTML = createIconHTML("keyboard_arrow_down");
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
    
            break;

            case "arrow-right":
                keyElement.innerHTML = createIconHTML("keyboard_arrow_right");
                keyElement.addEventListener("click", () => {
                    this.properties.value += "\n";//Здесь нужно указать значение
                    this._triggerEvent("oninput");
                });
    
            break;

            case "done":
                keyElement.classList.add("keyboard__key", "keyboard__key--dark");
                keyElement.innerHTML = createIconHTML("visibility");

                keyElement.addEventListener("click", () => {
                    this.close();
                    this._triggerEvent("onclose");
                });

            break;

            default:
                keyElement.textContent = key.toLowerCase();

                keyElement.addEventListener("click", () => {
                    this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                    this._triggerEvent("oninput");
                });

                break;
        }

        fragment.appendChild(keyElement);

      });

      return fragment;
    },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
        this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
  },

  open(initialValue, oninput, onclose) {

  },

  close() {
    console.log ("Вызов закрытия");
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.mainKeyboard.classList.add("keyboard--hidden");
    }
  
};

window.addEventListener("DOMContentLoaded",function() {
    Keyboard.init();
});