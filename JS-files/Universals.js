

addUniversalEvents();

function addUniversalEvents() {
    addEventsTo( document.getElementsByClassName("hover-content"), [hoverOn, hoverOff], "mouseenter", "mouseleave" )
    addEventsTo( document.getElementsByClassName( "hover3D-content" ), [hover3D, returnHover3D], "mousemove", "mouseleave" )
    addEventsTo( document.getElementsByClassName( "clickFlip-content" ), [clickFLip], "click" )
    addEventsTo( document.getElementsByClassName( "hoverGlow-content" ), [hoverGlow], "mousemove" )

    addEventsTo( document.getElementsByClassName( "shadowed" ), [hoverShadow], "mousemove" )
}

function addEventsTo(elements, actions, ...events) {
    for (let element of elements) {
        for (let i = 0; i < events.length ; i ++ ) {
            element.addEventListener(events[i], actions[i])
        }
    }
}

window.onload = function() {
}

function clickFLip( ) {
    let side = this.style.getPropertyValue('--side')
    let turn = 180
    if (side === "back") {
        turn = 0 
        this.style.setProperty( "--side", "front" )
    }else {
        this.style.setProperty( "--side", "back" )
    }
    this.style.setProperty( "transform", `rotateY( ${ turn }deg  )` )
}



function createDiv(className) {
    let div = document.createElement("div")
    div.className = className
    return div;
}

function createForm( action, method, enctype, className ) {
    const form = document.createElement("form")
    form.action = action
    form.method = method
    form.enctype = enctype
    form.className = className
    return form
}

function addHTMLToContainer(object, tags) {
    tags.forEach( tag => {
        object.innerHTML += tag;

    })
}



function getRelativeMouse(object, event) {
    const rect = object.getBoundingClientRect()
    let relativeX = event.clientX - rect.x
    let relativeY = event.clientY - rect.y
    return [relativeX, relativeY]
}

function calculateRotations(object, event) {
    let poses = getRelativeMouse(object, event)
    let rect = object.getBoundingClientRect()

    let midX = (rect.width / 2)
    let midY = (rect.height / 2)

    let xRot = ( poses[0] - midX ) / ( rect.width / 2 )
    let yRot = ( midY - poses[1] ) / ( rect.height / 2 )  
    return [xRot, yRot]
}

function hoverShadow() {
    let rotations = calculateRotations(this, event)  
    
    this.style.setProperty( "--xRot", rotations[0] )
    this.style.setProperty( "--yRot", rotations[1] )
}

function returnHover3D() {
    this.style.setProperty( "--xRot", 0 )
    this.style.setProperty( "--yRot", 0 )

    this.style.setProperty( "--x", 0 )
    this.style.setProperty( "--y", 0 )
}

function hoverGlow( event ) {
    let poses = getRelativeMouse(this, event)

    this.style.setProperty( "--x", poses[0] )
    this.style.setProperty( "--y", poses[1] )
}

function hover3D(event) {
    let poses = getRelativeMouse(this, event)
    let rotations = calculateRotations(this, event)  
    
    this.style.setProperty( "--xRot", rotations[0] )
    this.style.setProperty( "--yRot", rotations[1] )

    this.style.setProperty( "--x", poses[0] )
    this.style.setProperty( "--y", poses[1] ) 
}

function hoverOn() {
    this.style.width = 150%
    fade( this, 25, new Color(0, 0, 0), new Color(1, 1, 1) )
}

function hoverOff() {
    fade( this, 25, new Color(1, 1, 1), new Color(0, 0, 0) )
}

function fade(object, steps, startColor, endColor) {

    var id = null;
    clearInterval(id)
    id = setInterval(frame, 10)

    let iteration = 0
    let colors = startColor.returnColorRamp(endColor, steps)

    function frame() {
        iteration += 1
        if ( iteration > steps ) {
            clearInterval(id)
        } else {
            object.style.color = colors[iteration].toCSS()
        }
    }
}





class Color {

    constructor(red, green, blue, colorSpace) {

        if (colorSpace == "hsb") {
            this.hue = red
            this.saturation = green
            this.brightness = blue

            this.red = this.toRGB()[0]
            this.green = this.toRGB()[1]
            this.blue = this.toRGB()[2]
        } else {
            this.red = red
            this.green = green
            this.blue = blue

            this.hue = this.toHSB()[0]
            this.saturation = this.toHSB()[1]
            this.brightness = this.toHSB()[2]
        }
    }

    toCSS() {
        return `rgb(${ this.red * 255},${ this.green * 255},${ this.blue * 255})`
    }

    returnColorRamp(color2, steps) {
        let redStep =   (color2.red - this.red) / steps
        let greenStep = (color2.green - this.green) / steps
        let blueStep =  (color2.blue - this.blue / steps)


        
        let colors = []
        for (let i = 0; i < steps + 1; i ++) {
            let color = new Color( this.red + ( redStep * i), this.green + ( greenStep * i), this.blue + ( blueStep * i)) 
            colors.push( color )
        }
        return colors
    }

    toHSB() {
        const min = Math.min(this.red, this.green, this.blue)
        const max = Math.max(this.red, this.green, this.blue)
        const mid = this.red + this.green + this.blue - (max + min)
        const quo = ((mid - min) / ( max - min )) / 6
        const delta = max - min

        let hue = 0
        if ( max == this.red ) { hue = 60 * (( (this.green - this.blue) / delta) %6) }
        if ( max == this.green ) { hue = 60 * ( ((this.blue - this.red) / delta) + 2) }
        if ( max == this.blue ) { hue = 60 * (((this.red - this.green) / delta) + 4) }

        let saturation = (max - min) / max
        let brightness = max * 100

        return [hue, saturation, brightness]
    }

    toRGB() {
        const c = (this.brightness / 100) * (this.saturation / 100)
        const x = c * (1 - Math.abs( (this.hue / 60 ) % 2 - 1))
        const m =(this.brightness / 100) - c

        let red = 0; let green = 0; let blue = 0;

        if ( 0 < this.hue && this.hue < 60 )    { red = c; green = x; blue = 0 } 
        if ( 60 < this.hue && this.hue < 120 )  { red = x; green = c; blue = 0 } 
        if ( 120 < this.hue && this.hue < 180 ) { red = 0; green = c; blue = x } 
        if ( 180 < this.hue && this.hue < 240 ) { red = 0; green = x; blue = c} 
        if ( 240 < this.hue && this.hue < 300 ) { red = x; green = 0; blue = c } 
        if ( 300 < this.hue && this.hue < 360 ) { red = c; green = 0; blue = x } 

        return [red + m, green + m, blue + m]
    }
}