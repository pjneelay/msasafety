import styled from "styled-components";

export const handleAddToCart = configurationState => {};

export const handleInputSelect = (updateObj, configurationState) => {
    const root = document.getElementById("root");
    
    if(updateObj['GEAR_VISIBILITY']) {
        if(localStorage.getItem('isClickEvent') === 'true') {
            
            switch(updateObj['GEAR_VISIBILITY']) {
                case 'Pants':
                    root.className = 'just-pants-selected';
                break;
                case 'Jacket':
                    root.className = 'just-jacket-selected';
                break;
                default:
                    root.className = ''; 
                break;
            }
        }
    } else {
        var addNoneToClass, rootChild;
        var keys = Object.keys(updateObj);
        var container = document.getElementById('mainContainer');
        keys = keys[0].split(' ').join('-').toLowerCase()
        if(updateObj["RIGHT FLAGS"] || updateObj["LEFT FLAGS"] || updateObj["RIGHT EMBROIDERY PATCHES"] || updateObj["LEFT EMBROIDERY PATCHES"]) {
            container.className = 'container';
            addNoneToClass = updateObj["RIGHT FLAGS"] === 'None' || updateObj["LEFT FLAGS"] === 'None' || updateObj["RIGHT EMBROIDERY PATCHES"] === 'None' || updateObj["LEFT EMBROIDERY PATCHES"] === 'None';
            if(updateObj["RIGHT FLAGS"]){var rightFlagsAddNoneToClass = updateObj["RIGHT FLAGS"] === 'None' ? 'grid': 'none'; document.getElementById('right-patch-padding').style.display = rightFlagsAddNoneToClass;}
            if(updateObj["LEFT FLAGS"]){var leftFlagsAddNoneToClass = updateObj["LEFT FLAGS"] === 'None'? 'grid': 'none'; document.getElementById('left-patch-padding').style.display = leftFlagsAddNoneToClass;}

            if(addNoneToClass) {
                container.classList.add(`${keys}` + '-none');
            } else {
                container.classList.add(`${keys}`);
            }
        }
    }

    document.getElementById("loader-container").style.display = "none";
};
