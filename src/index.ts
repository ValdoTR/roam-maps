/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
    

    // =================== BIBLIOTHEQUE ===================

    WA.room.onEnterLayer('zones/bibliotheque/1').subscribe(() => {
        const id = "1"
        const description = WA.state["bibliotheque"+id+"Description"] as string;
        const url = WA.state["bibliotheque"+id+"URL"] as string;
        const embed = WA.state["bibliotheque"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("bibliotheque"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/bibliotheque/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/bibliotheque/2').subscribe(() => {
        const id = "2"
        const description = WA.state["bibliotheque"+id+"Description"] as string;
        const url = WA.state["bibliotheque"+id+"URL"] as string;
        const embed = WA.state["bibliotheque"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("bibliotheque"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/bibliotheque/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/bibliotheque/3').subscribe(() => {
        const id = "3"
        const description = WA.state["bibliotheque"+id+"Description"] as string;
        const url = WA.state["bibliotheque"+id+"URL"] as string;
        const embed = WA.state["bibliotheque"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("bibliotheque"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/bibliotheque/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/bibliotheque/4').subscribe(() => {
        const id = "4"
        const description = WA.state["bibliotheque"+id+"Description"] as string;
        const url = WA.state["bibliotheque"+id+"URL"] as string;
        const embed = WA.state["bibliotheque"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("bibliotheque"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/bibliotheque/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/bibliotheque/5').subscribe(() => {
        const id = "5"
        const description = WA.state["bibliotheque"+id+"Description"] as string;
        const url = WA.state["bibliotheque"+id+"URL"] as string;
        const embed = WA.state["bibliotheque"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("bibliotheque"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/bibliotheque/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/bibliotheque/6').subscribe(() => {
        const id = "6"
        const description = WA.state["bibliotheque"+id+"Description"] as string;
        const url = WA.state["bibliotheque"+id+"URL"] as string;
        const embed = WA.state["bibliotheque"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("bibliotheque"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/bibliotheque/6').subscribe(closePopup)


    // =================== VIDEOS ===================

    WA.room.onEnterLayer('zones/videos/1').subscribe(() => {
        const id = "1"
        const description = WA.state["videos"+id+"Description"] as string;
        const url = WA.state["videos"+id+"URL"] as string;
        const embed = WA.state["videos"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videos"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/videos/2').subscribe(() => {
        const id = "2"
        const description = WA.state["videos"+id+"Description"] as string;
        const url = WA.state["videos"+id+"URL"] as string;
        const embed = WA.state["videos"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videos"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/videos/3').subscribe(() => {
        const id = "3"
        const description = WA.state["videos"+id+"Description"] as string;
        const url = WA.state["videos"+id+"URL"] as string;
        const embed = WA.state["videos"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videos"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/videos/4').subscribe(() => {
        const id = "4"
        const description = WA.state["videos"+id+"Description"] as string;
        const url = WA.state["videos"+id+"URL"] as string;
        const embed = WA.state["videos"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videos"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/4').subscribe(closePopup)

    WA.room.onEnterLayer('zones/videos/5').subscribe(() => {
        const id = "5"
        const description = WA.state["videos"+id+"Description"] as string;
        const url = WA.state["videos"+id+"URL"] as string;
        const embed = WA.state["videos"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videos"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/5').subscribe(closePopup)

    WA.room.onEnterLayer('zones/videos/6').subscribe(() => {
        const id = "6"
        const description = WA.state["videos"+id+"Description"] as string;
        const url = WA.state["videos"+id+"URL"] as string;
        const embed = WA.state["videos"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("videos"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/videos/6').subscribe(closePopup)

     // =================== METAVERSE ===================

     WA.room.onEnterLayer('zones/metaverse/1').subscribe(() => {
        const id = "1"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/2').subscribe(() => {
        const id = "2"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/2').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/3').subscribe(() => {
        const id = "3"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/3').subscribe(closePopup)

    WA.room.onEnterLayer('zones/metaverse/4').subscribe(() => {
        const id = "4"
        const description = WA.state["metaverse"+id+"Description"] as string;
        const url = WA.state["metaverse"+id+"URL"] as string;
        const embed = WA.state["metaverse"+id+"Embed"] as boolean;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, embed)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("metaverse"+id+"Popup", description, cta);
    })
    WA.room.onLeaveLayer('zones/metaverse/4').subscribe(closePopup)


    // DISCORD
    WA.room.onEnterLayer('zones/discord').subscribe(() => {
        //@ts-ignore
        currentPopup = WA.ui.openPopup("discordPopup", "Rejoignez la communauté WorkAdventure sur Discord! \nAide, conseils, discussions, avant-premières...", [
            {label: 'Me voilà!', className: 'primary', callback: () => openWebsite("https://discord.gg/G6Xh9ZM9aR", false)}
        ]);
    })
    WA.room.onLeaveLayer('zones/discord').subscribe(closePopup)

     // =================== GT: marketing ===================

     WA.room.onEnterLayer('zones/marketing/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["marketing"+id+"Description"] as string;
        const url = WA.state["marketing"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("marketingPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/marketing/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/marketing/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["marketing"+id+"Description"] as string;
        const url = WA.state["marketing"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("marketingPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/marketing/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/marketing/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["marketing"+id+"Description"] as string;
        const url = WA.state["marketing"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("marketingPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/marketing/doc2').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
    
}).catch(e => console.error(e));

function openWebsite(url: string, embed: boolean = true){
    if (embed) {
        WA.nav.openCoWebSite(url)
    } else {
        WA.nav.openTab(url)
    }
    closePopup()
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
