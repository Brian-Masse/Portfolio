

$(document).ready(function() {
    loadAllEntryLlinks();
});

function loadAllEntryLlinks() {
    let entryCount = parseFloat( document.querySelector(".entryCount").innerHTML );

    for (let i = 1; i <= entryCount; i++) {
        displayEntryLink(i);
    }
}

function displayEntryLink(entryNumber) {

    let item = document.createElement("li");
    let form = createForm( "entry.php", "GET", "", "" );
    let tags = [
        `<input type="hidden" name="entryNumber" value="${entryNumber}" >`,
        `<button type="submit" name="link_submit" value="link_submit" class="clickableText"> Entry ${entryNumber}</button>`
    ]
    addHTMLToContainer(form, tags);
    item.appendChild(form)

    let list = document.querySelector("ui");
    list.appendChild(item);
}