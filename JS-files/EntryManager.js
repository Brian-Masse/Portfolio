

$(document).ready(function() {
    updateImages();
});

function updateInput(name) {
    let content = document.querySelector(`.${name}`).innerHTML;
    let input = document.querySelector(`.${name}Input`);
    input.value = content;
}

function updateSaveButton() {
    updateInput("description");
    updateInput("title");
    updateInput("title2");
    updateInput("date");

    updateInput("data1");
    updateInput("data2");
    updateInput("data3");
    updateInput("data4");

    // let descriptionInput = document.querySelector(".descriptionInput");
    // let description = document.querySelector( ".description" ).innerHTML;
    // descriptionInput.value = description;
}



function updatePlacementIndex() {
    let imageCount = parseFloat(document.querySelector(".imageCount").innerHTML);
    let placementIndexInput = document.querySelector(".placementIndexInput");
    placementIndexInput.value = imageCount + 1;
}  


function updateImages() {
    
    let fullGalleryContainer = document.querySelector( ".fullGallery-container" )
    let galleryContents = createGalleryContent();

    for (let i = 0; i < galleryContents.length / 2; i ++) {
    
        let trimmedContent = [ galleryContents[i * 2] ]
        if (galleryContents.length > (i * 2) + 1) {
            trimmedContent.push(galleryContents[(i * 2) + 1])
        }

        let galleryContainer = createGallery(trimmedContent);
        fullGalleryContainer.appendChild( galleryContainer );
    }

    addUniversalEvents();
    initClickableText();
    addEventsTo( document.getElementsByClassName( "clickableText" ), [addIndicator, removeIndicator], "mouseenter", "mouseleave" )
}


function createGallery(contents) {
    let galleryContainer = createDiv("gallery-container")
    let clickFlip = createDiv("clickFlip-content")
    let hover3D = createDiv("hover3D-content")
    let gallery = createDiv("clickFlip-content-front hoverGlow-content gallery rounded shadowed")

    contents.forEach( e => {
        gallery.appendChild(e)
    } )

    hover3D.appendChild(gallery)
    // clickFlip.appendChild(hover3D)
    galleryContainer.appendChild(hover3D)
    return galleryContainer
}

function createGalleryContent() {
    let imageCount = parseFloat(document.querySelector(".imageCount").innerHTML);
    let entryID = parseFloat(document.querySelector(".entryID").innerHTML);
    let contents = []

    let URLStart = "./PHP-Files/Image-Uploads/"

    for (let i = 1; i <= imageCount; i++) {
        const container = document.createElement("div");

        const src = URLStart + entryID + "." + i + ".png";
        container.innerHTML = '<img src="' + src + '" class="galleryImage">'
        

        const choseForm = createForm( "PHP-files/uploader.php", "POST", "multipart/form-data", "form" );
        let choseFormTagas = [
            `<input type="hidden" name="placementIndex" value="${i}">`,
            '<input type="file" id="file2" name="entryImage" class="empty">',
            '<div>',
            '<label for="file2" class="clickableText browse">BROWSE</label>',
            '<button type="submit" name="submitEntryImage" value="submitEntryImage" class="clickableText change">CHANGE</button>',
            '</div>'
        ]
        addHTMLToContainer(choseForm, choseFormTagas);

        const deleteForm = createForm( "PHP-files/uploader.php", "POST", "multipart/form-data", "form delete-form" );
        let deleteFormTags = [
            `<input type="hidden" name="placementIndex" value="${i}">`,
            '<button type="submit" name="deleteEntryImage" value="deleteEntryImage" class="clickableText">DELETE !</button>'
        ]
        addHTMLToContainer(deleteForm, deleteFormTags);

        container.appendChild( choseForm )
        container.appendChild( deleteForm )

        contents.push(container);
    }
    return contents;
}

