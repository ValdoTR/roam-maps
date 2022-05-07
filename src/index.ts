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

    // =================== GT: informatique ===================

    WA.room.onEnterLayer('zones/informatique/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["informatique"+id+"Description"] as string;
        const url = WA.state["informatique"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("informatiquePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/informatique/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/informatique/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["informatique"+id+"Description"] as string;
        const url = WA.state["informatique"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("informatiquePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/informatique/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/informatique/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["informatique"+id+"Description"] as string;
        const url = WA.state["informatique"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("informatiquePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/informatique/doc2').subscribe(closePopup)


    // =================== GT: rh ===================

    WA.room.onEnterLayer('zones/rh/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["rh"+id+"Description"] as string;
        const url = WA.state["rh"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("rhPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/rh/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/rh/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["rh"+id+"Description"] as string;
        const url = WA.state["rh"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("rhPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/rh/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/rh/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["rh"+id+"Description"] as string;
        const url = WA.state["rh"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("rhPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/rh/doc2').subscribe(closePopup)


    // =================== GT: finance ===================

    WA.room.onEnterLayer('zones/finance/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["finance"+id+"Description"] as string;
        const url = WA.state["finance"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("financePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/finance/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/finance/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["finance"+id+"Description"] as string;
        const url = WA.state["finance"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("financePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/finance/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/finance/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["finance"+id+"Description"] as string;
        const url = WA.state["finance"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("financePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/finance/doc2').subscribe(closePopup)

    // =================== GT: mutualisme ===================

    WA.room.onEnterLayer('zones/mutualisme/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["mutualisme"+id+"Description"] as string;
        const url = WA.state["mutualisme"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("mutualismePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/mutualisme/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/mutualisme/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["mutualisme"+id+"Description"] as string;
        const url = WA.state["mutualisme"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("mutualismePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/mutualisme/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/mutualisme/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["mutualisme"+id+"Description"] as string;
        const url = WA.state["mutualisme"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("mutualismePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/mutualisme/doc2').subscribe(closePopup)


    // =================== GT: client ===================

    WA.room.onEnterLayer('zones/client/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["client"+id+"Description"] as string;
        const url = WA.state["client"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("clientPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/client/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/client/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["client"+id+"Description"] as string;
        const url = WA.state["client"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("clientPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/client/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/client/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["client"+id+"Description"] as string;
        const url = WA.state["client"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("clientPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/client/doc2').subscribe(closePopup)


    // =================== GT: entreprise ===================

    WA.room.onEnterLayer('zones/entreprise/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["entreprise"+id+"Description"] as string;
        const url = WA.state["entreprise"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("entreprisePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/entreprise/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/entreprise/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["entreprise"+id+"Description"] as string;
        const url = WA.state["entreprise"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("entreprisePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/entreprise/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/entreprise/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["entreprise"+id+"Description"] as string;
        const url = WA.state["entreprise"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("entreprisePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/entreprise/doc2').subscribe(closePopup)


    // =================== GT: distribution ===================

    WA.room.onEnterLayer('zones/distribution/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["distribution"+id+"Description"] as string;
        const url = WA.state["distribution"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("distributionPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/distribution/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/distribution/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["distribution"+id+"Description"] as string;
        const url = WA.state["distribution"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("distributionPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/distribution/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/distribution/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["distribution"+id+"Description"] as string;
        const url = WA.state["distribution"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("distributionPopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/distribution/doc2').subscribe(closePopup)


    // =================== GT: conformite ===================

    WA.room.onEnterLayer('zones/conformite/video').subscribe(() => {
        const id = "Video"
        const description = WA.state["conformite"+id+"Description"] as string;
        const url = WA.state["conformite"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("conformitePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/conformite/video').subscribe(closePopup)

    WA.room.onEnterLayer('zones/conformite/doc1').subscribe(() => {
        const id = "Doc1"
        const description = WA.state["conformite"+id+"Description"] as string;
        const url = WA.state["conformite"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("conformitePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/conformite/doc1').subscribe(closePopup)

    WA.room.onEnterLayer('zones/conformite/doc2').subscribe(() => {
        const id = "Doc2"
        const description = WA.state["conformite"+id+"Description"] as string;
        const url = WA.state["conformite"+id+"URL"] as string;

        let cta = [{label: 'Fermer', className: 'normal', callback: () => closePopup()}]

        if (url) {
            cta.push({label: 'Ouvrir', className: 'primary', callback: () => openWebsite(url, true)})
        }

        //@ts-ignore
        currentPopup = WA.ui.openPopup("conformitePopup", description, cta);
    })
    WA.room.onLeaveLayer('zones/conformite/doc2').subscribe(closePopup)

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
