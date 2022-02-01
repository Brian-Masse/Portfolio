



addEventsTo( document.getElementsByClassName( "fullGallery-container" ), [exposeGallery, hideGallery], "mouseenter", "mouseleave" )

$(".title").fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
$(".data1").fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
$(".data2").fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
$(".data3").fitText(1, { minFontSize: '20px', maxFontSize: '90px' });
$(".data4").fitText(1, { minFontSize: '20px', maxFontSize: '90px' });


document.body.onload = afterLoad();

function afterLoad() {
    resizeDescriptionWidth();
    setTimeout(() => {  
        resizeGalleryContainers();
     }, 40);

     initClickableText();
}

window.onresize=function() {
    resizeDescriptionWidth()
    resizeGalleryContainers();
}


function initClickableText() {
    let texts = document.getElementsByClassName( "clickableText" );
    for (let i = 0; i < texts.length; i++) {
        addUnderScore( texts[i] )
    }
}

function addUnderScore(e) {
    if ( e.innerHTML[0] != "_"  ) {
        e.innerHTML = "_" + e.innerHTML;
    }
}


function addIndicator() {
    this.innerHTML = ">" + this.innerHTML;
}

function removeIndicator() {
    let text = ""+this.innerHTML
    let newStr = text.replace('&gt;', '');
    this.innerHTML = newStr;
}

//global visual handling

function resizeGalleryContainers() {
    let galleries = document.querySelectorAll( ".gallery" );
    let galleryContainers = document.querySelectorAll( ".gallery-container" )

    for ( let i = 0; i < galleries.length; i ++) {
        galleryContainers[i].style.height = galleries[i].clientHeight + "px"
        galleryContainers[i].style.width = galleries[i].clientWidth + "px"
    }

}

function resizeDescriptionWidth() {
    // let topWidth = parseFloat( $( ".title-top" ).css("width"))

    let bottomFontSize = parseFloat( $( ".title-bottom" ).css("font-size"))
    let bottomText = $(".title-bottom").text().length - 1
    let bottomWidth = bottomText * bottomFontSize * (13/16)

    let topFontSize = parseFloat( $( ".title-top" ).css("font-size"))
    let topText = $(".title-top").text().length - 1
    let topWidth = topText * topFontSize * (13/16)

    console.log($(".title-top").text())

    $(".description").css("width", `${topWidth - bottomWidth -120 }px`)
    $(".description").css("left", `${bottomWidth}px`)
}

function exposeGallery() {
    let gallery = ($(this).find(".gallery-container"))

    gallery.css("left", 0)
}

function hideGallery() {
    let gallery = ($(this).find(".gallery"))
    let galleryContainer = ($(this).find(".gallery-container"))

    let wholeWidth = parseFloat($("body").css("width"))
    let thisWidth = gallery.width()
    
    if ( thisWidth / wholeWidth > 0.6 ) {  galleryContainer.css("left", -(thisWidth / 1.5))
    }else { galleryContainer.css("left", "0") }
}